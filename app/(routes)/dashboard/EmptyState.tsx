
import Image from 'next/image'
import React from 'react'
import CreateInterviewDialog from '../_components/CreateInterviewDialog'

const EmptyState = () => {
  return (
    <div className='mt-14 flex flex-col  items-center gap-5 border border-dashed p-10 border-4 rounded-2xl bg-gray-50'>
      <Image src={'/interview.png'}  alt='emptyState' 
      width={150}
      height={150}
      />

      <h2 className='mt-2 text-lg text-gray-500' >You don't have any Interview created </h2>
      <CreateInterviewDialog/>
    </div>
  )
}

export default EmptyState
