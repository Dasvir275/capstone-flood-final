import React, { useEffect, useState } from 'react'
import { Link,matchPath } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import logo from "../../images/cwclogo.gif";
import NavbarLinks from "../../data/navbar-links"
import {useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {categories} from '../../services/apis';
import { apiConnector } from '../../services/apiConnector';
import ProfileDropdown from '../core/Auth/ProfileDropdown';
function Navbar() {
    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItems}=useSelector((state)=>state.cart);
    const [sublinks,setsublinks]=useState([]);
    const fetchSublinks=async()=>{
        try{
            const result=await apiConnector("GET",categories.CATEGORIES_API);
            console.log("printing sublinks",result);
            setsublinks(result.data.data);
            console.log("hello",sublinks);
        }
        catch(error){
            console.log("could not fetch");
        }
    }
   useEffect(()=>{
    fetchSublinks();
   },[])
       
    const location=useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
<Link to="/">
    <img src={logo} alt="" width={100} height={50} loading='lazy'/>
</Link>
<nav>
    <ul className='flex gap-x-6 text-richblack-25'>
{
   NavbarLinks.map((link,index)=>{
    return(
    <li key={index}>
        {
            link.title ==="Services"?(<div className='flex items-center gap-2 group relative'>
                <p>{link.title}</p>
                <IoArrowDownCircleSharp />
<div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[80%]  top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 w-[300px] z-50'>
<div className='absolute translate-y-[-45%] translate-x-[80%] left-[50%] top-0 h-6 w-6  rotate-45 rounded bg-richblack-5'></div>
{
    sublinks.length?(
            sublinks.map((subLinks,index)=>(
                <Link to={`${subLinks.link}`} key={index}>
<p>{subLinks.name}</p>
                </Link>
            ))
        
    ):(<div></div>)
}


</div>

            </div>):(
                <Link to={link.path}>
                    <p className={`${matchRoute(link.path)?"text-yellow-25":"text-richblack-25"}`}>
                        {link.title}
                    </p>
                </Link>
            )
        }
    </li>);
   })
}
    </ul>
</nav>
<div className='flex gap-x-4 items-center'>
{
    user &&user?.accountType !=="Instructor" &&(
        <Link to="/dashboard/cart" className='relative'>
        <CiShoppingCart />
        {
            totalItems>0 &&(
                <span>
                    {totalItems}
                </span>
            )
        }
        </Link>
    )
}
{
    token==null &&(
        <Link to="/login">
        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
            Log in
        </button>

        </Link>
    )
}
{
token==null &&(
    <Link to="/signup">
        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
            Sign Up
        </button>
    </Link>
)
}{
    token!==null && <ProfileDropdown/>
}
</div>
      </div>
    </div>
  )
}

export default Navbar
