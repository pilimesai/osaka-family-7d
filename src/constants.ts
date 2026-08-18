import { DayItinerary, EssentialInfo, Restaurant, TransportInfo, QueueStrategy } from './types';

export const TRIP_INFO = {
  title: '京阪神親子 7 天 6 夜',
  subtitle: '避開排隊・不吃牛 專屬版',
  dateRange: '1/31（日）～ 2/6（六）',
  season: '冬季',
  note: '6 歲小孩、不趕行程、盡量不走回頭路',
};

export const ITINERARY: DayItinerary[] = [
  {
    "day": 1,
    "date": "1/31（日）",
    "tagColor": "blue",
    "highlights": "關西機場 → 京都入住\r\nHARUKA → 京都車站 → Porta／京都站周邊逛街",
    "schedule": "抵達後\r\n→ 京都入住\r\n→ 晚餐\r\n→ 早點休息",
    "transport": "關空特急 HARUKA\r\n關西機場 → 京都",
    "childHighlights": "第一次搭 HARUKA 特急\r\n沿途看冬季日本風景",
    "food": "名代炸豬排 Katsukura\r\n黑豬炸豬排／炸蝦",
    "queueTips": "第一天不排景點\r\n抵達後以休息為主"
  },
  {
    "day": 2,
    "date": "2/1（一）",
    "tagColor": "orange",
    "highlights": "京都親子漫遊日\r\n上午：嵐山（渡月橋、竹林小徑）\r\n下午：京都鐵道博物館",
    "schedule": "08:30 飯店早餐\r\n09:30 出發嵐山\r\n10:00-12:00 嵐山漫步\r\n12:00 嵐山午餐\r\n14:00-16:30 鐵道博物館",
    "transport": "京都站搭 JR 15分鐘到嵐山。中午搭乘「嵐電」路面電車轉巴士前往鐵道博物館，最不費力。",
    "childHighlights": "竹林、渡月橋\r\n下午火車、蒸汽火車、模擬駕駛",
    "food": "湯豆腐／京野菜天婦羅\r\n嵐山豆腐料理",
    "queueTips": "嵐山早上先去\r\n不排猴子公園\r\n鐵道博物館提前買票／查活動"
  },
  {
    "day": 3,
    "date": "2/2（二）",
    "tagColor": "green",
    "highlights": "KKDAY一日遊\r\n天橋立 → 伊根舟屋 → 大阪難波入住",
    "schedule": "早上京都集合\r\n天橋立\r\n→ 伊根\r\n→ 晚上大阪",
    "transport": "KKday／一日遊專車\r\n行李放巴士行李廂",
    "childHighlights": "伊根灣遊船餵海鷗\r\n蝦條餵鳥",
    "food": "北極星蛋包飯\r\n雞肉／蝦仁口味",
    "queueTips": "這天是全程較累的一天\r\n晚上抵達大阪後直接入住休息"
  },
  {
    "day": 4,
    "date": "2/3（三）",
    "tagColor": "purple",
    "highlights": "大阪放空日\r\n難波 → 心齋橋 → 道頓堀 → 藥妝／伴手禮",
    "schedule": "睡到自然醒\r\n上午休息\r\n下午逛街\r\n晚上道頓堀",
    "transport": "主要步行\r\nICOCA／手機交通卡備用",
    "childHighlights": "草莓大福、日式甜點\r\n元祖串炸達摩（蝦／蔬菜／起司）",
    "food": "不排固定景點\r\n累了可直接回飯店休息"
  },
  {
    "day": 5,
    "date": "2/4（四）",
    "tagColor": "cyan",
    "highlights": "神戶玩雪日\r\n難波 → 六甲山雪樂園 → 三宮 → 難波",
    "schedule": "08:00 難波出發\r\n10:00–14:00 玩雪\r\n15:30 三宮\r\n19:00 回大阪",
    "transport": "阪神電車 → 三宮\r\n再轉六甲山交通",
    "childHighlights": "雪盆、堆雪人、打雪仗",
    "food": "明石燒\r\n南京町豬肉包／海鮮類",
    "queueTips": "取消神戶動物王國\r\n全日只專心玩雪\r\n2027雪樂園營業資訊待官方公告"
  },
  {
    "day": 6,
    "date": "2/5（五）",
    "tagColor": "pink",
    "highlights": "大阪海遊館 → 天保山大摩天輪",
    "schedule": "10:30 難波附近早餐\r\n11:30 出發\r\n12:30–13:00 入場\r\n約16:00離開\r\n摩天輪＋晚餐",
    "transport": "御堂筋線 難波 → 本町\r\n轉中央線 → 大阪港",
    "childHighlights": "鯨鯊、企鵝、水母\r\n天保山摩天輪",
    "food": "鶴橋風月大阪燒\r\n豬肉海鮮口味",
    "queueTips": "海遊館提前購買指定入館時間\r\n避免現場排隊"
  },
  {
    "day": 7,
    "date": "2/6（六）",
    "tagColor": "rose",
    "highlights": "難波最後採買 → 關西機場 → 返台",
    "schedule": "退房寄行李\r\n上午最後採買\r\n午餐\r\n回飯店取行李\r\n搭 Rapi:t",
    "transport": "南海電鐵 Rapi:t\r\n難波 → 關西機場",
    "childHighlights": "搭藍色特急 Rapi:t\r\n全車指定席",
    "food": "黑豬涮涮鍋／百貨海鮮壽司",
    "queueTips": "不要安排遠距離景點\r\n預留取行李與前往機場時間"
  }
];

