import { DayItinerary, EssentialInfo, Restaurant, TransportInfo, QueueStrategy, HotelInfo, ShoppingSpot } from './types';

export const TRIP_INFO = {
  title: '京阪神親子 7 天 6 夜',
  subtitle: '避開排隊・不吃牛 專屬版',
  dateRange: '1/31（日）～ 2/6（六）',
  season: '冬季',
  note: '6 歲小孩、不趕行程、盡量不走回頭路',
  flights: {
    outbound: '去程：小港 14:20 ✈️ 關西 18:05',
    inbound: '回程：關西 16:00 ✈️ 小港 18:40'
  }
};

export const HOTELS: HotelInfo[] = [
  {
    id: 'vischio_kyoto',
    name: 'Hotel Vischio Kyoto by GRANVIA',
    japaneseName: 'ホテルヴィスキオ京都 by GRANVIA',
    checkInDate: '1月31日 15:00',
    checkOutDate: '2月2日 11:00',
    stayDuration: '2 晚（1/31 入住 ～ 2/2 退房）',
    area: '京都・JR京都車站八條口',
    address: '京都府京都市南区東九条上殿田町44-1',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Vischio+Kyoto+by+GRANVIA',
    phone: '+81 75-280-1111',
    coverImage: 'images/hotels/vischio_kyoto_entrance.jpg',
    routeImage: 'images/hotels/vischio_kyoto_route.jpg',
    stationExit: 'JR京都站「八條西口」步行約 2 分鐘（無障礙平坦步道）',
    routeTitle: 'JR京都站（八條西口）→ 飯店詳細步行路線',
    routeDescription: '從關西機場搭乘 HARUKA 抵達京都車站後，出站步行僅約 2 分鐘即可抵達！全程平坦寬敞無階梯，非常適合推嬰兒車與攜帶多件大行李的親子家庭。',
    routeSteps: [
      '【步驟 1】搭乘 HARUKA 特急抵達 JR 京都車站月台後，依站內指標前往 1 樓「八條西口（Hachijo West Gate）」出剪票口。',
      '【步驟 2】踏出八條西口大門，正前方對面為 Avanti 百貨與京阪巴士候車亭，前方有平整斑馬線。',
      '【步驟 3】順著斑馬線過馬路至對面，沿著「竹田街道」往南（直行）約 80 公尺（約 2 分鐘路程）。',
      '【步驟 4】左側即可看到「HOTEL VISCHIO KYOTO」質感大門與迎賓落地窗大廳，進入 1 樓大廳即可出示預訂憑證辦理 Check-in！'
    ],
    highlights: [
      '♨️ 住客專用大浴場＆桑拿（附設人工溫泉，洗淨飛行與走路的疲倦）',
      '☕ 自助備品吧（大廳提供多款高品質茶包、濾掛咖啡、洗沐與保養備品自由挑選）',
      '🧺 自助洗烘衣房（配備投幣式洗烘衣機，隨時清洗小孩衣物）',
      '🛍️ 周邊機能極強：步行 1 分鐘到 Avanti 百貨（B1 有唐吉訶德驚安殿堂）、7-11 便利商店與地下街 Porta 美食'
    ],
    familyTips: [
      '推推車時從八條西口出來均為無障礙平面步道，不必上下樓梯或搬行李。',
      '2 樓大浴場開放時間：06:00-10:00 / 15:00-01:00，晚上可帶小朋友先泡舒服的熱水澡再睡覺。'
    ]
  },
  {
    id: 'flag_shinsaibashi',
    name: '心齋橋法拉格飯店 (Hotel The Flag Shinsaibashi)',
    japaneseName: 'ホテル ザ フラッグ 心斎橋',
    bookingNumber: '73529171015643',
    checkInDate: '2月2日 15:00',
    checkOutDate: '2月6日 11:00',
    stayDuration: '4 晚連住（2/2 入住 ～ 2/6 退房）',
    area: '大阪・心齋橋 / 道頓堀商圈',
    address: '大阪府大阪市中央区東心斎橋1-18-30',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HOTEL+THE+FLAG+Shinsaibashi',
    phone: '+81 6-6121-8111',
    coverImage: 'images/hotels/flag_shinsaibashi_entrance.jpg',
    routeImage: 'images/hotels/flag_shinsaibashi_route.jpg',
    stationExit: '地下鐵御堂筋線「心齋橋站」6號出口（電梯走大丸南館或長堀地下街南12）步行 3 分鐘',
    routeTitle: '心齋橋站（御堂筋線）→ 飯店詳細步行路線',
    routeDescription: '座落於心齋橋筋商店街旁寧靜巷弄內，鬧中取靜。從心齋橋站步行僅約 3-4 分鐘，出巷口就能逛街用餐，帶小孩回房午睡或放戰利品都超方便！',
    routeSteps: [
      '【步驟 1】搭乘御堂筋線至「心齋橋站（M19）」。推推車或拉大行李建議搭「大丸百貨南館電梯」或 Crysta 長堀地下街「南12號電梯」直達 1 樓地面；輕裝可直接走「6號出口」。',
      '【步驟 2】出站後進入繁華熱鬧的「心齋橋筋商店街」，往難波／道頓堀方向（往南）前行約 1 分鐘（約 80 公尺）。',
      '【步驟 3】在「鰻谷南通（Unagidani Minami-dori）」路口（見三木樂器／PABLO附近十字路口）左轉（往東轉入巷內）。',
      '【步驟 4】沿著鰻谷南通直走約 150 公尺（約 2 分鐘），右手邊即可看到黑色現代外觀、門口擺放標誌性日式青苔球盆栽與巨石造景的「HOTEL THE FLAG」大門，進入大廳辦理 Check-in！'
    ],
    highlights: [
      '☕ 24小時 免費迎賓 Lounge（全天無限供應高品質研磨咖啡、精選茶飲與舒適休憩沙發）',
      '🧺 自助洗衣房（配備高效率洗脫烘衣機，連住 4 晚洗衣服超省心）',
      '🚶 黃金便利位置：出巷口即達心齋橋筋商店街，步行 7-8 分鐘可達道頓堀跑跑人招牌與眾多美食名店',
      '🛏️ 高評價設計旅店：客房隔音極佳、床鋪舒適，大廳寬敞原木長桌氛圍典雅大方'
    ],
    familyTips: [
      '心齋橋逛街若買太多戰利品或小孩喊累，隨時可步行 2 分鐘回飯店放東西、上廁所或小憩。',
      '最後一天（2/6）早上 11:00 退房後，可將全部行李免費寄放在櫃檯，輕裝在心齋橋周邊吃午餐採買，下午再回飯店提行李去搭南海電鐵 Rapi:t。'
    ]
  }
];

