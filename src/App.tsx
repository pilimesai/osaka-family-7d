import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, MapPin, Utensils, Info, Clock, Navigation, CheckCircle2,
  Bus, Train, Heart, Baby, ExternalLink, Star, Snowflake, Ticket,
  Lightbulb, ChevronRight, Plane, AlertTriangle, Zap, Target
} from 'lucide-react';
import { useState } from 'react';
import {
  ITINERARY, ESSENTIAL_INFO, RESTAURANTS, TRANSPORT_INFO,
  TRIP_INFO, QUEUE_STRATEGIES
} from './constants';

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
  const [activeTab, setActiveTab] = useState<'itinerary' | 'strategy' | 'food' | 'info'>('itinerary');
  const [activeDay, setActiveDay] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const currentDay = ITINERARY.find((d) => d.day === activeDay);
  const tagStyle = currentDay ? TAG_COLORS[currentDay.tagColor] || TAG_COLORS.pink : TAG_COLORS.pink;

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

                    {/* Schedule Card */}
                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-stone-100 rounded-lg"><Clock className="w-5 h-5 text-stone-600" /></div>
                        <h3 className="font-bold text-stone-900 text-lg">時間安排</h3>
                      </div>
                      <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">{currentDay.schedule}</p>
                    </motion.div>

                    {/* Transport Card */}
                    <motion.div variants={itemVariants} className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-stone-100 rounded-lg"><Train className="w-5 h-5 text-stone-600" /></div>
                        <h3 className="font-bold text-stone-900 text-lg">交通方式</h3>
                      </div>
                      <p className="text-stone-600 leading-relaxed whitespace-pre-wrap">{currentDay.transport}</p>
                    </motion.div>

                    {/* Queue Tips Card */}
                    <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-orange-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-orange-100 rounded-lg"><AlertTriangle className="w-5 h-5 text-orange-600" /></div>
                        <h3 className="font-bold text-orange-900 text-lg">避開排隊提醒</h3>
                      </div>
                      <p className="text-orange-800 font-medium leading-relaxed whitespace-pre-wrap">{currentDay.queueTips}</p>
                    </motion.div>

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
                  <p className="text-stone-400 text-sm">精選京阪神美食</p>
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

      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-stone-100 p-2 md:hidden flex justify-around items-center z-50">
        {[
          { id: 'itinerary', label: '行程', icon: Calendar },
          { id: 'strategy', label: '攻略', icon: Target },
          { id: 'food', label: '美食', icon: Utensils },
          { id: 'info', label: '資訊', icon: Info },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex flex-col items-center gap-1.5 transition-all px-5 py-2 rounded-2xl ${
              activeTab === tab.id
                ? 'text-rose-500 bg-rose-50 shadow-sm'
                : 'text-stone-400'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-black tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
