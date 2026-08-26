import { DayItinerary, EssentialInfo, Restaurant, TransportInfo, QueueStrategy, HotelInfo } from './types';

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
    "schedule": "抵達後搭 HARUKA 前往京都\r\n→ 京都車站八條西口步行 2 分鐘直達「Hotel Vischio Kyoto」辦理入住\r\n→ 享用名代炸豬排晚餐\r\n→ 享受飯店大浴場泡湯，早點休息",
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
    "highlights": "京都親子漫遊日\r\n上午：嵐山（渡月橋、竹林小徑）\r\n下午：京都鐵道博物館\r\n晚上：續住 Hotel Vischio Kyoto",
    "schedule": "08:30 飯店悠閒早餐\r\n09:30 出發嵐山（JR京都站搭乘 15 分鐘）\r\n10:00-12:00 嵐山漫步\r\n12:00 嵐山午餐\r\n14:00-16:30 鐵道博物館\r\n晚上回 Hotel Vischio Kyoto 泡湯休息",
    "transport": "京都站搭 JR 15分鐘到嵐山。中午搭乘「嵐電」路面電車轉巴士前往鐵道博物館，最不費力。",
    "hotelId": "vischio_kyoto",
    "childHighlights": "竹林、渡月橋\r\n下午火車、蒸汽火車、模擬駕駛\r\n晚上大浴場泡澡",
    "food": "湯豆腐／京野菜天婦羅\r\n嵐山豆腐料理",
    "queueTips": "嵐山早上先去\r\n不排猴子公園\r\n鐵道博物館提前買票／查活動"
  },
  {
    "day": 3,
    "date": "2/2（二）",
    "tagColor": "green",
    "highlights": "KKDAY一日遊 → 大阪心齋橋入住\r\n天橋立 → 伊根舟屋 → 抵達大阪入住心齋橋法拉格飯店",
    "schedule": "早上京都站退房集合（行李放KKday遊覽車行李廂）\r\n天橋立\r\n→ 伊根舟屋餵海鷗\r\n→ 晚上專車抵達大阪心齋橋\r\n→ 入住「心齋橋法拉格飯店」（行程編號：73529171015643）\r\n→ Lounge 享用免費咖啡，回房好好休息",
    "transport": "KKday 一日遊專車（專車載送行李直達大阪）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "伊根灣遊船餵海鷗\r\n蝦條餵鳥\r\n入住現代質感法拉格飯店",
    "food": "北極星蛋包飯\r\n雞肉／蝦仁口味",
    "queueTips": "這天是全程較累的一天\r\n晚上抵達大阪後直接入住休息，不安排夜間逛街"
  },
  {
    "day": 4,
    "date": "2/3（三）",
    "tagColor": "purple",
    "highlights": "大阪放空日・宿心齋橋法拉格飯店\r\n心齋橋筋 → 道頓堀 → 藥妝／伴手禮採買",
    "schedule": "睡到自然醒，享用飯店 Lounge 咖啡\r\n上午休息放空\r\n下午心齋橋商店街逛街\r\n累了隨時步行 2 分鐘回飯店休息放戰利品\r\n晚上道頓堀看固力果跑跑人",
    "transport": "主要步行（飯店出巷口即是心齋橋商店街）\r\nICOCA／手機交通卡備用",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "草莓大福、日式甜點\r\n元祖串炸達摩（蝦／蔬菜／起司）",
    "food": "不排固定景點\r\n累了可直接回飯店休息"
  },
  {
    "day": 5,
    "date": "2/4（四）",
    "tagColor": "cyan",
    "highlights": "神戶玩雪日・宿心齋橋法拉格飯店\r\n心齋橋 → 六甲山雪樂園 → 三宮 → 返回飯店",
    "schedule": "08:00 心齋橋出發\r\n10:00–14:00 六甲山玩雪\r\n15:30 三宮逛街\r\n19:00 返回心齋橋法拉格飯店，利用洗衣房清洗玩雪衣物",
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
    "schedule": "10:30 心齋橋附近悠閒早餐\r\n11:30 出發海遊館\r\n12:30–13:00 入場海遊館\r\n約16:00離開\r\n天保山摩天輪＋晚餐\r\n回心齋橋法拉格飯店打包行李",
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
    "schedule": "11:00 前辦理退房，行李免費寄放法拉格飯店櫃檯\r\n上午心齋橋周邊最後採買與午餐\r\n下午 13:00 回飯店取行李\r\n步行或搭車至難波站搭乘南海電鐵 Rapi:t 特急\r\n14:00 前抵達關西機場辦理登機（16:00 班機）",
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
