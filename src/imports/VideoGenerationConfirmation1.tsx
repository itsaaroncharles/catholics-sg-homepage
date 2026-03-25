import heroVideoSrc from '../assets/Hero_Video.mp4?url';

export default function VideoGenerationConfirmation() {
  return (
    <div className="relative size-full" data-name="Video_Generation_Confirmation 1">
      <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline muted>
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
    </div>
  );
}