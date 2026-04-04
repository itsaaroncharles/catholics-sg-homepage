import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-p881keacq0';
import VideoGenerationConfirmation from '../imports/VideoGenerationConfirmation1';
import ProfilePage from './ProfilePage';
import CommunityPage from './CommunityPage';
import VolunteerOpeningsPage from './VolunteerOpeningsPage';
import articleIcon from "../assets/article-icon.svg";
import imgImage59 from "../assets/Daily Reading.svg";
import imgImage3 from "../assets/Daily rosary.svg";
import imgImage4 from "../assets/AI Spiritual partner.svg";
import imgImage60 from "../assets/Volunteer openings.svg";
import imgImage5 from "../assets/Offertory.svg";
import imgImage6 from "../assets/Education centre.svg";
import imgImage11 from "../assets/Cardinal Wiliam.svg";
import imgImage13 from "../assets/Fr Adrian.svg";
import imgImage14 from "../assets/Fr Luke.svg";
import imgMassSchedule from "../assets/Mass schedule.svg";
import imgExploreMore from "../assets/Explore more.svg";
import weeklyBulletinImg from "../assets/Weekly_Bulletin.png";
import archPastoralPlanImg from "../assets/Archdiocesan_Pastoral_Plan.png";
import lentToEasterImg from "../assets/Lent_to_Easter_Reflection.png";

// Figma asset URLs for news
const newsImg1 = "https://www.figma.com/api/mcp/asset/896dc1cb-8e3b-46a9-885c-3037b19925c5";
const newsImg2 = "https://www.figma.com/api/mcp/asset/6f0054d8-cc94-4161-a496-468cfd99c30c";

// Bulletin carousel slides
const bulletinSlides = [
  {
    bgImg: "https://www.figma.com/api/mcp/asset/a745caad-2f38-4faa-afc8-7ee1c428ebb0",
    iconImg: weeklyBulletinImg,
    title: "Our Lady of Perpetual Succour weekly bulletin",
    subtitle: "Download the bulletin here",
  },
  {
    bgImg: "https://www.figma.com/api/mcp/asset/b6fc1e81-6e11-40ea-8913-09deca41ff01",
    iconImg: archPastoralPlanImg,
    title: "Archdiocesan pastoral plan 2025 \u2013 2035",
    subtitle: "Download the full plan here",
  },
  {
    bgImg: "https://www.figma.com/api/mcp/asset/314c692d-3470-4790-8af7-6f94d9043c1b",
    iconImg: lentToEasterImg,
    title: "Lent to Easter Reflection Booklet 2026",
    subtitle: "Download the booklet here",
  },
];


