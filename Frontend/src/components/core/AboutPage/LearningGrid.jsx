import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
const LearningGridArray = [
  {
    order: -1,
    heading: "AMRUT",
    highlightText: "Anyone, Anywhere",
    description:  "Atal Mission for Rejuvenation and Urban Transformation",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description: "About ATAL INDORE CITY TRANSPORT SERVICES LIMITED",   
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description: "About ATAL INDORE CITY TRANSPORT SERVICES LIMITED",   
  },
  {
    order: 3,
    heading: "Certification",
    description:  "About ATAL INDORE CITY TRANSPORT SERVICES LIMITED",  
  },
  {
    order: 4,
    heading: `Rating Auto-grading`,
    description: "About ATAL INDORE CITY TRANSPORT SERVICES LIMITED",     
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:  "About ATAL INDORE CITY TRANSPORT SERVICES LIMITED",
  },
 
];

/*
here there are total 8 card box in first 2 cardbox we write "World-Class Learning for" and a button (we use col-spac-2 to merge two column)
(i === 0 && "xl:col-span-2) and we make (row 2 , col 1) empty and we had merger column1 & column2 so here to make (row 2 , col 1) empty
we write (card.order === 3 && "xl:col-start-2"}) means when card 3 appear then it goes to column 2 , card 3 appear in (row2 , col1) and 
(row2 , col1) and (row2 , col2) are merge into single box so card 3 placed into second part(row2 , col2) and first part is empty;
and we dicide color of each box by it  indexing (even or odd);

*/

const LearningGrid = () => {
  return (

    <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
            { LearningGridArray.map((card, i) => {
                return (
                  <div key = {i} className = {`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${card.order === 3 && "xl:col-start-2"}  
                                ${ card.order % 2 === 1  ? "bg-richblack-700 h-[294px]" : card.order % 2 === 0  ? "bg-richblack-800 h-[294px]"  : "bg-transparent" } `} >
                  
                    { card.order < 0 ? (
                                      <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">

                                          <div className="text-4xl font-semibold ">  {card.heading} 
                                            <HighlightText text={card.highlightText} />  
                                          </div>
                                          <p className="text-richblack-300 font-medium"> {card.description} </p>
                                          <div className="w-fit mt-2">
                                            <CTAButton active={true} linkto={card.BtnLink}> {card.BtnText} </CTAButton>
                                          </div>

                                      </div>
                                      ) : (
                                      <div className="p-8 flex flex-col gap-8">
                                        <h1 className="text-richblack-5 text-lg">{card.heading}</h1>
                                        <p className="text-richblack-300 font-medium">  {card.description}  </p>     
                                      </div>
                                    )
                    }

                  </div>
                )
              })
           }
    </div>
  
)};

export default LearningGrid;