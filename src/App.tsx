import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Trophy, 
  MousePointer2,
  Gamepad2,
  Smartphone,
  Pizza,
  Info,
  RefreshCcw,
  BookOpen,
  Pencil,
  Brain,
  Sparkles,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---
type SlideProps = {
  onNext: () => void;
  onPrev: () => void;
  addXP: (amount: number) => void;
};

// --- Components ---

const HamsterGif = () => (
  <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
    <motion.div
      animate={{ 
        y: [0, -5, 0],
        rotate: [0, -2, 2, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-full h-full bg-cyber-lime/20 rounded-full p-1 border-2 border-cyber-lime/30 overflow-hidden shadow-[0_0_20px_rgba(0,245,255,0.3)]"
    >
      <img 
        src="https://i.postimg.cc/VLRQ4m0L/download.gif" 
        alt="Spy Hamster" 
        className="w-full h-full object-cover rounded-full"
        referrerPolicy="no-referrer"
      />
    </motion.div>
  </div>
);

const Slide1 = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-full text-center space-y-8 py-10">
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-neon-cyan/20 border border-neon-cyan/40 px-4 py-2 rounded-full flex items-center gap-2"
    >
      <Target size={18} className="text-neon-cyan" />
      <span className="text-sm font-black tracking-widest text-neon-cyan uppercase">
        Today's Goal: I can identify the main idea of a story!
      </span>
    </motion.div>

    <div className="flex flex-col items-center gap-6">
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        className="relative"
      >
        <div className="w-64 h-64 md:w-80 md:h-80 bg-cyber-lime/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(223,255,0,0.3)] border-4 border-cyber-lime/50 relative">
          <img 
            src="https://i.postimg.cc/VLRQ4m0L/download.gif" 
            alt="Spy Hamster" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
          {/* Scan Line Effect */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute left-0 w-full h-1 bg-cyber-lime/50 shadow-[0_0_15px_rgba(223,255,0,0.8)] z-10"
          />
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20 pointer-events-none" />
        </div>
        <motion.div 
          animate={{ y: [0, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-4 -right-4 bg-sunset-orange px-3 py-2 rounded-lg rotate-12 z-10 shadow-lg"
        >
          <span className="font-black text-sm tracking-widest">TOP SECRET</span>
        </motion.div>
      </motion.div>
    </div>
    
    <div className="space-y-3">
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-cyber-lime uppercase leading-none">
        Spy Academy
      </h1>
      <p className="text-2xl font-bold text-neon-cyan italic">
        The Case of the Secret Agent Hamster
      </p>
    </div>

    <div className="glass-panel max-w-lg py-6 px-10 border-2 border-neon-cyan/30 bg-neon-cyan/5 relative overflow-hidden group">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
      />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-center gap-2 text-sunset-orange font-black text-xs tracking-[0.3em] uppercase">
          <AlertCircle size={16} />
          Incoming Mission Alert
        </div>
        <p className="text-xl md:text-2xl font-bold leading-tight">
          "Every spy story has a <span className="text-cyber-lime underline decoration-2 underline-offset-4">Big Boss</span>... but can you find the <span className="text-neon-cyan underline decoration-2 underline-offset-4">Big Boss Idea</span>?"
        </p>
        <p className="text-sm opacity-80 italic">
          Barnaby is watching. Are you ready to decode his secrets? 🕵️‍♂️🐹
        </p>
      </div>
    </div>

    <button onClick={onNext} className="btn-primary text-xl py-4 px-12 group mt-4 shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:shadow-[0_0_50px_rgba(0,245,255,0.6)] transition-all">
      ACCEPT MISSION
      <ChevronRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
    </button>
  </div>
);

const Slide2 = ({ onNext, onPrev }: SlideProps) => {
  const [checked, setChecked] = useState([false, false, false]);
  const allChecked = checked.every(c => c);

  const toggle = (i: number) => {
    const newChecked = [...checked];
    newChecked[i] = true;
    setChecked(newChecked);
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-neon-cyan/20 rounded-lg">
            <Target className="text-neon-cyan" size={24} />
          </div>
          <h2 className="text-2xl font-bold">Mission Briefing</h2>
        </div>
        <HamsterGif />
      </div>

      <div className="grid gap-3 max-w-xl mx-auto w-full">
        {[
          "I can find the Main Idea (The Big Boss Idea).",
          "I can spot Key Details (The Helper Facts).",
          "I can explain how they work together!"
        ].map((text, i) => (
          <motion.button
            key={i}
            whileHover={{ x: 5 }}
            onClick={() => toggle(i)}
            className={`flex items-center p-4 rounded-xl border-2 text-left transition-all ${
              checked[i] 
                ? 'bg-cyber-lime/20 border-cyber-lime text-cyber-lime' 
                : 'bg-white/5 border-white/10 hover:border-neon-cyan'
            }`}
          >
            <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
              checked[i] ? 'bg-cyber-lime border-cyber-lime' : 'border-white/30'
            }`}>
              {checked[i] && <CheckCircle2 size={16} className="text-space-blue" />}
            </div>
            <span className="text-lg font-semibold">{text}</span>
          </motion.button>
        ))}
      </div>

      <div className="mt-auto flex justify-center">
        <AnimatePresence>
          {allChecked && (
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={onNext} 
              className="btn-primary py-2 px-6"
            >
              READY FOR ACTION
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SlideStory = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [highlights, setHighlights] = useState<Record<number, 'main' | 'detail' | null>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const storySentences = [
    { text: "Barnaby is not your average classroom pet; he is a secret agent in training.", type: 'main' },
    { text: "Every morning, he runs six miles on his silent exercise wheel to stay in peak physical shape.", type: 'detail' },
    { text: "He uses a tiny toothpick to practice navigating through laser grids.", type: 'detail' },
    { text: "Barnaby keeps a close eye on the classroom door to watch for suspicious characters.", type: 'detail' },
    { text: "He is a true hero in a fuzzy coat.", type: 'detail' }
  ];

  const handleHighlight = (index: number, type: 'main' | 'detail') => {
    setHighlights(prev => ({ ...prev, [index]: type }));
  };

  const allCorrect = storySentences.every((s, i) => highlights[i] === s.type);

  useEffect(() => {
    if (allCorrect && !showFeedback) {
      setShowFeedback(true);
      addXP(150);
    }
  }, [allCorrect, addXP, showFeedback]);

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-neon-cyan/20 rounded-lg">
            <BookOpen className="text-neon-cyan" size={24} />
          </div>
          <h2 className="text-2xl font-bold">Barnaby's Secret Story</h2>
        </div>
        <HamsterGif />
      </div>
      
      <p className="text-lg text-neon-cyan italic">Click each sentence to label it as the "Main Idea" or a "Detail"!</p>

      <div className="glass-panel p-6 space-y-4">
        <p className="text-xl leading-relaxed">
          {storySentences.map((s, i) => (
            <span 
              key={i}
              className={`cursor-pointer transition-all px-1 rounded inline-block mb-1 ${
                highlights[i] === 'main' ? 'bg-cyber-lime text-space-blue font-bold shadow-[0_0_10px_rgba(223,255,0,0.5)]' :
                highlights[i] === 'detail' ? 'bg-neon-cyan text-space-blue shadow-[0_0_10px_rgba(0,245,255,0.5)]' :
                'hover:bg-white/10'
              }`}
              onClick={() => {
                if (!highlights[i]) handleHighlight(i, 'main');
                else if (highlights[i] === 'main') handleHighlight(i, 'detail');
                else setHighlights(prev => ({ ...prev, [i]: null }));
              }}
            >
              {s.text}{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <div className="flex gap-6 text-sm font-bold">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-cyber-lime rounded shadow-[0_0_5px_rgba(223,255,0,0.5)]" />
            <span className="text-cyber-lime">Main Idea</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-neon-cyan rounded shadow-[0_0_5px_rgba(0,245,255,0.5)]" />
            <span className="text-neon-cyan">Key Detail</span>
          </div>
        </div>
        <p className="text-xs opacity-70 italic bg-white/5 px-3 py-1 rounded-full">
          Click sentences to cycle: <span className="text-cyber-lime">Main</span> → <span className="text-neon-cyan">Detail</span> → Clear
        </p>
      </div>

      <div className="mt-auto flex justify-center h-12">
        <AnimatePresence>
          {allCorrect && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="bg-cyber-lime text-space-blue px-4 py-1 rounded-full font-black text-sm mb-2 animate-bounce">
                MISSION DECODED! +150 XP
              </div>
              <button onClick={onNext} className="btn-primary py-2 px-8">
                CONTINUE TRAINING
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Slide3 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [feedback, setFeedback] = useState<string | null>(null);
  const [solved, setSolved] = useState(false);

  const options = [
    { id: 'seed', label: 'A sunflower seed', icon: '🌻', correct: false, msg: "Too small! That's just a snack, not the whole mission." },
    { id: 'juice', label: 'A juice box', icon: '🧃', correct: false, msg: "Sticky, but not the main idea! That's just one event." },
    { id: 'training', label: 'Barnaby training as a spy', icon: '🕵️‍♂️', correct: true, msg: "BINGO! The whole story is about his secret training!" }
  ];

  const handleSelect = (opt: typeof options[0]) => {
    setFeedback(opt.msg);
    if (opt.correct) {
      setSolved(true);
      addXP(100);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">The "Big Boss" Idea</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">The Main Idea is like an umbrella. It covers everything! Click the icons to find the Big Boss of Barnaby's story.</p>
      
      <div className="flex-1 flex items-center justify-center gap-4 flex-wrap">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSelect(opt)}
            className={`w-36 h-36 rounded-2xl flex flex-col items-center justify-center p-2 text-center space-y-2 border-2 transition-colors ${
              feedback === opt.msg 
                ? opt.correct ? 'border-cyber-lime bg-cyber-lime/10' : 'border-sunset-orange bg-sunset-orange/10'
                : 'border-white/10 bg-white/5 hover:border-neon-cyan'
            }`}
          >
            <span className="text-4xl">{opt.icon}</span>
            <span className="font-bold text-sm">{opt.label}</span>
          </motion.button>
        ))}
      </div>

      {feedback && (
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-2 rounded-lg text-center font-bold text-base ${solved ? 'bg-cyber-lime text-space-blue' : 'bg-sunset-orange text-white'}`}
        >
          {feedback}
        </motion.div>
      )}
    </div>
  );
};

const Slide4 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [seen, setSeen] = useState(new Set([0]));

  const details = [
    { title: "Physical Shape", text: "He runs six miles on his squeaky wheel every morning!" },
    { title: "Laser Practice", text: "He uses a toothpick to practice grid navigation." },
    { title: "Emergency Energy", text: "He has a secret stash of sunflower seeds hidden away." },
    { title: "Constant Monitoring", text: "He's actually watching the room for suspicious activity!" }
  ];

  const rotate = () => {
    const next = (activeIndex + 1) % details.length;
    setRotation(rotation + 90);
    setActiveIndex(next);
    setSeen(prev => new Set(prev).add(next));
    if (seen.size === details.length) addXP(25);
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">The "Helper" Facts</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">Details are like the legs of a table. They support the Big Boss! Spin the dial to find evidence.</p>
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="relative">
          <motion.div 
            animate={{ rotate: rotation }}
            className="w-48 h-48 rounded-full border-4 border-white/20 flex items-center justify-center bg-gradient-to-br from-space-blue to-neon-cyan/20 relative"
          >
            <div className="absolute top-1 w-1.5 h-6 bg-cyber-lime rounded-full" />
            <RefreshCcw size={32} className="text-white/50" />
          </motion.div>
          <button 
            onClick={rotate}
            className="absolute inset-0 w-full h-full rounded-full cursor-pointer"
            aria-label="Spin the dial"
          />
        </div>

        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel max-w-sm w-full border-l-4 border-l-cyber-lime py-4 px-6"
        >
          <h3 className="text-xl font-bold text-cyber-lime mb-1">{details[activeIndex].title}</h3>
          <p className="text-lg italic leading-tight">"{details[activeIndex].text}"</p>
        </motion.div>
      </div>
    </div>
  );
};

const Slide5 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [val, setVal] = useState(50);
  const [solved, setSolved] = useState(false);

  const getFeedback = () => {
    if (val < 33) return { text: "Barnaby got sticky.", status: "Too Tiny!", color: "text-sunset-orange" };
    if (val > 66) return { text: "The history of hamsters.", status: "Too Huge!", color: "text-sunset-orange" };
    return { text: "Barnaby is a secret agent in training.", status: "Just Right!", color: "text-cyber-lime" };
  };

  const feedback = getFeedback();

  useEffect(() => {
    if (val >= 33 && val <= 66 && !solved) {
      setSolved(true);
      addXP(50);
    }
  }, [val]);

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">The "Just Right" Meter</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">Don't get trapped by details that are too small or topics that are too big!</p>
      
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <div className="w-full max-w-xl glass-panel text-center p-6 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={feedback.text}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-2"
            >
              <span className={`text-xs font-bold uppercase tracking-widest ${feedback.color}`}>
                {feedback.status}
              </span>
              <p className="text-2xl font-bold">{feedback.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="w-full max-w-md space-y-2">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={val} 
            onChange={(e) => setVal(parseInt(e.target.value))}
            className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
          />
          <div className="flex justify-between text-[10px] font-bold text-white/40 uppercase tracking-tighter">
            <span>Too Small</span>
            <span>Perfect</span>
            <span>Too Big</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide6 = ({ onNext, onPrev }: SlideProps) => {
  const [activeTab, setActiveTab] = useState('S');

  const tabs = {
    S: { title: "Scan", text: "Scan the title and pictures. What pops out at you?" },
    P: { title: "Pick", text: "Pick out repeating words. What keeps coming up?" },
    Y: { title: "Yell", text: "Yell it in 5 words or less! (e.g., Barnaby is a secret spy.)" }
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">The S.P.Y. Strategy</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">Use this secret code to catch the Main Idea every time!</p>
      
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <div className="flex space-x-3">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`w-16 h-16 rounded-xl text-3xl font-black transition-all ${
                activeTab === key 
                  ? 'bg-cyber-lime text-space-blue scale-105 shadow-[0_0_15px_rgba(223,255,0,0.5)]' 
                  : 'bg-white/5 text-white/40 hover:bg-white/10'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel max-w-md w-full text-center p-6 border-t-4 border-t-cyber-lime"
        >
          <h3 className="text-2xl font-black text-cyber-lime mb-2 uppercase tracking-widest">
            {tabs[activeTab as keyof typeof tabs].title}
          </h3>
          <p className="text-xl leading-snug">
            {tabs[activeTab as keyof typeof tabs].text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const Slide7 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [items, setItems] = useState([
    { id: 1, text: "Barnaby is a brave spy", type: 'main' },
    { id: 2, text: "Squeaky wheel exercise", type: 'detail' },
    { id: 3, text: "Hidden seed stash", type: 'detail' },
    { id: 4, text: "Toothpick practice", type: 'detail' }
  ]);
  const [sorted, setSorted] = useState<{ main: any[], detail: any[] }>({ main: [], detail: [] });

  const handleSort = (item: any, target: 'main' | 'detail') => {
    if (item.type === target) {
      setSorted(prev => ({ ...prev, [target]: [...prev[target], item] }));
      setItems(prev => prev.filter(i => i.id !== item.id));
      addXP(25);
    } else {
      // Shake animation or feedback
    }
  };

  const isDone = items.length === 0;

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">Sort the Evidence</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">Barnaby dropped his files! Help him sort the Big Boss Idea from the Helper Details.</p>
      
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <div className="h-40 border-2 border-dashed border-white/20 rounded-xl p-2 flex flex-wrap gap-2 items-center justify-center overflow-hidden">
            {items.map(item => (
              <motion.button
                key={item.id}
                layoutId={`item-${item.id}`}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 p-2 rounded-lg font-bold cursor-move border border-white/20 text-xs"
                onClick={() => {}} 
              >
                {item.text}
                <div className="mt-1 flex justify-center space-x-1">
                  <button onClick={() => handleSort(item, 'main')} className="text-[8px] bg-neon-cyan text-space-blue px-1.5 rounded">BOSS</button>
                  <button onClick={() => handleSort(item, 'detail')} className="text-[8px] bg-electric-purple text-white px-1.5 rounded">HELPER</button>
                </div>
              </motion.button>
            ))}
            {items.length === 0 && <span className="text-white/20 italic text-xs">All files sorted!</span>}
          </div>
        </div>

        <div className="grid grid-rows-2 gap-2">
          <div className="glass-panel border-l-4 border-l-neon-cyan flex flex-col p-3">
            <h3 className="font-bold text-neon-cyan mb-1 flex items-center text-xs"><Target size={12} className="mr-1"/> BIG BOSS IDEA</h3>
            <div className="flex flex-wrap gap-1">
              {sorted.main.map(i => <span key={i.id} className="bg-neon-cyan/20 text-neon-cyan px-2 py-0.5 rounded-full text-[10px] font-bold">{i.text}</span>)}
            </div>
          </div>
          <div className="glass-panel border-l-4 border-l-electric-purple flex flex-col p-3">
            <h3 className="font-bold text-electric-purple mb-1 flex items-center text-xs"><Info size={12} className="mr-1"/> HELPER DETAILS</h3>
            <div className="flex flex-wrap gap-1">
              {sorted.detail.map(i => <span key={i.id} className="bg-electric-purple/20 text-electric-purple px-2 py-0.5 rounded-full text-[10px] font-bold">{i.text}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide8 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [solved, setSolved] = useState(false);

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">Real-Life Spy Work</h2>
        <HamsterGif />
      </div>
      <p className="text-lg">Find the most important part of this pizza box so we don't ruin lunch.</p>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-[280px] aspect-square bg-sunset-orange rounded-2xl p-4 shadow-2xl flex flex-col items-center justify-between border-4 border-white/10">
          <Pizza size={80} className="text-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="text-center space-y-1 z-10">
            <h3 className="text-2xl font-black italic tracking-tighter">AGENT PEPPERONI'S</h3>
            <p className="text-[10px] font-bold">"The Best Intel in Town"</p>
          </div>

          <div className="w-full space-y-2 z-10">
            <div className="bg-white/10 p-2 rounded-lg border border-white/20">
              <p className="text-[8px] uppercase font-bold text-white/50">Ingredients</p>
              <p className="text-xs">Cheese, Sauce, Dough, Secret Spices</p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              onClick={() => { setSolved(true); addXP(50); }}
              className={`w-full p-3 rounded-lg border-2 transition-all text-center ${
                solved ? 'bg-cyber-lime border-cyber-lime text-space-blue' : 'bg-white/20 border-neon-cyan animate-pulse'
              }`}
            >
              <p className="text-[8px] uppercase font-bold opacity-70">Cooking Instructions</p>
              <p className="text-xl font-black">425°F for 15 MINS</p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide9 = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    "The graphics are cool.",
    "You should come play this game with me!",
    "I got a new sword."
  ];

  const handleSelect = (i: number) => {
    setSelected(i);
    if (i === 1) addXP(50);
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-neon-cyan/20 rounded-lg">
            <MessageSquare className="text-neon-cyan" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-neon-cyan">The Social Media Spy</h2>
        </div>
        <HamsterGif />
      </div>
      <p className="text-lg">What is the "Big Boss" point they are trying to make?</p>
      
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-48 h-[320px] bg-gray-900 rounded-[2rem] border-[6px] border-gray-800 p-3 relative shadow-2xl">
          <div className="w-12 h-4 bg-gray-800 rounded-full mx-auto mb-2" />
          <div className="space-y-1">
            <div className="bg-neon-cyan/20 p-2 rounded-xl rounded-tl-none text-[10px]">
              OMG the graphics are cool and the boss is a dragon and I got a new sword and you should come play!
            </div>
          </div>
          <div className="absolute bottom-6 left-3 right-3 h-8 bg-white/5 rounded-full flex items-center px-3">
            <span className="text-[8px] text-white/30">Type...</span>
          </div>
        </div>

        <div className="space-y-2 w-full max-w-sm">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full p-3 rounded-xl border-2 text-left transition-all ${
                selected === i 
                  ? i === 1 ? 'bg-cyber-lime border-cyber-lime text-space-blue' : 'bg-sunset-orange border-sunset-orange text-white'
                  : 'bg-white/5 border-white/10 hover:border-neon-cyan'
              }`}
            >
              <span className="text-base font-bold">{opt}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const SlideWritingMission = ({ onNext, onPrev, addXP }: SlideProps) => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; type: 'success' | 'error' | 'hint' } | null>(null);
  const [loading, setLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const starters = [
    "The main idea is...",
    "Barnaby is a spy because...",
    "The most important part is...",
    "I think the story is about..."
  ];

  const checkResponse = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setFeedback(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are a friendly Spy Academy Instructor. A student is trying to identify the main idea of a story about Barnaby, a classroom hamster who is secretly a spy.
        
        Story context: Barnaby is a secret agent in training. He runs on a wheel, practices laser grids with toothpicks, and watches the room for suspicious activity.
        
        Student response: "${input}"
        
        Rules for your feedback:
        1. If the student is off-task (talking about unrelated things like video games, pizza, or being silly), provide "Immediate Corrective Feedback" by gently reminding them of the mission and asking them to focus on Barnaby the spy.
        2. If they are close but missing the "Big Boss Idea" (Barnaby being a spy), give a helpful hint.
        3. If they correctly identify that the main idea is Barnaby being a spy, praise them enthusiastically.
        
        Respond in JSON format:
        {
          "isCorrect": boolean,
          "feedback": "Your friendly instructor feedback here",
          "type": "success" | "error" | "hint"
        }`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text);
      setFeedback({ text: result.feedback, type: result.type });
      setIsCorrect(result.isCorrect);
      if (result.isCorrect) addXP(100);
    } catch (error) {
      console.error("AI Error:", error);
      setFeedback({ text: "Radio silence from HQ! Try again, agent.", type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-neon-cyan/20 rounded-lg">
            <Pencil className="text-neon-cyan" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-neon-cyan">Final Mission: Decode the Idea</h2>
        </div>
        <HamsterGif />
      </div>

      <div className="flex-1 flex flex-col space-y-4">
        <div className="glass-panel p-4 border-l-4 border-cyber-lime bg-cyber-lime/5">
          <div className="flex items-center gap-2 text-cyber-lime font-bold mb-2">
            <Brain size={18} />
            <span>Mission Objective</span>
          </div>
          <p className="text-lg italic">"In your own words, what is the Big Boss Idea of Barnaby's story?"</p>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {starters.map((starter, i) => (
              <button
                key={i}
                onClick={() => setInput(starter)}
                className="text-xs bg-white/5 hover:bg-neon-cyan/20 border border-white/10 hover:border-neon-cyan px-3 py-1 rounded-full transition-all"
              >
                {starter}
              </button>
            ))}
          </div>
          
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your secret report here..."
              className="w-full h-32 bg-gray-900/50 border-2 border-white/10 rounded-xl p-4 text-lg focus:border-neon-cyan outline-none transition-all resize-none"
            />
            <div className="absolute bottom-3 right-3 text-white/20">
              <Pencil size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={checkResponse}
            disabled={loading || !input.trim() || isCorrect}
            className="btn-primary py-3 px-10 flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            {isCorrect ? "MISSION COMPLETE" : "SEND TO HQ"}
          </button>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border-2 w-full max-w-md text-center font-bold ${
                  feedback.type === 'success' ? 'bg-cyber-lime/20 border-cyber-lime text-cyber-lime' :
                  feedback.type === 'error' ? 'bg-sunset-orange/20 border-sunset-orange text-sunset-orange' :
                  'bg-neon-cyan/20 border-neon-cyan text-neon-cyan'
                }`}
              >
                {feedback.text}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Slide10 = ({ onPrev, xp }: { onPrev: () => void, xp: number }) => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      q: "What is a Main Idea?",
      options: ["A tiny fact", "The Big Boss idea of the story", "The name of the author"],
      correct: 1,
      rationale: "The main idea covers the whole 'Big Picture' of the story."
    },
    {
      q: "In our story, 'Barnaby hides seeds' is a...",
      options: ["Main Idea", "Key Detail", "Title"],
      correct: 1,
      rationale: "This is a small fact that proves he is a spy."
    },
    {
      q: "Which is the best Main Idea for the Barnaby story?",
      options: ["Barnaby is a secret agent in training.", "Juice boxes are very sticky.", "Vacuum cleaners are loud."],
      correct: 0,
      rationale: "This covers the whole passage, not just one small part."
    }
  ];

  const handleAnswer = (qIdx: number, aIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[qIdx] = aIdx;
    setAnswers(newAnswers);
  };

  const score = answers.filter((a, i) => a === questions[i].correct).length;

  return (
    <div className="flex flex-col h-full space-y-4 p-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neon-cyan">Spy Academy Graduation</h2>
        <div className="flex items-center space-x-2">
          <HamsterGif />
          <div className="bg-cyber-lime text-space-blue px-3 py-1 rounded-full font-black text-sm">
            XP: {xp}
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-4">
          {questions.map((q, qIdx) => (
            <div key={qIdx} className="space-y-2">
              <h3 className="text-base font-bold leading-tight">{qIdx + 1}. {q.q}</h3>
              <div className="grid grid-cols-1 gap-1.5">
                {q.options.map((opt, aIdx) => (
                  <button
                    key={aIdx}
                    onClick={() => handleAnswer(qIdx, aIdx)}
                    className={`p-2.5 rounded-lg border-2 text-left transition-all text-sm ${
                      answers[qIdx] === aIdx 
                        ? 'bg-neon-cyan border-neon-cyan text-space-blue' 
                        : 'bg-white/5 border-white/10 hover:border-neon-cyan'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button 
            disabled={answers.length < 3}
            onClick={() => setShowResults(true)}
            className="btn-primary w-full py-2 disabled:opacity-50 text-base"
          >
            SUBMIT FINAL REPORT
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center space-y-4 py-4"
        >
          <div className="relative">
            <Trophy size={80} className="text-cyber-lime" />
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity }}
              className="absolute -top-2 -right-2 bg-sunset-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
            >
              GRADUATED!
            </motion.div>
          </div>
          
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black uppercase tracking-widest">Mission Success!</h3>
            <p className="text-xl text-neon-cyan">Score: {score} / 3</p>
          </div>

          <button onClick={() => window.location.reload()} className="btn-secondary py-2 px-6">
            RESTART TRAINING
          </button>
        </motion.div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [xp, setXp] = useState(0);

  const next = () => setCurrentSlide(prev => Math.min(prev + 1, 10));
  const prev = () => setCurrentSlide(prev => Math.max(prev - 1, 0));
  const addXP = (amount: number) => setXp(prev => prev + amount);

  const slides = [
    <Slide1 onNext={next} />,
    <Slide2 onNext={next} onPrev={prev} addXP={addXP} />,
    <SlideStory onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide3 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide4 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide5 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide6 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide7 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide8 onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide9 onNext={next} onPrev={prev} addXP={addXP} />,
    <SlideWritingMission onNext={next} onPrev={prev} addXP={addXP} />,
    <Slide10 onPrev={prev} xp={xp} />
  ];

  return (
    <div className="min-h-screen bg-space-blue text-white flex items-center justify-center p-4 textured-rainbow overflow-hidden">
      <div className="w-full max-w-5xl min-h-[650px] max-h-[90vh] bg-space-blue/60 backdrop-blur-xl rounded-[2rem] border-4 border-white/10 shadow-2xl relative overflow-hidden flex flex-col textured-rainbow">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-white/5 z-20">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((currentSlide + 1) / 12) * 100}%` }}
            className="h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)]"
          />
        </div>

        {/* XP Counter */}
        <div className="absolute top-4 right-6 z-20 flex items-center space-x-2 bg-space-blue/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
          <Trophy size={14} className="text-cyber-lime" />
          <span className="text-xs font-black tracking-widest text-cyber-lime">{xp} XP</span>
        </div>

        {/* Content */}
        <div className="flex-1 relative overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="min-h-full p-6 md:p-10 flex flex-col"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Global Navigation Footer */}
        <div className="w-full p-4 md:p-6 bg-space-blue/95 backdrop-blur-lg border-t border-white/10 flex justify-between items-center z-30 shrink-0">
          <button 
            onClick={prev} 
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 font-bold transition-all ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'text-neon-cyan hover:scale-105 active:scale-95'}`}
          >
            <div className="w-10 h-10 rounded-full border-2 border-neon-cyan flex items-center justify-center">
              <ChevronLeft size={24} />
            </div>
            <span className="hidden sm:inline uppercase tracking-widest text-xs">Previous</span>
          </button>

          <div className="flex space-x-2">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-neon-cyan w-4' : 'bg-white/20'}`}
              />
            ))}
          </div>

          <button 
            onClick={next} 
            disabled={currentSlide === 10}
            className={`flex items-center space-x-2 font-bold transition-all ${currentSlide === 10 ? 'opacity-0 pointer-events-none' : 'text-neon-cyan hover:scale-105 active:scale-95'}`}
          >
            <span className="hidden sm:inline uppercase tracking-widest text-xs">Next</span>
            <div className="w-10 h-10 rounded-full border-2 border-neon-cyan flex items-center justify-center">
              <ChevronRight size={24} />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
