import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import Button from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import Footer from '../components/Common/Footer'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
function Home() {
  return (
    <div>
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
<Link to={"/signup"}>
    <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900'>
            <p>Become an CWC Member</p>
           <FaArrowRight/>
        </div>
    </div>
</Link>

<div className='text-center text-4xl font-semibold mt-7'>
Say goodbye to traditional flood response methods. Our system automates flood Indundation and response strategies, ensuring accurate
<HighlightText text={"real-time updates on flood predictions, water levels, and emergency alerts"}/>
</div>
<div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
Access critical flood information anytime, anywhere. With our user-friendly interface and integrated chatbot.
        </div>
<div className='flex flex-row gap-7 mt-8'>
<Button active={true}><Link to="/chat">Explore Chatbot</Link></Button>
<Button active={false} linkto={"/signup"}>Get Flood Alerts</Button>
</div>
<div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
            <video muted loop autoPlay className = "shadow-[20px_20px_rgba(255,255,255)]"> <source src = {Banner} type = "video/mp4"/> </video>
        </div>
<div>
<CodeBlocks position = {"lg:flex-row"}
                heading = {  <div className='text-4xl font-semibold'>
                                Unlock Your <HighlightText text={"AI-Enhanced Flood Management:"}/>  with our Advanced System
                            </div>
                          }
                subheading = { `Real-Time Analysis: Monitors water levels and predicts flood extents using AI.`}
                ctabtn1 = { { btnText: "try it yourself",  linkto: "/signup",  active: true, } }
                ctabtn2 = { { btnText: "learn more",  linkto: "/login",  active: false, } }
                codeblock = {`User-Friendly Interface: Allows users to access flood data, receive alerts, and monitor water levels.


                Chatbot Integration: Provides flood information and reports based on predefined queries.
                Dynamic Flood Maps: Users can view updated flood extent predictions and water level changes in real-time.
               `}
                codeColor = {"text-yellow-25"}
                backgroundGradient = {<div className = "codeblock1 absolute"></div>}
             />


</div>

<div>
<CodeBlocks position = {"lg:flex-row-reverse"}
                heading = {  <div className='text-4xl font-semibold'>
                                Unlock Your <HighlightText text={"AI-Driven Flood Response System"}/>  
                            </div>
                          }
                subheading = { "Experience a new level of efficiency in flood management and response strategies."}
                ctabtn1 = { { btnText: "try it yourself",  linkto: "/signup",  active: true, } }
                ctabtn2 = { { btnText: "learn more",  linkto: "/login",  active: false, } }
                codeblock = {`Dynamic Flood Maps: Users can view updated flood extent predictions and water level changes in real-time.


                Secure Data Handling: Facilitates safe and reliable data collection and processing to ensure the best response actions.`}
                codeColor = {"text-yellow-25"}
                backgroundGradient = {<div className = "codeblock1 absolute"></div>}
             />


</div>
</div>

{/* <div className='bg-pure-greys-5 text-richblack-700'>
<div className='homepage_bg h-[310px]'>
<div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>
<div className='h-[150px]'></div>
<div className='flex  gap-7 text-white'>
<Button active={true} linkto={"/signup"}>
<div className='flex items-center gap-3'>
Explore Full Catalog
<FaArrowRight/>
</div>
</Button>

<Button active={false} linkto={"/signup"}>
<div className='flex items-center gap-3'>
Learn More
<FaArrowRight/>
</div>
</Button>



</div>
</div>

</div>
<div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 mx-auto'>
<div className='flex flex-row gap-5 mb-10 mt-[95px]'>
<div className='text-4xl font-semibold w-[45%]'>
Get the Skills you need for a <HighlightText text={"job that is in demand"}/>
</div>
   <div className = "flex flex-col items-start gap-10 lg:w-[40%]">
                        <p className='text-[16px]'> The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills. </p>                   
                        <Button active={true} linkto={"/signup"}>  Learn more </Button>
                    </div>
</div>

<TimelineSection/>
<LearningLanguageSection/>
</div>


</div> */}

{/* 
<div className='w-11/12 mx-auto max-w-maxContent flex-col items center justify-between gap-8 bg-richblack-900 text-white'>
<InstructorSection/>
</div> */}

{/* <h2 className='text-center text-4xl font-semibold mt-10'>review from other Learners</h2> */}

</div>
  )
}

export default Home
