import { useState } from "react";

// Community post images (from Figma design)
const imgStarryNight = "https://www.figma.com/api/mcp/asset/4cc2bef9-b7ad-47b3-862c-b2463fe3b023";
const imgMountainClouds = "https://www.figma.com/api/mcp/asset/3f1f742d-42c8-455a-9026-5d3e1a23694c";
const imgCoupleField = "https://www.figma.com/api/mcp/asset/5943d0cb-d2a2-486e-831a-02aa3d94a8e8";
const imgChurchBuilding = "https://www.figma.com/api/mcp/asset/2555717e-6315-4354-84e1-fa32045f99ff";
const imgAvatar = "https://www.figma.com/api/mcp/asset/bc403fc7-d578-4b38-94a5-1f647aa5130a";
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
    image: imgStarryNight,
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
    image: imgMountainClouds,
    hasVideo: true,
  },
  {
    id: 5,
    name: "Serena Williams",
    text: "I'm so grateful for the support I've received here. Knowing I'm not alone has made all the difference.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgCoupleField,
  },
  {
    id: 6,
    name: "Chad Johnson",
    text: "This community has given me a renewed sense of purpose. I'm inspired to give back and make a positive impact on the world.",
    category: "Testimonial",
    categoryColor: "#0e3c84",
    image: imgChurchBuilding,
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

  // Split posts into two columns for masonry layout
  const leftPosts = POSTS.filter((_, i) => i % 2 === 0);
  const rightPosts = POSTS.filter((_, i) => i % 2 === 1);

  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf5]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#fffcf5] flex flex-col gap-[16px] px-[16px] pt-[16px] pb-[12px]">
        {/* Top row: Singapore / OLPS + search */}
        <div className="flex items-center justify-between">
          <div className="flex gap-[16px] h-[24px] items-center">
            <p className="font-['Fira_Sans:Regular',sans-serif] leading-[20px] text-[16px] text-black">
              Singapore
            </p>
            <div className="border-b-2 border-black pb-[4px]">
              <p className="font-['Fira_Sans:Bold',sans-serif] leading-[20px] text-[16px] text-black">
                OLPS
              </p>
            </div>
          </div>
          <div className="size-[24px]">
            <img alt="Search" className="size-full" src={imgSearchIcon} />
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-[8px] overflow-x-auto -mx-[16px] px-[16px]" style={{ scrollbarWidth: 'none' }}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-[12px] py-[4px] rounded-[4px] font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[12px] cursor-pointer transition-colors ${
                activeFilter === filter
                  ? "bg-[#434343] text-white border border-[#434343]"
                  : "bg-white text-[#434343] border border-[#434343]"
              }`}
            >
              {filter}
            </button>
          ))}
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
