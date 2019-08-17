import React from 'react'

const FacebookIcon = () => (
  <svg width={30} height={30}>
    <defs>
      <clipPath id="prefix__e">
        <path fill="none" d="M0 0h30v30H0z" />
      </clipPath>
      <pattern
        id="prefix__f"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <image
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </pattern>
    </defs>
    <g stroke="rgba(0,0,0,0)" fill="url(#prefix__f)" clipPath="url(#prefix__e)">
      <path stroke="none" d="M0 0h30v30H0z" />
      <path fill="none" d="M.5.5h29v29H.5z" />
    </g>
  </svg>
);

export default FacebookIcon
