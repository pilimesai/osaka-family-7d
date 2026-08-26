import * as xlsx from 'xlsx';
import fs from 'fs';

try {
  const wb = xlsx.readFile('2027京阪神親子7天6夜_避開排隊版.xlsx');
  const out = {};
  for (const name of wb.SheetNames) {
    out[name] = xlsx.utils.sheet_to_json(wb.Sheets[name]);
  }
  fs.writeFileSync('itinerary.json', JSON.stringify(out, null, 2));
  console.log('Successfully extracted ' + wb.SheetNames.length + ' sheets to itinerary.json');
} catch (e) {
  console.error('Error parsing excel:', e);
}
