import * as React from "react"
const SvgComponent = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={633}
    height={509}
    style={{
      width: "100%",
      height: "100%",
      transform: "translate3d(0,0,0)",
    }}
    preserveAspectRatio="xMidYMin meet"
    viewBox="0 0 633 509" // Adjusted viewBox
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M0 0h633v509H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="none"
        stroke="#080A18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={20}
        d="M-284.895-190.569h569.971M-284.895 190.569h569.971M-284.895.042h569.971"
        style={{
          display: "block",
        }}
        transform="translate(298 256)" // Adjust this as needed
      />
    </g>
  </svg>
  
)
export default SvgComponent