export const QUEUE_STRATEGIES: QueueStrategy[] = [
  {
    "category": "核心原則",
    "advice": "熱門景點早上去；需要預約的景點提前買票；不為了塞景點而塞景點"
  },
  {
    "category": "Day 2",
    "advice": "嵐山早上 → 午餐 → 京都鐵道博物館下午；不安排伏見稻荷、猴子公園"
  },
  {
    "category": "Day 3",
    "advice": "天橋立＋伊根保留；晚上到大阪直接入住休息，不再逛街"
  },
  {
    "category": "Day 4",
    "advice": "大阪回血日；睡晚一點、自由逛街，累了直接回飯店"
  },
  {
    "category": "Day 5",
    "advice": "取消神戶動物王國，只玩六甲山雪樂園＋三宮吃飯"
  },
  {
    "category": "Day 6",
    "advice": "海遊館提前購買指定入館時段，建議中午左右入館"
  },
  {
    "category": "兒童",
    "advice": "6歲；建議準備兒童ICOCA／適用兒童票券"
  },
  {
    "category": "飲食",
    "advice": "全程避開牛肉；優先豬肉、雞肉、海鮮、豆腐、蔬菜料理"
  }
];

export const ESSENTIAL_INFO: EssentialInfo[] = [
  {
    title: '最佳旅遊季節',
    content: '此行程安排在 1-2 月冬季，京都可能有雪景，六甲山有雪樂園。氣溫約 2-10°C，務必準備保暖衣物、防風外套和暖暖包。',
    icon: '🌡️',
  },
  {
    title: '親子住宿建議',
    content: '京都推薦住車站周邊（交通方便），大阪推薦難波/心齋橋（逛街方便）。選擇有洗衣機的飯店，帶小孩旅行方便洗衣。',
    icon: '🏨',
  },
  {
    title: '行李打包要點',
    content: '冬季旅行記得帶保暖衣物、暖暖包、保溫瓶。小朋友的替換衣物多帶幾套。建議帶一個空的摺疊行李箱，回程裝戰利品。',
    icon: '🧳',
  },
  {
    title: '兒童票價規則',
    content: 'JR 及大部分鐵路：6 歲以下免費（限 2 名）、6-11 歲半價。觀光設施通常 3 歲以下免費、4-11 歲兒童價。',
    icon: '🎫',
  },
  {
    title: '網路與通訊',
    content: '推薦購買日本 eSIM 或租借 Wi-Fi 分享器。eSIM 推薦 DJB（暢日卡）或 JOYTEL，7 天約 NT$300-500。',
    icon: '📶',
  },
  {
    title: '餐飲注意事項',
    content: '日本餐廳通常提供兒童餐（お子様メニュー）。超商（7-11、全家、Lawson）是家庭旅行的好夥伴，隨時可以買到飯糰、麵包和飲料。',
    icon: '🍱',
  },
  {
    title: '緊急聯絡方式',
    content: '日本報警 110、救護車/消防 119。台灣駐大阪辦事處：06-6443-8481。旅遊求助可打 JNTO 免費電話：050-3816-2787。',
    icon: '🆘',
  },
  {
    title: '退稅資訊',
    content: '消費滿 5,000 日圓（不含稅）即可辦理退稅，記得攜帶護照。藥妝店、百貨公司和 Don Quijote 都可以退稅。',
    icon: '💰',
  },
];

