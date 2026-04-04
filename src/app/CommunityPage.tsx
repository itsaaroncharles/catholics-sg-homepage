import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import svgPaths from '../imports/svg-p881keacq0';
import imgJamieOliver from "../assets/Testimonial_Jamie Oliver.png";
import imgAnonymous from "../assets/Testimonial_Anonymous.png";
import imgSerenaWilliams from "../assets/Testimonial_Serena Williams.png";
import imgChadJohnson from "../assets/Testimonial_Chad Johnson.png";
import imgAvatar from "../assets/Community_Avatar.png";

const imgPlayIcon = "https://www.figma.com/api/mcp/asset/c367b73f-1880-478e-ba3c-3cf17489a2ac";
const imgSearchIcon = "https://www.figma.com/api/mcp/asset/7f9faa06-994a-4c18-a368-a050a3b21dbf";

type FilterCategory = "All" | "Testimonials" | "Prayer requests" | "Reflections" | "Videos";

interface CommunityPost {
  id: number;
  name: string;
  text: string;
  category: string;
  categoryColor: string;
  image?: string;
  hasVideo?: boolean;
}

const POSTS: CommunityPost[] = [
  {
    id: 1,
    name: "Jamie Oliver",
    text: "I've been feeling so much lighter since joining this community. It's like a weight has been lifted, and I'm excited to face each new day.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgJamieOliver,
    hasVideo: true,
  },
  {
    id: 2,
    name: "Anonymous",
    text: "Please pray for my upcoming surgery. I'm feeling anxious, but I trust that everything will go smoothly.",
    category: "Prayer request",
    categoryColor: "#b8891a",
  },
  {
    id: 3,
    name: "Anonymous",
    text: "I'm praying for strength and guidance as I navigate a difficult family situation. Any positive thoughts are appreciated. Any positive thoughts are appreciated.",
    category: "Gratitude",
    categoryColor: "rgba(184,137,26,0.72)",
  },
  {
    id: 4,
    name: "Anonymous",
    text: "I'm sending out a huge thank you to everyone who offered advice last week. Your words of encouragement truly lifted my spirits.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgAnonymous,
    hasVideo: true,
  },
  {
    id: 5,
    name: "Serena Williams",
    text: "I'm so grateful for the support I've received here. Knowing I'm not alone has made all the difference.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgSerenaWilliams,
  },
  {
    id: 6,
    name: "Chad Johnson",
    text: "This community has given me a renewed sense of purpose. I'm inspired to give back and make a positive impact on the world.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgChadJohnson,
  },
];

const FILTERS: FilterCategory[] = ["All", "Testimonials", "Prayer requests", "Reflections", "Videos"];

function PlayButton() {
  return (
    <div className="absolute right-[10px] top-[10px] size-[18px]">
      <img alt="Play" className="size-full" src={imgPlayIcon} />
    </div>
  );
}

function PostCard({ post }: { post: CommunityPost }) {
  return (
    <div className="flex flex-col shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] rounded-[16px] overflow-hidden">
      {/* Image section */}
      {post.image && (
        <div className="relative h-[240px] overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            src={post.image}
          />
          {post.hasVideo && <PlayButton />}
        </div>
      )}

      {/* Text content */}
      <div className="bg-white flex flex-col gap-[12px] px-[16px] pt-[12px] pb-[16px]">
        {/* Avatar + name */}
        <div className="flex gap-[8px] items-center">
          <div className="overflow-hidden rounded-[6px] shrink-0 size-[24px]">
            <img alt="" className="size-full object-cover" src={imgAvatar} />
          </div>
          <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[14px] text-black tracking-[0.1105px]">
            {post.name}
          </p>
        </div>

        {/* Body text */}
        <div className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[14px] tracking-[0.043px] overflow-hidden"
          style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}
        >
          {post.text}
        </div>

        {/* Category tag */}
        <p
          className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px]"
          style={{ color: post.categoryColor }}
        >
          {post.category}
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

  // Split posts into two columns for masonry layout
  const leftPosts = POSTS.filter((_, i) => i % 2 === 0);
  const rightPosts = POSTS.filter((_, i) => i % 2 === 1);

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

        {/* Filter chips - clips inside overflow-hidden so it slides behind the header */}
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
                  className={`shrink-0 px-[16px] py-[6px] rounded-[999px] font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px] cursor-pointer transition-colors ${
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
        <div className="flex flex-1 flex-col gap-[4px]">
          {leftPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-1 flex-col gap-[4px]">
          {rightPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
