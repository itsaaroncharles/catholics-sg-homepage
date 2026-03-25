import svgPaths from "./svg-p881keacq0";
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

function Home1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center px-[16px] relative shrink-0" data-name="Home">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="house-solid">
        <div className="absolute inset-[4.17%_8.33%_8.33%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <path d={svgPaths.p4acc900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Fira_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px]">Home</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0" data-name="Info">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="book-open-solid">
        <div className="absolute inset-[8.33%_4.17%_8.44%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.9748">
            <g id="Vector">
              <path d={svgPaths.p15a8c200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1236c00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px]">Community</p>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0" data-name="Events">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-solid">
        <div className="absolute inset-[2.08%_8.33%_4.17%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22.5">
            <g id="Vector">
              <path d={svgPaths.p1e58cf00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p25cd1100} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px]">Resources</p>
      </div>
    </div>
  );
}

function Events1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center opacity-60 px-[16px] relative shrink-0" data-name="Events">
      <div className="relative shrink-0 size-[24px]" data-name="user-solid">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <g id="Vector">
              <path d={svgPaths.p22062c00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p397a9e80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white tracking-[0.1px] whitespace-nowrap">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[12px]">Me</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tabs">
      <Home1 />
      <Info />
      <Events />
      <Events1 />
    </div>
  );
}

function BottomNav() {
  return (
    <div className="bg-[rgba(23,23,23,0.6)] content-stretch flex flex-col items-center p-[12px] relative rounded-[999px] shrink-0 w-[329px]" data-name="Bottom Nav">
      <Tabs />
    </div>
  );
}

function Frame43() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start left-1/2">
      <BottomNav />
      <div className="h-[34px] relative shrink-0 w-full" data-name="Home Indicator/Dark">
        <div className="-translate-x-1/2 absolute bg-[#0b0712] bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] w-[134px]" data-name="Home Indicator" />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="font-['Fira_Sans_Condensed:Regular',sans-serif] mb-0">Peace be with you,</p>
        <p className="font-['Fira_Sans_Condensed:Bold',sans-serif]">Aaron Gabriel</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[342px]">
      <Frame20 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[203px]">
      <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c6c6c6] text-[12px] tracking-[0.1px] w-full whitespace-pre-wrap">
        {`I am the way, the truth and the life. `}
        <br aria-hidden="true" />- John 14:6
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bottom-[45px] content-stretch flex flex-col gap-[12px] items-start left-[16px] w-[292px]">
      <Frame13 />
      <Frame44 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[363px] left-0 overflow-clip top-0 w-[402px]">
      <div className="absolute h-[363px] left-[-156px] top-0 w-[646px]" data-name="Video_Generation_Confirmation 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e3375cc4002f9e148175965d092fc5a05e0c8cd2" />
        </video>
      </div>
      <Frame12 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="h-[4px] overflow-clip relative rounded-[999px] shrink-0 w-[24px]">
      <div className="absolute bg-[#aaa] h-[4px] left-0 rounded-[99px] top-0 w-[24px]" />
      <div className="absolute bg-white h-[4px] left-0 rounded-[99px] top-0 w-[12px]" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] bottom-[40px] content-stretch flex gap-[4px] items-center p-[4px] right-[16px] rounded-[99px]">
      <Frame30 />
      <div className="bg-[#aaa] h-[4px] rounded-[99px] shrink-0 w-[8px]" />
      <div className="bg-[#aaa] h-[4px] rounded-[99px] shrink-0 w-[8px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[363px] mb-[-24px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-end pb-[48px] pt-[24px] px-[25px] relative size-full">
          <Frame9 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function WordpressSearch() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="wordpress:search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="wordpress:search">
          <path d={svgPaths.pfe415c0} fill="var(--fill-0, #898989)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_8.33%_0.78%_8.73%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9067 21.814">
        <g id="Group">
          <path d={svgPaths.pbe3cd00} fill="var(--fill-0, #E7C749)" id="Vector" />
          <path d={svgPaths.p3d8e2800} fill="var(--fill-0, #E7C749)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MingcuteAiFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mingcute:ai-fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[44px] items-center px-[13px] py-px relative rounded-[12px] shrink-0 w-[371px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e92823] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)]" />
      <WordpressSearch />
      <p className="flex-[1_0_0] font-['Fira_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[14px] text-[rgba(0,0,0,0.5)] text-ellipsis whitespace-nowrap">Ask questions about the Church</p>
      <MingcuteAiFill />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#fffcf5] mb-[-24px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#041a52] text-[20px] w-full">Explore</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage59} />
    </div>
  );
}

