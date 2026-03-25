import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-p881keacq0';
import VideoGenerationConfirmation from '../imports/VideoGenerationConfirmation1';
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
function BottomNav() {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 z-50"
      initial={{ x: '-50%' }}
      style={{ x: '-50%' }}
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
          <div className="content-stretch flex flex-col gap-[6px] items-center px-[16px] relative shrink-0">
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                  <path d={svgPaths.p4acc900} fill="white" />
                </svg>
              </div>
            </div>
            <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px] text-white">Home</p>
          </div>

          {/* Community */}
          <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0">
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
          </div>

          {/* Resources */}
          <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0">
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
          </div>

          {/* Me */}
          <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0">
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
          </div>
        </div>
      </div>
    </motion.div>
  );
}


export default function App() {
  const [verseIndex, setVerseIndex] = useState(0);
  const verses = [
    { text: "I am the way, the truth and the life.", reference: "- John 14:6" },
    { text: "Peace be with you, always.", reference: "- John 20:19" },
    { text: "Love one another as I have loved you.", reference: "- John 13:34" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVerseIndex((prev) => (prev + 1) % verses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Hero Section */}
      <div className="relative h-[363px] mb-[-24px]">
        <div className="absolute h-[363px] left-0 top-0 w-full overflow-clip">
          <div className="absolute h-[363px] left-1/2 -translate-x-1/2 top-0 w-[646px]">
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
      <div className="bg-[#fffcf5] mb-[-24px] relative rounded-tl-[16px] rounded-tr-[16px] z-10">
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="flex flex-col items-start p-[16px] pb-[8px]">
            <AnimatedSearchButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-[24px] p-[16px] pb-[120px]">
        {/* Explore Section */}
        <div className="flex flex-col gap-[16px] pt-[16px]">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[20px]">Explore</p>

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
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Daily rosary</p>
            </div>

            {/* AI Spiritual Partner */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage4} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Private reflection</p>
            </div>

            {/* Volunteer openings */}
            <div className="bg-white flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]">
              <div className="h-[40px] flex items-center justify-center w-[80px]">
                <img alt="" className="h-[40px] w-auto" src={imgImage60} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Volunteer openings</p>
            </div>

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
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">Explore more</p>
            </div>
          </div>
        </div>

        {/* Scripture Reflections */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[20px]">Scripture reflections</p>
          
          <div className="flex gap-[12px] overflow-x-auto -mx-[16px] px-[16px] touch-pan-x overscroll-x-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
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

        {/* Community Section */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[20px]">Community</p>
          
          <div className="flex gap-[12px] overflow-x-auto -mx-[16px] px-[16px] touch-pan-x overscroll-x-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* Prayer Request Card */}
            <div className="bg-white flex flex-col gap-[12px] pb-[16px] pt-[12px] px-[16px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[244px]">
              <div className="bg-[#faf0cc] px-[12px] py-[4px] rounded-[4px] self-start">
                <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#b8891a] text-[12px]">Prayer request</p>
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] line-clamp-4">
                Hi everyone, it has been really difficult these days navigating life. I feel empty. I feel lost. I feel like giving up. Every step i take feels heavy
              </p>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[rgba(4,26,82,0.57)] text-[12px] tracking-[0.043px]">24 Mar 26</p>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white flex flex-col gap-[12px] pb-[16px] pt-[12px] px-[16px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[244px]">
              <div className="bg-[#e8f0ff] px-[12px] py-[4px] rounded-[4px] self-start">
                <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#2563eb] text-[12px]">Testimonial</p>
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] line-clamp-4">
                Lord, thank You for this lenten season and Your presence usefly during confession today.
              </p>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[rgba(4,26,82,0.57)] text-[12px] tracking-[0.043px]">24 Mar 26</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}