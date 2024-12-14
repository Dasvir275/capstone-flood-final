import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import Button from './Button'
import {FaArrowRight} from 'react-icons/fa'
function InstructorSection() {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
      <div className='w-[50%] '>
<img src={instructor} alt="" className='shadow-white' />
      </div>
<div className='w-[50%]  flex flex-col gap-10 '>
<div className='text-4xl font-semibold w-[50%]'>Become an 
<HighlightText text={"Instructor"}/>
</div>
<p className='font-medium text-[16px] w-[80%] text-richblack-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae adipisci recusandae labore facere fuga quod! Lorem ipsum dolor sit amet consectetur.</p>
<div className='w-fit'>
<Button active={true} linkto={"/signup"}>
<div className='flex flex-row  gap-2 items-center'>
<div>Start Learning Today</div>
<FaArrowRight/>
</div>
</Button>

</div>

</div>
      </div>
    </div>
  )
}

export default InstructorSection
