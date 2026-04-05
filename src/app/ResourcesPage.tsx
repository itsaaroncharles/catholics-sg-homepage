import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from '../imports/svg-p881keacq0';
import resourcesBg from "../assets/Resources-BG.png";
import imgYouthYoungAdults from "../assets/Youth & Young Adults.png";
import imgVocations from "../assets/Vocations.png";
import imgMarriageFamily from "../assets/Marriage & Family.png";
import imgParents from "../assets/Parents.png";
import imgElderly from "../assets/Elderly.png";
import imgMassSchedule from "../assets/Mass schedule.svg";
import imgOffertory from "../assets/Offertory.svg";
import imgVolunteerOpenings from "../assets/Volunteer openings.svg";
import imgDailyReading from "../assets/Daily Reading.svg";
import imgDailyRosary from "../assets/Daily rosary.svg";
import imgAISpiritual from "../assets/AI Spiritual partner.svg";
import imgExploreMore from "../assets/Explore more.svg";
import imgTug from "../assets/Tug.png";
import cardBG from "../assets/card-BG.svg";

// Chevron Right Icon
function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6l6 6-6 6" stroke="#041a52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Menu Item
function ResourceMenuItem({ label }: { label: string }) {
  return (
    <button className="bg-white border-none content-stretch cursor-pointer flex gap-[12px] items-center min-w-[80px] p-[16px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-full text-left">
      <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[normal] not-italic text-[14px] text-black tracking-[0.1px] w-full">
          {label}
        </p>
      </div>
      <ChevronRight />
    </button>
  );
}