export const ITINERARY: DayItinerary[] = [
  {
    "day": 1,
    "date": "1/31（日）",
    "tagColor": "blue",
    "highlights": "關西機場 → 京都入住 Hotel Vischio Kyoto\r\nHARUKA → 京都車站八條口 → 飯店Check-in → Porta／周邊逛街",
    "schedule": "18:05 班機抵達關西機場第二航廈（T2）\r\n18:45 搭乘免費接駁巴士前往第一航廈（T1）JR車站\r\n19:16 搭乘關空特急 HARUKA 直達京都車站（八條口）\r\n20:34 抵達京都車站，八條西口步行 2 分鐘直達「Hotel Vischio Kyoto」辦理入住\r\n21:00 Porta 地下街享用「名代炸豬排」定食晚餐\r\n22:00 飯店 2 樓大浴場泡湯洗淨疲憊，早點休息",
    "transport": "關空特急 HARUKA\r\n關西機場 → 京都車站（八條口）",
    "transportDetails": {
      "price": "大人 2,200 日圓 / 兒童 (6-11歲) 1,100 日圓",
      "whereToBuy": "建議提前在 Klook / KKday 購買電子票以節省時間，也可至現場 JR 綠色售票機或人工窗口購買",
      "scheduleOptions": [
        "19:16 發車 → 20:34 抵達京都 (HARUKA 54號)",
        "19:46 發車 → 21:04 抵達京都 (HARUKA 56號)",
        "20:16 發車 → 21:34 抵達京都 (HARUKA 58號)"
      ],
      "note": "班機 18:05 抵達，出關加接駁車時間約需 1 小時，建議搭乘 19:16 之後的班次最保險。"
    },
    "hotelId": "vischio_kyoto",
    "childHighlights": "第一次搭 HARUKA 特急\r\n沿途看冬季日本風景\r\n飯店 2 樓泡大浴場",
    "food": "名代炸豬排 Katsukura（Porta地下街）\r\n黑豬炸豬排／炸蝦定食",
    "queueTips": "第一天不排景點\r\n出站 2 分鐘迅速進飯店休息",
    "guide": {
      "title": "長輩與小孩專用：機場轉航廈圖文指南 (T2 → T1)",
      "description": "搭乘從高雄小港起飛的班機將抵達關西空港第二航廈 (T2)。因為所有電車都在第一航廈 (T1)，抵達後請先搭乘「免費接駁車」前往 T1。",
      "steps": [
        "步驟1：領完行李入境後，直走尋找「Terminal 1 / Shuttle Bus」的指示牌",
        "步驟2：走出大門外，就會看到綠白相間的免費接駁車 (約7-9分鐘一班)",
        "步驟3：上車不需付費，車程約10分鐘。下車後搭乘手扶梯上2樓，跟著指標走即可抵達JR/南海電車站 (關西空港駅)"
      ],
      "images": [
        { "url": "images/guide/kix_t2_exit.jpg", "caption": "1. 尋找藍色指示牌" },
        { "url": "images/guide/kix_t2_bus.jpg", "caption": "2. 搭乘綠白色接駁車" },
        { "url": "images/guide/kix_t1_arrival.jpg", "caption": "3. 下車後跟著指標上樓" }
      ]
    }
  },
  {
    "day": 2,
    "date": "2/1（一）",
    "tagColor": "orange",
    "highlights": "京都嵐山自然 ＆ 鐵道博物館 ＆ 傍晚三條日潮專線（HUMAN MADE 1928 / TNF 紫標）・宿 Hotel Vischio Kyoto\r\n上午：嵐山（渡月橋、竹林小徑） → 下午：京都鐵道博物館 → 傍晚：HUMAN MADE 1928（藍瓶咖啡）＋TNF STANDARD（紫標神褲） → 四條河原町美食 → 返回飯店大浴場泡湯",
    "schedule": "08:30 飯店悠閒享用早餐\r\n09:30 從 JR 京都站出發前往嵐山（搭乘 JR 嵯峨野線約 15 分鐘）\r\n10:00-12:00 嵐山悠閒漫步（渡月橋、竹林小徑散策）\r\n12:00 嵐山享用道地午餐（京豆腐料理／京野菜天婦羅）\r\n13:30-16:00 京都鐵道博物館（扇形車庫看蒸汽火車、體驗模擬駕駛）\r\n16:30 搭車 12 分鐘前往三條商圈\r\n16:45-17:30【地點①】HUMAN MADE 1928（1928洋樓古蹟、京都限定款、店內 Blue Bottle 藍瓶咖啡小憩）\r\n17:30-18:15【地點②】THE NORTH FACE STANDARD 京都店（步行3分鐘・入手日本限定 TNF 紫標工裝神褲與羽絨）\r\n18:30-19:45 四條河原町／先斗町周邊品嚐道地美食晚餐（名代炸豬排／京都豆皮烏龍麵）\r\n20:00 地鐵烏丸線「四條站」搭車 3 分鐘直達京都站，返回 Hotel Vischio Kyoto 享受大浴場泡湯休息",
    "transport": "上午：京都站搭 JR 15分鐘到嵐山\r\n下午：嵐電轉巴士前往鐵道博物館\r\n傍晚：搭車 12 分鐘至三條商圈（HUMAN MADE / TNF 紫標），晚餐後地鐵烏丸線 3 分鐘直達京都站",
    "hotelId": "vischio_kyoto",
    "childHighlights": "嵐山竹林漫步\r\n鐵道博物館蒸汽火車與模擬駕駛\r\nHUMAN MADE 1928 店內 Blue Bottle 藍瓶咖啡點心\r\n飯店 2 樓大浴場泡澡",
    "food": "嵐山豆腐料理／京野菜天婦羅\r\n名代炸豬排 Katsukura（四條寺町店）\r\nBlue Bottle Coffee 藍瓶咖啡（HUMAN MADE 1928店）",
    "queueTips": "鐵道博物館下午 16:00 前結束，傍晚 16:30 接三條商圈兩大神店時間最順、避開人潮！\r\nHUMAN MADE 1928 內建藍瓶咖啡，長輩小孩可坐著喝咖啡吃鬆餅，大人輪流試穿 TNF 紫標神褲！"
  },
  {
    "day": 3,
    "date": "2/2（二）",
    "tagColor": "green",
    "highlights": "🚌 KKday 觀光包車一日遊 ＆ 天橋立 ＆ 伊根舟屋 → 道頓堀蟹道樂晚餐 → 入住大阪心齋橋法拉格飯店\r\n上車：08:45 京都車站八條口觀光巴士停車場 → 天橋立 → 伊根舟屋 → 下車：18:30 道頓堀蟹道樂東店 → 晚餐後步行入住法拉格飯店",
    "schedule": "07:30 Hotel Vischio Kyoto 辦理退房，打理行李（行李全放 KKday 專車行李廂）\r\n🚌 08:45【上車地點】京都車站八條口觀光巴士停車場（Hotel Vischio Kyoto 步行約 3 分鐘）\r\n10:30-13:00 日本三景「天橋立」搭纜車登飛龍觀、享用特色午餐\r\n14:00-16:00「伊根舟屋」搭乘觀光遊船、體驗手拿蝦味先餵海鷗\r\n🚌 18:30【下車地點】道頓堀蟹道樂 道頓堀東店（大阪市中央区道頓堀1-6-18）\r\n18:30-20:00 🦀 蟹道樂 道頓堀東店 豪華晚餐（正統松葉蟹全蟹料理）\r\n━━━ 🏠 返回飯店路線 ━━━\r\n20:10 步行約 8 分鐘直達「心齋橋法拉格飯店」辦理入住（行李已由 KKday 專車先送達）\r\n20:30 飯店 Lounge 享用免費研磨咖啡，回房好好休息",
    "transport": "🚌 KKday 觀光包車（08:45 上車 京都八條口觀光巴士停車場，行李全程置於車廂）\r\n🚌 包車途經：天橋立 → 伊根舟屋 → 18:30 下車道頓堀蟹道樂東店\r\n🚶 返程：蟹道樂步行約 8 分鐘直達心齋橋法拉格飯店（道頓堀→心齋橋徒步即達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "伊根灣遊船餵海鷗\r\n蝦條餵鳥\r\n道頓堀蟹道樂豪華全蟹料理\r\n入住現代質感心齋橋法拉格飯店",
    "food": "天橋立當地特色午餐（松葉蟹便當／天橋立海鮮丼）\r\n🦀 蟹道樂 道頓堀東店（晚餐・松葉蟹全蟹套餐・道頓堀標誌地景）",
    "queueTips": "🚌 08:45 準時抵達京都車站八條口觀光巴士停車場，切勿遲到！\r\n蟹道樂建議提前電話或網路訂位（+81-6-6211-8855），旺季熱門！\r\n這天是全程較累的一天，晚上抵達飯店後好好泡澡休息"
  },
  {
    "day": 4,
    "date": "2/3（三）",
    "tagColor": "purple",
    "highlights": "大阪箕面勝尾寺祈福 ＆ 下午 NANGA / SORA / HUMAN MADE 潮流日・宿心齋橋法拉格飯店\r\n上午：箕面勝尾寺（滿山達摩不倒翁） → 下午：FREAK'S STORE＋SORA（找NANGA）＋NANGA旗艦店＋PARCO（HUMAN MADE/BEAMS） → 飯店放貨 → 道頓堀夜景",
    "schedule": "08:30 飯店 Lounge 享用免費研磨咖啡與早餐\r\n09:15【上午勝尾寺】心齋橋搭御堂筋線直通「箕面萱野站」，轉乘巴士/計程車約 15 分鐘直達勝尾寺\r\n10:00-12:00【勝運祈福】漫步滿山滿谷可愛紅色達摩不倒翁，帶小孩挑選專屬小達摩並點睛祈願\r\n12:15-13:30 搭車返回心齋橋，於心齋橋周邊享用美味午餐（北極星蛋包飯／PARCO B2 食堂）\r\n14:00【地點①】FREAK'S STORE 心齋橋店（NAUTICA JP 重磅衛衣、City Boy 美式工裝寬褲）\r\n14:45【地點②】SORA 堀江店（找 NANGA 聯名羽絨外套、Patagonia 戶外潮流選物）\r\n15:30【地點③】NANGA SHOP OSAKA（NANGA 日本官方直營旗艦店・全系列 AURORA 防水透氣羽絨）\r\n16:45【地點④】心齋橋 PARCO（1F 直衝 HUMAN MADE 心齋橋限定款 ➔ 2F BEAMS 日潮美式經典）\r\n17:45【地點⑤】步行 3 分鐘回法拉格飯店放好所有戰利品、換輕便鞋子洗手小歇\r\n18:30【地點⑥】輕裝漫步 6 分鐘直達道頓堀拍固力果跑跑人，享用千房大阪燒／今井烏龍麵晚餐",
    "transport": "上午：御堂筋線直通「箕面萱野站」轉乘巴士/計程車（約 45 分鐘抵達勝尾寺）\r\n下午：心齋橋商圈全程步行（法拉格飯店為圓心，步行 3~8 分鐘內可達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "勝尾寺滿山遍野的可愛紅色達摩不倒翁\r\n親自挑選小達摩並點睛祈福\r\n道頓堀巨型立體招牌與固力果跑跑人",
    "food": "千房大阪燒（心齋橋店・海鮮/豬肉口味）\r\n道頓堀今井（豆皮烏龍麵・高湯極鮮）\r\n北極星蛋包飯（心齋橋本店）",
    "queueTips": "勝尾寺早上 09:00 開門，早去山區空氣清新且拍照空景最多！\r\nSORA 堀江店與 PARCO 均全日無休，NANGA 旗艦店週三若遇公休可直接在 SORA 堀江店選購齊全的 NANGA 聯名羽絨！"
  },
  {
    "day": 5,
    "date": "2/4（四）",
    "tagColor": "cyan",
    "highlights": "神戶玩雪日・宿心齋橋法拉格飯店\r\n心齋橋 → 六甲山雪樂園 → 三宮 → 返回飯店",
    "schedule": "08:00 心齋橋出發（搭乘阪神電車至神戶三宮轉乘纜車巴士）\r\n10:00-14:00 六甲山雪樂園（親子玩雪、雪盆滑雪坡、堆雪人）\r\n15:30 神戶三宮商圈散步逛街與享用神戶美味點心\r\n19:00 返回心齋橋法拉格飯店，利用洗衣房清洗玩雪衣物\r\n20:00 飯店周邊享用大阪道地不吃牛美食晚餐",
    "transport": "阪神電車 → 三宮\r\n再轉六甲山交通纜車與巴士",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "雪盆、堆雪人、打雪仗",
    "food": "明石燒\r\n南京町豬肉包／海鮮類",
    "queueTips": "取消神戶動物王國\r\n全日只專心玩雪\r\n2027雪樂園營業資訊待官方公告"
  },
  {
    "day": 6,
    "date": "2/5（五）",
    "tagColor": "pink",
    "highlights": "大阪海遊館 → 天保山大摩天輪・宿心齋橋法拉格飯店",
    "schedule": "10:30 心齋橋周邊享用悠閒早午餐\r\n11:30 出發前往大阪港（御堂筋線心齋橋 → 本町轉中央線）\r\n12:30-15:30 大阪海遊館（觀賞巨型鯨鯊、水獺、企鵝餵食秀）\r\n16:00 天保山大摩天輪俯瞰大阪灣日落夜景\r\n17:30 天保山購物中心享用美味晚餐\r\n19:30 返回心齋橋法拉格飯店打包行李、好好休息",
    "transport": "御堂筋線 心齋橋 → 本町\r\n轉中央線 → 大阪港",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "鯨鯊、企鵝、水母\r\n天保山摩天輪",
    "food": "鶴橋風月大阪燒\r\n豬肉海鮮口味",
    "queueTips": "海遊館提前購買指定入館時間\r\n避免現場排隊"
  },
  {
    "day": 7,
    "date": "2/6（六）",
    "tagColor": "rose",
    "highlights": "心齋橋法拉格飯店退房寄行李 → 最後採買 → 關西機場 → 返台",
    "schedule": "11:00 辦理退房，行李免費寄放法拉格飯店櫃檯\r\n11:30-13:00 心齋橋周邊最後採買伴手禮與享用午餐\r\n13:00 返回飯店取行李，步行前往難波站\r\n13:30 搭乘南海電鐵 Rapi:t 藍色鐵甲特急直達關西機場\r\n14:00 抵達關西機場辦理登機手續（搭乘 16:00 班機返台）",
    "transport": "南海電鐵 Rapi:t\r\n難波 → 關西機場（38分鐘直達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "搭乘酷炫藍色特急 Rapi:t\r\n全車指定席放鬆看海景",
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
    "advice": "勝尾寺早上早去空氣好人少好拍照；下午南船場與橘子街集中精華逛街，累了隨時回飯店放戰利品休息"
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

export const SHOPPING_SPOTS: ShoppingSpot[] = [
  // ==================== 大阪 Osaka ====================
  // --- Zone 1: 南船場（Minamisemba）---
  {
    id: 'strato',
    name: 'Strato (ストラト)',
    japaneseName: 'ストラト 大阪農林会館',
    city: '大阪',
    zone: '南船場',
    brands: ['AURALEE', 'Graphpaper', 'YAECA', 'KAPTAIN SUNSHINE', 'orSlow', 'BASISBROEK', 'maillot'],
    styleCategory: '日系極簡・高級面料・修身俐落',
    floorInfo: '大阪農林會館 301室 (3F)',
    address: '大阪府大阪市中央区南船場3-2-6 大阪農林会館 301',
    walkingTimeFromHotel: '步行約 5 分鐘（沿心齋橋筋往北直走）',
    howToFind: '認南船場著名的昭和復古紅磚洋樓「大阪農林會館」，直接走進 1 樓大廳搭乘復古老式電梯上 3 樓即可看到 301 室。門口低調無大招牌，直接開門入內即可！',
    theShortyTip: '【那個矮子強推】日潮選物神店天花板！AURALEE 與 Graphpaper 款式極齊全，版型完美修飾身形。來這裡一家就能試齊各家神牌，完全不用全大阪到處跑找專櫃！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Strato+Osaka',
    openingHours: '13:00 - 19:00（週三公休）',
    tagEmoji: '✨'
  },
  {
    id: 'study_showroom',
    name: 'STUDY SHOWROOM STORE (S.F.C 旗艦店)',
    japaneseName: 'スタディ ショールーム ストア',
    city: '大阪',
    zone: '南船場',
    brands: ['S.F.C (Stripes For Creative)', 'SEE SEE', 'YES GOOD MARKET'],
    styleCategory: '寬鬆 City Boy・高機能日系街頭',
    floorInfo: '大阪農林會館 303室 (3F)',
    address: '大阪府大阪市中央区南船場3-2-6 大阪農林会館 303',
    walkingTimeFromHotel: '步行約 5 分鐘（同在農林會館 3 樓）',
    howToFind: '就在 Strato 隔壁 303 室！逛完 Strato 轉個身幾步路就能走進店內，完全零換點時間浪費。',
    theShortyTip: '【S.F.C 官方直營】寬鬆落肩版型立體挺拔，布料磅數極足，亞洲人穿也不會顯垮，打造俐落高級 City Boy 感必試。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=STUDY+SHOWROOM+STORE+Osaka',
    openingHours: '13:00 - 19:00',
    tagEmoji: '🛹'
  },
  {
    id: 'nishiguchi_socks',
    name: '西口靴下 (NISHIGUCHI KUTSUSHITA 直營店)',
    japaneseName: '西口靴下 大阪直営店',
    city: '大阪',
    zone: '南船場',
    brands: ['NISHIGUCHI KUTSUSHITA', 'hakne'],
    styleCategory: '日本頂級天然纖維手工襪・伴手禮首選',
    floorInfo: '街邊 1F 門市（原木櫥窗）',
    address: '大阪府大阪市中央区南船場4-6-11',
    walkingTimeFromHotel: '步行約 6 分鐘',
    howToFind: '從農林會館往西穿過御堂筋，位於南船場 4 丁目寧靜街區，1 樓有質感原木落地櫥窗與溫暖照明，辨識度極高。',
    theShortyTip: '【穿搭細節加分神器】奈良近百年工藝，使用頂級埃及棉、美利奴羊毛與真絲編織。腳感極度包覆親膚且久穿不鬆脫，價格親民（約 ¥1,200~2,500），自用與當高品質伴手禮無敵！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=NISHIGUCHI+KUTSUSHITA+Minamisemba',
    openingHours: '11:00 - 19:00',
    tagEmoji: '🧦'
  },
  {
    id: 'zabou',
    name: 'ZABOU OSAKA',
    japaneseName: 'ザボウ 大阪店',
    city: '大阪',
    zone: '南船場',
    brands: ['RESOLUTE (神級牛仔褲)', 'Saint James', 'Paraboot', 'BARNSTORMER', 'FOB FACTORY'],
    styleCategory: '經典日系常春藤工裝・修身丹寧丹佛',
    floorInfo: '第2飯沼大樓 2F',
    address: '大阪府大阪市中央区南船場4-14-3 第2飯沼ビル 2F',
    walkingTimeFromHotel: '步行約 7 分鐘',
    howToFind: '地下鐵心齋橋站北側近御堂筋線，認大樓入口走專屬樓梯上 2 樓。',
    theShortyTip: '【小個子修身長腿神褲】RESOLUTE 710 經典修身牛仔褲尺碼極齊全，店員會極其專業地為您量身試穿並挑選最顯腿長的版型與褲長（不用再送去改短）。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=ZABOU+OSAKA',
    openingHours: '12:00 - 19:00',
    tagEmoji: '👖'
  },

  // --- Zone 2: 堀江橘子街（Orange Street）---
  {
    id: 'biotop_osaka',
    name: 'BIOTOP OSAKA',
    japaneseName: 'ビオトープ 大阪',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['Maison Margiela', 'Jil Sander', 'LE LABO', 'HYKE', 'A.P.C.', 'THE ROW', '植栽與生活選物'],
    styleCategory: '4層樓綠植複合概念店・小眾奢華與香氛・咖啡庭園',
    floorInfo: '1F-4F 獨棟地標建築',
    address: '大阪府大阪市西区南堀江1-16-1',
    walkingTimeFromHotel: '步行約 10 分鐘（往西直走過四橋筋即達）',
    howToFind: '位於 Orange Street（橘子街）東側入口處第一棟，整棟落地玻璃窗＋戶外大樹庭園與 1F 咖啡座，是橘子街最顯眼且最美之地標！',
    theShortyTip: '【逛街小憩神級中繼站】2 樓網羅頂級時裝與香氛，1 樓與 4 樓頂樓有超優質露天咖啡（BIOTOP CORNER STAND）。推推車逛累了在此喝杯拿鐵、吃塊可麗露，家人小孩都超放鬆！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=BIOTOP+OSAKA',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🌿'
  },
  {
    id: 'hwdog',
    name: 'THE H.W.DOG&CO. OSAKA',
    japaneseName: 'THE H.W. DOG & CO. 大阪店',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['THE H.W.DOG&CO. (日本頂級職人帽飾)'],
    styleCategory: '1860~1920年代復古紳士帽・報童帽・臉型修飾神帽',
    floorInfo: '1F 街邊復古店面',
    address: '大阪府大阪市西区南堀江1-12-2',
    walkingTimeFromHotel: '步行約 11 分鐘',
    howToFind: '橘子街中段巷弄，門口為深色老式木質大門與黃銅鐵牌，店內裝潢宛如 1920 年代美式老帽子工坊。',
    theShortyTip: '【修飾臉型與頭型神店】亞洲人戴帽子最怕顯臉大或扁平，HW DOG 的帽型深度與弧度專為東方人微調，每頂帽子皆附標誌性復古紙質標籤，戴上立刻提升整體穿搭質感！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=THE+H.W.DOG%26CO.+OSAKA',
    openingHours: '12:00 - 19:00',
    tagEmoji: '🎩'
  },
  {
    id: 'sora_horie',
    name: 'SORA 堀江店 (戶外潮流選物・NANGA / Patagonia)',
    japaneseName: 'SORA 堀江店',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['NANGA (日系頂級羽絨)', 'Patagonia', 'Gramicci', 'Mountain Research', 'Danner', 'and wander'],
    styleCategory: '頂級日系戶外生活選物・NANGA 聯名羽絨・機能露營服飾',
    floorInfo: '1F-2F 街邊木質旗艦店',
    address: '大阪府大阪市西区南堀江1-15-7',
    walkingTimeFromHotel: '步行約 9 分鐘（BIOTOP 隔壁 30 公尺）',
    howToFind: '位於堀江橘子街入口處，BIOTOP 往西走 30 秒即達，大片原木玻璃門面與戶外機能展示。',
    theShortyTip: '【找 NANGA 必逛神店】專門引進 NANGA 聯名羽絨外套、輕量保暖背心與戶外露營服飾，還有齊全的 Patagonia 與 Gramicci，戶外山系潮流必巡！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SORA+Horie+Osaka',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🏕️'
  },
  {
    id: 'nanga_shop_osaka',
    name: 'NANGA SHOP OSAKA (官方直營旗艦店)',
    japaneseName: 'ナンガ ショップ オオサカ',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['NANGA (全系列官方直營)', 'AURORA DOWN JACKET', 'TAKIBI 難燃系列', 'NANGA 頂級羽絨睡袋與配件'],
    styleCategory: '日本頂級羽絨製造廠直營・全系列 AURORA 防水透氣羽絨・終身保修',
    floorInfo: '1F 獨棟旗艦店',
    address: '大阪府大阪市西区南堀江1-22-18',
    walkingTimeFromHotel: '步行約 12 分鐘（橘子街同條路向西直走）',
    howToFind: '沿著橘子街（Orange Street）往西直走過四橋筋約 300 公尺，黑色帥氣外觀與醒目紅白 NANGA 山峰 Logo。',
    theShortyTip: '【NANGA 最齊全官方殿堂】全日本最權威的羽絨直營店！招牌 AURORA-TEX 白金防水透氣羽絨外套、TAKIBI 露營難燃外套、羽絨被與隨身配件尺寸顏色最齊，在日本買退稅後價格極度划算！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=NANGA+SHOP+OSAKA',
    openingHours: '11:00 - 19:00 (週三公休，如遇公休可直接在隔壁 SORA 堀江店選購 NANGA！)',
    tagEmoji: '🏔️'
  },
  {
    id: 'descendant_osaka',
    name: 'DESCENDANT OSAKA',
    japaneseName: 'ディセンダント 大阪',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['DESCENDANT (DCDT)', 'NEIGHBORHOOD 聯名系列'],
    styleCategory: '西山徹日常美式工裝休閒・重磅俐落剪裁',
    floorInfo: '1F 街角門市',
    address: '大阪府大阪市西区南堀江1-19-2',
    walkingTimeFromHotel: '步行約 12 分鐘',
    howToFind: '南堀江安靜街角，經典藍色小鯨魚 Logo 門牌與木質大門。',
    theShortyTip: '【西山徹經典日常工裝】DESCENDANT 的版型舒適寬鬆且用料極厚實耐洗，主理人西山徹的日常工裝休閒哲學，剪裁簡約百搭。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=DESCENDANT+OSAKA',
    openingHours: '12:00 - 19:00',
    tagEmoji: '🐋'
  },

  // --- Zone 3: 心齋橋大丸 / PARCO（親子動漫與潮流連通棟）---
  {
    id: 'daimaru_9f',
    name: '大丸心齋橋店 本館 9F（動漫親子天堂）',
    japaneseName: '大丸心斎橋店 本館 9階',
    city: '大阪',
    zone: '心齋橋大丸/PARCO',
    brands: ['Nintendo OSAKA (任天堂專賣店)', 'Pokémon Center DX (寶可夢中心)', 'Jump Shop', '吉卜力 橡子共和國'],
    styleCategory: '官方直營旗艦・親子動漫同樂・限定周邊',
    floorInfo: '大丸本館 9F（心齋橋站 4 號出口直通）',
    address: '大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店 本館 9F',
    walkingTimeFromHotel: '步行約 3 分鐘',
    howToFind: '從心齋橋站地下通道直接進入「大丸本館」搭電梯直達 9 樓。【重要避雷防走冤枉路】：大丸有分「本館」與「南館」，所有任天堂、寶可夢、Jump Shop 都在【本館 9 樓】，請勿走錯到南館！',
    theShortyTip: '【免排隊技巧】平日（週三）早上 10:30~11:00 剛開門直上 9 樓免抽整理券、人潮最少！門口有巨大超夢與瑪利歐雕像，小孩拍照超開心。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Daimaru+Shinsaibashi+Main+Building',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🎮'
  },
  {
    id: 'freaks_store_shinsaibashi',
    name: 'FREAK\'S STORE 大阪・心齋橋店',
    japaneseName: 'フリークスストア 心斎橋店',
    city: '大阪',
    zone: '心齋橋/南船場',
    brands: ['NAUTICA JP (長谷川昭雄監修)', 'FREAK\'S STORE (原創美式工裝)', 'Gramicci', 'FIRST DOWN', 'Dickies'],
    styleCategory: 'City Boy 寬鬆美式工裝・新手首選高 CP 值神店',
    floorInfo: '1F-2F 獨棟門市',
    address: '大阪府大阪市中央区南船場3-5-25',
    walkingTimeFromHotel: '步行約 3 分鐘',
    howToFind: '從心齋橋法拉格飯店步行 3 分鐘即可到達，招牌醒目，1 樓主打男裝與熱門 NAUTICA JP，2 樓為女裝與生活配件。',
    theShortyTip: '【穿搭新手必逛 No.1】TheShorty 強力推薦！NAUTICA JP 重磅衛衣、牛津襯衫與寬褲在日本入手價格幾乎是台灣專櫃的 5~6 折，版型挺拔修身，小個子穿也超顯精神！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=FREAK%27S+STORE+Shinsaibashi',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🦅'
  },
  {
    id: 'beams_shinsaibashi',
    name: 'BEAMS 心齋橋店 (心齋橋 PARCO 2F)',
    japaneseName: 'ビームス 心斎橋',
    city: '大阪',
    zone: '心齋橋大丸/PARCO',
    brands: ['BEAMS', 'BEAMS BOY', 'BEAMS PLUS (經典工裝紳士)', 'SSZ (街頭滑板)', 'Ray BEAMS'],
    styleCategory: '日本選貨四大天王之首・美式復古與潮流大本營',
    floorInfo: '心齋橋 PARCO 2F',
    address: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO 2F',
    walkingTimeFromHotel: '步行約 3 分鐘',
    howToFind: '進入心齋橋 PARCO 搭手扶梯直上 2 樓，佔據寬敞轉角，店內陳列從街頭休閒到 BEAMS PLUS 高級工裝紳士系列一應俱全。',
    theShortyTip: '【日系穿搭必買聖殿】BEAMS PLUS 的打摺工裝褲與牛津襯衫剪裁極佳，配件帽飾、襪子與聯名款球鞋也是每次必巡的寶庫！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=BEAMS+Shinsaibashi+PARCO',
    openingHours: '10:00 - 20:00',
    tagEmoji: '👑'
  },
  {
    id: 'studious_shinsaibashi',
    name: 'STUDIOUS 心齋橋 PARCO 3F',
    japaneseName: 'ステュディオス 心斎橋パルコ',
    city: '大阪',
    zone: '心齋橋大丸/PARCO',
    brands: ['CULLNI', 'White Mountaineering', 'ATTACHMENT', 'NEEDLES', 'MASU', 'STUDIOUS 聯名日製限定'],
    styleCategory: '純日本製造 (Made in Japan)・極簡俐落設計師選貨',
    floorInfo: '心齋橋 PARCO 3F',
    address: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO 3F',
    walkingTimeFromHotel: '步行約 3 分鐘',
    howToFind: '心齋橋 PARCO 3 樓，黑色質感極簡裝潢，店內所有品牌均堅持日本國內生產製造。',
    theShortyTip: '【極致面料與神級垂墜感】堅持 100% Made in Japan，CULLNI 金屬拉鍊襯衫與俐落打摺西裝褲垂墜感極佳，穿上身立刻顯高顯瘦，日系型男必逛！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=STUDIOUS+Shinsaibashi+PARCO',
    openingHours: '10:00 - 20:00',
    tagEmoji: '✨'
  },
  {
    id: 'shinsaibashi_parco',
    name: '心齋橋 PARCO 1F (HUMAN MADE / BAO BAO)',
    japaneseName: '心斎橋PARCO 1F',
    city: '大阪',
    zone: '心齋橋大丸/PARCO',
    brands: ['HUMAN MADE (NIGO主理)', 'BAO BAO ISSEY MIYAKE', 'PORTER STAND', 'Maison Kitsuné'],
    styleCategory: '人氣日潮設計師單品・心齋橋限定潮流',
    floorInfo: 'PARCO 1F 街邊入口',
    address: '大阪府大阪市中央区心斎橋筋1-8-3',
    walkingTimeFromHotel: '步行約 3 分鐘',
    howToFind: '心齋橋 PARCO 1 樓臨心齋橋筋商店街入口，HUMAN MADE 愛心與老虎 Logo 櫥窗極醒目。',
    theShortyTip: '【省時動線】1F HUMAN MADE 經常有限定款 T 恤與配件；逛完順路搭手扶梯直達 2F BEAMS 與 3F STUDIOUS。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shinsaibashi+PARCO',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🛍️'
  },

  // --- Zone 4: 梅田商圈（Umeda）一隻阿圓爆買推薦 ---
  {
    id: 'lucua_osaka',
    name: 'LUCUA 1100 & LUCUA osaka (阿圓激推 No.1 百貨)',
    japaneseName: 'ルクア大阪 / ルクア イーレ',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['BEAMS', 'Freak\'s Store', 'Bshop', 'Maison Kitsuné', 'Spick and Span', 'Kastane', 'Cosme Kitchen', '蔦屋書店'],
    styleCategory: '一隻阿圓激推大阪最好買百貨・男女裝美妝雜貨一次買爆・JR直通',
    floorInfo: 'JR 大阪站直通連通棟 (B2~10F)',
    address: '大阪府大阪市北区梅田3-1-3',
    walkingTimeFromHotel: '心齋橋站搭御堂筋線 3 站（約 6 分鐘）直達梅田站（地下連通）',
    howToFind: '御堂筋線梅田站或 JR 大阪站出剪票口，跟隨「LUCUA」指標走地下通道直達，雨天推嬰兒車全程免淋雨！LUCUA（東館）與 LUCUA 1100（西館）兩棟在各樓層均有室內連通。',
    theShortyTip: '【一隻阿圓心目中大阪 No.1 好逛百貨】男女生都會逛到失心瘋！日系男女服飾、美妝、生活選物無死角齊全，9 樓還有超美蔦屋書店與星巴克可以歇腳喝咖啡，推車動線極寬敞。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=LUCUA+osaka',
    openingHours: '10:30 - 20:30',
    tagEmoji: '🌟'
  },
  {
    id: 'hankyu_umeda',
    name: '阪急百貨 梅田總店 (Hankyu Umeda)',
    japaneseName: '阪急うめだ本店',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['ÉCHIRÉ (艾許奶油餅乾)', 'Bâton d\'or (高級Pocky)', '日本頂級美妝專櫃', '精品名牌服飾'],
    styleCategory: '西日本最大旗艦百貨・神級 B1/B2 甜點伴手禮天堂・頂級精品美妝',
    floorInfo: 'B2~13F 旗艦百貨',
    address: '大阪府大阪市北区角田町8-7',
    walkingTimeFromHotel: '御堂筋線梅田站步行 2 分鐘（地下道直通）',
    howToFind: '梅田地下街認「阪急百貨」巨大挑高大廳與華麗櫥窗，直接走入 B1 伴手禮街或搭電梯上樓。',
    theShortyTip: '【伴手禮甜點掃貨天花板】B1/B2 地下街聚集全日本最頂級的限定甜點，ÉCHIRÉ 奶油餅乾與排隊伴手禮必買；樓上美妝專櫃齊全，送禮自用超體面！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hankyu+Department+Store+Umeda',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🍰'
  },
  {
    id: 'hep_five',
    name: 'HEP FIVE (地標紅色摩天輪商場)',
    japaneseName: 'ヘップファイブ',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['WEGO', 'BEAMS STREET UMEDA', '平價日系女裝流行飾品', 'RED FERRIS WHEEL (紅色摩天輪)'],
    styleCategory: '年輕流行潮流・平價好入手・地標摩天輪',
    floorInfo: '1F~8F 潮流商場（7F 摩天輪）',
    address: '大阪府大阪市北区角田町5-15',
    walkingTimeFromHotel: '御堂筋線梅田站步行 3 分鐘',
    howToFind: '走出梅田站往東看，醒目的「紅色巨大摩天輪」建築即是 HEP FIVE。',
    theShortyTip: '【平價穿搭與景觀】年輕流行品牌集中地，衣服與飾品價格親民好買；頂樓有紅色摩天輪（持大阪周遊卡可免費搭乘），帶小孩看梅田市景超讚！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HEP+FIVE+Osaka',
    openingHours: '11:00 - 21:00',
    tagEmoji: '🎡'
  },

  {
    id: 'loftman_coop',
    name: 'LOFTMAN COOP KYOTO (京都選物老大哥)',
    japaneseName: 'ロフトマン コープ 京都',
    city: '京都',
    zone: '京都四條河原町/寺町通',
    brands: ['Needles (神級蝴蝶褲)', 'Engineered Garments', 'COMOLI', 'Patagonia', 'ARC\'TERYX', 'A.P.C.'],
    styleCategory: '日潮選物指標・特價挖寶神店・工裝機能與街頭',
    floorInfo: '1F~2F 獨棟工業風門市',
    address: '京都府京都市中京区寺町通蛸薬師下ル円福寺前町280',
    walkingTimeFromHotel: '京都車站搭地下鐵烏丸線至四條站步行約 7 分鐘（或河原町站步行 4 分鐘）',
    howToFind: '位於熱鬧的「寺町通商店街」內，認深色工裝門面與大片透明落地窗，店內分為 1 樓男裝/女裝與 2 樓戶外機能區。',
    theShortyTip: '【影片主角挖寶神店】Needles 蝴蝶褲愛好者必訪！款式與配色全關西最齊全，且季末常有極大折扣（特價挖寶 CP 值超高），店員專業且親切！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=LOFTMAN+COOP+KYOTO',
    openingHours: '11:00 - 19:00',
    tagEmoji: '🦋'
  },
  {
    id: 'shinpuhkan_kyoto',
    name: '新風館 ShinPuhKan (1LDK / BEAMS JAPAN)',
    japaneseName: '新風館 (しんぷうかん)',
    city: '京都',
    zone: '京都烏丸御池',
    brands: ['1LDK KYOTO', 'BEAMS JAPAN KYOTO', 'Pilgrim Surf+Supply', 'LE LABO', 'TRAVELER\'S FACTORY'],
    styleCategory: '隈研吾操刀昭和町屋複合地標・頂級文青日系選物・綠意庭園',
    floorInfo: '新風館 1F（烏丸御池站直通）',
    address: '京都府京都市中京区烏丸通姉小路下ル場之町586-2',
    walkingTimeFromHotel: '地下鐵烏丸線「烏丸御池站」4 號出口直通（京都站搭車 5 分鐘直達）',
    howToFind: '烏丸御池站 4 號出口地下直通新風館 B1，搭乘電梯或手扶梯上 1 樓就是超美綠意庭園。1LDK、BEAMS JAPAN、LE LABO 均在 1 樓庭園周圍，推嬰兒車極為平坦順暢！',
    theShortyTip: '【關西唯一 1LDK 直營】極簡生活風格神店，UNIVERSAL PRODUCTS 版型極佳；BEAMS JAPAN 更有京都限定刺繡托特包與和風商品，環境超美、極適合家庭小憩！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=ShinPuhKan+Kyoto',
    openingHours: '11:00 - 20:00',
    tagEmoji: '⛩️'
  },
  {
    id: 'human_made_1928',
    name: 'HUMAN MADE 1928 by NIGO (京都概念店)',
    japaneseName: 'ヒューマンメイド 1928 京都',
    city: '京都',
    zone: '京都三條通',
    brands: ['HUMAN MADE', 'BLUE BOTTLE COFFEE (藍瓶咖啡概念店)', 'CURRY UP'],
    styleCategory: '昭和復古洋樓・潮流鴨子愛心・藍瓶咖啡聯名',
    floorInfo: '1928 大樓 1F',
    address: '京都府京都市中京区弁慶石町56 1928ビル 1F',
    walkingTimeFromHotel: '地下鐵「京都市役所前站」步行 5 分鐘 / 阪急「京都河原町站」步行 8 分鐘',
    howToFind: '三條通與御幸町通路口，認昭和時代歷史建築「1928 大樓」（古典紅磚與拱門），走入 1 樓大廳即可見到。',
    theShortyTip: '【京都限定愛心周邊】店內結合了 Blue Bottle 藍瓶咖啡，可以一邊喝現沖拿鐵，一邊選購京都限定的鴨子、愛心 T 恤與精緻小物，好拍又好買！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=HUMAN+MADE+1928+Kyoto',
    openingHours: '11:00 - 19:00',
    tagEmoji: '🦆'
  },
  {
    id: 'tnf_standard_kyoto',
    name: 'THE NORTH FACE STANDARD 京都店 (TNF 紫標限定)',
    japaneseName: 'ザ・ノース・フェイス スタンダード 京都店',
    city: '京都',
    zone: '京都四條河原町/三條',
    brands: ['THE NORTH FACE PURPLE LABEL (日本限定紫標)', 'THE NORTH FACE STANDARD', 'Urban Outdoor 機能工裝'],
    styleCategory: '日本限定紫標 Purple Label 專賣・頂級山系城市工裝・神級防潑水打摺寬褲',
    floorInfo: '1F~3F 獨棟現代清水模旗艦店',
    address: '京都府京都市中京区坂井町452',
    walkingTimeFromHotel: '從 HUMAN MADE 1928 步行 3 分鐘（約 200 公尺）',
    howToFind: '位於三條通與六角通之間巷弄，極簡清水模現代建築與醒目黑色 THE NORTH FACE STANDARD 標誌。',
    theShortyTip: '【入手日本限定紫標神褲首選】全關西最齊全的 TNF 紫標專賣店！招牌寬版打摺工裝長褲、防潑水山系風衣與羽絨外套剪裁極佳，小個子穿俐落挺拔，台灣買不到的日本獨家系列！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=THE+NORTH+FACE+STANDARD+KYOTO',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🏔️'
  },
  {
    id: 'kapital_kyoto',
    name: 'KAPITAL KYOTO (京都店)',
    japaneseName: 'キャピタル 京都店',
    city: '京都',
    zone: '京都四條河原町/三條',
    brands: ['KAPITAL', 'KOUNTRY'],
    styleCategory: '日系頂級刺子繡・笑臉・復古水洗骨頭毛衣・水洗藍染丹寧',
    floorInfo: '傳統京町家獨棟門市',
    address: '京都府京都市中京区恵比須町435',
    walkingTimeFromHotel: '京阪「三條站」步行 4 分鐘 / 阪急「河原町站」步行 7 分鐘',
    howToFind: '三條河原町巷內，保留了傳統日式京町家木造建築與暖簾，極富古樸京都氛圍。',
    theShortyTip: '【日本國寶級工藝】KAPITAL 招牌笑臉襪、骨頭針織衫與刺子繡拼接外套非常搶手，京都店貨量相對充足，工藝細節無可挑剔，穿上辨識度極高！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=KAPITAL+KYOTO',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🧵'
  },
  {
    id: 'fujii_daimaru',
    name: '藤井大丸 (FUJII DAIMARU) 百貨',
    japaneseName: '藤井大丸 (ふじいだいまる)',
    city: '京都',
    zone: '京都四條河原町',
    brands: ['PORTER (吉田包)', 'Maison Kitsuné (小狐狸)', 'FREAK\'S STORE', 'Bshop', 'Snow Peak', 'The North Face Purple Label'],
    styleCategory: '京都日潮密度最高百貨・一棟逛齊全品項',
    floorInfo: '1F~7F 潮流百貨專櫃',
    address: '京都府京都市下京区四条通寺町 1F~7F',
    walkingTimeFromHotel: '阪急「京都河原町站」10 號出口直通',
    howToFind: '四條通與寺町通交會處，心齋橋大丸與京都藤井大丸不同，藤井大丸是京都日潮選物品牌最密集的百貨。',
    theShortyTip: '【不想吹風淋雨首選】整棟樓每層都是日潮精選：Bshop 簡約日常服、FREAK\'S STORE 美式休閒、4F PORTER 齊全包款，雨天或帶小孩一站搞定。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=FUJII+DAIMARU+Kyoto',
    openingHours: '10:30 - 20:00',
    tagEmoji: '🏬'
  }
];


