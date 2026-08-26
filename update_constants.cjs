const fs = require('fs');

const data = JSON.parse(fs.readFileSync('itinerary.json', 'utf-8'));

const colors = ['blue', 'orange', 'green', 'purple', 'cyan', 'pink', 'rose'];

const itinerary = data['2027京阪神親子行程'].map((d, i) => {
  const dayDate = d['天數/日期'].split('\r\n');
  const dayStr = dayDate[0] || '';
  const dateStr = dayDate[1] || '';
  const dayNum = parseInt(dayStr.replace('Day ', ''), 10) || (i + 1);

  return {
    day: dayNum,
    date: dateStr,
    tagColor: colors[i % colors.length],
    highlights: d['今日行程亮點'],
    schedule: d['建議時間'],
    transport: d['交通方式'],
    childHighlights: d['6歲小孩亮點'],
    food: d['不吃牛美食建議'],
    queueTips: d['避開排隊提醒']
  };
});

const queueStrategies = data['避開排隊重點'].map(q => ({
  category: q['項目'],
  advice: q['建議']
}));

let constantsFile = fs.readFileSync('src/constants.ts', 'utf-8');

// Replace top imports
constantsFile = constantsFile.replace(
  /import \{.*?\} from '\.\/types';/s,
  "import { DayItinerary, EssentialInfo, Restaurant, TransportInfo, QueueStrategy } from './types';"
);

// Replace TRIP_INFO
constantsFile = constantsFile.replace(
  /export const TRIP_INFO = \{.*?\};/s,
  `export const TRIP_INFO = {
  title: '京阪神親子 7 天 6 夜',
  subtitle: '避開排隊・不吃牛 專屬版',
  dateRange: '1/31（日）～ 2/6（六）',
  season: '冬季',
  note: '6 歲小孩、不趕行程、盡量不走回頭路',
};`
);

// Replace ITINERARY
constantsFile = constantsFile.replace(
  /export const ITINERARY: DayItinerary\[\] = \[.*?\];/s,
  `export const ITINERARY: DayItinerary[] = ${JSON.stringify(itinerary, null, 2)};\n\nexport const QUEUE_STRATEGIES: QueueStrategy[] = ${JSON.stringify(queueStrategies, null, 2)};`
);

fs.writeFileSync('src/constants.ts', constantsFile);
console.log('constants.ts updated successfully.');
