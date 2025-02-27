import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";
// Images
import Logo from "../../images/cwclogo.gif";
// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Footer = () => {
  return (

    <div className="bg-richblack-800">
      
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
         
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
          
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">

              <img src={Logo} alt="" className="object-contain" />
              <h1 className="text-richblack-50 font-semibold text-[16px]"> Company </h1>
                
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                             return (
                                    <div key={i} className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200">
                                       <Link to = {ele.toLowerCase()}>{ele}</Link>
                                    </div>
                                  )})
                }
              </div>

              <div className="flex gap-3 text-lg">
                <FaFacebook /> <FaGoogle /> <FaTwitter />  <FaYoutube />
              </div>

            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">


              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7"> Support </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>

            </div>

          </div>


          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            { FooterLink2.map((ele, i) => {
                  return (

                    <div key = {i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                      <h1 className="text-richblack-50 font-semibold text-[16px]">{ele.title}</h1>
          
                        <div className="flex flex-col gap-2 mt-2">
                            { ele.links.map((link, index) => {
                                    return (
                                      <div key={index}  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200" >
                                        <Link to={link.link}>{link.title}</Link>
                                      </div>
                                    )})
                              } 
                        </div>

                    </div>
                  )})
             }
          </div>

        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
             
            <div className="flex flex-row">
                 <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3"> 
                   <Link to={BottomFooter[0].split(" ").join("-").toLocaleLowerCase()}> {BottomFooter[0]} </Link>
                </div>
                <div className=" border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3"> 
                   <Link to={BottomFooter[1].split(" ").join("-").toLocaleLowerCase()}> {BottomFooter[1]} </Link>
                </div>
                <div className = "cursor-pointer hover:text-richblack-50 transition-all duration-200 px-3"> 
                   <Link to={BottomFooter[2].split(" ").join("-").toLocaleLowerCase()}> {BottomFooter[2]} </Link>
                </div>
            </div>

          <div className = "text-center">Made with ❤️ By Capstone Teams</div>
           <div className = "text-center">Dasvir Singh(Full Stack +Gis)</div>
             <div className = "text-center">Shivam Aggarwal(Machine Learning +Deep Learning +Gis)</div>
            <div className = "text-center">Jaskaran Singh(Frontoed Developer +Design+Gis)</div>
            <div className = "text-center">Devansh Singh(Ml)</div>
                      <div className = "text-center">Once Kaur(Frontoned Developer)</div>

        </div>
      </div>

    </div>
  
 )};

export default Footer;
