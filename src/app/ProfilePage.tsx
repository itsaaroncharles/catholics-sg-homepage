import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import profileAvatarImg from "../assets/profile-avatar.png";
import ringImg from "../assets/Ring.svg";
import cardBgImg from "../assets/card-BG.svg";
import sacramentModalBgImg from "../assets/sacrament-modal-bg.svg";
import closeButtonImg from "../assets/Close-button.svg";
import confirmationImg from "../assets/Confirmation.svg";
import firstCommunionImg from "../assets/First Communion.svg";
import baptismImg from "../assets/Baptism.svg";
import familySammy from "../assets/family-sammy.png";
import familyAriana from "../assets/family-ariana.png";
import familyJonathan from "../assets/family-jonathan.png";
import churchIcon from "../assets/church-icon.svg";

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

// Close Icon
function CloseIcon() {
  return <img alt="Close" className="size-full" src={closeButtonImg} />;
}

// Sacrament Bottom Sheet
function SacramentBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#fcfcfd] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden flex flex-col items-center px-[16px] pt-[24px] pb-[24px]"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Background Image */}
        <div className="absolute top-[-42px] left-1/2 -translate-x-1/2 w-[449px] h-[299px] pointer-events-none">
          <img
            alt=""
            className="w-full h-full object-cover -scale-y-100"
            src={sacramentModalBgImg}
          />
        </div>

        {/* Ellipse */}
        <div className="absolute left-[-395px] top-[126px] w-[1193px] h-[873px] pointer-events-none">
          <svg className="size-full" viewBox="0 0 1193 873" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="596.5" cy="436.408" rx="596.5" ry="436.408" fill="white" />
          </svg>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] size-[24px] cursor-pointer z-10"
        >
          <CloseIcon />
        </button>

        {/* Title */}
        <p
          className="bg-clip-text font-['Fira_Sans:Bold',sans-serif] leading-[normal] relative text-[20px] text-[transparent] text-center tracking-[0.1px] whitespace-nowrap z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)",
          }}
        >
          Sacraments
        </p>

        {/* Content */}
        <div className="flex flex-col gap-[24px] items-center justify-center relative w-full mt-[24px] z-[1]">
          {/* Ring Image */}
          <div className="h-[99px] w-[168px] shrink-0">
            <img
              alt=""
              className="h-full w-full object-contain"
              src={ringImg}
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[8px] items-center text-[#041a52] text-center w-full">
            <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[18px] tracking-[0.1105px] w-full">
              Holy Matrimony
            </p>
            <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center text-[14px] tracking-[0.043px] w-full">
              <p className="leading-[16px] mb-0">Congratulations on receiving your sacrament</p>
              <p className="leading-[16px]">on 14th of May 2026</p>
            </div>
          </div>

          {/* Download Button */}
          <button
            className="border border-[#5a3115] border-solid cursor-pointer flex gap-[8px] items-center justify-center p-[10px] rounded-[10px] shadow-[0px_4px_8px_0px_rgba(208,185,133,0.05),0px_8px_16px_0px_rgba(208,185,133,0.15)] bg-transparent"
          >
            <span
              className="bg-clip-text font-['Fira_Sans:Medium',sans-serif] leading-[normal] text-[16px] text-[transparent] text-center tracking-[0.1px] whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)",
              }}
            >
              Download certificate
            </span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Sacrament Row Item
function SacramentRow({ icon, label, year }: { icon: string; label: string; year: string }) {
  return (
    <button className="bg-white cursor-pointer flex gap-[12px] items-center min-w-[80px] p-[12px] relative rounded-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] w-full text-left">
      <div className="shrink-0 size-[40px]">
        <img alt="" className="h-full w-full object-contain" src={icon} />
      </div>
      <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px text-black tracking-[0.1px]">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] text-[14px] w-full">{label}</p>
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[normal] text-[12px] w-full">{year}</p>
      </div>
      <ChevronRight />
    </button>
  );
}

