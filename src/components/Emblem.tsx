import svgPaths from "@/imports/Group1707482468/svg-qjsnlcga4x"

// Snap Studio circular mark — reuses the imported Figma SVG paths.
export default function Emblem({
  size = 40,
  discFill = "black",
  className = "",
}: {
  size?: number
  discFill?: string
  className?: string
}) {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      width={size}
      viewBox="0 0 140.985 140.985"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p3358aa80}
        fill={discFill}
        stroke="url(#emblem_ring)"
        strokeMiterlimit="10"
        strokeWidth="1.7248"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.p26a8f700}
        fill="url(#emblem_glyph)"
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          id="emblem_ring"
          gradientUnits="userSpaceOnUse"
          x1="0.61306"
          x2="140.367"
          y1="70.4924"
          y2="70.4924"
        >
          <stop stopColor="#F27256" />
          <stop offset="1" stopColor="#CF232B" />
        </linearGradient>
        <linearGradient
          id="emblem_glyph"
          gradientUnits="userSpaceOnUse"
          x1="70.4922"
          x2="70.4922"
          y1="31.3479"
          y2="109.63"
        >
          <stop stopColor="#F27256" />
          <stop offset="1" stopColor="#CF232B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