function StylizedButton() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame33 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[72px]">
        <p className="leading-[14px]">Daily Reading</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage3} />
    </div>
  );
}

function StylizedButton1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame34 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[min-content]">
        <p className="leading-[14px]">Daily rosary</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage4} />
    </div>
  );
}

function StylizedButton2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame35 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[min-content]">
        <p className="leading-[14px]">Spiritual Partner</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage60} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[72px]">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-full">
        <p className="leading-[14px]">Volunteer openings</p>
      </div>
    </div>
  );
}

function StylizedButton3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame36 />
      <Frame />
    </div>
  );
}

function Frame37() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgMassSchedule} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[72px]">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-full">
        <p className="leading-[14px]">Mass schedule</p>
      </div>
    </div>
  );
}

function StylizedButton4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame37 />
      <Frame1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage5} />
    </div>
  );
}

function StylizedButton5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame38 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[min-content]">
        <p className="leading-[14px]">{`Offertory & Giving`}</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgImage6} />
    </div>
  );
}

function StylizedButton6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame39 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[min-content]">
        <p className="leading-[14px]">Education centre</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="h-[40px] flex items-center justify-center shrink-0 w-[80px]">
      <img alt="" className="h-[40px] w-auto" src={imgExploreMore} />
    </div>
  );
}
  );
}

function StylizedButton7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[108px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[86.75px]" data-name="Stylized Button">
      <Frame40 />
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#041a52] text-[12px] text-center tracking-[0.043px] w-[min-content]">
        <p className="leading-[14px]">Explore more</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-full">
      <StylizedButton />
      <StylizedButton1 />
      <StylizedButton2 />
      <StylizedButton3 />
      <StylizedButton4 />
      <StylizedButton5 />
      <StylizedButton6 />
      <StylizedButton7 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame10 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Fira_Sans:Bold',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#041a52] text-[20px]">Scripture reflections</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[200px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[324px] left-[calc(50%-18px)] top-[calc(50%+26px)] w-[460px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[121px] left-0 opacity-70 to-black w-[200px]" data-name="image 12" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white tracking-[0.1px] w-full">
      <p className="font-['Fira_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-full">Cardinal Willian SC Goh</p>
      <p className="font-['Fira_Sans:Regular',sans-serif] relative shrink-0 text-[14px] w-full">Sun, 1 Mar 2026</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
      <Frame22 />
      <Frame17 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[200px]">
      <div className="-translate-x-1/2 absolute h-[714px] left-[calc(50%-6.43px)] top-[-20px] w-[475.135px]" data-name="image 13">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage13} />
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[121px] left-0 opacity-70 to-black w-[200px]" data-name="image 14" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white tracking-[0.1px] w-full">
      <p className="font-['Fira_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-full">Rev Fr Adrian Danker</p>
      <p className="font-['Fira_Sans:Regular',sans-serif] relative shrink-0 text-[14px] w-full">Sun, 22 Feb 2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
      <Frame26 />
      <Frame18 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[200px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[250px] left-[calc(50%-6px)] top-[calc(50%+5px)] w-[232px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(0,0,0,0)] h-[90px] left-0 opacity-70 to-black w-[200px]" data-name="image 12" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white tracking-[0.1px] w-full">
      <p className="font-['Fira_Sans:Bold',sans-serif] relative shrink-0 text-[16px] w-full">Rev Fr Luke Fong</p>
      <p className="font-['Fira_Sans:Regular',sans-serif] relative shrink-0 text-[14px] w-full">Mon, 8 Dec 2025</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[240px] items-center justify-end overflow-clip pb-[16px] px-[16px] relative rounded-[16px] shrink-0 w-[160px]">
      <Frame27 />
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame41 />
      <Frame23 />
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#faf0cc] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#b8891a] text-[12px] whitespace-nowrap">Prayer request</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] h-[68px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#041a52] text-[14px] text-ellipsis tracking-[0.043px] w-full">
        <p className="leading-[16px]">Hi everyone, it has been really difficult these days navigating life. I feel empty. I feel lost. I feel like giving up. Every step i take feels heavy</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px] w-full">
        <p className="leading-[16px]">24 Mar 26</p>
      </div>
    </div>
  );
}