// Sacraments List Bottom Sheet (from Sacraments menu item)
function SacramentsListBottomSheet({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Sheet */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#fcfcfd] rounded-tl-[32px] rounded-tr-[32px] overflow-hidden flex flex-col items-center px-[16px] pt-[24px] pb-[24px]"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        {/* Background Image */}
        <div className="absolute top-[-42px] left-1/2 -translate-x-1/2 w-[449px] h-[299px] pointer-events-none">
          <img
            alt=""
            className="w-full h-full object-cover -scale-y-100"
            src={sacramentModalBgImg}
          />
        </div>

        {/* Ellipse */}
        <div className="absolute left-[-395px] top-[126px] w-[1193px] h-[873px] pointer-events-none">
          <svg className="size-full" viewBox="0 0 1193 873" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="596.5" cy="436.408" rx="596.5" ry="436.408" fill="white" />
          </svg>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] size-[24px] cursor-pointer z-10"
        >
          <CloseIcon />
        </button>

        {/* Title */}
        <p
          className="bg-clip-text font-['Fira_Sans:Bold',sans-serif] leading-[normal] relative text-[20px] text-[transparent] text-center tracking-[0.1px] whitespace-nowrap z-[1]"
          style={{
            backgroundImage:
              "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)",
          }}
        >
          Sacraments
        </p>

        {/* Content */}
        <div className="flex flex-col gap-[24px] items-center justify-center relative w-full mt-[24px] z-[1]">
          {/* Ring Image */}
          <div className="h-[99px] w-[168px] shrink-0">
            <img alt="" className="h-full w-full object-contain" src={ringImg} />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-[8px] items-center text-[#041a52] text-center w-full">
            <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[18px] tracking-[0.1105px] w-full">
              Holy Matrimony
            </p>
            <div className="flex flex-col font-['Fira_Sans:Regular',sans-serif] justify-center text-[14px] tracking-[0.043px] w-full">
              <p className="leading-[16px] mb-0">Congratulations on receiving your sacrament</p>
              <p className="leading-[16px]">on 14th of May 2026</p>
            </div>
          </div>

          {/* Download Button */}
          <button
            className="border border-[#5a3115] border-solid cursor-pointer flex gap-[8px] items-center justify-center p-[10px] rounded-[10px] shadow-[0px_4px_8px_0px_rgba(208,185,133,0.05),0px_8px_16px_0px_rgba(208,185,133,0.15)] bg-transparent"
          >
            <span
              className="bg-clip-text font-['Fira_Sans:Medium',sans-serif] leading-[normal] text-[16px] text-[transparent] text-center tracking-[0.1px] whitespace-nowrap"
              style={{
                backgroundImage:
                  "linear-gradient(94deg, rgb(90, 49, 21) 8%, rgb(136, 105, 85) 57%, rgb(186, 132, 96) 124%)",
              }}
            >
              Download certificate
            </span>
          </button>

          {/* Sacrament List */}
          <div className="flex flex-col gap-[12px] items-start w-full">
            <SacramentRow icon={confirmationImg} label="Confirmation" year="2004" />
            <SacramentRow icon={firstCommunionImg} label="First Communion" year="2002" />
            <SacramentRow icon={baptismImg} label="Baptism" year="1988" />
          </div>

          {/* Helper text */}
          <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#041a52] text-[12px] text-center tracking-[0.043px] w-full">
            Tap on the sacraments to download their certificates.
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Sacrament Celebration Card
function SacramentCard({ onTap }: { onTap: () => void }) {
  return (
    <div
      onClick={onTap}
      className="cursor-pointer content-stretch flex gap-[19px] items-center justify-center overflow-hidden p-[16px] relative rounded-[16px] shadow-[0px_4px_14px_0px_rgba(151,151,151,0.11)] w-full"
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

// Family Member Card
function FamilyMemberCard({ name, role, imgSrc }: { name: string; role: string; imgSrc: string }) {
  return (
    <div className="flex flex-1 flex-col items-center min-w-0">
      <div className="bg-white h-[100px] min-w-[80px] overflow-hidden relative rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] w-full">
        <img alt={name} className="absolute inset-0 h-full w-full object-cover" src={imgSrc} />
      </div>
      <div className="bg-white flex flex-col gap-[8px] items-center min-w-[80px] p-[12px] rounded-bl-[16px] rounded-br-[16px] shadow-[0px_1.72px_3.441px_0px_rgba(208,185,133,0.05),0px_3.441px_6.882px_0px_rgba(208,185,133,0.15)] text-[#041a52] text-center w-full">
        <p className="font-['Fira_Sans:Bold',sans-serif] leading-[16px] text-[14px]">{name}</p>
        <p className="font-['Fira_Sans:Regular',sans-serif] leading-[14px] text-[12px]">{role}</p>
      </div>
    </div>
  );
}

export default function ProfilePage({ onBottomSheetChange }: { onBottomSheetChange?: (open: boolean) => void }) {
  const [showSacramentSheet, setShowSacramentSheet] = useState(false);
  const [showSacramentsListSheet, setShowSacramentsListSheet] = useState(false);

  const openSheet = () => {
    setShowSacramentSheet(true);
    onBottomSheetChange?.(true);
  };

  const closeSheet = () => {
    setShowSacramentSheet(false);
    onBottomSheetChange?.(false);
  };

  const openSacramentsList = () => {
    setShowSacramentsListSheet(true);
    onBottomSheetChange?.(true);
  };

  const closeSacramentsList = () => {
    setShowSacramentsListSheet(false);
    onBottomSheetChange?.(false);
  };

  return (
    <div className="flex flex-col items-start pb-[108px] relative size-full">
      {/* Profile Hero — compact purple bar with avatar */}
      <div className="relative h-[140px] mb-[-24px] w-full shrink-0">
        <div className="absolute inset-0 bg-[#BB0000]" />
        <div className="absolute bottom-[48px] left-[16px] flex gap-[16px] items-center pt-[24px]">  
          {/* Avatar */}
          <div className="overflow-hidden rounded-[16px] shrink-0 size-[64px]">
            <img alt="Aaron Gabriel" className="w-full h-full object-cover" src={profileAvatarImg} />
          </div>
          {/* Name + Parish */}
          <div className="flex flex-col gap-[8px] items-start">
            <p className="font-['Fira_Sans_Condensed:Bold',sans-serif] leading-[normal] text-[24px] text-white tracking-[0.1105px] whitespace-nowrap">
              Aaron Gabriel
            </p>
            <div className="flex gap-[8px] items-center">
              <img alt="" className="size-[16px] shrink-0" src={churchIcon} />
              <p className="font-['Fira_Sans:Regular',sans-serif] leading-[16px] text-[#eaeaea] text-[14px] tracking-[0.043px] whitespace-nowrap">
                Our Lady of Perpetual Succour
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sacrament Card Section — replaces search bar, curved top like homepage */}
      <div className="bg-[#fffcf5] relative rounded-tl-[16px] rounded-tr-[16px] z-10">
        <div className="overflow-clip rounded-[inherit] w-full">
          <div className="flex flex-col items-start px-[16px] pt-[16px]">
            <SacramentCard onTap={openSheet} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[32px] items-start px-[16px] pt-[16px] w-full">
        {/* Your Family Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic text-[#041a52] text-[18px] w-full">
            Your family
          </p>
          <div className="flex gap-[8px] items-start w-full">
            <FamilyMemberCard name="Sammy" role="Wife" imgSrc={familySammy} />
            <FamilyMemberCard name="Ariana" role="Daughter" imgSrc={familyAriana} />
            <FamilyMemberCard name="Jonathan" role="Son" imgSrc={familyJonathan} />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-['Fira_Sans:Bold',sans-serif] leading-[normal] not-italic text-[#041a52] text-[18px] w-full">
            Profile
          </p>
          <MenuItem label="Family tree" />
          <MenuItem label="MyVolunteer" />
          <MenuItem label="Sacraments" onClick={openSacramentsList} />
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

      {/* Sacrament Bottom Sheet */}
      <AnimatePresence>
        {showSacramentSheet && (
          <SacramentBottomSheet onClose={closeSheet} />
        )}
      </AnimatePresence>

      {/* Sacraments List Bottom Sheet */}
      <AnimatePresence>
        {showSacramentsListSheet && (
          <SacramentsListBottomSheet onClose={closeSacramentsList} />
        )}
      </AnimatePresence>
    </div>
  );
}
