import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const JobDescription = ({onHandleInputChange} : any) => {
  return (
    <div >
    <div>
    <label>Job Title</label>
    <Input placeholder='Ex. Full Stack React Developer'
    onChange={(event) => onHandleInputChange('jobTitle', event.target.value)} />
    
    </div>
     <div>
    <label>Job Description</label>
    <Textarea placeholder='Enter or paste Job Description ' className='h-[200px]' 
     onChange={(event) => onHandleInputChange('jobDescription', event.target.value)}/>
    </div>

</div>
  )
}

export default JobDescription