export const RESTAURANTS: Restaurant[] = [
  {
    name: '拉麵小路（坂内食堂）',
    category: '拉麵',
    rating: 4.3,
    location: '京都車站 10F',
    area: '京都',
    recommendation: '京都車站十樓的拉麵主題樓層，集結全日本知名拉麵店。坂内食堂的喜多方拉麵湯頭醇厚、叉燒軟嫩。',
    priceRange: '¥850-1200',
  },
  {
    name: '% Arabica 嵐山',
    category: '咖啡',
    rating: 4.5,
    location: '京都嵐山',
    area: '京都',
    recommendation: '面對渡月橋的絕美咖啡店，拿鐵拉花精緻。嵐山限定杯也很值得收藏。',
    priceRange: '¥450-650',
  },
  {
    name: 'たこ焼き道楽わなか',
    category: '章魚燒',
    rating: 4.4,
    location: '道頓堀',
    area: '大阪',
    recommendation: '大阪排名前三的章魚燒名店。外酥內軟，章魚塊超大。推薦「ねぎポンず」（蔥花柚子醋）口味。',
    priceRange: '¥500-800',
  },
  {
    name: '八重勝 (Yaekatsu)',
    category: '串炸',
    rating: 4.4,
    location: '新世界 (鏘鏘橫丁)',
    area: '大阪',
    recommendation: '當地人也大推的超人氣串炸老店！外皮薄脆不油膩，食材新鮮。炸蝦和鵪鶉蛋是必點，牛筋燉煮也非常入味。',
    priceRange: '¥1000-2000',
  },
  {
    name: '串カツだるま',
    category: '串炸',
    rating: 4.2,
    location: '道頓堀 / 新世界',
    area: '大阪',
    recommendation: '大阪串炸的代表名店！酥脆的麵衣配上特製醬汁，一串接一串停不下來。記得遵守「不能回沾」的規則。',
    priceRange: '¥1000-2000',
  },
  {
    name: '551 蓬萊',
    category: '肉包',
    rating: 4.6,
    location: '難波、天王寺等各店',
    area: '大阪',
    recommendation: '大阪第一名的肉包！皮薄餡多、肉汁飽滿。冬天吃熱騰騰的肉包超幸福。也有燒賣和餃子可以買。',
    priceRange: '¥200-500',
  },
  {
    name: 'りくろーおじさん',
    category: '甜點',
    rating: 4.5,
    location: '難波本店',
    area: '大阪',
    recommendation: '大阪人氣No.1 的起司蛋糕！剛出爐時搖晃的樣子超療癒。一個才 ¥965，CP 值超高。',
    priceRange: '¥965',
  },
  {
    name: 'ステーキランド 神戶館',
    category: '神戶牛排',
    rating: 4.3,
    location: '三宮',
    area: '神戶',
    recommendation: '在鐵板前看師傅現煎神戶牛，油脂均勻、入口即化。有兒童套餐，價格比其他神戶牛排店親民。',
    priceRange: '¥3000-8000',
  },
  {
    name: '夫婦善哉',
    category: '甜品',
    rating: 4.1,
    location: '法善寺橫丁',
    area: '大阪',
    recommendation: '法善寺橫丁內的百年紅豆湯圓老店。特色是一人份分成兩碗，象徵夫婦圓滿。溫暖甜蜜的好味道。',
    priceRange: '¥800',
  },
];

export const TRANSPORT_INFO: TransportInfo[] = [
  {
    name: 'ICOCA & HARUKA 套票',
    description: '最推薦的機場到京都交通方案。ICOCA 是 IC 卡（類似悠遊卡），HARUKA 是特急列車票。可在 JR 西日本官網或 KKday 預購。',
    type: 'train',
  },
  {
    name: '南海電鐵 Rapit 特急',
    description: '從難波到關西機場最快的方式，車程 38 分鐘。外型酷炫的藍色列車，有時推出期間限定塗裝。',
    type: 'train',
  },
  {
    name: 'JR 西日本',
    description: '京都↔大阪搭 JR 新快速約 30 分鐘，大阪↔三宮約 20 分鐘。班次密集，是城市間移動的首選。',
    type: 'train',
  },
  {
    name: '大阪地下鐵 & 私鐵',
    description: '大阪市內移動推薦地下鐵（御堂筋線最常用）。前往六甲山搭阪急電鐵、前往海遊館搭中央線。',
    type: 'train',
  },
  {
    name: 'KKday 一日遊巴士',
    description: '天橋立＋伊根一日遊推薦預約巴士行程，省去自行轉車的麻煩。含來回交通、導覽、午餐（依方案而定）。',
    type: 'bus',
  },
  {
    name: '大阪周遊卡',
    description: '一日券 ¥2,800 / 二日券 ¥3,600，含地鐵無限搭乘 + 50 個以上景點免費入場（含海遊館旁摩天輪、大阪城等）。',
    type: 'pass',
  },
  {
    name: 'ICOCA 卡使用提醒',
    description: '幾乎所有超商、自動販賣機、計程車都可以使用 ICOCA 付款。建議儲值足夠金額，減少現金使用的麻煩。',
    type: 'tip',
  },
];
