import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, MapPin, Utensils, Info, Clock, Navigation, CheckCircle2,
  Bus, Train, Heart, Baby, ExternalLink, Star, Snowflake, Ticket,
  Lightbulb, ChevronRight, Plane, AlertTriangle, Zap, Target, Store,
  Building2, Phone, Sparkles, Footprints, ShieldCheck, BedDouble,
  Coffee, Compass, Copy, Check, ShoppingBag, Tag, Search, SlidersHorizontal,
  Map, Sparkle
} from 'lucide-react';
import { useState } from 'react';
import {
  ITINERARY, ESSENTIAL_INFO, RESTAURANTS, TRANSPORT_INFO,
  TRIP_INFO, QUEUE_STRATEGIES, HOTELS, SHOPPING_SPOTS
} from './constants';
import { HotelInfo, ShoppingSpot } from './types';

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  green: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
};

const DAY_EMOJIS = ['🚄', '⛩️', '🌊', '🛍️', '⛷️', '🐋', '✈️'];

function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'hotels' | 'shopping' | 'strategy' | 'food' | 'info'>('itinerary');
  const [activeDay, setActiveDay] = useState(1);
  const [selectedHotelId, setSelectedHotelId] = useState<string>('vischio_kyoto');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{ url: string; caption: string } | null>(null);
  const [shoppingCityFilter, setShoppingCityFilter] = useState<'ALL' | '大阪' | '京都'>('ALL');
  const [shoppingZoneFilter, setShoppingZoneFilter] = useState<string>('ALL');
  const [shoppingSearch, setShoppingSearch] = useState<string>('');
  const [selectedRoute, setSelectedRoute] = useState<'osaka_loop' | 'umeda_blast' | 'kyoto_dig'>('osaka_loop');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const currentDay = ITINERARY.find((d) => d.day === activeDay);
  const currentDayHotel = currentDay?.hotelId ? HOTELS.find(h => h.id === currentDay.hotelId) : null;
  const tagStyle = currentDay ? TAG_COLORS[currentDay.tagColor] || TAG_COLORS.pink : TAG_COLORS.pink;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const selectedHotel = HOTELS.find(h => h.id === selectedHotelId) || HOTELS[0];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-24 md:pb-8">
      {/* Header */}
      <header className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-400 py-8 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 blur-xl" />
        <div className="absolute top-1/2 right-8 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl" />

        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-white/30">
                <Baby className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white drop-shadow-sm">
                  {TRIP_INFO.title}
                </h1>
                <p className="text-white/80 text-sm font-semibold mt-0.5">{TRIP_INFO.subtitle}</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/30 flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">{TRIP_INFO.season}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            <div className="bg-white/20 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">{TRIP_INFO.dateRange}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <Plane className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">{TRIP_INFO.flights?.outbound}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <Plane className="w-4 h-4 text-white transform rotate-180" />
              <span className="text-xs font-bold text-white">{TRIP_INFO.flights?.inbound}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">{TRIP_INFO.note}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-stone-200 sticky top-0 bg-white z-40 px-4 shadow-sm">
          {[
            { id: 'itinerary', label: '每日行程', icon: Calendar },
            { id: 'hotels', label: '住宿路線', icon: Building2 },
            { id: 'shopping', label: '日潮選物', icon: ShoppingBag },
            { id: 'strategy', label: '排隊攻略', icon: Target },
            { id: 'food', label: '美食推薦', icon: Utensils },
            { id: 'info', label: '實用資訊', icon: Info },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 whitespace-nowrap py-4 px-5 text-sm transition-all border-b-[3px] ${
                activeTab === tab.id
                  ? 'border-rose-500 text-rose-600 font-bold'
                  : 'border-transparent text-stone-400 hover:text-rose-400'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 md:p-6">
          <AnimatePresence mode="wait">
            {/* ===================== TAB: ITINERARY ===================== */}
            {activeTab === 'itinerary' && (
              <motion.div key="itinerary" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
                {/* Day Selector */}
                <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
                  {ITINERARY.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setActiveDay(day.day)}
                      className={`flex-1 min-w-[72px] py-3 px-2 rounded-2xl flex flex-col items-center transition-all border ${
                        activeDay === day.day
                          ? 'bg-gradient-to-br from-rose-500 to-pink-500 border-rose-500 text-white shadow-lg shadow-rose-200'
                          : 'bg-white border-stone-100 text-stone-400 hover:border-rose-200 hover:text-rose-400'
                      }`}
                    >
                      <span className="text-lg mb-0.5">{DAY_EMOJIS[day.day - 1] || '✨'}</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider mb-0.5">Day</span>
                      <span className="text-lg font-black leading-none">{day.day}</span>
                    </button>
                  ))}
                </div>

                {/* Day Header */}
                {currentDay && (
                  <motion.div key={activeDay} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-1.5 h-8 bg-gradient-to-b from-rose-500 to-pink-400 rounded-full" />
                      <div className="flex-1">
                        <h2 className="text-2xl font-black text-stone-900 leading-none mb-2">
                          Day {currentDay.day} 總覽
                        </h2>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${tagStyle.bg} ${tagStyle.text} ${tagStyle.border}`}>
                            {currentDay.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Dashboard Grid */}
                {currentDay && (
                  <motion.div key={`grid-${activeDay}`} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Highlight Card */}
                    <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-5 border border-blue-100 shadow-sm relative overflow-hidden">
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg"><Zap className="w-5 h-5 text-blue-600" /></div>
                        <h3 className="font-bold text-blue-900 text-lg">今日行程亮點</h3>
                      </div>
                      <p className="text-blue-800 leading-relaxed whitespace-pre-wrap">{currentDay.highlights}</p>
                    </motion.div>

                    {/* Schedule Card - Beautified Timeline */}
                    <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-stone-100">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2.5 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl text-white shadow-md shadow-rose-500/20">
                            <Clock className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-black text-stone-900 text-lg sm:text-xl">
                              當日時間安排與流暢動線
                            </h3>
                            <p className="text-xs text-stone-500 font-medium">按時間推進・清晰節點與避排隊提示</p>
                          </div>
                        </div>
                        <span className="self-start sm:self-center bg-stone-100 text-stone-700 text-xs font-bold px-3 py-1 rounded-full border border-stone-200 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          共 {currentDay.schedule.split(/\r?\n/).filter(l => l.trim().length > 0).length} 個行程時段
                        </span>
                      </div>

                      {/* Interactive Time Nodes */}
                      <div className="relative pl-6 sm:pl-8 space-y-3.5 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-rose-500 before:via-pink-400 before:to-emerald-400">
                        {currentDay.schedule.split(/\r?\n/).filter(line => line.trim().length > 0).map((line, idx) => {
                          const timeMatch = line.match(/^(\d{1,2}:\d{2}(?:[–-]\d{1,2}:\d{2})?|早上|上午|中午|下午|傍晚|晚上|抵達後|約\d{1,2}:\d{2})/);
                          const time = timeMatch ? timeMatch[1] : null;
                          let content = timeMatch ? line.slice(timeMatch[0].length).trim() : line.replace(/^[→\-•]\s*/, '').trim();

                          const tagMatch = content.match(/^【([^】]+)】/);
                          const tag = tagMatch ? tagMatch[1] : null;
                          if (tag) {
                            content = content.slice(tagMatch[0].length).trim();
                          }

                          return (
                            <div key={idx} className="relative flex items-start gap-3 group">
                              {/* Node Circle */}
                              <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white border-2 border-rose-500 shadow-sm flex items-center justify-center group-hover:scale-125 group-hover:border-pink-600 transition-all z-10">
                                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose-500 group-hover:bg-pink-600 transition-colors" />
                              </div>

                              {/* Content Card */}
                              <div className="flex-1 bg-stone-50/90 hover:bg-rose-50/50 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-stone-200/80 hover:border-rose-200 transition-all shadow-xs">
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  {time && (
                                    <span className="bg-stone-900 text-amber-300 text-[11px] sm:text-xs font-black px-2.5 py-0.5 rounded-lg flex items-center gap-1 shadow-xs tracking-wide">
                                      <Clock className="w-3 h-3 text-amber-400" />
                                      {time}
                                    </span>
                                  )}
                                  {tag && (
                                    <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-0.5 rounded-lg border shadow-2xs ${
                                      tag.includes('地點')
                                        ? 'bg-rose-500 text-white border-rose-600'
                                        : tag.includes('放戰利品') || tag.includes('卸貨') || tag.includes('飯店')
                                        ? 'bg-purple-600 text-white border-purple-700'
                                        : 'bg-indigo-600 text-white border-indigo-700'
                                    }`}>
                                      {tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs sm:text-sm font-bold text-stone-800 leading-relaxed">
                                  {content}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Transport Card */}
                    <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-stone-100 rounded-lg"><Train className="w-5 h-5 text-stone-600" /></div>
                        <h3 className="font-bold text-stone-900 text-lg">交通方式</h3>
                      </div>
                      <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">{currentDay.transport}</p>
                      {currentDay.transportDetails && (
                        <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
                          <div className="flex items-start gap-2">
                            <Ticket className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-bold text-stone-700">票價：</span>
                              <span className="text-stone-600">{currentDay.transportDetails.price}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Store className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div className="text-sm">
                              <span className="font-bold text-stone-700">購票：</span>
                              <span className="text-stone-600">{currentDay.transportDetails.whereToBuy}</span>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                            <div className="text-sm w-full">
                              <span className="font-bold text-stone-700">推薦時刻表：</span>
                              <ul className="mt-1 space-y-1">
                                {currentDay.transportDetails.scheduleOptions.map((opt, idx) => (
                                  <li key={idx} className="text-stone-600 bg-stone-50 px-2 py-1 rounded text-xs border border-stone-100">{opt}</li>
                                ))}
                              </ul>
                              {currentDay.transportDetails.note && (
                                <p className="mt-2 text-xs text-amber-700 bg-amber-50 p-2 rounded border border-amber-100">{currentDay.transportDetails.note}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Accommodation Quick Card */}
                    {currentDayHotel && (
                      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-2xl p-5 border border-purple-100 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex items-start gap-3.5">
                            <img
                              src={currentDayHotel.coverImage}
                              alt={currentDayHotel.name}
                              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-purple-200 shrink-0 shadow-sm cursor-pointer"
                              onClick={() => setPreviewImage({ url: currentDayHotel.coverImage, caption: currentDayHotel.name })}
                            />
                            <div>
                              <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="bg-purple-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                  <BedDouble className="w-3 h-3" /> 今日入住
                                </span>
                                {currentDayHotel.bookingNumber && (
                                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                                    編號 {currentDayHotel.bookingNumber}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-black text-stone-900 text-base sm:text-lg leading-snug">
                                {currentDayHotel.name}
                              </h3>
                              <p className="text-xs text-stone-500 font-medium mt-0.5">{currentDayHotel.stationExit}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setSelectedHotelId(currentDayHotel.id);
                              setActiveTab('hotels');
                            }}
                            className="bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors whitespace-nowrap self-stretch sm:self-center"
                          >
                            <span>查看詳細步行路線 & 照片</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Queue Tips Card */}
                    {currentDay.queueTips && (
                      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-2 bg-orange-100 rounded-lg"><AlertTriangle className="w-5 h-5 text-orange-600" /></div>
                          <h3 className="font-bold text-orange-900 text-lg">避開排隊提醒</h3>
                        </div>
                        <p className="text-orange-800 font-medium leading-relaxed whitespace-pre-wrap">{currentDay.queueTips}</p>
                      </motion.div>
                    )}

                    {/* Guide Card (Airport or other specific) */}
                    {currentDay.guide && (
                      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-6 border border-stone-700 shadow-lg text-white">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 bg-white/10 rounded-lg"><Navigation className="w-5 h-5 text-white" /></div>
                          <h3 className="font-bold text-white text-lg">{currentDay.guide.title}</h3>
                        </div>
                        <p className="text-stone-300 leading-relaxed mb-5">{currentDay.guide.description}</p>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-5">
                          <ul className="space-y-3">
                            {currentDay.guide.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-stone-200">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {currentDay.guide.images.map((img, idx) => (
                            <div
                              key={idx}
                              onClick={() => setPreviewImage({ url: img.url, caption: img.caption })}
                              className="rounded-xl overflow-hidden border border-white/10 bg-black/20 cursor-pointer group"
                            >
                              <img src={img.url} alt={img.caption} className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-300" />
                              <div className="p-2.5 text-xs text-center text-stone-300 font-medium">{img.caption}</div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Shopping Hub Quick Access Card (Day 4 & Day 7 for Osaka) */}
                    {(currentDay.day === 4 || currentDay.day === 7) && (
                      <motion.div
                        variants={itemVariants}
                        className="col-span-1 md:col-span-2 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-950 rounded-3xl p-5 sm:p-6 border border-rose-500/30 shadow-xl text-white relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full -ml-20 -mb-20 blur-3xl pointer-events-none" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="bg-rose-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> TheShorty & 一隻阿圓
                              </span>
                              <span className="bg-white/10 text-white/90 text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                                📍 大阪・心齋橋 ＆ 梅田商圈
                              </span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                              大阪 NANGA ＆ HUMAN MADE 潮流零折返路線 🛍️
                            </h3>
                            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                              已為您鎖定 SORA 堀江店（找 NANGA 聯名羽絨）、NANGA 旗艦店、HUMAN MADE（心齋橋 PARCO 1F）與 FREAK'S STORE（NAUTICA JP），標記精確地圖與無痛卸貨指引！
                            </p>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                            <button
                              onClick={() => {
                                setShoppingCityFilter('大阪');
                                setSelectedRoute('osaka_loop');
                                setActiveTab('shopping');
                              }}
                              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-rose-900/30 transition-all cursor-pointer"
                            >
                              <Navigation className="w-4 h-4" />
                              <span>查看大阪零折返動線</span>
                            </button>
                            <button
                              onClick={() => {
                                setShoppingCityFilter('大阪');
                                setShoppingZoneFilter('ALL');
                                setActiveTab('shopping');
                              }}
                              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                            >
                              <span>查看全部 18 家潮店</span>
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Child Card */}
                    <motion.div variants={itemVariants} className="bg-pink-50 rounded-2xl p-5 border border-pink-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-pink-100 rounded-lg"><Baby className="w-5 h-5 text-pink-600" /></div>
                        <h3 className="font-bold text-pink-900 text-lg">6歲小孩亮點</h3>
                      </div>
                      <p className="text-pink-800 leading-relaxed whitespace-pre-wrap">{currentDay.childHighlights}</p>
                    </motion.div>

                    {/* Food Card */}
                    <motion.div variants={itemVariants} className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-emerald-100 rounded-lg"><Utensils className="w-5 h-5 text-emerald-600" /></div>
                        <h3 className="font-bold text-emerald-900 text-lg">不吃牛美食建議</h3>
                      </div>
                      <p className="text-emerald-800 leading-relaxed whitespace-pre-wrap">{currentDay.food}</p>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ===================== TAB: HOTELS & ROUTES ===================== */}
            {activeTab === 'hotels' && (
              <motion.div key="hotels" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-rose-100 text-rose-600 text-xs font-black px-2.5 py-1 rounded-md">HOTEL GUIDE</span>
                    <h2 className="text-xl font-black text-stone-900">住宿與詳細圖文路線 🏨</h2>
                  </div>
                  <p className="text-stone-500 text-sm">點選切換京都與大阪住宿，查看無障礙步行指引、實景照片與設施亮點</p>
                </div>

                {/* Hotel Switcher Tabs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HOTELS.map((hotel) => (
                    <button
                      key={hotel.id}
                      onClick={() => setSelectedHotelId(hotel.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex items-center gap-3.5 ${
                        selectedHotelId === hotel.id
                          ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white border-rose-500 shadow-md shadow-rose-200'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300 hover:bg-stone-50'
                      }`}
                    >
                      <img
                        src={hotel.coverImage}
                        alt={hotel.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0 border border-white/30"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            selectedHotelId === hotel.id ? 'bg-white/20 text-white' : 'bg-rose-50 text-rose-600'
                          }`}>
                            {hotel.stayDuration}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm sm:text-base truncate">{hotel.name}</h4>
                        <p className={`text-xs truncate mt-0.5 ${selectedHotelId === hotel.id ? 'text-white/80' : 'text-stone-400'}`}>
                          {hotel.area}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Active Hotel Details Card */}
                {selectedHotel && (
                  <motion.div
                    key={selectedHotel.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Hotel Header Overview */}
                    <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm relative overflow-hidden">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-stone-100">
                        <div>
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="bg-emerald-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" /> 已預訂
                            </span>
                            {selectedHotel.bookingNumber && (
                              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                                行程編號：{selectedHotel.bookingNumber}
                              </span>
                            )}
                            <span className="bg-stone-100 text-stone-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                              {selectedHotel.area}
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-stone-900 leading-tight">
                            {selectedHotel.name}
                          </h3>
                          <p className="text-stone-400 text-sm font-medium mt-0.5">{selectedHotel.japaneseName}</p>
                          <div className="flex items-center gap-2 mt-3 text-xs font-bold text-stone-600">
                            <Clock className="w-4 h-4 text-rose-500 shrink-0" />
                            <span>入住：{selectedHotel.checkInDate} ｜ 退房：{selectedHotel.checkOutDate}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap sm:flex-nowrap gap-2.5">
                          <a
                            href={selectedHotel.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all"
                          >
                            <MapPin className="w-4 h-4" />
                            <span>Google 導航</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => handleCopy(selectedHotel.address, selectedHotel.id + '_addr')}
                            className="flex-1 sm:flex-none bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                          >
                            {copiedText === selectedHotel.id + '_addr' ? (
                              <>
                                <Check className="w-4 h-4 text-emerald-600" />
                                <span className="text-emerald-700">已複製地址</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                <span>複製日文地址</span>
                              </>
                            )}
                          </button>
                          <a
                            href={`tel:${selectedHotel.phone}`}
                            className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs px-3.5 py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all"
                          >
                            <Phone className="w-4 h-4" />
                            <span>撥打電話</span>
                          </a>
                        </div>
                      </div>

                      {/* Address Bar */}
                      <div className="mt-4 pt-1 flex items-start gap-2 text-xs text-stone-500">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{selectedHotel.address}</span>
                      </div>
                    </div>

                    {/* Real Photos Gallery */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-rose-500" />
                        <h4 className="font-bold text-stone-900 text-base">實景照片導覽</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                          onClick={() => setPreviewImage({ url: selectedHotel.coverImage, caption: `${selectedHotel.name} - 飯店門口外觀` })}
                          className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer group"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                            <img
                              src={selectedHotel.coverImage}
                              alt="飯店門口外觀"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-rose-300" />
                              <span>飯店門口外觀實景</span>
                            </div>
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              點擊放大檢視 🔍
                            </div>
                          </div>
                          <div className="p-3.5 bg-white text-xs font-bold text-stone-700 flex items-center justify-between">
                            <span>🏨 {selectedHotel.name} 外觀入口</span>
                            <span className="text-stone-400 font-normal">實景指引</span>
                          </div>
                        </div>

                        <div
                          onClick={() => setPreviewImage({ url: selectedHotel.routeImage, caption: `${selectedHotel.name} - 步行路線街景` })}
                          className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm cursor-pointer group"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                            <img
                              src={selectedHotel.routeImage}
                              alt="車站與街角路線指引"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                              <Compass className="w-3.5 h-3.5 text-amber-300" />
                              <span>車站周邊與街角路線指引</span>
                            </div>
                            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              點擊放大檢視 🔍
                            </div>
                          </div>
                          <div className="p-3.5 bg-white text-xs font-bold text-stone-700 flex items-center justify-between">
                            <span>🚶 {selectedHotel.stationExit}</span>
                            <span className="text-stone-400 font-normal">轉角地標</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step-by-Step Walking Route */}
                    <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl" />
                      <div className="flex items-center gap-3 mb-3 relative">
                        <div className="p-2.5 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/30">
                          <Footprints className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-white">{selectedHotel.routeTitle}</h4>
                          <p className="text-stone-400 text-xs mt-0.5">推薦出口：{selectedHotel.stationExit}</p>
                        </div>
                      </div>

                      <p className="text-stone-300 text-sm leading-relaxed mb-6 relative">
                        {selectedHotel.routeDescription}
                      </p>

                      <div className="space-y-3 relative">
                        {selectedHotel.routeSteps.map((step, idx) => (
                          <div
                            key={idx}
                            className="bg-white/5 hover:bg-white/10 transition-colors p-4 rounded-2xl border border-white/10 flex items-start gap-3.5"
                          >
                            <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md">
                              {idx + 1}
                            </div>
                            <p className="text-stone-200 text-sm leading-relaxed font-medium pt-0.5">
                              {step}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights & Family Tips Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Highlights */}
                      <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                            <Sparkles className="w-5 h-5" />
                          </div>
                          <h4 className="font-black text-stone-900 text-base">飯店特色與設施</h4>
                        </div>
                        <ul className="space-y-3">
                          {selectedHotel.highlights.map((h, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Family Tips */}
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-orange-100 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                            <Baby className="w-5 h-5" />
                          </div>
                          <h4 className="font-black text-orange-950 text-base">親子友善與出行貼士</h4>
                        </div>
                        <ul className="space-y-3">
                          {selectedHotel.familyTips.map((tip, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-orange-900 font-medium leading-relaxed flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ===================== TAB: SHOPPING (THESHORTY & 一隻阿圓 SELECTION) ===================== */}
            {activeTab === 'shopping' && (
              <motion.div key="shopping" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }} className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="bg-rose-100 text-rose-700 text-xs font-black px-2.5 py-1 rounded-md">
                      ✨ 那個矮子 ＆ 一隻阿圓 精選
                    </span>
                    <h2 className="text-xl font-black text-stone-900">關西逛街地圖・日潮選物＆百貨爆買 🛍️</h2>
                  </div>
                  <p className="text-stone-500 text-sm">
                    結合「那個矮子」日潮選物攻略（南船場、堀江橘子街、京都挖寶）與「一隻阿圓」梅田超好買百貨指南（LUCUA、阪急梅田、HEP FIVE），詳細標註品牌、樓層與省時動線！
                  </p>
                </div>

                {/* Quick Advice Cards: 3 Core Time-Saving Rules */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-2xl border border-indigo-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">🏢</span>
                      <h4 className="font-bold text-stone-900 text-sm">1. 認地標直上樓層</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      南船場神級選物店多隱藏在復古公寓（如<strong>大阪農林會館 3 樓</strong>），認準大樓直接搭電梯，免在巷弄來回盲找。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-2xl border border-rose-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">✨</span>
                      <h4 className="font-bold text-stone-900 text-sm">2. 選物店一站試齊</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      <strong>Strato</strong> 網羅 AURALEE、Graphpaper、YAECA 等日牌天花板，在一家店即可試齊全部剪裁，省去全城奔波。
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-2xl border border-amber-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">🏨</span>
                      <h4 className="font-bold text-stone-900 text-sm">3. 飯店為圓心無痛放貨</h4>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      心齋橋法拉格飯店距南船場 5 分鐘、橘子街 10 分鐘，買好戰利品隨時步行回房放，長輩小孩也能隨時休息。
                    </p>
                  </div>
                </motion.div>

                {/* ==================== Interactive Optimized Shopping Route Planner ==================== */}
                <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-900 via-stone-900 to-zinc-950 rounded-3xl p-5 sm:p-6 border border-amber-500/30 text-white shadow-xl relative overflow-hidden space-y-4">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full -mr-28 -mt-28 blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10 relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-amber-500 text-stone-950 text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <Navigation className="w-3 h-3" /> 流暢省時・0 浪費時間推薦動線
                        </span>
                        <span className="bg-white/10 text-white/80 text-[11px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                          🎯 避開人潮・零回頭路・無痛卸貨
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        精選逛街動線指南（點擊切換路線）
                      </h3>
                    </div>
                  </div>

                  {/* Route Selector Tabs */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      {
                        id: 'osaka_loop',
                        title: '🚩 路線 1：大阪 NANGA ＆ HUMAN MADE 潮流線',
                        subtitle: 'FREAK\'S STORE・SORA (NANGA)・堀江・PARCO',
                        badge: 'Day 4 首選・精準不繞路',
                        color: 'from-rose-500 to-pink-600',
                      },
                      {
                        id: 'umeda_blast',
                        title: '🏢 路線 2：大阪梅田 百貨爆買線',
                        subtitle: 'LUCUA・阪急伴手禮・HEP摩天輪',
                        badge: '一隻阿圓激推・雨天免淋雨',
                        color: 'from-amber-500 to-orange-600',
                      },
                      {
                        id: 'kyoto_dig',
                        title: '⛩️ 路線 3：京都日潮特價挖寶線',
                        subtitle: '新風館・HUMAN MADE・LOFTMAN',
                        badge: '京都日潮精選・一路向南零折返',
                        color: 'from-indigo-500 to-blue-600',
                      },
                    ].map((rt) => (
                      <button
                        key={rt.id}
                        onClick={() => setSelectedRoute(rt.id as any)}
                        className={`text-left p-3.5 rounded-2xl border transition-all relative overflow-hidden ${
                          selectedRoute === rt.id
                            ? 'bg-white/15 border-amber-400 text-white shadow-lg ring-1 ring-amber-400/50'
                            : 'bg-white/5 border-white/10 text-stone-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-white/20 text-amber-300 mb-1.5 inline-block">
                          {rt.badge}
                        </span>
                        <h4 className="text-sm font-black leading-tight text-white mb-0.5">{rt.title}</h4>
                        <p className="text-[11px] text-stone-400">{rt.subtitle}</p>
                      </button>
                    ))}
                  </div>

                  {/* Route Detail Container */}
                  {selectedRoute === 'osaka_loop' && (
                    <div className="space-y-4 pt-2">
                      {/* Summary Banner */}
                      <div className="bg-rose-950/50 rounded-2xl p-4 border border-rose-500/30 text-xs space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-rose-200">
                          <span className="font-bold text-rose-300 text-sm">⏱️ 建議時段：14:00 - 20:30（逛街約 3.5 小時 ＋ 晚餐 2 小時）</span>
                          <span className="font-bold text-emerald-400">🚶 全程步行總計僅約 16 分鐘（順向閉環・零折返）</span>
                          <span className="bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-md border border-rose-500/30 font-bold">
                            🏨 傍晚回飯店卸貨再出門吃晚餐
                          </span>
                        </div>
                        <p className="text-stone-300 leading-relaxed">
                          <strong>【精準聚焦省時策略】</strong>：早上前往箕面勝尾寺祈福，中午吃飽回心齋橋！下午 14:00 順向展開：<strong>FREAK'S STORE（NAUTICA JP 寬鬆 City Boy）➔ SORA 堀江店（找 NANGA 聯名羽絨/Patagonia）➔ NANGA SHOP OSAKA 旗艦店（全系列羽絨服）➔ 心齋橋 PARCO（1F HUMAN MADE 心齋橋限定款 ➔ 2F BEAMS）➔ 17:45 回飯店卸貨 ➔ 18:30 道頓堀跑跑人吃晚餐！</strong>
                        </p>
                      </div>

                      {/* Sequential Step by Step Navigation */}
                      <div className="space-y-4">
                        {/* Zone 1: Minamisemba */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 text-xs font-black text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/20">
                            <span>🏢 第 1 區塊：南船場・City Boy 寬鬆美式工裝（往北順行）</span>
                          </div>

                          {[
                            {
                              step: '地點 ①',
                              time: '14:00 - 14:45',
                              title: 'FREAK\'S STORE 大阪・心齋橋店',
                              transit: '🚶 從法拉格飯店步行 3 分鐘（南船場 3 丁目）',
                              desc: '【City Boy 寬鬆必買・台灣專櫃 5 折】長谷川昭雄監修 NAUTICA JP 重磅衛衣、牛津襯衫與工裝寬褲在日本入手極划算，版型挺拔小個子穿也超好看！',
                              tags: ['NAUTICA JP', 'FREAK\'S STORE', 'City Boy', '美式工裝'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=FREAK%27S+STORE+Shinsaibashi',
                            },
                          ].map((s, idx) => (
                            <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                              <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-black text-xs shrink-0 mt-0.5 shadow-md">
                                {s.step}
                              </div>
                              <div className="flex-1 space-y-1.5 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-1.5">
                                  <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                  <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                                </div>
                                <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                                <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                                <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {s.tags.map((tg, tIdx) => (
                                      <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                  <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 shrink-0">
                                    <MapPin className="w-3 h-3" /> 導航
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Zone 2: Horie Orange Street */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
                            <span>🍊 第 2 區塊：堀江橘子街・NANGA 戶外羽絨尋寶（向西順行）</span>
                          </div>

                          {[
                            {
                              step: '地點 ②',
                              time: '14:45 - 15:25',
                              title: 'SORA 堀江店（戶外潮流選物・找 NANGA / Patagonia）',
                              transit: '🚶 沿長堀通往西步行 6 分鐘直達橘子街口 SORA',
                              desc: '【找 NANGA 必逛神店】專門引進 NANGA 聯名羽絨外套、保暖背心與機能露營服飾，還有齊全的 Patagonia 與 Gramicci，戶外山系潮流必巡！',
                              tags: ['NANGA (羽絨服)', 'Patagonia', 'Gramicci', 'Mountain Research'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=SORA+Horie+Osaka',
                            },
                            {
                              step: '地點 ③',
                              time: '15:25 - 16:00',
                              title: 'Carhartt WIP Osaka（日本限定工裝大本營）',
                              transit: '🚶 從 SORA 往西步行 3~5 分鐘（橘子街同一條路）',
                              desc: '【百年工裝的街頭進化】Carhartt WIP 日本限定帆布工裝外套、牛仔褲與配件！台灣買不到的限定配色，堀江直接一站購足，順路完全不繞路！',
                              tags: ['Carhartt WIP', '日本限定款', '帆布工裝外套', '工裝牛仔'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=Carhartt+WIP+Osaka',
                            },
                            {
                              step: '地點 ④',
                              time: '16:00 - 17:00',
                              title: 'NANGA SHOP OSAKA（官方直營旗艦店）',
                              transit: '🚶 沿橘子街往西繼續直走 3 分鐘',
                              desc: '【NANGA 最齊全官方殿堂】全日本最權威的羽絨直營店！招牌 AURORA-TEX 白金防水透氣羽絨外套、TAKIBI 難燃外套、隨身配件尺寸顏色最齊，在日本買退稅超划算！',
                              tags: ['NANGA 直營旗艦', 'AURORA DOWN', 'TAKIBI', '極致保暖'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=NANGA+SHOP+OSAKA',
                            },
                          ].map((s, idx) => (
                            <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                              <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-stone-950 font-black text-xs shrink-0 mt-0.5 shadow-md">
                                {s.step}
                              </div>
                              <div className="flex-1 space-y-1.5 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-1.5">
                                  <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                  <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                                </div>
                                <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                                <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                                <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {s.tags.map((tg, tIdx) => (
                                      <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                  <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 shrink-0">
                                    <MapPin className="w-3 h-3" /> 導航
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Zone 3: Shinsaibashi PARCO */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 text-xs font-black text-rose-400 uppercase tracking-wider bg-rose-500/10 px-3 py-1.5 rounded-xl border border-rose-500/20">
                            <span>🏢 第 3 區塊：心齋橋 PARCO・HUMAN MADE ＆ BEAMS（向東順行）</span>
                          </div>

                          {[
                            {
                              step: '地點 ⑤',
                              time: '17:15 - 18:00',
                              title: '心齋橋 PARCO（1F HUMAN MADE ➔ 2F BEAMS）',
                              transit: '🚶 從橘子街沿長堀通往東漫步 6 分鐘直達心齋橋 PARCO',
                              desc: '【直衝兩大日潮核心】1F HUMAN MADE 挑選心齋橋限定款動物 T 恤與經典愛心配件 ➔ 2F BEAMS 挑選 BEAMS PLUS 經典紳士工裝與 SSZ 街頭系列！',
                              tags: ['HUMAN MADE (限定款)', 'BEAMS PLUS', 'NIGO 主理', '日潮經典'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=Shinsaibashi+PARCO',
                            },
                          ].map((s, idx) => (
                            <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                              <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white font-black text-xs shrink-0 mt-0.5 shadow-md">
                                {s.step}
                              </div>
                              <div className="flex-1 space-y-1.5 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-1.5">
                                  <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                  <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                                </div>
                                <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                                <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                                <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {s.tags.map((tg, tIdx) => (
                                      <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                  <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 shrink-0">
                                    <MapPin className="w-3 h-3" /> 導航
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Zone 4: Hotel Drop & Dotonbori Dinner */}
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2 text-xs font-black text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                            <span>🌙 第 4 區塊：回飯店卸貨 ＋ 道頓堀夜景晚餐（向南漫步）</span>
                          </div>

                          {[
                            {
                              step: '地點 ⑥',
                              time: '18:00 - 18:30',
                              title: '心齋橋法拉格飯店（卸貨・戰利品全放回房小歇）',
                              transit: '🚶 從 PARCO 出門步行 3 分鐘回飯店',
                              desc: '【全身無負擔】將下午買的所有 NANGA 羽絨服、HUMAN MADE 戰利品全部放回房間，換上輕便休閒鞋，全家洗手喝水，輕鬆出門吃晚餐！',
                              tags: ['房間卸貨', 'Lounge 休憩', '不帶重物逛街'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=HOTEL+THE+FLAG+Shinsaibashi',
                            },
                            {
                              step: '地點 ⑦',
                              time: '18:30 - 20:30',
                              title: '道頓堀固力果跑跑人 ＋ 不吃牛美食晚餐',
                              transit: '🚶 飯店往南漫步 6 分鐘直達道頓堀',
                              desc: '【經典大阪夜景】輕裝拍固力果跑跑人招牌與巨型立體螃蟹，享用千房大阪燒（海鮮/豬肉）或道頓堀今井豆皮烏龍麵，結束充實完美的一天！',
                              tags: ['固力果跑跑人', '千房大阪燒', '道頓堀今井烏龍麵'],
                              maps: 'https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign',
                            },
                          ].map((s, idx) => (
                            <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                              <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-xs shrink-0 mt-0.5 shadow-md">
                                {s.step}
                              </div>
                              <div className="flex-1 space-y-1.5 min-w-0">
                                <div className="flex flex-wrap items-center justify-between gap-1.5">
                                  <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                  <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                                </div>
                                <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                                <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                                <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    {s.tags.map((tg, tIdx) => (
                                      <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                        {tg}
                                      </span>
                                    ))}
                                  </div>
                                  <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 shrink-0">
                                    <MapPin className="w-3 h-3" /> 導航
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedRoute === 'umeda_blast' && (
                    <div className="space-y-4 pt-2">
                      <div className="bg-amber-950/50 rounded-2xl p-4 border border-amber-500/30 text-xs space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-amber-200">
                          <span className="font-bold text-amber-300 text-sm">⏱️ 建議時段：10:30 - 16:30（全程約 4~5 小時）</span>
                          <span className="font-bold text-emerald-400">🚇 地鐵 6 分鐘直達・100% 全程地下道連通</span>
                          <span className="bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30 font-bold">
                            🌧️ 雨天推車爆買首選
                          </span>
                        </div>
                        <p className="text-stone-300 leading-relaxed">
                          <strong>【核心省時策略】</strong>：JR 大阪站／梅田地下街直通，全程室內無風雨。依序從<strong>「地點 ① LUCUA（7F FREAK'S STORE NAUTICA JP / 6F TNF+ 紫標 / 3F BEAMS）」➔「地點 ② 阪急 B1（伴手禮天花板）」➔「地點 ③ HEP FIVE（5F Carhartt WIP / 7F 摩天輪）」</strong>順向逛完，再搭地鐵直達回飯店！
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            step: '地點 ①',
                            time: '15:30 - 17:15',
                            title: 'LUCUA 1100 ＆ LUCUA osaka（TNF紫標 / FREAK\'S STORE / BEAMS）',
                            transit: '🚇 三宮搭 JR 22 分直達大阪站（或心齋橋搭御堂筋線 6 分）出剪票口地下通道直達',
                            desc: '【阿圓激推 No.1 百貨＋日牌大本營】直衝 7F FREAK\'S STORE（NAUTICA JP 專區超大）、6F THE NORTH FACE+ 關西旗艦店（入手日本限定紫標 Purple Label 工裝褲）、3F BEAMS，9F 蔦屋書店有超美星巴克可歇腳。',
                            tags: ['TNF 紫標 (6F)', 'FREAK\'S STORE (7F)', 'NAUTICA JP', 'BEAMS (3F)', 'Bshop (4F)', '蔦屋書店 (9F)'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=LUCUA+osaka',
                          },
                          {
                            step: '地點 ②',
                            time: '17:15 - 18:15',
                            title: '阪急百貨 梅田總店（3F The Row 頂級靜奢 ＆ B1 神級伴手禮）',
                            transit: '🚶 梅田地下街往東走 2 分鐘直達阪急百貨',
                            desc: '【全關西 The Row 最齊專櫃＋伴手禮天花板】直衝 3 樓 The Row 官方專櫃，親自試揹神級 Margaux、Park Tote 與簡約樂福鞋；隨後搭手扶梯直下 B1/B2 掃貨 ÉCHIRÉ 頂級奶油餅乾與高級版 Pocky！',
                            tags: ['The Row (3F 專櫃)', 'Margaux 包款', 'Park Tote', 'ÉCHIRÉ (艾許奶油)', 'Bâton d\'or'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=Hankyu+Department+Store+Umeda',
                          },
                          {
                            step: '地點 ③',
                            time: '18:15 - 19:15',
                            title: 'HEP FIVE（5F Carhartt WIP 直營店 ➔ 7F 紅色摩天輪）',
                            transit: '🚶 從阪急百貨往東步行 3 分鐘即達 HEP FIVE',
                            desc: '【Carhartt 直營店＋摩天輪夜景】5F 有 Carhartt WIP 梅田官方直營店，販售日本限定帆布工裝夾克、牛仔寬褲與配件；7F 搭乘地標紅色巨大摩天輪俯瞰大阪梅田璀璨夜景！',
                            tags: ['Carhartt WIP (5F)', 'BEAMS STREET (1F)', 'RED FERRIS WHEEL (7F 摩天輪)'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=HEP+FIVE+Osaka',
                          },
                        ].map((s, idx) => (
                          <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                            <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-stone-950 font-black text-xs shrink-0 mt-0.5 shadow-md">
                              {s.step}
                            </div>
                            <div className="flex-1 space-y-1.5 min-w-0">
                              <div className="flex flex-wrap items-center justify-between gap-1.5">
                                <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                              </div>
                              <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                              <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                              <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {s.tags.map((tg, tIdx) => (
                                    <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                      {tg}
                                    </span>
                                  ))}
                                </div>
                                <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 shrink-0">
                                  <MapPin className="w-3 h-3" /> 導航
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedRoute === 'kyoto_dig' && (
                    <div className="space-y-4 pt-2">
                      <div className="bg-indigo-950/50 rounded-2xl p-4 border border-indigo-500/30 text-xs space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-indigo-200">
                          <span className="font-bold text-indigo-300 text-sm">⏱️ 建議時段：14:00 - 18:30（全程約 3.5 小時）</span>
                          <span className="font-bold text-emerald-400">🚶 全程直線散步約 18 分鐘（一路向南零折返）</span>
                          <span className="bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-md border border-indigo-500/30 font-bold">
                            ⛩️ 京都日潮精選路線（含 Day 2 傍晚精華）
                          </span>
                        </div>
                        <p className="text-stone-300 leading-relaxed">
                          <strong>【核心省時策略】</strong>：由北向南一條直線！從<strong>「地點 ① 烏丸御池新風館」➔「地點 ② 三條通 HUMAN MADE 藍瓶」➔「地點 ③ TNF STANDARD 紫標神褲」➔「地點 ④ 河原町 KAPITAL」➔「地點 ⑤ 寺町通 LOFTMAN 蝴蝶褲」</strong>，一路順逛到底，零回頭路！
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        {[
                          {
                            step: '地點 ①',
                            time: '14:00 - 15:15',
                            title: '新風館 ShinPuhKan（1LDK / BEAMS JAPAN）',
                            transit: '🚇 地下鐵烏丸線「烏丸御池站」4 號出口地下直通 1F',
                            desc: '【隈研吾綠意庭園】關西唯一 1LDK 直營極簡選物，BEAMS JAPAN 京都限定和風托特包，無障礙推車極好走。',
                            tags: ['1LDK KYOTO', 'BEAMS JAPAN', 'LE LABO', 'TRAVELER\'S FACTORY'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=ShinPuhKan+Kyoto',
                          },
                          {
                            step: '地點 ②',
                            time: '15:20 - 16:15',
                            title: 'HUMAN MADE 1928 ＆ 藍瓶咖啡概念店',
                            transit: '🚶 沿三條通往東直線漫步 5 分鐘',
                            desc: '【昭和洋樓＋限定愛心】在百年紅磚洋樓內喝 Blue Bottle 拿鐵，選購京都限定愛心與鴨子 T 恤、周邊小物。',
                            tags: ['HUMAN MADE', 'BLUE BOTTLE COFFEE', 'CURRY UP'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=HUMAN+MADE+1928+Kyoto',
                          },
                          {
                            step: '地點 ③',
                            time: '16:15 - 16:50',
                            title: 'THE NORTH FACE STANDARD 京都店（TNF 紫標限定）',
                            transit: '🚶 從 HUMAN MADE 步行 3 分鐘（約 200 公尺）',
                            desc: '【日本限定紫標專賣店】TheShorty 影片推薦！入手日本限定 TNF 紫標（Purple Label）神級打摺工裝寬褲與機能羽絨。',
                            tags: ['TNF 紫標', 'THE NORTH FACE STANDARD', 'Purple Label', '神級工裝褲'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=THE+NORTH+FACE+STANDARD+KYOTO',
                          },
                          {
                            step: '地點 ④',
                            time: '16:50 - 17:30',
                            title: 'KAPITAL KYOTO（傳統町家工藝門市）',
                            transit: '🚶 往東南走 3 分鐘進入三條河原町巷內',
                            desc: '【日本國寶級工藝】古樸木造町家建築，笑臉襪、水洗骨頭毛衣與刺子繡拼接外套款式齊全。',
                            tags: ['KAPITAL', 'KOUNTRY'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=KAPITAL+KYOTO',
                          },
                          {
                            step: '地點 ⑤',
                            time: '17:30 - 18:30',
                            title: 'LOFTMAN COOP KYOTO ＆ 藤井大丸百貨',
                            transit: '🚶 走進寺町通商店街 2 分鐘即達',
                            desc: '【影片主角 Needles 特價挖寶】Needles 蝴蝶褲關西最齊，常有驚喜折扣；順路逛藤井大丸（4F PORTER 包、Bshop）。',
                            tags: ['Needles (蝴蝶褲)', 'Engineered Garments', 'PORTER (吉田包)', 'Bshop'],
                            maps: 'https://www.google.com/maps/search/?api=1&query=LOFTMAN+COOP+KYOTO',
                          },
                        ].map((s, idx) => (
                          <div key={idx} className="bg-white/5 hover:bg-white/[0.08] p-3.5 sm:p-4 rounded-2xl border border-white/10 flex gap-3 items-start transition-all">
                            <div className="w-16 text-center py-1 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-black text-xs shrink-0 mt-0.5 shadow-md">
                              {s.step}
                            </div>
                            <div className="flex-1 space-y-1.5 min-w-0">
                              <div className="flex flex-wrap items-center justify-between gap-1.5">
                                <span className="text-amber-300 font-bold text-xs">{s.time}</span>
                                <span className="text-stone-400 text-[11px] font-medium">{s.transit}</span>
                              </div>
                              <h4 className="text-sm font-black text-white leading-tight">{s.title}</h4>
                              <p className="text-xs text-stone-300 leading-relaxed">{s.desc}</p>
                              <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {s.tags.map((tg, tIdx) => (
                                    <span key={tIdx} className="bg-stone-800 text-stone-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                                      {tg}
                                    </span>
                                  ))}
                                </div>
                                <a href={s.maps} target="_blank" rel="noopener noreferrer" className="text-[11px] text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 shrink-0">
                                  <MapPin className="w-3 h-3" /> 導航
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Search & City/Zone Filter Bar */}
                <motion.div variants={itemVariants} className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-3.5">
                  {/* City Switcher Tabs */}
                  <div className="flex items-center gap-2 border-b border-stone-100 pb-3">
                    <span className="text-xs font-bold text-stone-500 shrink-0 mr-1">城市篩選：</span>
                    {(['ALL', '大阪', '京都'] as const).map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setShoppingCityFilter(city);
                          setShoppingZoneFilter('ALL');
                        }}
                        className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border ${
                          shoppingCityFilter === city
                            ? 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-rose-50 hover:text-rose-600'
                        }`}
                      >
                        {city === 'ALL'
                          ? `全部城市 (${SHOPPING_SPOTS.length})`
                          : city === '大阪'
                          ? `📍 大阪逛店精選 (${SHOPPING_SPOTS.filter((s) => s.city === '大阪').length})`
                          : `📍 京都特輯挖寶 (${SHOPPING_SPOTS.filter((s) => s.city === '京都').length})`}
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative">
                    <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={shoppingSearch}
                      onChange={(e) => setShoppingSearch(e.target.value)}
                      placeholder="搜尋品牌、店家或風格（例如：Needles, AURALEE, S.F.C, 1LDK, KAPITAL, 任天堂, HW DOG...）..."
                      className="w-full pl-10 pr-10 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all placeholder:text-stone-400"
                    />
                    {shoppingSearch && (
                      <button
                        onClick={() => setShoppingSearch('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-xs font-bold w-5 h-5 bg-stone-200 rounded-full flex items-center justify-center"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  {/* Dynamic Zone Filter Buttons */}
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                    <button
                      onClick={() => setShoppingZoneFilter('ALL')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                        shoppingZoneFilter === 'ALL'
                          ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      全部區域
                    </button>
                    {Array.from(
                      new Set(
                        SHOPPING_SPOTS.filter((s) => shoppingCityFilter === 'ALL' || s.city === shoppingCityFilter).map(
                          (s) => s.zone
                        )
                      )
                    ).map((zone) => (
                      <button
                        key={zone}
                        onClick={() => setShoppingZoneFilter(zone)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 border ${
                          shoppingZoneFilter === zone
                            ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {zone}
                      </button>
                    ))}
                  </div>

                  {/* Hot Brand Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap pt-1.5 border-t border-stone-100">
                    <span className="text-[11px] text-stone-400 font-bold">熱門品牌快選：</span>
                    {[
                      'Needles',
                      'AURALEE',
                      'Graphpaper',
                      'S.F.C',
                      '1LDK',
                      'KAPITAL',
                      'RESOLUTE',
                      'BIOTOP',
                      'THE H.W.DOG&CO.',
                      'DESCENDANT',
                      'Nintendo',
                      'HUMAN MADE',
                    ].map((brand) => (
                      <button
                        key={brand}
                        onClick={() => setShoppingSearch(brand)}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                          shoppingSearch.toLowerCase() === brand.toLowerCase()
                            ? 'bg-rose-100 text-rose-700 border-rose-300 font-bold'
                            : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Store Cards List */}
                <div className="grid grid-cols-1 gap-4">
                  {SHOPPING_SPOTS
                    .filter((spot) => {
                      const matchCity = shoppingCityFilter === 'ALL' || spot.city === shoppingCityFilter;
                      const matchZone = shoppingZoneFilter === 'ALL' || spot.zone === shoppingZoneFilter;
                      const q = shoppingSearch.toLowerCase().trim();
                      if (!q) return matchCity && matchZone;
                      const matchSearch =
                        spot.name.toLowerCase().includes(q) ||
                        spot.japaneseName.toLowerCase().includes(q) ||
                        spot.styleCategory.toLowerCase().includes(q) ||
                        spot.howToFind.toLowerCase().includes(q) ||
                        spot.theShortyTip.toLowerCase().includes(q) ||
                        spot.brands.some((b) => b.toLowerCase().includes(q));
                      return matchCity && matchZone && matchSearch;
                    })
                    .map((spot) => (
                      <motion.div
                        key={spot.id}
                        variants={itemVariants}
                        className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm hover:shadow-md transition-shadow space-y-3.5 relative overflow-hidden"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-xl">{spot.tagEmoji || '✨'}</span>
                              <h3 className="text-lg sm:text-xl font-black text-stone-900 leading-tight">
                                {spot.name}
                              </h3>
                            </div>
                            <p className="text-xs text-stone-400 font-medium mb-2">{spot.japaneseName}</p>

                            <div className="flex items-center gap-2 flex-wrap text-xs">
                              <span className="bg-rose-50 text-rose-700 font-bold px-2.5 py-0.5 rounded-full border border-rose-200">
                                {spot.zone}
                              </span>
                              <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-0.5 rounded-full border border-indigo-200">
                                📍 {spot.floorInfo}
                              </span>
                              <span className="text-emerald-700 bg-emerald-50 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                                <Footprints className="w-3.5 h-3.5" /> {spot.walkingTimeFromHotel}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={spot.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm transition-all"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              <span>Google 導航</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                            <button
                              onClick={() => handleCopy(spot.address, spot.id + '_addr')}
                              className="bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition-all"
                            >
                              {copiedText === spot.id + '_addr' ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-emerald-700">已複製</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>複製地址</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Brands Tag Bar */}
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-100 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600">
                            <Tag className="w-3.5 h-3.5 text-rose-500" />
                            <span>精選主打品牌：</span>
                          </div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {spot.brands.map((brand, bIdx) => (
                              <span
                                key={bIdx}
                                className="bg-white text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-stone-200 shadow-2xs"
                              >
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* How To Find (Exact Location Path) */}
                        <div className="bg-indigo-50/80 rounded-xl p-3.5 border border-indigo-100 text-xs sm:text-sm text-stone-800 space-y-1">
                          <div className="font-bold text-indigo-900 flex items-center gap-1.5">
                            <Navigation className="w-4 h-4 text-indigo-600 shrink-0" />
                            <span>【如何尋找・防迷路指引】</span>
                          </div>
                          <p className="text-indigo-950/90 leading-relaxed font-medium pl-5">{spot.howToFind}</p>
                        </div>

                        {/* TheShorty Advice */}
                        <div className="bg-amber-50/80 rounded-xl p-3.5 border border-amber-200/70 text-xs sm:text-sm text-stone-800 space-y-1">
                          <div className="font-bold text-amber-900 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>【那個矮子選店推薦與挑選心法】</span>
                          </div>
                          <p className="text-amber-950/90 leading-relaxed font-medium pl-5">{spot.theShortyTip}</p>
                        </div>

                        {/* Footer: Opening hours */}
                        {spot.openingHours && (
                          <div className="pt-2 flex items-center justify-between text-xs text-stone-500 border-t border-stone-100">
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-stone-400" />
                              <span>營業時間：{spot.openingHours}</span>
                            </div>
                            <span className="text-stone-400">{spot.styleCategory}</span>
                          </div>
                        )}
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}

            {/* ===================== TAB: STRATEGY ===================== */}
            {activeTab === 'strategy' && (
              <motion.div key="strategy" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
                <div className="mb-6">
                  <h2 className="text-xl font-black text-stone-900 mb-1">排隊攻略 🎯</h2>
                  <p className="text-stone-500 text-sm">遵守這些核心原則，讓旅程更順暢</p>
                </div>
                <div className="space-y-4">
                  {QUEUE_STRATEGIES.map((strategy, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="bg-rose-100 text-rose-600 font-black text-sm px-3 py-1.5 rounded-lg whitespace-nowrap">
                        {strategy.category}
                      </div>
                      <p className="text-stone-700 font-medium leading-relaxed">
                        {strategy.advice}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ===================== TAB: FOOD ===================== */}
            {activeTab === 'food' && (
              <motion.div key="food" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }}>
                <div className="mb-6">
                  <h2 className="text-xl font-black text-stone-900 mb-1">美食地圖 🍜</h2>
                  <p className="text-stone-400 text-sm">精選京阪神美食（避開牛肉專屬）</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {RESTAURANTS.map((restaurant, index) => (
                    <motion.div key={index} variants={itemVariants} className="bg-white rounded-2xl border border-stone-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
                      <div className="h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-orange-300" />
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="bg-rose-50 text-rose-600 text-xs font-bold px-2.5 py-1 rounded-full border border-rose-100">{restaurant.area}</span>
                              <span className="bg-stone-50 text-stone-600 text-xs font-bold px-2.5 py-1 rounded-full border border-stone-100">{restaurant.category}</span>
                            </div>
                            <h3 className="text-lg font-black text-stone-900 leading-tight">{restaurant.name}</h3>
                          </div>
                          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1.5 rounded-xl border border-amber-100 shrink-0 ml-3">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            <span className="font-black text-amber-700 text-sm">{restaurant.rating}</span>
                          </div>
                        </div>
                        <p className="text-stone-600 text-base mb-4 leading-relaxed flex-1">{restaurant.recommendation}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-stone-50">
                          <div className="flex items-center gap-1.5 text-stone-500 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{restaurant.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-rose-500 text-sm font-bold">{restaurant.priceRange}</span>
                            <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + ' ' + restaurant.area)}`} target="_blank" rel="noopener noreferrer" className="text-rose-500 text-sm font-black flex items-center gap-1 hover:underline underline-offset-4">MAP <ExternalLink className="w-3.5 h-3.5" /></a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ===================== TAB: INFO ===================== */}
            {activeTab === 'info' && (
              <motion.div key="info" variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }} className="space-y-6">
                <div>
                  <h2 className="text-xl font-black text-stone-900 mb-1">行前必知 📋</h2>
                  <p className="text-stone-400 text-sm mb-5">帶小孩出國的實用資訊整理</p>
                  <div className="grid grid-cols-1 gap-3">
                    {ESSENTIAL_INFO.map((item, index) => (
                      <motion.div key={index} variants={itemVariants} className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                        <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center shrink-0 text-xl">{item.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-stone-900 text-lg mb-1.5 leading-tight">{item.title}</h3>
                          <p className="text-stone-600 text-base leading-relaxed">{item.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div variants={itemVariants} className="bg-stone-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-rose-500/15 rounded-full -mb-20 -mr-20 blur-3xl" />
                  <div className="absolute top-0 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full -mt-16 blur-3xl" />
                  <h3 className="text-xl font-black mb-6 flex items-center gap-3 leading-none relative">
                    <Train className="w-6 h-6 text-rose-400" />
                    交通攻略
                  </h3>
                  <div className="space-y-5 relative">
                    {TRANSPORT_INFO.map((info, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                          {info.type === 'bus' ? <Bus className="w-5 h-5 text-rose-400" /> : info.type === 'pass' ? <Ticket className="w-5 h-5 text-rose-400" /> : info.type === 'tip' ? <Lightbulb className="w-5 h-5 text-rose-400" /> : <Train className="w-5 h-5 text-rose-400" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base">{info.name}</h4>
                          <p className="text-stone-300 text-sm mt-1.5 leading-relaxed">{info.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-rose-800 text-lg mb-2">關於這個行程</h3>
                      <p className="text-rose-700/90 text-base leading-relaxed">
                        避開排隊・不吃牛 專屬版！為帶 6 歲小孩的家庭設計，確保旅途順暢、充滿回憶。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Image Preview Lightbox Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <div className="relative">
                <img
                  src={previewImage.url}
                  alt={previewImage.caption}
                  className="w-full max-h-[75vh] object-contain bg-black"
                />
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center font-black transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="p-4 bg-stone-900 border-t border-white/10 flex items-center justify-between text-white">
                <span className="font-bold text-sm">{previewImage.caption}</span>
                <span className="text-xs text-stone-400">點擊任意處關閉</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-stone-100 p-2 md:hidden flex justify-around items-center z-40">
        {[
          { id: 'itinerary', label: '行程', icon: Calendar },
          { id: 'hotels', label: '住宿', icon: Building2 },
          { id: 'shopping', label: '選物', icon: ShoppingBag },
          { id: 'strategy', label: '攻略', icon: Target },
          { id: 'food', label: '美食', icon: Utensils },
          { id: 'info', label: '資訊', icon: Info },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex flex-col items-center gap-1 transition-all px-2.5 py-1.5 rounded-2xl ${
              activeTab === tab.id
                ? 'text-rose-500 bg-rose-50 font-black shadow-sm'
                : 'text-stone-400 font-medium'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">{tab.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
