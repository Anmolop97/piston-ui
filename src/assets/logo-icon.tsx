export default function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Option 4: The Happy Glint P Mascot Body */}
      <path
        d="M 28 14 C 18 14, 14 20, 14 30 L 14 74 C 14 82, 20 86, 28 86 C 36 86, 42 82, 42 74 L 42 56 C 48 58, 56 58, 64 56 C 80 52, 88 42, 88 30 C 88 16, 76 14, 56 14 Z"
        fill="currentColor"
      />
      {/* Expressive Mascot Eyes */}
      <circle cx="50" cy="32" r="5.5" fill="#0d1117" />
      <circle cx="70" cy="32" r="5.5" fill="#0d1117" />
      {/* Playful Eye Glints */}
      <circle cx="51.8" cy="30.5" r="1.8" fill="white" />
      <circle cx="71.8" cy="30.5" r="1.8" fill="white" />
      {/* Cute Cheerful Smile */}
      <path
        d="M 57 42 Q 60 45 63 42"
        stroke="#0d1117"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
