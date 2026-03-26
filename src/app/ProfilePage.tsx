import profileHeroImg from "../assets/Profile.svg";
import ringImg from "../assets/Ring.svg";
import cardBgImg from "../assets/card-BG.svg";

// Chevron Right Icon
function ChevronRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6l6 6-6 6" stroke="#041a52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Menu Item Button
function MenuItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch cursor-pointer flex gap-[12px] items-center min-w-[80px] p-[16px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-full text-left"
    >
      <div className="flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
        <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[normal] not-italic text-[14px] text-black tracking-[0.1px] w-full">
          {label}
        </p>
      </div>
      <ChevronRight />
    </button>
  );
}

// Sacrament Celebration Card
function SacramentCard() {
  return (
    <div
      className="content-stretch flex gap-[19px] items-center justify-center overflow-hidden p-[16px] relative rounded-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] w-full"
      style={{
        backgroundImage: `url(${cardBgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      {/* Rings icon */}
      <div className="h-[64px] shrink-0 w-[108px] relative">
        <img alt="" className="h-full w-auto object-contain" src={ringImg} />
      </div>

      {/* Text content */}
      <div className="flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px not-italic relative">
        <p
          className="bg-clip-text font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[16px] text-[transparent] tracking-[0.1105px] whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)",
          }}
        >
          Holy Matrimony
        </p>
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[#52371c] text-[12px] tracking-[0.043px]">
          Congratulations on receiving your sacrament on 14th of May 2026
        </p>
      </div>

      {/* Pagination dots */}
      <div className="absolute bg-[rgba(0,0,0,0.3)] flex gap-[4px] items-center p-[4px] right-[8px] rounded-[99px] top-[8px]">
        <div className="h-[4px] overflow-clip relative rounded-[999px] w-[10px]">
          <div className="absolute bg-[#d3d3d3] h-[4px] left-0 rounded-[99px] top-0 w-[24px]" />
          <div className="absolute bg-white left-0 rounded-[99px] size-[4px] top-0" />
        </div>
        <div className="bg-[#d3d3d3] rounded-[99px] size-[4px]" />
        <div className="bg-[#d3d3d3] rounded-[99px] size-[4px]" />
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-start pb-[108px] relative size-full">
      {/* Profile Hero */}
      <div className="flex flex-col gap-[10px] h-[400px] items-center justify-end overflow-clip px-[25px] py-[24px] relative shrink-0 w-full">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            alt=""
            className="w-full h-full object-cover"
            src={profileHeroImg}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)',
            }}
          />
        </div>

        {/* Name and parish */}
        <div className="flex flex-col items-center relative z-10">
          <div className="flex flex-col gap-[8px] items-center not-italic whitespace-nowrap">
            <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[28px] text-white tracking-[0.1105px]">
              Aaron Charles Gabriel
            </p>
            <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#e2e2e2] text-[16px] text-center tracking-[0.043px]">
              Our Lady of Perpetual Succour
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[40px] items-start p-[16px] w-full">
        {/* Sacrament Card */}
        <SacramentCard />

        {/* Profile Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic text-[#041a52] text-[18px] w-full">
            Profile
          </p>
          <MenuItem label="Family tree" />
          <MenuItem label="MyVolunteer" />
          <MenuItem label="Sacraments" />
          <MenuItem label="Edit profile" />
        </div>

        {/* Admin Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic text-[#041a52] text-[18px] w-full">
            Admin
          </p>
          <MenuItem label="Download certificates" />
          <MenuItem label="Contact us" />
          <MenuItem label="Log out" />
        </div>
      </div>
    </div>
  );
}
