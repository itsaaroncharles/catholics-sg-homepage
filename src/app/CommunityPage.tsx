import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from '../imports/svg-p881keacq0';
import imgPeterTan from "../assets/Peter Tan.png";
import imgAaronGabriel from "../assets/Aaron Gabriel.png";
import imgVaylorPaulTan from "../assets/Vaylor Paul Tan.png";
import imgCristinaOh from "../assets/Cristina Oh.png";
import imgTeoCherhian from "../assets/Teo Cher Hian.png";
import imgDextonLim from "../assets/Dexton Lim.png";

type FilterCategory = "All" | "Encountering god" | "Discovering self" | "RCIY/RCIA";

interface CommunityPost {
  id: number;
  name: string;
  title: string;
  text: string;
  category: string;
  categoryColor: string;
  image: string;
  imageHeight: number;
}

const POSTS: CommunityPost[] = [
  {
    id: 1,
    name: "Peter Tan",
    title: "When the Time is Right: A Journey from Darkness to Light",
    text: "I am a cradle Catholic, raised close to the Church and inspired by family members in religious life. From a young age, I drea...",
    category: "Encountering God",
    categoryColor: "rgba(184,137,26,0.72)",
    image: imgPeterTan,
    imageHeight: 120,
  },
  {
    id: 2,
    name: "Aaron Gabriel",
    title: "The Geometry of Humility",
    text: "During a silent retreat, Nicholas felt gratitude quietly stirring in his heart. As he reflected on God's han...",
    category: "Encountering God",
    categoryColor: "rgba(184,137,26,0.72)",
    image: imgAaronGabriel,
    imageHeight: 140,
  },
  {
    id: 3,
    name: "Vaylor Paul Tan",
    title: "Reflections of a First Year Catholic",
    text: "Finding the words to express what being Catholic means to me as a neophyte is challenging, simply because my journ...",
    category: "RCIA/RCIY",
    categoryColor: "#0e3c84",
    image: imgVaylorPaulTan,
    imageHeight: 140,
  },
  {
    id: 4,
    name: "Cristina Oh",
    title: "Faith in His Timing: How God Made a Way for My Baptism",
    text: "I first started my RCIA journey in 2003 at Novena Church. At that time, I did not understand that being Catholic meant to be in a...",
    category: "RCIA/RCIY",
    categoryColor: "#0e3c84",
    image: imgCristinaOh,
    imageHeight: 160,
  },
  {
    id: 5,
    name: "Teo Cher Hian",
    title: "Reflections of a First Year Catholic",
    text: "My conversion journey started when I decided to go \"steady\" with my wife more than two decades ago. She is a cradle Cath...",
    category: "RCIA/RCIY",
    categoryColor: "#0e3c84",
    image: imgTeoCherhian,
    imageHeight: 160,
  },
  {
    id: 6,
    name: "Dexton Lim",
    title: "Seeking the One who Holds the Answers",
    text: "I had always thought of the story of Noah's Ark and Moses Parting the Red Sea as just bedtime stories. After chancing u...",
    category: "RCIA/RCIY",
    categoryColor: "#0e3c84",
    image: imgDextonLim,
    imageHeight: 140,
  },
];

const FILTERS: FilterCategory[] = ["All", "Encountering god", "Discovering self", "RCIY/RCIA"];

function PostCard({ post }: { post: CommunityPost }) {
  return (
    <div className="flex flex-col shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] rounded-[16px] overflow-hidden">
      {/* Image section */}
      <div className="relative overflow-hidden" style={{ height: `${post.imageHeight}px` }}>
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={post.image}
        />
      </div>

      {/* Text content */}
      <div className="bg-white flex flex-col gap-[12px] p-[12px]">
        {/* Category tag */}
        <p
          className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px]"
          style={{ color: post.categoryColor }}
        >
          {post.category}
        </p>

        {/* Title */}
        <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[#43537b] text-[16px] tracking-[0.1105px] line-clamp-3">
          {post.title}
        </p>

        {/* Body text */}
        <div className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}
        >
          {post.text}
        </div>

        {/* Author name */}
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px]">
          {post.name}
        </p>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");
  const [chipsVisible, setChipsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      if (delta > 5 && currentScrollY > 60) {
        setChipsVisible(false);
      } else if (delta < -5) {
        setChipsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter posts based on active filter
  const filteredPosts = POSTS.filter((post) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "RCIY/RCIA") return post.category === "RCIA/RCIY";
    if (activeFilter === "Encountering god") return post.category === "Encountering God";
    return false;
  });

  // Split posts into two columns for masonry layout
  const leftPosts = filteredPosts.filter((_, i) => i % 2 === 0);
  const rightPosts = filteredPosts.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf5]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#fffcf5]">
        {/* Search bar + Create button */}
        <div className="flex gap-[12px] items-center px-[16px] pt-[16px] pb-[16px]">
          <div className="relative bg-white content-stretch flex flex-1 gap-[8px] h-[44px] items-center pl-[13px] pr-[16px] py-px rounded-[12px]">
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
            <p className="flex-1 font-['Fira_Sans:Regular',sans-serif] leading-[20px] text-[14px] text-[rgba(0,0,0,0.5)]">
              Search for a topic
            </p>
          </div>
          <button className="shrink-0 size-[44px] bg-[#e92823] rounded-full flex items-center justify-center cursor-pointer border-none">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Filter chips */}
        <div className="overflow-hidden bg-[#fffcf5]">
          <motion.div
            animate={{
              y: chipsVisible ? 0 : -44,
              marginBottom: chipsVisible ? 0 : -44,
            }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="pb-[12px]"
          >
            <div className="flex gap-[8px] overflow-x-auto px-[16px]" style={{ scrollbarWidth: 'none' }}>
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-[16px] py-[6px] rounded-[999px] font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px] cursor-pointer transition-colors border-none ${
                    activeFilter === filter
                      ? "bg-[#434343] text-white"
                      : "bg-transparent text-[#434343]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="flex gap-[4px] px-[4px] pb-[120px]">
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-[8px]">
          {leftPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-[8px]">
          {rightPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
