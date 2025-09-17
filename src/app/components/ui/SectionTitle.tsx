import React from 'react'

export default function SectionTitle({title}: {title: string}) {
  return (
    <div className='text-3xl my-6 font-bold text-center z-50 '>
      {title}
    </div>
  )
}