// Section Header
function SectionHeader({ title }: { title: string }) {
  return (
    <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[18px] text-[#041A52] tracking-[0.1px]">
      {title}
    </p>
  );
}

// Animated AI Icon for search
function MingcuteAiFill() {
  return (
    <motion.div
      className="relative shrink-0 size-[24px]"
      animate={{ scale: [0.8, 1, 0.8] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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

// Search Bar
function SearchBar() {
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
        animate={{ backgroundPosition: ['0% 50%', '200% 50%', '0% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <div aria-hidden="true" className="absolute border border-transparent border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]" />
      <div className="relative shrink-0 size-[24px] flex items-center justify-center">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g><path d={svgPaths.pfe415c0} fill="#898989" /></g>
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

type ResourceTab = "Knowing our faith" | "Living our faith" | "Mass & Sacraments" | "Our Archdiocese" | "Services & Programmes";

const TABS: ResourceTab[] = [
  "Knowing our faith",
  "Living our faith",
  "Mass & Sacraments",
  "Our Archdiocese",
  "Services & Programmes",
];

// Tab Content: Knowing Our Faith
function KnowingOurFaith() {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* Banner card - same style as homepage bulletin */}
      <button className="bg-white cursor-pointer flex gap-[19px] items-center overflow-clip p-[16px] relative rounded-[16px] w-full border-none text-left shrink-0">
        <div className="-translate-x-1/2 absolute flex h-[329px] items-center justify-center left-[calc(50%+10px)] top-[-23px] w-[493px] pointer-events-none">
          <div className="-scale-y-100 flex-none">
            <img alt="" className="h-[329px] w-[493px] object-cover" src={cardBG} />
          </div>
        </div>
        <div className="h-[64px] shrink-0 w-[70px] relative z-[1]">
          <img alt="" className="h-full w-full object-contain" src={imgTug} />
        </div>
        <div className="flex flex-col gap-[4px] items-start justify-center relative z-[1] flex-1">
          <p
            className="bg-clip-text font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[16px] text-[transparent] tracking-[0.1105px] w-full"
            style={{ backgroundImage: "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)" }}
          >
            Feel a tug after being away from Church for awhile?
          </p>
          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#52371c] text-[12px] tracking-[0.043px]">
            It's your Heavenly Father reaching out and calling you home. Learn more.
          </p>
        </div>
      </button>

      {/* Menu items */}
      <div className="flex flex-col gap-[12px]">
        <ResourceMenuItem label="Jesus of Nazareth" />
        <ResourceMenuItem label="Declaration of faith" />
        <ResourceMenuItem label="Sacred scripture" />
        <ResourceMenuItem label="FAQs" />
      </div>

      {/* Liturgical Seasons */}
      <div className="flex flex-col gap-[16px]">
        <SectionHeader title="Liturgical seasons" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Advent" />
          <ResourceMenuItem label="Christmastide" />
          <ResourceMenuItem label="Lent" />
          <ResourceMenuItem label="Eastertide" />
          <ResourceMenuItem label="Ordinary time" />
        </div>
      </div>
    </div>
  );
}

// Quick link grid item
function QuickLinkCard({ img, label, onClick }: { img: string; label: string; onClick?: () => void }) {
  return (
    <button onClick={onClick} className="bg-white border-none cursor-pointer flex flex-col gap-[12px] h-[108px] items-center w-[calc(25%-6px)] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)]">
      <div className="h-[40px] flex items-center justify-center w-[80px]">
        <img alt="" className="h-[40px] w-auto" src={img} />
      </div>
      <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px]">
        {label}
      </p>
    </button>
  );
}

// Tab Content: Living Our Faith
function LivingOurFaith() {
  const lifeStagesRef = useRef<HTMLDivElement>(null);
  const discipleshipRef = useRef<HTMLDivElement>(null);
  const prayRef = useRef<HTMLDivElement>(null);
  const donationsRef = useRef<HTMLDivElement>(null);
  const volunteerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col gap-[16px]">
      {/* Quick links grid */}
      <div className="flex flex-wrap gap-[8px]">
        <QuickLinkCard img={imgYouthYoungAdults} label="Life Stages" onClick={() => scrollTo(lifeStagesRef)} />
        <QuickLinkCard img={imgVocations} label="Discipleship" onClick={() => scrollTo(discipleshipRef)} />
        <QuickLinkCard img={imgDailyRosary} label="Let's Pray!" onClick={() => scrollTo(prayRef)} />
        <QuickLinkCard img={imgOffertory} label="Donations" onClick={() => scrollTo(donationsRef)} />
        <QuickLinkCard img={imgVolunteerOpenings} label="Volunteer" onClick={() => scrollTo(volunteerRef)} />
      </div>

      {/* Catholic Life Stages */}
      <div ref={lifeStagesRef} className="flex flex-col gap-[16px]">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[#041a52] text-[16px]">Catholic life stages</p>
        <div className="flex gap-[16px] overflow-x-auto touch-pan-x overscroll-x-contain" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
          {[
            { img: imgYouthYoungAdults, label: "Youth & Young\nAdults" },
            { img: imgVocations, label: "Vocations" },
            { img: imgMarriageFamily, label: "Marriage &\nFamily" },
            { img: imgParents, label: "Parents" },
            { img: imgElderly, label: "Elderly" },
          ].map((stage) => (
            <div key={stage.label} className="flex flex-col items-center gap-[8px] shrink-0 w-[80px]">
              <div className="size-[64px] rounded-full overflow-hidden shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]">
                <img alt={stage.label} className="w-full h-full object-cover" src={stage.img} />
              </div>
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#041a52] text-[12px] text-center tracking-[0.043px] whitespace-pre-line line-clamp-2">
                {stage.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Discipleship */}
      <div ref={discipleshipRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Discipleship" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Faith Formation" />
          <ResourceMenuItem label="New Evangelisation" />
          <ResourceMenuItem label="Share The Good News!" />
          <ResourceMenuItem label="Returning Catholics" />
          <ResourceMenuItem label="Care For Creation" />
        </div>
      </div>

      {/* Let's Pray! */}
      <div ref={prayRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Let's Pray!" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Why and How to Pray" />
          <ResourceMenuItem label="The Lord's Prayer" />
          <ResourceMenuItem label="The Angelus" />
          <ResourceMenuItem label="Prayer Book" />
          <ResourceMenuItem label="The Divine Office" />
          <ResourceMenuItem label="The Rosary" />
          <ResourceMenuItem label="Divine Mercy Chaplet" />
        </div>
      </div>

      {/* Donations */}
      <div ref={donationsRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Donations" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Give" />
          <ResourceMenuItem label="Offertory for Parishes" />
          <ResourceMenuItem label="Support Church Online Media" />
          <ResourceMenuItem label="Donation for Charities & Church Organisation" />
        </div>
      </div>

      {/* Volunteering */}
      <div ref={volunteerRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Volunteering" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Pray & Praise" />
          <ResourceMenuItem label="Send Prayer Requests" />
          <ResourceMenuItem label="Pray for Others" />
          <ResourceMenuItem label="Give Thanks" />
          <ResourceMenuItem label="Read Testimonies" />
        </div>
      </div>
    </div>
  );
}

// Tab Content: Mass & Sacraments
function MassAndSacraments() {
  const massRef = useRef<HTMLDivElement>(null);
  const sacramentsRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col gap-[16px]">
      {/* Quick links grid */}
      <div className="flex flex-wrap gap-[8px]">
        <QuickLinkCard img={imgMassSchedule} label="Mass" onClick={() => scrollTo(massRef)} />
        <QuickLinkCard img={imgDailyRosary} label="Sacraments" onClick={() => scrollTo(sacramentsRef)} />
      </div>

      {/* Mass */}
      <div ref={massRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Mass" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Mass Schedule" />
          <ResourceMenuItem label="Online Mass & Other Resources" />
          <ResourceMenuItem label="Mass Readings" />
          <ResourceMenuItem label="The Order of Mass" />
          <ResourceMenuItem label="Liturgical Calendar" />
          <ResourceMenuItem label="Confirmation Dates" />
          <ResourceMenuItem label="Important Days" />
        </div>
      </div>

      {/* Sacraments */}
      <div ref={sacramentsRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Sacraments" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Baptism" />
          <ResourceMenuItem label="Reconciliation" />
          <ResourceMenuItem label="Eucharist" />
          <ResourceMenuItem label="Confirmation" />
          <ResourceMenuItem label="Holy Matrimony" />
          <ResourceMenuItem label="Holy Orders" />
          <ResourceMenuItem label="Anointing Of The Sick" />
        </div>
      </div>
    </div>
  );
}

// Tab Content: Our Archdiocese
function OurArchdiocese() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const directoryRef = useRef<HTMLDivElement>(null);
  const archbishopRef = useRef<HTMLDivElement>(null);
  const whatsOnRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col gap-[16px]">
      {/* Quick links grid */}
      <div className="flex flex-wrap gap-[8px]">
        <QuickLinkCard img={imgDailyReading} label="About us" onClick={() => scrollTo(aboutRef)} />
        <QuickLinkCard img={imgVocations} label="Directory" onClick={() => scrollTo(directoryRef)} />
        <QuickLinkCard img={imgYouthYoungAdults} label="Archbishop" onClick={() => scrollTo(archbishopRef)} />
        <QuickLinkCard img={imgMarriageFamily} label="What's on" onClick={() => scrollTo(whatsOnRef)} />
      </div>

      {/* About us */}
      <div ref={aboutRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="About us" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Overview" />
          <ResourceMenuItem label="History" />
          <ResourceMenuItem label="Programmes" />
          <ResourceMenuItem label="Cathedral" />
          <ResourceMenuItem label="Join us" />
        </div>
      </div>

      {/* Directory */}
      <div ref={directoryRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Directory" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Archdiocese Of Singapore" />
          <ResourceMenuItem label="Priest & Clergy" />
          <ResourceMenuItem label="Parishes" />
          <ResourceMenuItem label="Map Of Churches" />
          <ResourceMenuItem label="Education & Formation" />
          <ResourceMenuItem label="Religious, Clergy, & Prelature Organisations" />
          <ResourceMenuItem label="Lay Organisations" />
          <ResourceMenuItem label="Services And Facilities" />
        </div>
      </div>

      {/* Our Archbishop */}
      <div ref={archbishopRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="Our Archbishop" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Cardinal William Goh" />
          <ResourceMenuItem label="The Cardinalate" />
          <ResourceMenuItem label="The Episcopate" />
          <ResourceMenuItem label="Heart-to-Heart Conversations" />
          <ResourceMenuItem label="Pastoral Plan" />
          <ResourceMenuItem label="Scripture Reflection" />
          <ResourceMenuItem label="Abridged Homily Video" />
          <ResourceMenuItem label="Messages" />
        </div>
      </div>

      {/* What's on */}
      <div ref={whatsOnRef} className="flex flex-col gap-[16px]">
        <SectionHeader title="What's on" />
        <div className="flex flex-col gap-[12px]">
          <ResourceMenuItem label="Events Listing" />
          <ResourceMenuItem label="Notices & Messages" />
          <ResourceMenuItem label="APC" />
          <ResourceMenuItem label="Archdiocesan Assembly" />
          <ResourceMenuItem label="Synod 2021-2024" />
          <ResourceMenuItem label="E-Bulletin" />
          <ResourceMenuItem label="Photos" />
        </div>
      </div>
    </div>
  );
}

// Tab Content: Services & Programmes
function ServicesAndProgrammes() {
  return (
    <div className="flex flex-col gap-[12px]">
      <ResourceMenuItem label="Mental Health" />
      <ResourceMenuItem label="Support & Services" />
      <ResourceMenuItem label="Programmes" />
      <ResourceMenuItem label="Hospital Pastoral Care" />
      <ResourceMenuItem label="Guide for the Final Journey" />
      <ResourceMenuItem label="Legal Aid" />
    </div>
  );
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<ResourceTab>("Knowing our faith");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Knowing our faith": return <KnowingOurFaith />;
      case "Living our faith": return <LivingOurFaith />;
      case "Mass & Sacraments": return <MassAndSacraments />;
      case "Our Archdiocese": return <OurArchdiocese />;
      case "Services & Programmes": return <ServicesAndProgrammes />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf5]">
      {/* Header with background */}
      <div className="relative h-[100px] w-full shrink-0">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={resourcesBg} />
        <div className="absolute bottom-0 left-0 flex items-center gap-[8px] px-[16px] pb-[16px]">
          <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[24px] text-white tracking-[0.1105px]">
            Resources
          </p>
        </div>
      </div>

      {/* Search + Tabs */}
      <div className="bg-[#fffcf5] relative rounded-tl-[16px] rounded-tr-[16px] -mt-[16px] z-10">
        <div className="flex flex-col gap-[12px] px-[16px] pt-[16px]">
          <SearchBar />

          {/* Tab chips */}
          <div className="flex gap-[8px] overflow-x-auto -mx-[16px] px-[16px] pb-[4px]" style={{ scrollbarWidth: 'none' }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 px-[16px] py-[8px] rounded-[999px] font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px] cursor-pointer transition-colors border-none whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#434343] text-white"
                    : "bg-transparent text-[#434343]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col px-[16px] pt-[16px] pb-[120px]">
        {renderTabContent()}
      </div>
    </div>
  );
}