// Animated AI Icon Component
function MingcuteAiFill() {
  return (
    <motion.div 
      className="relative shrink-0 size-[24px]"
      animate={{ 
        scale: [0.8, 1, 0.8] 
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_8.33%_0.78%_8.73%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9067 21.814">
            <g>
              <path d={svgPaths.pbe3cd00} fill="#E7C749" />
              <path d={svgPaths.p3d8e2800} fill="#E7C749" />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Animated Search Button
function AnimatedSearchButton() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Ask questions about the Church",
    "Ask questions about the Faith",
    "Ask questions about anything"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white content-stretch flex gap-[8px] h-[44px] items-center pl-[13px] pr-[16px] py-px rounded-[12px] w-full">
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-[12px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #e92823, #E7C749, #e92823)',
          backgroundSize: '200% 100%',
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '200% 50%', '0% 50%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Shadow overlay */}
      <div 
        aria-hidden="true" 
        className="absolute border border-transparent border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]" 
      />
      
      <div className="relative shrink-0 size-[24px] flex items-center justify-center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.pfe415c0} fill="#898989" />
          </g>
        </svg>
      </div>

      <div className="flex-[1_0_0] font-['Fira_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.5)] text-ellipsis whitespace-nowrap flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="leading-[20px]"
          >
            {texts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      
      <MingcuteAiFill />
    </div>
  );
}

// Bottom Navigation
type Tab = 'home' | 'community' | 'resources' | 'me';

function BottomNav({ activeTab, onTabChange, visible }: { activeTab: Tab; onTabChange: (tab: Tab) => void; visible: boolean }) {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 z-50"
      initial={{ x: '-50%' }}
      style={{ x: '-50%' }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div 
        className="content-stretch flex flex-col items-center p-[12px] rounded-[999px] shrink-0 w-[329px]"
        style={{
          background: 'rgba(23, 23, 23, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {/* Home */}
          <button onClick={() => onTabChange('home')} className={`content-stretch cursor-pointer flex flex-col gap-[6px] items-center px-[16px] relative shrink-0 ${activeTab !== 'home' ? 'opacity-60' : ''}`}>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                  <path d={svgPaths.p4acc900} fill="white" />
                </svg>
              </div>
            </div>
            <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px] text-white">Home</p>
          </button>

          {/* Community */}
          <button onClick={() => onTabChange('community')} className={`content-stretch cursor-pointer flex flex-col gap-[6px] items-center px-[16px] relative shrink-0 ${activeTab !== 'community' ? 'opacity-60' : ''}`}>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[8.33%_4.17%_8.44%_4.17%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.9748">
                  <g>
                    <path d={svgPaths.p15a8c200} fill="white" />
                    <path d={svgPaths.p1236c00} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px] text-white">Community</p>
          </button>

          {/* Resources */}
          <button onClick={() => onTabChange('resources')} className={`content-stretch cursor-pointer flex flex-col gap-[6px] items-center px-[16px] relative shrink-0 ${activeTab !== 'resources' ? 'opacity-60' : ''}`}>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[2.08%_8.33%_4.17%_8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.5">
                  <g>
                    <path d={svgPaths.p1e58cf00} fill="white" />
                    <path d={svgPaths.p25cd1100} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px] text-white">Resources</p>
          </button>

          {/* Me */}
          <button onClick={() => onTabChange('me')} className={`content-stretch cursor-pointer flex flex-col gap-[6px] items-center px-[16px] relative shrink-0 ${activeTab !== 'me' ? 'opacity-60' : ''}`}>
            <div className="relative shrink-0 size-[24px]">
              <div className="absolute inset-[4.17%_8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
                  <g>
                    <path d={svgPaths.p22062c00} fill="white" />
                    <path d={svgPaths.p397a9e80} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px] text-white">Me</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}


export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [showVolunteerPage, setShowVolunteerPage] = useState(false);
  const [verseIndex, setVerseIndex] = useState(0);
  const [bulletinIndex, setBulletinIndex] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const bulletinScrollRef = useRef<HTMLDivElement>(null);
  const bulletinDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const verses = [
    { text: "I am the way, the truth and the life.", reference: "- John 14:6" },
    { text: "Peace be with you, always.", reference: "- John 20:19" },
    { text: "Love one another as I have loved you.", reference: "- John 13:34" }
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bulletinScrollRef.current) {
        const width = bulletinScrollRef.current.offsetWidth;
        const scrollLeft = bulletinScrollRef.current.scrollLeft;
        const currentIndex = Math.round(scrollLeft / width);
        const nextIndex = (currentIndex + 1) % bulletinSlides.length;
        bulletinScrollRef.current.scrollTo({ left: nextIndex * width, behavior: 'smooth' });
        setBulletinIndex(nextIndex);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const updateBulletinIndex = useCallback(() => {
    if (bulletinScrollRef.current) {
      const width = bulletinScrollRef.current.offsetWidth;
      const scrollLeft = bulletinScrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / width);
      if (newIndex >= 0 && newIndex < bulletinSlides.length) {
        setBulletinIndex(newIndex);
      }
    }
  }, []);

  const handleBulletinScroll = useCallback(() => {
    if (bulletinDebounceRef.current) {
      clearTimeout(bulletinDebounceRef.current);
    }
    bulletinDebounceRef.current = setTimeout(updateBulletinIndex, 150);
  }, [updateBulletinIndex]);

  // Use scrollend for accurate final position (fires after snap settles)
  useEffect(() => {
    const el = bulletinScrollRef.current;
    if (!el) return;
    const onScrollEnd = () => {
      if (bulletinDebounceRef.current) {
        clearTimeout(bulletinDebounceRef.current);
      }
      updateBulletinIndex();
    };
    el.addEventListener('scrollend', onScrollEnd);
    return () => el.removeEventListener('scrollend', onScrollEnd);
  }, [updateBulletinIndex]);

  return (
    <div className="min-h-screen bg-[#fffcf5] relative" style={{ maxWidth: '430px', margin: '0 auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        *::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {showVolunteerPage ? (
        <VolunteerOpeningsPage onBack={() => { setShowVolunteerPage(false); window.scrollTo(0, 0); }} />
      ) : activeTab === 'me' ? (
        <ProfilePage onBottomSheetChange={setBottomSheetOpen} />
      ) : activeTab === 'community' ? (
        <CommunityPage />
      ) : (
      <>
      {/* Hero Section */}
      <div className="relative h-[300px] mb-[-24px]">
        <div className="absolute h-[300px] left-0 top-0 w-full overflow-clip">
          <div className="absolute h-[300px] left-1/2 -translate-x-1/2 top-0 w-[646px]">
            <VideoGenerationConfirmation />
          </div>

          {/* Text Overlay */}
          <div className="absolute bottom-[45px] left-[16px] w-[292px] flex flex-col gap-[12px]">
            <div className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[24px] text-white">
              <p className="font-['Fira_Sans_Condensed:Regular',sans-serif] mb-0">Peace be with you,</p>
              <p className="font-['Fira_Sans_Condensed:Bold',sans-serif]">Aaron Gabriel</p>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={verseIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#c6c6c6] text-[12px] tracking-[0.1px]"
              >
                {verses[verseIndex].text}<br />{verses[verseIndex].reference}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Video Progress Indicator */}
          <div className="absolute bottom-[40px] right-[16px] bg-[rgba(0,0,0,0.3)] flex gap-[4px] p-[4px] rounded-[99px]">
            {verses.map((_, index) => (
              <div
                key={index}
                className={`h-[4px] rounded-[999px] transition-all duration-300 ${
                  index === verseIndex ? 'w-[24px] bg-white' : 'w-[8px] bg-[#aaa]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-[#fffcf5] relative rounded-tl-[16px] rounded-tr-[16px] z-10">
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="flex flex-col items-start px-[16px] pt-[16px]">
            <AnimatedSearchButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[16px] px-[16px] pt-[16px] pb-[120px]">
        {/* Explore Grid - 2 rows of 4 */}
        <div className="grid grid-cols-4 gap-[8px]">
            {/* Daily Reading */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage59} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Daily Reading</p>
            </div>

            {/* Daily Rosary */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage3} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Daily{'\n'}Rosary</p>
            </div>

            {/* AI Spiritual Partner */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage4} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Private reflection</p>
            </div>

            {/* Volunteer openings - clickable */}
            <button
              onClick={() => { setShowVolunteerPage(true); window.scrollTo(0, 0); }}
              className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] cursor-pointer border-none"
            >
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage60} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Volunteer openings</p>
            </button>

            {/* Mass schedule */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgMassSchedule} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Mass schedule</p>
            </div>

            {/* Offertory & Giving */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage5} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Offertory & Giving</p>
            </div>

            {/* Education centre */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage6} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Education centre</p>
            </div>

            {/* Explore more */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgExploreMore} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Explore{'\n'}more</p>
            </div>
        </div>

        {/* Bulletin Carousel */}
        <div className="relative w-full rounded-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)]">
          <div
            ref={bulletinScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
            onScroll={handleBulletinScroll}
          >
            {bulletinSlides.map((slide, i) => (
              <button
                key={i}
                className="snap-start bg-white cursor-pointer flex gap-[19px] items-center overflow-clip p-[16px] relative rounded-[16px] w-full border-none text-left shrink-0"
              >
                {/* Elliptical background */}
                <div className="-translate-x-1/2 absolute flex h-[329px] items-center justify-center left-[calc(50%+10px)] top-[-23px] w-[493px] pointer-events-none">
                  <div className="-scale-y-100 flex-none">
                    <img alt="" className="h-[329px] w-[493px] object-cover" src={slide.bgImg} />
                  </div>
                </div>
                <div className="h-[64px] shrink-0 w-[70px] relative z-[1]">
                  <img alt="" className="h-full w-full object-contain" src={slide.iconImg} />
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-center relative z-[1] w-[210px] shrink-0">
                  <p
                    className="bg-clip-text font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[16px] text-[transparent] tracking-[0.1105px] w-full"
                    style={{ backgroundImage: "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)" }}
                  >
                    {slide.title}
                  </p>
                  <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#52371c] text-[12px] tracking-[0.043px]">
                    {slide.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>
          {/* Pagination dots */}
          <div className="absolute bg-[rgba(0,0,0,0.3)] flex gap-[4px] items-center p-[4px] right-[8px] rounded-[99px] top-[8px] z-10">
            {bulletinSlides.map((_, i) => (
              <div
                key={i}
                className={`h-[4px] rounded-[999px] transition-all duration-300 ${
                  i === bulletinIndex ? 'w-[10px] bg-white' : 'w-[4px] bg-[#d3d3d3]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scripture Reflections */}
        <div className="flex flex-col gap-[16px] pt-[16px]">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[18px]">Scripture reflections</p>
          
          <div className="flex gap-[12px] overflow-x-auto -mx-[16px] px-[16px] py-[8px] -my-[8px] touch-pan-x overscroll-x-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex flex-col gap-[10px] h-[240px] justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
              <div className="absolute inset-0">
                <img alt="" className="w-full h-full object-cover" src={imgImage11} />
                <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[121px] left-0 opacity-70 to-black w-full" />
              </div>
              <div className="flex flex-col gap-[8px] text-white relative z-10">
                <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[16px] tracking-[0.1px]">Cardinal Willian SC Goh</p>
                <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] text-[14px] tracking-[0.1px]">Sun, 1 Mar 2026</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-[10px] h-[240px] justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
              <div className="absolute inset-0">
                <img alt="" className="w-full h-full object-cover" src={imgImage13} />
                <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[121px] left-0 opacity-70 to-black w-full" />
              </div>
              <div className="flex flex-col gap-[8px] text-white relative z-10">
                <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[16px] tracking-[0.1px]">Rev Fr Adrian Danker</p>
                <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] text-[14px] tracking-[0.1px]">Sun, 22 Feb 2026</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-[10px] h-[240px] justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
              <div className="absolute inset-0">
                <img alt="" className="w-full h-full object-cover" src={imgImage14} />
                <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[90px] left-0 opacity-70 to-black w-full" />
              </div>
              <div className="flex flex-col gap-[8px] text-white relative z-10">
                <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[16px] tracking-[0.1px]">Rev Fr Luke Fong</p>
                <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] text-[14px] tracking-[0.1px]">Mon, 8 Dec 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Catholic News */}
        <div className="flex flex-col gap-[16px] pt-[16px]">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[18px]">Catholic News</p>

          <div className="flex gap-[16px] overflow-x-auto -mx-[16px] px-[16px] py-[4px] -my-[4px] touch-pan-x overscroll-x-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* News Card 1 */}
            <div className="flex shrink-0 items-stretch">
              <div className="bg-white h-[153px] w-[100px] overflow-hidden rounded-tl-[16px] rounded-bl-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] shrink-0">
                <img alt="" className="w-full h-full object-cover" src={newsImg1} />
              </div>
              <div className="bg-white flex items-start p-[12px] rounded-tr-[16px] rounded-br-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] w-[240px]">
                <div className="flex flex-1 flex-col h-full items-start justify-between">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[#43537b] text-[16px] tracking-[0.1105px] w-full line-clamp-2">
                      St Joseph's silent witness held up as model for families at fea...
                    </p>
                    <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] w-full line-clamp-3">
                      At Saint Joseph's Church (Victoria Street) feast day Mass on March 19, presider Cardinal William Go...
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center mt-[8px]">
                    <div className="flex gap-[4px] items-center">
                      <img alt="" className="shrink-0 size-[16px]" src={articleIcon} />
                      <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px] whitespace-nowrap">
                        2mins read
                      </p>
                    </div>
                    <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px]">•</p>
                    <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px]">
                      1 Apr 26
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="flex shrink-0 items-stretch">
              <div className="bg-white h-[153px] w-[100px] overflow-hidden rounded-tl-[16px] rounded-bl-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] shrink-0">
                <img alt="" className="w-full h-full object-cover" src={newsImg2} />
              </div>
              <div className="bg-white flex items-start p-[12px] rounded-tr-[16px] rounded-br-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] w-[240px]">
                <div className="flex flex-1 flex-col h-full items-start justify-between">
                  <div className="flex flex-col gap-[8px] items-start w-full">
                    <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[#43537b] text-[16px] tracking-[0.1105px] w-full line-clamp-2">
                      Prayer, fasting, and almsgiving
                    </p>
                    <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] w-full line-clamp-3">
                      This season, CATHOLIC NEWS takes a look at what our parishes, schools, and church organisations did by way of the three pillars of Lent.
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center mt-[8px]">
                    <div className="flex gap-[4px] items-center">
                      <img alt="" className="shrink-0 size-[16px]" src={articleIcon} />
                      <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px] whitespace-nowrap">
                        2mins read
                      </p>
                    </div>
                    <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px]">•</p>
                    <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px]">
                      1 Apr 26
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
      )}

      {!bottomSheetOpen && !showVolunteerPage && <BottomNav activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); window.scrollTo(0, 0); }} visible={navVisible} />}
    </div>
  );
}