function StylizedButton8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center min-w-[80px] pb-[16px] pt-[12px] px-[16px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[244px]" data-name="Stylized Button">
      <Text />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#eef3fb] content-stretch flex items-start px-[12px] py-[4px] relative rounded-[4px] shrink-0" data-name="Text">
      <p className="font-['Fira_Sans:SemiBold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e3c84] text-[12px] whitespace-nowrap">Testimonial</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] h-[68px] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#041a52] text-[14px] text-ellipsis tracking-[0.043px] w-full">
        <p className="leading-[16px]">{`Lord, thank You for the grace of this Lenten season. I felt Your presence deeply during confession today. When i went out `}</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(4,26,82,0.57)] tracking-[0.043px] w-full">
        <p className="leading-[16px]">24 Mar 26</p>
      </div>
    </div>
  );
}

function StylizedButton9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center min-w-[80px] pb-[16px] pt-[12px] px-[16px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[244px]" data-name="Stylized Button">
      <Text1 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#faf0cc] content-stretch flex h-[18px] items-start px-[8px] py-[2px] relative rounded-[9999px] shrink-0 w-[71.828px]" data-name="Text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#b8891a] text-[12px] whitespace-nowrap">Gratitude</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#041a52] text-[14px] tracking-[0.043px] w-full">
        <p className="leading-[16px]">{`"Lord, thank You for the grace of this Lenten season. I felt Your presence deeply during confession today."`}</p>
      </div>
    </div>
  );
}

function StylizedButton10() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start justify-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_2.44px_6.882px_0px_rgba(208,185,133,0.15)] shrink-0 w-[244px]" data-name="Stylized Button">
      <Text2 />
      <Frame6 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <StylizedButton8 />
      <StylizedButton9 />
      <StylizedButton10 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#041a52] text-[20px] w-full">Community</p>
      <Frame28 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#fffcf5] content-stretch flex flex-col gap-[40px] items-center px-[16px] relative shrink-0 w-[403px]">
      <Frame31 />
      <Frame32 />
      <Frame42 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame15 />
      <Frame21 />
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-name="Left Side">
      <div className="h-[21px] relative rounded-[24px] shrink-0 w-[54px]" data-name="_StatusBar-time">
        <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[20px] leading-[22px] left-[27px] not-italic text-[17px] text-center text-white top-px tracking-[-0.408px] w-[54px]" style={{ fontFeatureSettings: "'case'" }}>
          9:41
        </p>
      </div>
    </div>
  );
}

function TrueDepthCamera() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black h-[37px] left-[calc(50%-22.5px)] rounded-[100px] top-1/2 w-[80px]" data-name="TrueDepth camera" />;
}

function FaceTimeCamera() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-black left-[calc(50%+44px)] rounded-[100px] size-[37px] top-1/2" data-name="FaceTime camera" />;
}

function DynamicIsland() {
  return (
    <div className="h-full opacity-0 relative shrink-0" data-name="Dynamic Island">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col h-full items-center pt-[8px] relative">
          <div className="bg-black h-[37px] relative rounded-[100px] shrink-0 w-[125px]" data-name="StatusBar-dynamicIsland">
            <TrueDepthCamera />
            <FaceTimeCamera />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalWifiBattery() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Signal, Wifi, Battery">
      <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Icon / Mobile Signal">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <g id="Icon / Mobile Signal">
            <path d={svgPaths.p1ec31400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p19f8d480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p13f4aa00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bfb7500} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div className="h-[11.834px] relative shrink-0 w-[17px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11.8338">
          <path d={svgPaths.p17a4bf30} fill="var(--fill-0, white)" id="Wifi" />
        </svg>
      </div>
      <div className="h-[13px] relative shrink-0 w-[27.401px]" data-name="_StatusBar-battery">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13px] left-[calc(50%-1.2px)] top-1/2 w-[25px]" data-name="Outline">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
            <path d={svgPaths.p2a8e2e00} id="Outline" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="1.05509" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.22px] left-[calc(50%+13px)] top-[calc(50%+0.61px)] w-[1.401px]" data-name="Battery End">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.40119 4.22034">
            <path d={svgPaths.p237cb000} fill="var(--fill-0, white)" id="Battery End" opacity="0.4" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[9px] left-[calc(50%-1.2px)] top-1/2 w-[21px]" data-name="Fill">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 9">
            <path d={svgPaths.pa544c00} fill="var(--fill-0, white)" id="Fill" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Right Side">
      <SignalWifiBattery />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fffcf5] content-stretch flex gap-[10px] items-center pb-[108px] relative size-full" data-name="Home">
      <Frame43 />
      <Frame25 />
      <div className="absolute content-stretch flex h-[53px] items-end justify-center left-0 top-0 w-[402px]" data-name="StatusBar">
        <LeftSide />
        <DynamicIsland />
        <RightSide />
      </div>
    </div>
  );
}