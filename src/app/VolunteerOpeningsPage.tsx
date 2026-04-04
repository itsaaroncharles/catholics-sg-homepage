import { useState } from "react";
import volunteerHeaderBg from "../assets/Volunteer_BG.png";
import logoCaritas from "../assets/Caritas Singapore.png";
import logoACMI from "../assets/ACMI.png";
import logoParish from "../assets/OLPS.png";

const locationIcon = "https://www.figma.com/api/mcp/asset/2c26b645-f641-4806-b24b-554586d99654";

interface VolunteerOpening {
  id: number;
  title: string;
  titleEmphasis?: string;
  emphasisColor?: string;
  org: string;
  logo: string;
  location?: string;
  postedAgo: string;
}

const OPENINGS: VolunteerOpening[] = [
  {
    id: 1,
    title: "Charities Week 2026 Parish Roadshow Volunteers - ",
    titleEmphasis: "God's love in action",
    emphasisColor: "#041a52",
    org: "Caritas Singapore",
    logo: logoCaritas,
    location: "Various churches",
    postedAgo: "Posted 2 weeks ago",
  },
  {
    id: 2,
    title: "Production Assistant (Maketing Communications) - ",
    titleEmphasis: "Family to migrant",
    emphasisColor: "#0e3c84",
    org: "Archdiocesan Commission for the Pastoral Care of Migrants & Itinerant People (ACMI)",
    logo: logoACMI,
    location: "Agape village",
    postedAgo: "Posted 2 weeks ago",
  },
  {
    id: 3,
    title: "Faith Sycas Youth Ministry",
    org: "Our lady of perpetual succour",
    logo: logoParish,
    postedAgo: "Posted 2 weeks ago",
  },
  {
    id: 4,
    title: "Catechist",
    org: "Our lady of perpetual succour",
    logo: logoParish,
    postedAgo: "Posted 2 weeks ago",
  },
];

const FILTERS = ["All", "Our lady of perpetual succour"];

function VolunteerCard({ opening }: { opening: VolunteerOpening }) {
  return (
    <div className="bg-white flex flex-col items-start justify-center min-w-[80px] p-[12px] rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] w-full">
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex flex-col gap-[8px] items-start justify-center w-full">
          {/* Org logo */}
          <div className="border-[#f4f4f4] border-[0.8px] border-solid overflow-hidden rounded-[8px] shrink-0 size-[32px]">
            <img alt="" className="size-full object-cover" src={opening.logo} />
          </div>

          {/* Title */}
          <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[16px] text-black tracking-[0.1105px] w-full">
            {opening.title}
            {opening.titleEmphasis && (
              <span
                className="italic"
                style={{ color: opening.emphasisColor }}
              >
                {opening.titleEmphasis}
              </span>
            )}
          </p>

          {/* Org name */}
          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#555] text-[12px] w-full">
            {opening.org}
          </p>
        </div>

        {/* Location + posted */}
        <div className="flex gap-[4px] items-center flex-wrap">
          {opening.location && (
            <>
              <div className="flex gap-[4px] items-center">
                <img alt="" className="shrink-0 size-[16px]" src={locationIcon} />
                <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px] whitespace-nowrap">
                  {opening.location}
                </p>
              </div>
              <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[#041a52] text-[12px]">
                •
              </p>
            </>
          )}
          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px]">
            {opening.postedAgo}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VolunteerOpeningsPage({ onBack }: { onBack: () => void }) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-col min-h-screen bg-[#fffcf5]">
      {/* Header */}
      <div className="relative h-[182px] mb-[-24px] w-full overflow-hidden flex flex-col justify-end pb-[48px] px-[16px]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          src={volunteerHeaderBg}
        />

        <div className="relative flex flex-col gap-[8px] items-start">
          {/* Back button + title */}
          <div className="flex gap-[16px] items-center">
            <button
              onClick={onBack}
              className="flex items-center justify-center cursor-pointer bg-transparent border-none p-0"
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[24px] text-white tracking-[0.1105px]">
              Volunteer openings
            </p>
          </div>

          {/* Description */}
          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#eaeaea] text-[14px] tracking-[0.043px] pl-[24px]">
            Come explore the many ways you can make a difference through our church ministries.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#fffcf5] rounded-tl-[16px] rounded-tr-[16px] relative z-10 px-[16px] pt-[16px] pb-[40px] flex flex-col gap-[16px]">
        {/* Filter pills */}
        <div className="flex gap-[8px] overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-[12px] py-[8px] rounded-[999px] font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] text-[14px] cursor-pointer border-none whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-[#434343] text-white"
                  : "bg-transparent text-[#434343]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Volunteer cards */}
        <div className="flex flex-col gap-[16px]">
          {OPENINGS.map((opening) => (
            <VolunteerCard key={opening.id} opening={opening} />
          ))}
        </div>
      </div>
    </div>
  );
}
