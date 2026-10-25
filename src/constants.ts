import { DayItinerary, EssentialInfo, Restaurant, TransportInfo, QueueStrategy, HotelInfo, ShoppingSpot } from './types';

export const TRIP_INFO = {
  title: '京阪神親子 7 天 6 夜',
  subtitle: '避開排隊・不吃牛 專屬版',
  dateRange: '1/31（日）～ 2/6（六）',
  season: '冬季',
  note: '4 大 1 小（7 歲小孩）、不趕行程、盡量不走回頭路',
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
    "highlights": "關西機場 → HARUKA車上悠閒晚餐 → 京都入住 Hotel Vischio 泡湯 ＆ 夜逛「Workman Colors」機能神店・宿 Hotel Vischio Kyoto\r\n關西機場購鐵路便當 → HARUKA 車上晚餐 → 20:34 抵達京都車站八條口 → 飯店Check-in → 步行 5 分逛 AEON MALL Workman Colors（或 2F 大浴場放鬆早休息）",
    "schedule": "18:05 班機抵達關西機場第二航廈（T2）\r\n18:45 搭乘免費接駁巴士前往第一航廈（T1）JR車站\r\n19:00 於 JR 車站旁選購喜愛的日本鐵路便當（駅弁）、特色鐵路便當、厚切三明治與日式飯糰點心飲料\r\n19:16 搭乘關空特急 HARUKA 直達京都車站（車程 78 分鐘，於個人折疊餐桌悠閒享用車上晚餐看夜景，不慌不忙）\r\n20:34 抵達京都車站，八條西口平坦步道步行 2 分鐘直達「Hotel Vischio Kyoto」辦理入住\r\n20:45-21:30【夜間選物・自由選】體力充沛可步行 5 分鐘前往飯店對面「AEON MALL KYOTO 3F」開逛平價機能神店「Workman Colors」，採買高 CP 值防風防水外套、健走鞋與日常配件（營業至 21:00）；或回房換浴衣直奔 2 樓大浴場享受人工溫泉早點休息！",
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
    "food": "【抵達晚餐・HARUKA 列車悠閒野餐 (19:16-20:34)】\r\n🍱 關空特急 HARUKA 車上晚餐【親子首選・最輕鬆解脫】：HARUKA 每個座位均備有高鐵級折疊餐桌與杯架！搭車前於 JR 關空車站旁選購特色鐵路便當（新幹線便當/厚切三元豚豬排三明治/日式炸雞飯糰/海鮮散壽司），78分鐘車程邊看夜景邊吃晚餐，小孩不挨餓、大人不趕路！\r\n\r\n【抵達飯店後宵夜/點心（若還想吃）】\r\n① 飯店旁 7-Eleven / Avanti 超市：步行 1 分鐘買北海道十勝鮮乳、熱包子、甜點與啤酒回房享用。\r\n② Porta 地下街外帶熟食/麵食：營業至 21:30（最後點餐），清爽豆皮烏龍麵暖胃。",
    "queueTips": "第一天不排景點・出站 2 分鐘迅速進飯店休息\r\n【抵達晚餐妙招】：抵達京都已過 20:30，帶著 7 歲小孩與大行李強烈建議在 JR 關西空港站 2 樓買好便當點心帶上 HARUKA 車上吃，一到京都 20:34 直接進飯店！\r\n【AEON MALL 與 Workman Colors】：飯店走路 5 分鐘就是大型購物中心「AEON MALL KYOTO」（3F 有 Workman Colors、1F 有大型超市），營業至 21:00，Day 1 抵達當晚或 Day 2 晚上隨時都能散步過去補貨！",
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
    "highlights": "京都嵐山單向黃金線 ＆ 下午三條日潮選物 ＆ 傍晚沉浸 teamLab Biovortex Kyoto・宿 Hotel Vischio Kyoto\r\n上午：嵐山（竹林之道 → 野宮神社 → 天龍寺北門進正門出 → 嵐山大街 → 渡月橋） → 下午：三條商圈精華（HUMAN MADE 1928 藍瓶咖啡下午茶 ＆ SOU・SOU 村/TNF紫標精準採買） → 傍晚：直奔飯店旁 teamLab Biovortex Kyoto 沉浸互動展 → 京都站 Porta「名代炸豬排 Katsukura」金黃定食大餐 → 返回飯店大浴場泡湯",
    "schedule": "07:30 飯店悠閒享用早餐\r\n08:30 從 JR 京都站搭乘 JR 嵯峨野線約 15 分鐘直達「嵯峨嵐山站」\r\n08:50-10:00【第 1 站・竹林之道＆野宮神社】出站直奔竹林小徑（早上 9 點人潮最少最好拍！），漫步至野宮神社摸摸黑色鳥居旁的許願神石「龜石」\r\n10:00-11:00【第 2 站・天龍寺北門進正門出】穿透捷徑！從竹林走進天龍寺北門，漫步曹源池庭園賞山水，再從正門走出直達大街，一步冤枉路都不多走\r\n11:00-11:45【第 3 站・嵐山大街吃喝散策】出正門漫步長辻通，小孩吃古都芋金賞可樂餅、大人品嚐特色點心\r\n11:45-12:15【第 4 站・渡月橋地標合照】順遊至桂川畔的渡月橋，拍下嵐山經典冬日美景全家福\r\n12:15-13:30【第 5 站・嵐山午餐】渡月橋畔享用道地午餐（熱呼呼手打炸蝦烏龍麵／京豆腐料理／よしむら蕎麥麵）\r\n13:30 沿嵐山大街散步回「JR 嵯峨嵐山站」搭車回京都車站轉地鐵（或轉計程車直達三條）\r\n14:15-15:30【第 6 站・日潮精選①】HUMAN MADE 1928（洋樓古蹟、選購京都限定款，店內 Blue Bottle 藍瓶咖啡享用悠閒下午茶與美味鬆餅）\r\n15:30-16:30【第 7 站・日潮精選②】SOU・SOU 京都總部聚落 ＆ TNF STANDARD（漫步 4 分鐘朝聖 SOU・SOU 村挑選超萌童裝わらべぎ與口金包，或入手日本限定 TNF 紫標工裝）\r\n16:35-17:00 從地鐵烏丸線「四條站」搭車 3 分鐘直達京都站，步行回 Hotel Vischio 放戰利品、洗手輕裝出發\r\n17:15-19:15【第 8 站・重頭戲】teamLab Biovortex Kyoto（從飯店步行僅 7-9 分鐘！2025/10 全新開幕日本最大 teamLab，運動森林奔跑攀爬、未來園彩繪互動放電 2 小時）\r\n19:30-20:45【第 9 站・Porta 名代炸豬排】步行直通京都車站 Porta 地下街，悠閒享用「名代炸豬排 Katsukura」！現磨白芝麻、金黃酥脆三元黑豬排與特大炸海蝦定食，無限續加香 Q 燕麥飯與細切高麗菜絲，全家大口吃肉超滿足（備案：神座拉麵 蔬菜高湯拉麵）\r\n21:00 步行 2 分鐘返回 Hotel Vischio Kyoto，享受 2 樓大浴場泡湯消除疲勞（若仍想挖寶亦可順道至對面 AEON MALL KYOTO 3F「Workman Colors」或 1F 超市採買，營業至 21:00），早點就寢準備隔天包車出發",
    "transport": "上午：京都站搭 JR 嵯峨野線 15 分鐘直達嵯峨嵐山（單向步行：JR站 → 竹林 → 天龍寺北門進正門出 → 商店街 → 渡月橋）\r\n下午：JR/地鐵烏丸線前往三條商圈，再搭地鐵 3 分鐘返抵京都站\r\n傍晚：全步行動線！飯店 🚶 7 分鐘 ➔ teamLab Biovortex 🚶 8 分鐘 ➔ 京都站 Porta 地下街 🚶 2 分鐘 ➔ 飯店大浴場",
    "hotelId": "vischio_kyoto",
    "childHighlights": "嵐山竹林晨間散步與野宮神社摸龜石許願\r\n嵐山大街現炸香脆可樂餅與渡月橋拍照\r\nHUMAN MADE 1928 店內 Blue Bottle 藍瓶咖啡下午茶鬆餅點心\r\nSOU・SOU 超萌童裝わらべぎ與十數配件\r\nteamLab Biovortex 巨型光影互動、運動森林爬坡跳躍與彩繪水族投影\r\n名代炸豬排自己親手研磨香噴噴白芝麻、大口吃金黃炸豬排與大炸蝦（或神座拉麵清甜蔬菜湯）\r\n飯店 2 樓大浴場泡澡",
    "food": "【嵐山午餐・精選名店 4 選 1 (12:15-13:30)】\r\n① 嵐山よしむら（渡月橋畔名店）：【景觀 No.1・渡月橋全景】坐在二樓大片景觀窗前，邊俯瞰渡月橋與桂川冬景、邊享用現磨手打蕎麥麵與香酥炸蝦天婦羅定食，非牛親子首選。\r\n② 嵐山手打炸蝦烏龍麵（渡月橋畔）：【小孩最愛・出餐快速】熱呼呼柴魚高湯讚岐烏龍麵與香脆炸大蝦，暖胃又完全不耽誤下午行程。\r\n③ 嵯峨豆腐 稻（長辻通大街）：【京都名物】天龍寺正門旁！清雅京都名水豆腐、熱湯葉生麩天婦羅御膳，座位寬敞舒適、長輩最愛。\r\n④ 鯛匠 HANANA（長辻通大街）：【排隊名店】京都必吃鯛魚茶泡飯三吃（胡麻鯛魚刺身 ➔ 茶泡飯），清雅精緻。\r\n\r\n【下午茶/逛街小憩 (14:15-16:00)】\r\n☕ Blue Bottle 藍瓶咖啡（HUMAN MADE 1928 店內）：洋樓古蹟內喝拿鐵吃鬆餅，大人輪流挑限定衣服，小孩吃點心。\r\n🍵 SOU・SOU 在茶寮（四條新京極）：超萌十數數字和菓子與手刷宇治抹茶。\r\n\r\n【京都車站 Porta 地下街晚餐・放電後大餐首選 (19:30-20:45)】\r\n① 🐷 名代炸豬排 Katsukura（Porta 地下街）【放電後大餐・首選 No.1】：teamLab 結束步行直通 Porta 地下街！19:15 剛好是黃金晚餐時段，全家悠閒坐下親手研磨香噴噴白芝麻，享用外酥內嫩的低溫三元黑豬排、特大炸海蝦定食，無限續加香 Q 燕麥飯、清脆高麗菜絲與白味噌湯，小孩大口扒飯大人吃得過癮！（不吃牛首選、小孩友善）。\r\n② 🍜 どうとんぼり神座（神座拉麵）京都 Porta 店【清爽高湯備案】：若當晚想喝熱湯，可選神座拉麵大白菜蔬菜鮮甜高湯拉麵與酥脆煎餃。\r\n③ 🍜 祇園拉麵 京（京都車站 10F 拉麵小路備案）：京都發源！丹波黑雞白湯拉麵與鐵板金黃炒飯。",
    "queueTips": "【嵐山不折返黃金走法（醉日本推薦）】：JR 嵯峨嵐山站出站後直奔「竹林小徑」，從「天龍寺北門進入」欣賞曹源池庭園，再由「天龍寺正門走出」直達嵐山大街，順遊至渡月橋！一路向南單向循環，完全不走回頭路！\r\n【teamLab Biovortex Kyoto 購票與穿著須知】：\r\n① 採全預約制：建議出發前 2-4 週於官網或 Klook/KKday 預約「17:00 或 17:30 場次」，現場掃 QR Code 即可快速入場。\r\n② 穿著球鞋：運動森林有繩網、軟墊立體坡道，務必穿著防滑平底球鞋，勿穿高跟鞋。\r\n③ 免費置物櫃：入場前可將下午三條買的戰利品與厚重大衣鎖進免費置物櫃，輕裝入場體驗。\r\n【名代炸豬排極順動線】：teamLab 19:15 玩完後走地下連通道直達京都 Porta 地下街，名代炸豬排正好在晚餐時間入座享用現炸定食，吃完走 2 分鐘直達 Hotel Vischio 泡大浴場，動線極順完全不挨凍！\r\n【Workman Colors 補貨】：若 Day 1 來不及逛，Day 2 晚間吃完炸豬排回飯店時，亦可順道漫步至對面 AEON MALL 3F Workman Colors 採買高 CP 值戶外防風防潑水衣物！"
  },
  {
    "day": 3,
    "date": "2/2（二）",
    "tagColor": "green",
    "highlights": "🚌 KKday 觀光包車一日遊 ＆ 天橋立 ＆ 伊根舟屋 → 道頓堀綜合燒肉大餐 → 入住大阪心齋橋法拉格飯店\r\n上車：08:45 京都車站八條口觀光巴士停車場 → 天橋立 → 伊根舟屋 → 下車：18:30 道頓堀御堂筋（あぶりや 燒肉） → 晚餐後步行入住法拉格飯店",
    "schedule": "07:30 飯店悠閒享用早餐 ＆ 辦理退房，打理行李（行李全放 KKday 專車行李廂）\r\n🚌 08:45【上車地點】京都車站八條口觀光巴士停車場（Hotel Vischio Kyoto 步行約 3 分鐘）\r\n10:30-13:00 日本三景「天橋立」搭纜車登飛龍觀、享用特色午餐\r\n14:00-16:00「伊根舟屋」搭乘觀光遊船、體驗手拿蝦味先餵海鷗\r\n🚌 18:30【下車地點】道頓堀御堂筋（あぶりや 道頓堀御堂筋店・唐吉訶德 10F）\r\n18:30-20:00 🥩 あぶりや（Aburiya）道頓堀御堂筋店 綜合燒肉大餐（國產牛、黑豚五花、阿波尾地雞、烤大蝦、干貝、聖代甜點，牛豚海鮮全包！無煙烤爐超舒服）\r\n━━━ 🏠 步行返回飯店詳細路線（全程約 6-7 分鐘） ━━━\r\n【步驟①】出大樓後，漫步 1 分鐘至「戎橋（えびすばし）」，仰望道頓堀地標「固力果跑跑人」夜間燈光合照打卡\r\n【步驟②】過橋後立刻進入「心齋橋筋商店街」（有頂蓋室內商店街，下雨不用撐傘）\r\n【步驟③】沿心齋橋筋往北直行約 350 公尺（3-4 分鐘），通過 H&M、UNIQLO 大型門市\r\n【步驟④】走出商店街北端出口，右轉長堀通往東，步行約 1 分鐘即抵達「心齋橋法拉格飯店」\r\n20:15 辦理入住「心齋橋法拉格飯店」（行李已由 KKday 專車先送達）\r\n20:30 飯店 Lounge 享用免費研磨咖啡，回房好好休息",
    "transport": "🚌 KKday 觀光包車（08:45 上車 京都八條口觀光巴士停車場，行李全程置於車廂）\r\n🚌 包車途經：天橋立 → 伊根舟屋 → 18:30 下車道頓堀御堂筋\r\n🚶 返程：道頓堀步行約 6-7 分鐘直達心齋橋法拉格飯店（道頓堀→心齋橋徒步即達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "伊根灣遊船餵海鷗\r\n蝦條餵鳥\r\nあぶりや 自己烤肉、喝湯與吃聖代冰淇淋\r\n入住現代質感心齋橋法拉格飯店",
    "food": "【天橋立午餐・2選1 (11:30-13:00)】\r\n① 天橋立特產松葉蟹海鮮御膳：【冬季名物】日本海產新鮮螃蟹、海鮮散壽司與蒸物定食。\r\n② 飛龍觀山頂和風烏龍麵・炸蝦定食：【親子友善】山頂觀景餐廳，一邊看飛龍觀絕景一邊享用熱騰騰炸蝦烏龍麵。\r\n\r\n【道頓堀/心齋橋晚餐・綜合燒肉精選 (18:30-20:00)】\r\n① 🥩 国産牛焼肉 あぶりや（道頓堀御堂筋店・唐吉訶德 10F）【牛豚海鮮兼備・首選 No.1】：下車直達！嚴選產地直送手切國產牛（吃牛者大推）、厚切黑豚五花、豚里肌、阿波尾地雞、烤大蝦、干貝、石鍋拌飯與時令野菜，7歲小學生半價且聖代甜點無限續點！無煙烤爐吸力強、全席禁煙沙發座，全家各得其所超痛快。\r\n② 🥩 焼肉力丸（心齋橋店／道頓堀店）【備案】：炭火厚切牛豚海鮮燒肉，心齋橋筋步行即達。\r\n③ 🍜 道頓堀 今井 本店：天然昆布高湯豆皮烏龍麵與滑嫩親子丼。",
    "queueTips": "🚌 08:45 準時抵達京都車站八條口觀光巴士停車場，切勿遲到！\r\nあぶりや 燒肉極受歡迎，建議出發前透過 EPARK 或官網提前預約 18:30 場次！\r\n這天是全程較累的一天，晚上吃飽回飯店後好好休息"
  },
  {
    "day": 4,
    "date": "2/3（三）",
    "tagColor": "purple",
    "highlights": "大阪箕面勝尾寺祈福 ＆ 午餐「塩そば 時空」極上鹽拉麵 ＆ 下午日潮狂掃（NANGA/SORA/HUMAN MADE） ＆ 晚間「にぎり長次郎」頂級活魚迴轉壽司・宿心齋橋法拉格飯店\r\n上午：箕面勝尾寺（滿山達摩不倒翁） → 午餐：飯店旁「塩そば 時空 OSAKA」（極上魚介清湯拉麵，備案北極星蛋包飯） → 下午：心齋橋/堀江潮牌巡禮（FREAK'S STORE＋SORA＋Carhartt＋NANGA＋PARCO） → 傍晚飯店放戰利品 ➔ 晚餐：步行 6 分「にぎり長次郎 法善寺店」（頂級活魚迴轉壽司，備案道頓堀今井）",
    "schedule": "07:30 飯店 Lounge 享用免費研磨咖啡與早餐\r\n08:15【上午勝尾寺】心齋橋搭御堂筋線直通「箕面萱野站」，轉乘巴士/計程車約 15 分鐘直達勝尾寺\r\n09:00-11:15【勝運祈福】早晨開門入寺，漫步滿山可愛紅色達摩不倒翁，人潮少好拍照！挑選專屬小達摩並點睛祈願\r\n11:30-12:45 返抵心齋橋，步行 4 分鐘品嚐「塩そば 時空 OSAKA」極上魚介鹽味拉麵（東京米其林必比登名店・純魚介無牛甘醇高湯；備案：北極星蛋包飯／心齋橋 PARCO B2 美食街）\r\n13:00【地點①】FREAK'S STORE 心齋橋店（NAUTICA JP 重磅衛衣、City Boy 美式工裝寬褲）\r\n13:45【地點②】SORA 堀江店（找 NANGA 聯名羽絨外套、Patagonia 戶外潮流選物）\r\n14:25【地點③】Carhartt WIP Osaka（日本限定工裝帆布夾克、牛仔褲與配件）\r\n15:00【地點④】NANGA SHOP OSAKA（NANGA 日本官方直營旗艦店・全系列 AURORA 防水透氣羽絨）\r\n16:15【地點⑤】心齋橋 PARCO（1F 直衝 HUMAN MADE 心齋橋限定款 ➔ 2F BEAMS 日潮美式經典）\r\n17:30【地點⑥】步行 3 分鐘回法拉格飯店放好所有戰利品、換輕便鞋子洗手小歇\r\n18:15-19:45【地點⑦・頂級活魚迴轉壽司】漫步 6 分鐘前往「にぎり長次郎 法善寺店」（CHOJIRO）！寬敞沙發座平板點餐，職人現捏黑鮪魚大腹、炙燒起司鮭魚、特大牡丹蝦、海膽與現炸蝦天婦羅，小孩爽吃茶碗蒸與熟食壽司，大人小孩超盡興（備案：道頓堀今井本店 豆皮烏龍麵／大起水產）！餐後門口直接拍法善寺小巷與道頓堀跑跑人夜景",
    "transport": "上午：御堂筋線直通「箕面萱野站」轉乘巴士/計程車（約 45 分鐘抵達勝尾寺）\r\n下午：心齋橋商圈全程步行（法拉格飯店為圓心，步行 3~8 分鐘內可達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "勝尾寺滿山遍野的可愛紅色達摩不倒翁\r\n親自挑選小達摩並點睛祈福\r\n塩そば時空香噴噴黃金清湯拉麵與美味肉丸子（或北極星滑嫩蛋包飯）\r\n長次郎迴轉壽司平板自己點炸蝦、茶碗蒸、鮭魚壽司與冰淇淋\r\n道頓堀今井熱呼呼甜豆皮與滑嫩多汁親子丼\r\n道頓堀巨型立體招牌與固力果跑跑人",
    "food": "【心齋橋午餐・首選 No.1 (11:30-12:45)】\r\n🍜 塩そば 時空 OSAKA【東京米其林必比登名店・首選】：飯店旁步行僅 4 分鐘！東京高井戶名店關西首店，主打澄澈金黃「特製塩そば（特製鹽味拉麵）」。以煮干、秋刀魚乾、羅臼昆布與香菇慢火精燉，無任何動物牛骨成分（100%不吃牛首選！）。搭配大山雞低溫雞叉燒、特選豬肉與特製雞軟骨丸子，中細直麵滑順甘醇，大人小孩整碗喝光！（平日營業至 13:00，湯頭售完為止）\r\n\r\n【心齋橋午餐備案】\r\n① 北極星蛋包飯（心齋橋本店）：【百年名店・小孩最愛】百年日式庭園榻榻米包廂，滑嫩雞肉/鮮蝦蛋包飯，不吃牛友善。\r\n② 心齋橋 PARCO B2 神級地下食堂：【室內免吹風】炒麵、海鮮丼、和風洋食一應俱全，吃完直上 1F HUMAN MADE 開逛。\r\n\r\n【下午茶/美國村點心（老辣妹精選）】\r\n🍦 元祖アイスドッグ（冰淇淋熱狗）【老辣妹推薦】：現炸熱騰騰麵包夾冰涼牛乳霜淇淋，冰火交融超順口！\r\n🐶 フエキショップ 自助霜淇淋【老辣妹推薦】：PARCO 9F 親自投幣操作 Fueki 黃色小狗霜淇淋機。\r\n\r\n【道頓堀/法善寺晚餐・頂級海鮮壽司 (18:15-19:45)】\r\n① 🍣 にぎり長次郎 法善寺店（CHOJIRO）【頂級活魚迴轉壽司・首選 No.1】：距離飯店步行僅 6-7 分鐘！關西頂級「水產活魚系」迴轉壽司，店內有活魚水槽、職人現捏。iPad 繁中平板點餐，寬敞沙發包廂大座（BOX 席），大人盡享厚切黑鮪魚大腹、炙燒鮭魚、海膽、活鮑魚與特大生蝦；小孩享有炸蝦天婦羅、茶碗蒸、玉子燒、兒童壽司與冰淇淋！完全不吃牛、氣氛輕鬆自在不拘謹。（每人約 ¥3,000~4,500）\r\n② 🍜 道頓堀 今井 本店（備案）：法善寺旁昭和21年老店（步行 7 分），連獲全日本高湯冠軍的北海道天然昆布高湯，招牌「豆皮烏龍麵」與滑嫩「極上親子丼」。\r\n③ 🍣 大起水產 迴轉壽司 道頓堀店（備案）：堺港水產直營平價親民海鮮迴轉壽司。",
    "queueTips": "【勝尾寺攻略】：早上 09:00 開門入寺，早去山區空氣清新且拍照空景最多！\r\n【塩そば 時空 注意事項】：平日營業時間僅 06:00-13:00，店內約 8 席吧台位。11:30 勝尾寺回來直接前往剛好在尖峰前入座！若遇客滿亦可步行 5 分鐘前往備案「北極星蛋包飯」或「PARCO B2 食堂」。\r\nSORA 堀江店與 PARCO 均全日無休，NANGA 旗艦店週三若遇公休可直接在 SORA 堀江店選購齊全的 NANGA 聯名羽絨！\r\n【長次郎迴轉壽司】：法善寺店 2 樓空間寬敞，晚間 18:00 左右前往通常立即可安排沙發大桌（BOX 席），平板點餐節奏自主，全家吃得舒服又盡興！\r\n【道頓堀今井備案】：本店免訂金免刷卡，1樓散客現場入座（翻桌快速約等 10-15 分鐘），吃完走出來就是道頓堀熱鬧夜景！"
  },
  {
    "day": 5,
    "date": "2/4（四）",
    "tagColor": "cyan",
    "highlights": "大阪池田日清泡麵博物館 DIY ＆ 吾妻百年烏龍麵午餐 ＆ 下午梅田日牌狂掃（The Row/TNF紫標/NAUTICA/摩天輪） ＆ 晚間飯店旁「しゃぶ亭」黑豬涮涮鍋・宿心齋橋法拉格飯店\r\n上午：池田安藤百福泡麵博物館（彩繪專屬杯麵 DIY ＆ 泡麵時光隧道） → 午餐：大阪最古老 160 年名店「吾妻」細烏龍麵 → 下午：阪急急行直達梅田商圈（LUCUA 1100、阪急 3F The Row ＆ B1甜點、HEP FIVE 摩天輪） → 傍晚回心齋橋飯店放戰利品 ➔ 飯店旁「しゃぶ亭」黑豬涮涮鍋",
    "schedule": "08:00 飯店 Lounge 享用早餐與咖啡，悠閒出門\r\n08:45 心齋橋搭御堂筋線至梅田，轉乘「阪急寶塚線急行」（車程僅 20 分鐘）直達「池田站」，出站平路步行 5 分鐘抵達\r\n09:30-11:30【安藤百福發明紀念館（池田泡麵博物館）】入館參觀泡麵發明歷史與壯觀泡麵時光隧道，重頭戲體驗【我的合味道工廠 (My CUPNOODLES)】親手彩繪專屬拉麵杯、挑選湯頭與小雞魚板配料，充氣防撞包背著走（7 歲小孩成就感破表！）\r\n11:30-12:45【池田午餐・大阪最古老烏龍麵】體驗結束後漫步 6 分鐘前往「手打うどん 吾妻（Azuma）」（1864 年江戶時代創立、全大阪現存最古老烏龍麵店！），品嚐文豪谷崎潤一郎著迷的名物「ささめうどん（勾芡細烏龍麵）」與香噴噴什錦炊飯（かやくご飯），暖胃甘甜無牛肉，小孩長輩超愛！\r\n12:50 散步回阪急池田站，搭乘阪急寶塚線急行（20 分鐘）直達終點「阪急大阪梅田站」，無縫接軌開逛梅田！\r\n13:15-15:00【地點①】LUCUA 1100 ＆ LUCUA osaka（直衝 7F FREAK'S STORE 買 NAUTICA JP ➔ 6F THE NORTH FACE+ 關西旗艦買日本限定紫標 ➔ 3F BEAMS ➔ 9F 蔦屋書店星巴克小憩）\r\n15:00-16:30【地點②】阪急百貨 梅田總店（直衝 3F 專櫃朝聖 The Row 頂級包款 Margaux/Park Tote ➔ B1 掃貨 ÉCHIRÉ 頂級奶油餅乾與限定伴手禮）\r\n16:30-17:30【地點③】HEP FIVE（5F Carhartt WIP 梅田直營店買限定工裝夾克 ➔ 7F 搭乘紅色摩天輪俯瞰梅田夕陽百萬夜景）\r\n17:45 梅田站搭乘御堂筋線 3 站（僅 6 分鐘）直達心齋橋，步行 3 分鐘回飯店放好戰利品與專屬泡麵包\r\n18:15-19:45【地點④・極品暖胃黑豬火鍋】步行 3 分鐘前往「しゃぶ亭 心齋橋本店」！一人一專屬銅鍋，大啖頂級六白黑豬涮涮鍋，沾石臼現磨秘傳胡麻醬，煮熱蔬菜烏龍麵，大人小孩吃得過癮舒服（梅田備案：KITTE大阪 5F「すき焼 しゃぶしゃぶつかだ」鹿兒島黑豚一人鍋）\r\n20:00 步行 3 分鐘返回飯店休息，行程充實又超輕鬆",
    "transport": "上午：心齋橋搭御堂筋線至梅田 → 轉阪急寶塚線急行 20 分鐘直達「池田站」（出站步行 5 分鐘）\r\n下午：池田搭阪急 20 分鐘直達梅田商圈（全程無縫銜接）\r\n傍晚：梅田搭御堂筋線 6 分鐘直達心齋橋（步行 3 分鐘吃鍋回飯店）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "池田泡麵博物館親手彩繪專屬拉麵杯、選小雞魚板配料、吹氣太空包\r\n超壯觀跨年代泡麵時光隧道拍照\r\n吾妻 160 年滑順細烏龍麵與什錦炊飯（好咬好吞、熱騰騰暖胃）\r\nHEP FIVE 紅色巨大摩天輪俯瞰大阪美景\r\nLUCUA 蔦屋書店童書區\r\nしゃぶ亭個人小銅鍋自己涮肉吃冰淇淋",
    "food": "【池田午餐・大阪最古老烏龍麵 (11:30-12:45)】\r\n① 🍜 手打うどん 吾妻（Azuma）【160年傳奇老店・首選 No.1】：從泡麵博物館步行 6-8 分鐘！創業於江戶時代末期（1864年），全大阪歷史最悠久烏龍麵店。名物「ささめうどん」如素麵般細滑彈牙，吸附熱騰騰濃醇昆布柴魚勾芡高湯、生薑末與甘甜配料，搭配招牌「什錦炊飯（かやくご飯）」堪稱絕配，完全不吃牛，7 歲小孩容易咀嚼吞嚥、全家暖胃舒服！\r\n② 🍜 博多一風堂 池田店（備案）：泡麵博物館走回池田站必經的獨棟日式大木屋，向日清創辦人致敬的「百福元味」豚骨拉麵。\r\n\r\n【梅田商圈下午茶/伴手禮 (15:30-17:00)】\r\n🍪 阪急百貨 B1 ÉCHIRÉ (艾許頂級奶油餅乾) ＆ Bâton d'or (高級版 Pocky)。\r\n☕ LUCUA 1100 9F 蔦屋書店星巴克：超美落地窗、沙發童書區喝拿鐵休息。\r\n\r\n【心齋橋/梅田晚餐・暖胃火鍋首選 (18:15-19:45)】\r\n① 🍲 しゃぶ亭 心齋橋本店【50年黑豬涮涮鍋老字號・首選 No.1】：距離法拉格飯店步行僅 3 分鐘！一人一專屬銅鍋，日本產頂級「六白黑豬肉」肉質甘甜粉嫩無腥味，搭配石臼現磨 22 種辛香秘傳胡麻醬、時令蔬菜、手工烏龍麵、年糕與冰淇淋！（一人約 ¥1,800~2,800，CP值極高）。\r\n② 🍲 すき焼 しゃぶしゃぶつかだ KITTE大阪店【梅田首選備案・一人一鍋】：若在梅田商圈逛街不想太早回心齋橋，直上 JR 大阪站西口直通全新「KITTE 大阪 5F」！佐藤可士和操刀洗練木質空間，一人一鍋乾淨衛生，主打「鹿兒島黑寶豚」頂級黑豬肉涮涮鍋，不吃牛100%分鍋安心享用，蔬菜無限續，7歲小孩友善！\r\n③ 🍲 美美卯 心齋橋店（備案）：大阪 200 年名物海鮮烏龍壽喜鍋。\r\n④ 🚂 串かつだるま 心斎橋店：元祖炸串（炸蝦/蔬菜/起司），軌道小火車送餐。",
    "queueTips": "【泡麵博物館攻略】：入館完全免費！重頭戲「我的合味道工廠 (My CUPNOODLES)」每份僅 ¥500 日圓，免事前預約、現場購杯即可製作。週四上午 09:30 開館時人潮最少，體驗品質極佳！\r\n【吾妻烏龍麵注意事項】：營業時間為中午 11:00 至下午，麵條售完為止。11:30 結束泡麵工廠過去剛好避開第一輪排隊，座位為日式榻榻米與木桌，溫馨親切。\r\n【交通零折返】：吃完散步回池田站搭阪急電車直達梅田，出站就是阪急百貨與 LUCUA，完全是同一條動線，省下原本去六甲山轉乘 4 次車的折磨！\r\n【晚餐極順】：傍晚從梅田搭地鐵 6 分鐘回心齋橋，先回飯店放好戰利品與泡麵包，走 3 分鐘吃しゃぶ亭黑豬火鍋，吃完散步回房睡覺！\r\n【梅田備案】：若在梅田商圈（LUCUA/阪急/HEP FIVE）逛累想直接就近吃晚餐，可前往 JR 大阪站直通的「KITTE 大阪 5F」品嚐「すき焼 しゃぶしゃぶつかだ」，一人一鍋大啖鹿兒島黑豚涮涮鍋，吃完再搭車回心齋橋！"
  },
  {
    "day": 6,
    "date": "2/5（五）",
    "tagColor": "pink",
    "highlights": "樂高樂園探索中心 → 大阪海遊館 → 天保山大摩天輪・宿心齋橋法拉格飯店\r\n上午：LEGOLAND® Discovery Center Osaka（天保山 Marketplace 3F） → 午餐 → 下午：海遊館（同區步行 2 分鐘） → 傍晚摩天輪看夕陽",
    "schedule": "07:30 飯店 Lounge 享用免費研磨咖啡與早餐\r\n09:00 心齋橋出發前往大阪港（御堂筋線心齋橋 → 本町轉中央線約 25 分鐘）\r\n09:35 大阪港站步行約 7 分鐘直達天保山 Marketplace，搭手扶梯直上 3F 樂高樂園，輕鬆等候 10:00 開門（出示線上預約憑證直接掃碼入場，完全免排售票窗口！）\r\n10:00-12:00【樂高樂園探索中心】2 大 1 小進場暢玩！樂高工廠導覽、4D 動感電影院、梅林魔法學徒飛行設施、樂高迷你大阪（道頓堀與通天閣模型）、得寶積木區動手創作（另 2 位大人在 1-2F 商場愜意逛街喝咖啡）\r\n12:00-13:00 全員於天保山 Marketplace 會合享用美味午餐（杵屋烏龍麵／浪花美食橫丁）\r\n13:15-16:30【大阪海遊館】步行 2 分鐘直達海遊館！持 KKday/Klook 預訂之 13:00-13:30 電子票（QR Code）免排隊直接掃碼通關（觀賞世界級巨型鯨鯊水槽、水獺企鵝餵食秀、水母銀河、觸摸魟魚）\r\n16:30-17:15 天保山大摩天輪俯瞰大阪港灣日落夕陽（2 月日落約 17:30）\r\n17:30 搭車返回心齋橋（中央線 → 本町轉御堂筋線約 25 分鐘）\r\n18:15 心齋橋周邊享用道地美食晚餐（串かつだるま小火車送餐／壽司郎／大丸餐廳街）\r\n19:45 返回心齋橋法拉格飯店打包行李、好好休息",
    "transport": "御堂筋線 心齋橋 → 本町\r\n轉中央線 → 大阪港",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "樂高 4D 電影與遊樂設施、親手拼樂高\r\n樂高小鎮迷你大阪街景\r\n鯨鯊、企鵝、水母\r\n天保山摩天輪看夕陽",
    "food": "【天保山午餐・2選1 (12:00-13:00)】\r\n① 杵屋（天保山店）：讚岐手打現做烏龍麵與炸蝦天婦羅定食，小孩友善。\r\n② 天保山浪花美食橫丁（なにわ食いしんぼ横丁）：咖哩飯、炸串等復古小吃街，全家各選所愛。\r\n\r\n【天保山下午點心（海遊館後補充體力）】\r\n🐙 浪花美食橫丁 現烤章魚燒、天保山 Marketplace 1F 霜淇淋，逛完海遊館等摩天輪前小歇。\r\n\r\n【心齋橋/道頓堀晚餐・3選1 (18:15-19:45)・飯店步行 10 分鐘內】\r\n① 串かつだるま 心斎橋店【老辣妹推薦・親子首選】：飯店旁步行 3 分！148 席大桌位、全席禁煙、「軌道小火車」送餐，炸蝦／起司／蔬菜非牛炸串，小孩玩累也吃得開心。\r\n② 壽司郎（スシロー）道頓堀店：【小孩最愛迴轉壽司】平板點餐、鮭魚、鯛魚、玉子燒、炸蝦與甜點選擇多，可用官方 App 提前線上登記免現場等。\r\n③ 大丸心齋橋店 本館 13F 餐廳層：【免排隊・推車友善】和食定食、炸豬排、壽司、洋食任選，有電梯與親子廁所，最適合玩完一整天想安靜好好吃一頓。",
    "queueTips": "🎟️【定案方案・台灣家庭最推：提前全網購（零現場排隊・100% 確定時段）】\r\n1.【海遊館門票（全員 4 大 1 小）】：出發前 1-2 週直接在 KKday 或 Klook 預訂 2/5 下午「13:00-13:30」場次。支援台灣信用卡/LINE Pay（免受海遊館官網擋刷海外卡困擾），當天手機出示 QR Code 直接掃碼進場，完全不用到售票窗口大排長龍！\r\n2.【樂高樂園門票（僅需買 2 大 1 小）】：在 Klook 或樂高官網預約上午 10:00 入場。由 2 位大人陪 7 歲小孩進場同樂，另 2 位大人在商場逛街喝咖啡享受悠閒時光（大人省門票且不枯等）。\r\n3.【天保山大摩天輪】：現場自動售票機購票即可（¥900/人），傍晚搭乘剛好看夕陽。\r\n🚇【交通】：市區地鐵刷兒童/成人 ICOCA 即可（來回約 ¥580/大人），完全不需買周遊卡。"
  },
  {
    "day": 7,
    "date": "2/6（六）",
    "tagColor": "rose",
    "highlights": "心齋橋法拉格飯店退房寄行李 → 最後採買 → 關西機場 → 返台",
    "schedule": "07:30 飯店 Lounge 享用免費研磨咖啡與早餐\r\n09:30-11:30 辦理退房寄放行李，於心齋橋周邊最後採買伴手禮\r\n11:30-12:45 心齋橋/難波享用美味午餐\r\n13:00 返回飯店取行李，步行前往難波站\r\n13:30 搭乘南海電鐵 Rapi:t 藍色鐵甲特急直達關西機場\r\n14:00 抵達關西機場辦理登機手續（搭乘 16:00 班機返台）",
    "transport": "南海電鐵 Rapi:t\r\n難波 → 關西機場（38分鐘直達）",
    "hotelId": "flag_shinsaibashi",
    "childHighlights": "搭乘酷炫藍色特急 Rapi:t\r\n全車指定席放鬆看海景",
    "food": "【心齋橋/難波午餐・3選1 (11:30-12:45)】\r\n① しゃぶ亭 心齋橋本店（黑豬涮涮鍋）：【清爽暖胃】頂級黑豬肉片涮涮鍋佐招牌胡麻醬與蔬菜烏龍麵，清爽無負擔。\r\n② 大丸心齋橋 / 高島屋百貨 頂級海鮮握壽司與海鮮丼：環境安靜高雅、免排長隊。\r\n③ 551 蓬萊 難波本店：現炊熱騰騰豬肉包與燒賣，可內用或帶上南海特急 Rapi:t 車上享用。\r\n\r\n【回程必買伴手禮/點心】\r\n🧀 りくろーおじさん（老爺爺現烤起司蛋糕）：難波本店剛出爐現搖鈴熱騰騰起司蛋糕，帶回台灣與親友分享！",
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
    "advice": "嵐山早上（竹林→天龍寺→渡月橋） → 下午三條商圈精華選物下午茶（HUMAN MADE/藍瓶/SOU・SOU） → 傍晚飯店旁 teamLab Biovortex 沉浸互動放電 → 京都站地下街神座拉麵暖胃泡湯；兼顧大人買潮牌與小孩玩樂"
  },
  {
    "category": "Day 3",
    "advice": "天橋立＋伊根保留；晚上到大阪直接入住休息，不再逛街"
  },
  {
    "category": "Day 4",
    "advice": "勝尾寺早上早去空氣好人少好拍照；下午南船場與橘子街集中精華逛街，累了隨時回飯店放戰利品；晚餐漫步道頓堀享用大阪高湯之神「道頓堀 今井 本店」豆皮烏龍麵與滑嫩親子丼暖胃，免訂金免排長隊"
  },
  {
    "category": "Day 5",
    "advice": "上午池田泡麵博物館親手 DIY 專屬杯麵，免預約輕鬆玩；中午阪急直達梅田精華開逛（LUCUA/The Row/摩天輪）；傍晚回心齋橋飯店放戰利品，走 3 分鐘吃「しゃぶ亭」黑豬涮涮鍋"
  },
  {
    "category": "Day 6",
    "advice": "提前 1-2 週在 KKday/Klook 預購海遊館（13:00 場次）與樂高樂園（10:00 場次），當天全持 QR Code 免排隊直接入場，行程最順暢穩定"
  },
  {
    "category": "兒童",
    "advice": "7歲（日本小學生票價）；建議準備兒童ICOCA／適用兒童票券"
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
  // --- 道頓堀・心齋橋 綜合燒肉首選 ---
  {
    name: '国産牛焼肉食べ放題 あぶりや 道頓堀御堂筋店',
    category: '綜合燒肉・牛豚海鮮全包',
    rating: 4.6,
    location: '道頓堀御堂筋（唐吉訶德御堂筋店 10F）',
    area: '大阪',
    recommendation: '【道頓堀綜合燒肉首選・牛豚兼備】直面道頓堀御堂筋高樓夜景！吃牛者享有頂級手切國產牛（牛肋條、牛里肌、牛舌），不吃牛者享有豐盛厚切豚五花（豚カルビ）、豚里肌、阿波尾地雞、烤大蝦、扇貝與野菜盛合。全席禁煙寬敞沙發座、無煙烤爐吸力強、平板繁體中文點餐，7歲小學生半價且聖代甜點無限續，全家聚餐滿分！',
    priceRange: '¥4000-5000（小學生半價）',
    source: '關西燒肉名門',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=あぶりや+道頓堀御堂筋店',
    tagEmoji: '🥩'
  },

  // --- 老辣妹 心齋橋 / 美國村 / 道頓堀 美食推薦 ---
  {
    name: 'たこ焼き道楽わなか 道頓堀店',
    category: '章魚燒',
    rating: 4.5,
    location: '道頓堀（近千日前）',
    area: '大阪',
    recommendation: '【老辣妹推薦】心齋橋必吃美食！外皮酥脆內餡滾燙軟嫩、章魚塊超大顆。老辣妹私心大推「鹽味」（無醬油無美乃滋，純鹽最能吃出高湯與章魚的鮮甜原味）以及「蔥花柚子醋」（ねぎポンず，清爽微酸解膩）。',
    priceRange: '¥500-800',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/E8NtDNyfLCNoFnwp9',
    tagEmoji: '🐙'
  },
  {
    name: '元祖アイスドッグ (元祖冰淇淋熱狗)',
    category: '街頭甜點',
    rating: 4.4,
    location: '美國村（三角公園旁）',
    area: '大阪',
    recommendation: '【老辣妹推薦】心齋橋必做六件事之一！剛起鍋現炸金黃酥脆的熱騰騰熱狗麵包，中間切開擠入冰涼香濃的日本牛乳霜淇淋。「冰火交融」一口咬下外熱酥脆、內冰甜順口，帶小孩逛美國村必吃的超人氣銅板點心！',
    priceRange: '¥400-600',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/Xon9EZNVme3RxA6Z6',
    tagEmoji: '🍦'
  },
  {
    name: '牛たん炭火焼 吉次 鰻谷店',
    category: '炭火燒牛舌',
    rating: 4.6,
    location: '東心齋橋 鰻谷（法拉格飯店步行 2 分）',
    area: '大阪',
    recommendation: '【老辣妹推薦】老辣妹激推的隱藏版牛舌愛店！道地仙台炭火厚切牛舌，師傅大火現烤炭香四溢、外脆內嫩多汁，搭配清甜牛尾湯與麥飯簡直絕配。就在法拉格飯店旁鰻谷巷內，大人想吃頂級牛舌首選！（註：非牛同行者可選其他料理）。',
    priceRange: '¥2000-4000',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/vLsZFsSfAGS7N9SC7',
    tagEmoji: '🥩'
  },
  {
    name: '板前焼肉 一斗 東心斎橋店本館',
    category: '黑毛和牛燒肉',
    rating: 4.7,
    location: '東心齋橋（法拉格飯店步行 3 分）',
    area: '大阪',
    recommendation: '【老辣妹推薦】心齋橋吃過驚為天人的頂級黑毛和牛燒肉老店！冷藏未冷凍肉質極致鮮美，油花均勻如雪花、入口即化，獨門特調醬汁甘甜解膩，肉食愛好者必訪。（註：全牛燒肉名店）。',
    priceRange: '¥5000-10000',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/aWkwUimnjF7qU1WJ7',
    tagEmoji: '🔥'
  },

  // --- 老辣妹 心齋橋 / 道頓堀 串炸推薦 ---
  {
    name: '串かつだるま 心斎橋店 (小火車送餐・親子首選)',
    category: '元祖串炸・小火車送餐',
    rating: 4.5,
    location: '心齋橋筋（法拉格飯店步行 3 分）',
    area: '大阪',
    recommendation: '【老辣妹推薦・全關西最推親子分店】距離法拉格飯店走路只要 3 分鐘！全店 148 席空間超大、全席禁煙，設有大量舒適沙發卡座。最大亮點是點餐後由「軌道小火車」直接將現炸串炸高速送到桌邊，7 歲小孩超級興奮！食材豐富（炸大蝦、起司、鵪鶉蛋、蘆筍等非牛串炸海量），大人小孩都吃得舒適開心。',
    priceRange: '¥1000-2500',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=串かつだるま+心斎橋店',
    tagEmoji: '🚂'
  },

  // --- 老辣妹 新世界 / 西成 美食推薦 ---
  {
    name: '串かつだるま 通天閣店 (新世界桌位首選)',
    category: '元祖串炸・地標桌位',
    rating: 4.4,
    location: '新世界（通天閣正下方）',
    area: '大阪',
    recommendation: '【老辣妹推薦・新世界桌位首選】就在通天閣地標正下方！比狹窄的總本店寬敞許多（54 席，含多組 4 人桌位），全席禁煙。有推車或帶小孩想在新世界朝聖元祖串炸，強烈建議直接走來通天閣店，不用擠在 12 席高腳吧台，用餐體驗舒服太多！',
    priceRange: '¥1000-2000',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=串かつだるま+通天閣店',
    tagEmoji: '🗼'
  },
  {
    name: '串かつだるま 新世界総本店',
    category: '元祖串炸・創始總店',
    rating: 4.3,
    location: '新世界 / 鏘鏘橫丁',
    area: '大阪',
    recommendation: '【老辣妹推薦・創始總本店】大阪串炸創始發源總本店！麵衣極致細緻薄脆、完全不油膩。店內除了牛肉串，有海量非牛串炸（炸大蝦、鵪鶉蛋、蘆筍、起司、蓮藕等）。【注意】：總本店全店僅 12 席高腳吧台、走道極窄無桌位，帶小孩建議前往通天閣店或心齋橋店。',
    priceRange: '¥1000-2000',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/A6XS5jRcYhn3K1d9A',
    tagEmoji: '🍢'
  },
  {
    name: '鉄板焼ホルモン やまき',
    category: '在地鐵板燒',
    rating: 4.5,
    location: '西成區（今池站旁）',
    area: '大阪',
    recommendation: '【老辣妹推薦】大阪西成傳奇鐵板燒！大鐵板上現炒豬內臟與特製蒜味秘醬，香氣四溢、在地庶民氛圍濃厚，排隊人潮絡繹不絕的庶民美食。',
    priceRange: '¥500-1500',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/WQyHMKYDRNKak1mr9',
    tagEmoji: '🥘'
  },

  // --- 老辣妹 天滿 / 天神橋筋 美食推薦 ---
  {
    name: '西洋茶館 (British Tea House)',
    category: '英倫復古喫茶',
    rating: 4.6,
    location: '天神橋筋商店街 / 扇町',
    area: '大阪',
    recommendation: '【老辣妹推薦】天滿超唯美的古典英式喫茶店！宛如走入歐洲老電影，店內手工現做戚風蛋糕、草莓鮮奶油蛋糕與英式下午茶現泡伯爵紅茶極具水準，逛天神橋筋或大阪天滿宮後最棒的優雅下午茶小憩點。',
    priceRange: '¥800-1500',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/QLnYCC9ygndX8CRk7',
    tagEmoji: '☕'
  },
  {
    name: '鳴門鯛焼本舗 天神橋3丁目店',
    category: '傳統鯛魚燒',
    rating: 4.4,
    location: '天神橋筋 3 丁目',
    area: '大阪',
    recommendation: '【老辣妹推薦】遵循古法「天然一丁燒」（一次只烤一隻）的職人鯛魚燒！外皮薄脆酥香、內餡飽滿滾燙。大推十勝紅豆與鳴門金時地瓜口味，冬天吃一口熱呼呼超幸福！',
    priceRange: '¥250-400',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/8AoB6YWJTZXGfju26',
    tagEmoji: '🐟'
  },
  {
    name: '千鳥屋宗家 天滿店',
    category: '和菓子伴手禮',
    rating: 4.3,
    location: '天神橋筋',
    area: '大阪',
    recommendation: '【老辣妹推薦】創業於寬永七年的關西百年和菓子名店！招牌本千鳥饅頭（皮薄餡香白豆沙）、黑豆茶與千鳥酥，是大阪在地人買傳統伴手禮的經典選擇。',
    priceRange: '¥500-1500',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/sco9Hw4QH9hhM1Xv7',
    tagEmoji: '🍡'
  },
  {
    name: '和牛タン次郎 大阪天満店',
    category: '和牛牛舌放題',
    rating: 4.5,
    location: '天滿',
    area: '大阪',
    recommendation: '【老辣妹推薦】天滿超高人氣的和牛牛舌燒肉吃到飽！厚切蔥鹽牛舌、牛舌壽司等各種牛舌料理一次滿足，肉質鮮甜厚實。（註：全牛專門店）。',
    priceRange: '¥4000-7000',
    source: '老辣妹推薦',
    googleMapsUrl: 'https://maps.app.goo.gl/Sdk1xYRX5LTQSnE76',
    tagEmoji: '🥩'
  },

  // --- 經典親子與不吃牛人氣美食 ---
  {
    name: '美美卯 心齋橋店 (美々卯 Mimiu)',
    category: '名物海鮮烏龍壽喜鍋',
    rating: 4.6,
    location: '心齋橋日航酒店 B2（心齋橋站 8 號出口直通・步行 6 分）',
    area: '大阪',
    recommendation: '【大阪 200 年名物・全家不吃牛暖胃首選】宮內廳御用名物「うどんすき (Udon-suki)」烏龍壽喜鍋創始老店！以頂級宗田節柴魚與北海道昆布高湯為底，煮活大蝦、鮮雞肉、蛤蜊、鯛魚、里芋與手工粗烏龍麵。湯頭極致甘甜，完全不含牛肉，7歲小孩與長輩都超愛！',
    priceRange: '¥4000-6000',
    source: '大阪百年名物',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=美々卯+心斎橋店',
    tagEmoji: '🍲'
  },
  {
    name: 'しゃぶ亭 心齋橋本店 (Shabu-Tei)',
    category: '特選黑豬涮涮鍋・一人一鍋',
    rating: 4.5,
    location: '心齋橋筋 1-4-11（法拉格飯店步行 3 分）',
    area: '大阪',
    recommendation: '【50年黑豬肉涮涮鍋老店・雪地歸來暖胃首選】距離飯店僅 3 分鐘！一人一專屬銅鍋，日本產六白黑豬肉片甘甜無腥味。搭配石臼現磨 22 種辛香秘傳胡麻醬、豐富時令蔬菜、手工年糕、烏龍麵與冰淇淋，個人鍋自己煮超自在，非牛家庭第一推！',
    priceRange: '¥1800-2800',
    source: '心齋橋老字號',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=しゃぶ亭+心斎橋本店',
    tagEmoji: '🥩'
  },
  {
    name: '手打うどん 吾妻 (Azuma)',
    category: '160年手打細烏龍麵',
    rating: 4.6,
    location: '大阪府池田市西本町9-29（泡麵博物館步行 6 分）',
    area: '大阪',
    recommendation: '【大阪最古老烏龍麵・1864年創業】日本大文豪谷崎潤一郎也著迷的名物！招牌「ささめうどん」細滑如絲又帶嚼勁，搭配滾燙濃郁的柴魚昆布勾芡高湯、生薑與炸天婦羅花，再加一碗香噴噴的「什錦炊飯（かやくご飯）」，完全不含牛肉，冬天吃一口滿滿幸福感！',
    priceRange: '¥700-1200',
    source: '大阪百年老鋪',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=手打うどん+吾妻+池田',
    tagEmoji: '🍜'
  },
  {
    name: '名代炸豬排 Katsukura (Porta / 四條寺町)',
    category: '炸豬排定食',
    rating: 4.6,
    location: '京都車站 Porta / 四條寺町',
    area: '京都',
    recommendation: '京都發源第一名炸豬排！酥脆三元豬豬排、大炸蝦定食，無限續加的高麗菜絲與燕麥飯，不吃牛必吃家庭首選。',
    priceRange: '¥1500-2500',
    tagEmoji: '🐷'
  },
  {
    name: '道頓堀 今井 本店',
    category: '烏龍麵・高湯名店',
    rating: 4.5,
    location: '道頓堀（法善寺附近）',
    area: '大阪',
    recommendation: '大阪烏龍麵的極致天花板！北海道天然昆布高湯甘甜醇厚，招牌豆皮烏龍麵豆皮厚實多汁，親子用餐溫暖舒服。',
    priceRange: '¥900-1800',
    tagEmoji: '🍜'
  },
  {
    name: '北極星蛋包飯 (心齋橋本店)',
    category: '蛋包飯創始店',
    rating: 4.4,
    location: '西心齋橋（美國村旁）',
    area: '大阪',
    recommendation: '日本蛋包飯百年創始本店！保留傳統日式榻榻米庭園建築，滑嫩金黃蛋皮包裹雞肉/蘑菇/鮮蝦炒飯，小孩吃得開心又安心。',
    priceRange: '¥1000-1800',
    tagEmoji: '🍳'
  },
  {
    name: 'どうとんぼり神座 京都ポルタ店 (Kamukura 神座拉麵)',
    category: '大白菜高湯拉麵・親子首選',
    rating: 4.5,
    location: '京都車站 Porta 地下街 西區（離飯店步行約 4 分鐘）',
    area: '京都',
    recommendation: '【京都車站親子拉麵首選 No.1】走地下連通道直達免吹風！秘傳法式清甜醬油高湯＋滿滿脆甜大白菜與薄切豬肉片，清爽甘甜完全不油膩、完全不吃牛，天然蔬菜甜味連 7 歲小孩都把整碗喝光！店內有寬敞舒適的沙發卡座，天冷吹完風吃這碗超暖心。',
    priceRange: '¥850-1300',
    source: 'Porta地下街名店',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=どうとんぼり神座+京都ポルタ店',
    tagEmoji: '🍜'
  },
  {
    name: '% Arabica 嵐山',
    category: '精品咖啡',
    rating: 4.5,
    location: '京都嵐山',
    area: '京都',
    recommendation: '面對渡月橋的絕美咖啡店，拿鐵拉花精緻。嵐山限定杯也很值得收藏。',
    priceRange: '¥450-650',
    tagEmoji: '☕'
  },
  {
    name: '八重勝 (Yaekatsu)',
    category: '老字號串炸',
    rating: 4.4,
    location: '新世界 (鏘鏘橫丁)',
    area: '大阪',
    recommendation: '當地人也大推的超人氣串炸老店！外皮薄脆不油膩，食材新鮮。炸蝦和鵪鶉蛋是必點，牛筋燉煮也非常入味。',
    priceRange: '¥1000-2000',
    tagEmoji: '🍢'
  },
  {
    name: '551 蓬萊',
    category: '肉包・燒賣',
    rating: 4.6,
    location: '難波、天王寺等各店',
    area: '大阪',
    recommendation: '大阪第一名的肉包！皮薄餡多、肉汁飽滿。冬天吃熱騰騰的肉包超幸福。也有燒賣和餃子可以買。',
    priceRange: '¥200-500',
    tagEmoji: '🥟'
  },
  {
    name: 'りくろーおじさん (老爺爺起司蛋糕)',
    category: '現烤起司蛋糕',
    rating: 4.5,
    location: '難波本店 / 大丸心齋橋',
    area: '大阪',
    recommendation: '大阪人氣No.1 的起司蛋糕！剛出爐時搖晃的樣子超療癒。一個才 ¥965，CP 值超高。底部的葡萄乾是靈魂！',
    priceRange: '¥965',
    tagEmoji: '🧀'
  },
  {
    name: '夫婦善哉',
    category: '百年紅豆湯圓',
    rating: 4.1,
    location: '法善寺橫丁',
    area: '大阪',
    recommendation: '法善寺橫丁內的百年紅豆湯圓老店。特色是一人份分成兩碗，象徵夫婦圓滿。溫暖甜蜜的好味道。',
    priceRange: '¥800',
    tagEmoji: '🍵'
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
  {
    id: 'workman_colors_kyoto',
    name: 'Workman Colors イオンモール KYOTO 店',
    japaneseName: 'ワークマンカラーズ イオンモールKYOTO店',
    city: '京都',
    zone: '京都車站八條口',
    brands: ['WORKMAN Colors', 'WORKMAN Plus', '#ワークマン女子', 'WORKMAN Shoes', 'FLAME-TECH', 'AERO STRETCH'],
    styleCategory: '日本國民機能神店・極致CP值防風防水風衣・健走鞋・露營戶外休閒・超輕防撕裂工裝',
    floorInfo: 'AEON MALL KYOTO Sakura館 3F',
    address: '京都府京都市南区西九条鳥居口町1 イオンモールKYOTO 3F',
    walkingTimeFromHotel: 'Hotel Vischio Kyoto 步行僅約 5-6 分鐘（約 450 公尺）',
    howToFind: '從 Hotel Vischio 往西走穿過八條通，即達大型購物中心「AEON MALL KYOTO」，搭乘手扶梯上 3 樓 Sakura 館即可見到寬敞明亮的 Workman Colors 門市。',
    theShortyTip: '【全日本瘋搶的平價機能天花板】徹底顛覆傳統工裝！男女休閒風衣、防風防暴雨外套只要 ¥2,900~¥3,900（台幣幾百元！），防潑水健走鞋 ¥1,900 好穿又耐磨。童裝區有防污耐髒小外套，弄髒完全不心痛！飯店步行 5 分鐘、營業至 21:00，Day 1 與 Day 2 晚間散步補貨首選！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Workman+Colors+イオンモールKYOTO店+京都府京都市南区西九条鳥居口町1',
    openingHours: '10:00 - 21:00',
    tagEmoji: '🧥'
  },
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
    id: 'carhartt_wip_osaka',
    name: 'Carhartt WIP Osaka（日本限定工裝大本營）',
    japaneseName: 'カーハート ダブリュー アイ ピー 大阪',
    city: '大阪',
    zone: '堀江橘子街',
    brands: ['Carhartt WIP (Work In Progress)', 'Carhartt WIP × 日本限定聯名', 'Carhartt WIP Accessories'],
    styleCategory: '百年美式工裝品牌潮流版・日本限定款・機能帆布外套',
    floorInfo: '1F 獨棟街邊門市',
    address: '大阪府大阪市西区南堀江1-16-1',
    walkingTimeFromHotel: '步行約 10 分鐘（SORA 堀江步行 3-5 分鐘）',
    howToFind: '南堀江橘子街商圈內，SORA 往西步行 3~5 分鐘，Carhartt WIP 黑色標誌門面極為醒目。',
    theShortyTip: '【百年工裝的街頭進化】Carhartt WIP 是 Carhartt 工裝美學融入街頭潮流的精髓！日本限定帆布工裝外套、牛仔褲與配件在台灣買不到的限定配色，堀江直接一站購足！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carhartt+WIP+Osaka',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🔨'
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
    theShortyTip: '【省時動線】1F HUMAN MADE 經常有限定款 T 恤與配件；逛完順路搭手扶梯直達 2F BEAMS、3F STUDIOUS 與 9F Fueki 專賣店。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shinsaibashi+PARCO',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🛍️'
  },
  {
    id: 'fueki_shop_parco',
    name: 'フエキショップ (Fueki Shop 心齋橋 PARCO 9F)',
    japaneseName: 'フエキショップ 心斎橋PARCO 9階',
    city: '大阪',
    zone: '心齋橋大丸/PARCO',
    brands: ['Fueki (不易糊國寶小狗)', 'Fueki 聯名彩妝保養', 'Fueki 自助霜淇淋機', 'Fueki 限定文具公仔'],
    styleCategory: '日本百年經典黃色小狗不易糊主題旗艦店・親子同樂・超萌伴手禮',
    floorInfo: '心齋橋 PARCO 9F（東急 Hands / 動漫樓層旁）',
    address: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO 9F',
    walkingTimeFromHotel: '步行約 3 分鐘（PARCO 9 樓）',
    howToFind: '搭乘心齋橋 PARCO 電梯直達 9 樓，整片亮黃色復古小狗 Fueki 佈景與巨型公仔極度吸睛！',
    theShortyTip: '【老辣妹推薦！心齋橋必做六件事】日本家喻戶曉的黃色小狗 Fueki 不易糊主題專賣店！店內最大亮點是「Fueki 自助霜淇淋機」，買杯子後可以親手操作機器擠出超萌的 Fueki 霜淇淋！還有小狗造型護手霜、保濕霜、文具扭蛋與吊飾，大人小孩都超愛！',
    googleMapsUrl: 'https://maps.app.goo.gl/3cza6D34HY7oLPNH8',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🐶'
  },

  // --- Zone 3.5: 美國村古著潮流（Americamura）老辣妹推薦 ---
  {
    id: 'wego_vintage_americamura',
    name: 'WEGO VINTAGE アメリカ村店 (超大海量美式古著)',
    japaneseName: 'ウィゴー ヴィンテージ アメリカ村店',
    city: '大阪',
    zone: '美國村/心齋橋',
    brands: ['WEGO VINTAGE', '美式二手古著', '復古樂團T恤', 'Remake重製服飾', '工裝襯衫與外套'],
    styleCategory: '平價海量日系美式古著・Y2K街頭・超大挖寶空間',
    floorInfo: '1F-2F 獨立概念門市',
    address: '大阪府大阪市中央区西心斎橋1-16-8',
    walkingTimeFromHotel: '步行約 6 分鐘（過御堂筋往西進入美國村）',
    howToFind: '位於美國村三角公園旁熱鬧街區，醒目的 WEGO VINTAGE 霓虹招牌與門口滿滿特價古著衣架，辨識度極高。',
    theShortyTip: '【老辣妹推薦！心齋橋必做六件事】WEGO 專門打造的超大型古著挖寶概念店！海量美式二手古著、復古運動外套、樂團 T-shirt 與美式工裝，價格非常親民（¥1,500~4,000 為主），很適合想體驗日本古著挖寶的人！',
    googleMapsUrl: 'https://maps.app.goo.gl/UkoodnhRcu6e3JXj9',
    openingHours: '11:00 - 20:00',
    tagEmoji: '👕'
  },
  {
    id: 'spinns_americamura',
    name: 'SPINNS アメリカ村店 (日系年輕平價潮流・飾品配件海)',
    japaneseName: 'スピンズ アメリカ村店',
    city: '大阪',
    zone: '美國村/心齋橋',
    brands: ['SPINNS', '日系街頭原創服飾', '美式古著專區', '平價潮流配件飾品', '動漫聯名小物'],
    styleCategory: '日本高校生人氣平價潮流・原宿街頭 Y2K・飾品配件海',
    floorInfo: '1F-2F 寬敞街邊門市',
    address: '大阪府大阪市中央区西心斎橋2-11-30 2F',
    walkingTimeFromHotel: '步行約 7 分鐘（三角公園往南步行 1 分鐘）',
    howToFind: '美國村主要十字路口附近，色彩繽紛的 SPINNS 招牌，沿著階梯走入充滿年輕活力的流行空間。',
    theShortyTip: '【老辣妹推薦】年輕潮流必逛！結合了日系平價原創服飾、古著專區與超多百元平價飾品、帽子、墨鏡與潮流襪子。價格親切好入手，帶年輕朋友或小孩逛配件超好買！',
    googleMapsUrl: 'https://maps.app.goo.gl/9hDrzHX6p7QqcxxS8',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🧢'
  },

  // --- Zone 4: 梅田商圈（Umeda）一隻阿圓爆買推薦 ---
  {
    id: 'lucua_osaka',
    name: 'LUCUA 1100 & LUCUA osaka (阿圓激推 No.1 百貨・日牌旗艦集中地)',
    japaneseName: 'ルクア大阪 / ルクア イーレ',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['FREAK\'S STORE (7F・NAUTICA JP)', 'THE NORTH FACE+ (LUCUA 1100 6F・紫標專區)', 'BEAMS (3F)', 'Bshop (4F)', 'Maison Kitsuné', '蔦屋書店 (9F)'],
    styleCategory: '一隻阿圓激推大阪最好買百貨・男女裝美妝雜貨一次買爆・JR直通',
    floorInfo: 'JR 大阪站直通連通棟 (B2~10F)',
    address: '大阪府大阪市北区梅田3-1-3',
    walkingTimeFromHotel: '心齋橋站搭御堂筋線 3 站（約 6 分鐘）直達梅田站（地下連通）',
    howToFind: '御堂筋線梅田站或 JR 大阪站出剪票口，跟隨「LUCUA」指標走地下通道直達，雨天推嬰兒車全程免淋雨！LUCUA（東館）與 LUCUA 1100（西館）兩棟在各樓層均有室內連通。',
    theShortyTip: '【日牌神殿＋阿圓激推 No.1 百貨】7F 有超大 FREAK\'S STORE（NAUTICA JP 專區超齊）、6F 有 THE NORTH FACE+ 關西旗艦店（日本限定紫標 Purple Label 工裝神褲）、3F BEAMS；9 樓有超美蔦屋書店與星巴克可以歇腳喝咖啡，推車動線極寬敞。',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=LUCUA+osaka',
    openingHours: '10:30 - 20:30',
    tagEmoji: '🌟'
  },
  {
    id: 'hankyu_umeda',
    name: '阪急百貨 梅田總店 (3F The Row 旗艦專櫃 ＆ B1 神級伴手禮)',
    japaneseName: '阪急うめだ本店',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['The Row (3F 頂級專櫃・Margaux / Park Tote / 樂福鞋)', 'ÉCHIRÉ (艾許奶油餅乾)', 'Bâton d\'or (高級Pocky)', '日本頂級美妝專櫃', '精品名牌服飾'],
    styleCategory: '西日本最大旗艦百貨・3F The Row 頂級靜奢專櫃・神級 B1/B2 甜點伴手禮天堂',
    floorInfo: 'B2~13F 旗艦百貨（3F The Row / B1 伴手禮）',
    address: '大阪府大阪市北区角田町8-7',
    walkingTimeFromHotel: '御堂筋線梅田站步行 2 分鐘（地下道直通）',
    howToFind: '梅田地下街認「阪急百貨」巨大挑高大廳與華麗櫥窗，搭乘電梯直上 3 樓國際設計師專區可見 The Row 專櫃，下樓直通 B1 伴手禮街。',
    theShortyTip: '【The Row 頂級專櫃＋伴手禮天花板】3 樓有全關西款式最齊的 The Row 官方專櫃，可親自試揹神級 Margaux、Park Tote 與極簡樂福鞋；B1/B2 地下街聚集全日本最頂級限定甜點，ÉCHIRÉ 奶油餅乾必買，送禮自用超體面！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hankyu+Department+Store+Umeda',
    openingHours: '10:00 - 20:00',
    tagEmoji: '🍰'
  },
  {
    id: 'hep_five',
    name: 'HEP FIVE (Carhartt WIP 直營 ＆ 地標紅色摩天輪)',
    japaneseName: 'ヘップファイブ',
    city: '大阪',
    zone: '梅田商圈',
    brands: ['Carhartt WIP Store (5F 直營店)', 'BEAMS STREET (1F)', 'WEGO', 'RED FERRIS WHEEL (7F 紅色摩天輪)'],
    styleCategory: 'Carhartt WIP 直營・年輕流行潮流・地標紅色摩天輪',
    floorInfo: '1F~8F 潮流商場（5F Carhartt / 7F 摩天輪）',
    address: '大阪府大阪市北区角田町5-15',
    walkingTimeFromHotel: '御堂筋線梅田站步行 3 分鐘',
    howToFind: '走出梅田站往東看，醒目的「紅色巨大摩天輪」建築即是 HEP FIVE。',
    theShortyTip: '【Carhartt 直營店＋摩天輪夜景】5F 有 Carhartt WIP 梅田官方直營店，販售日本限定帆布工裝夾克、牛仔寬褲與配件；7F 搭乘地標紅色巨大摩天輪，俯瞰梅田百萬夜景超享受！',
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
    id: 'sousou_kyoto',
    name: 'SOU・SOU 京都總部聚落 (SOU・SOU 村)',
    japaneseName: 'ソウソウ 京都本店',
    city: '京都',
    zone: '京都四條河原町/新京極',
    brands: ['SOU・SOU (全球總部聚落)', 'SOU・SOU 足袋 (分趾鞋/襪)', 'SOU・SOU わらべぎ (童裝)', 'SOU・SOU 布袋 (口金包/托特包)', 'SOU・SOU 著衣/傾衣 (男女服飾)', 'SOU・SOU 在茶寮 (和菓子)'],
    styleCategory: '京都發源國寶級和風設計・招牌彩色數字・分趾鞋・超萌童裝與日系生活雜貨',
    floorInfo: '新京極通巷內一整條街區獨立主題門市聚落',
    address: '京都府京都市中京区新京極通四条上ル中之町565-72',
    walkingTimeFromHotel: '從 THE NORTH FACE STANDARD 往南步行約 4 分鐘 / 阪急河原町站步行 2 分鐘',
    howToFind: '四條河原町新京極通商店街巷弄內，整條小巷聚集了 SOU・SOU 各主題門市（足袋、童裝、布袋、服飾），沿著白色布簾與十數圖騰極好認。',
    theShortyTip: '【全球唯一 SOU・SOU 街區大本營】京都最具代表性的現代和風品牌！整條巷子都是 SOU・SOU 村：招牌彩色數字分趾襪、十數口金包是送禮自用首選；家有小孩必逛「わらべぎ童裝館」，小浴衣與斗篷可愛到融化！',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SOU+SOU+Kyoto+Main+Shop',
    openingHours: '11:00 - 20:00',
    tagEmoji: '🌸'
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


