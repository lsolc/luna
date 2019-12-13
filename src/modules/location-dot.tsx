import React from 'react'

export function LocationDot() {
  return (
    <svg 
      width={64} 
      height={64}
      >
      <circle r={10} cx={32} cy={32} stroke="gray" strokeWidth={0.1} />
    </svg>
  )
}