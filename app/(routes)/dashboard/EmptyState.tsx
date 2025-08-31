import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const EmptyState = () => {
  return (
    <div className='mt-14 flex flex-col  items-center gap-5 border border-dashed p-10 border-2'>
      <Image src={'/interview.png'}  alt='emptyState' 
      width={150}
      height={150}
      />

      <h2 className='mt-2 text-lg text-gray-500' >You don't have any Interview created </h2>
      <Button>Create Interview </Button>
    </div>
  )
}

export default EmptyState
