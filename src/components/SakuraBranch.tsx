interface SakuraBranchProps {
  className?: string;
}

const SakuraBranch = ({ className = "" }: SakuraBranchProps) => {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main branch */}
      <path
        d="M20 320 Q60 260 100 220 Q140 180 160 140 Q180 100 200 80 Q220 60 250 40"
        stroke="#1a0a0e"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sub branch left */}
      <path
        d="M100 220 Q80 190 60 170 Q40 150 20 140"
        stroke="#1a0a0e"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sub branch right */}
      <path
        d="M160 140 Q190 130 220 110 Q250 90 270 70"
        stroke="#1a0a0e"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Small branch */}
      <path
        d="M200 80 Q180 60 170 40"
        stroke="#1a0a0e"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sakura flowers */}
      {/* Flower 1 - top right */}
      <g transform="translate(250,35)">
        <circle cx="0" cy="-12" r="8" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="11" cy="-4" r="8" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="7" cy="9" r="8" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="-7" cy="9" r="8" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="-11" cy="-4" r="8" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="0" cy="0" r="5" fill="#fde8ed"/>
        <circle cx="0" cy="0" r="2" fill="#c97a90"/>
      </g>
      {/* Flower 2 - mid top */}
      <g transform="translate(170,35)">
        <circle cx="0" cy="-10" r="7" fill="#f8c8d4" opacity="0.85"/>
        <circle cx="9" cy="-3" r="7" fill="#f8c8d4" opacity="0.85"/>
        <circle cx="6" cy="8" r="7" fill="#f8c8d4" opacity="0.85"/>
        <circle cx="-6" cy="8" r="7" fill="#f8c8d4" opacity="0.85"/>
        <circle cx="-9" cy="-3" r="7" fill="#f8c8d4" opacity="0.85"/>
        <circle cx="0" cy="0" r="4" fill="#fde8ed"/>
        <circle cx="0" cy="0" r="1.5" fill="#c97a90"/>
      </g>
      {/* Flower 3 - left branch end */}
      <g transform="translate(18,135)">
        <circle cx="0" cy="-11" r="7.5" fill="#f8c8d4" opacity="0.88"/>
        <circle cx="10" cy="-3" r="7.5" fill="#f8c8d4" opacity="0.88"/>
        <circle cx="6" cy="9" r="7.5" fill="#f8c8d4" opacity="0.88"/>
        <circle cx="-6" cy="9" r="7.5" fill="#f8c8d4" opacity="0.88"/>
        <circle cx="-10" cy="-3" r="7.5" fill="#f8c8d4" opacity="0.88"/>
        <circle cx="0" cy="0" r="4.5" fill="#fde8ed"/>
        <circle cx="0" cy="0" r="1.8" fill="#c97a90"/>
      </g>
      {/* Flower 4 - bottom left */}
      <g transform="translate(40,270)">
        <circle cx="0" cy="-13" r="9" fill="#f8c8d4" opacity="0.8"/>
        <circle cx="12" cy="-4" r="9" fill="#f8c8d4" opacity="0.8"/>
        <circle cx="7" cy="11" r="9" fill="#f8c8d4" opacity="0.8"/>
        <circle cx="-7" cy="11" r="9" fill="#f8c8d4" opacity="0.8"/>
        <circle cx="-12" cy="-4" r="9" fill="#f8c8d4" opacity="0.8"/>
        <circle cx="0" cy="0" r="5.5" fill="#fde8ed"/>
        <circle cx="0" cy="0" r="2.2" fill="#c97a90"/>
      </g>
      {/* Flower 5 - mid branch */}
      <g transform="translate(220,105)">
        <circle cx="0" cy="-9" r="6.5" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="8" cy="-3" r="6.5" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="5" cy="7" r="6.5" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="-5" cy="7" r="6.5" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="-8" cy="-3" r="6.5" fill="#f8c8d4" opacity="0.9"/>
        <circle cx="0" cy="0" r="4" fill="#fde8ed"/>
        <circle cx="0" cy="0" r="1.5" fill="#c97a90"/>
      </g>
    </svg>
  );
};

export default SakuraBranch;
