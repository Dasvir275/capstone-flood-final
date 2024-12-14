
import "./App.css";
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login"
import Navbar from "./components/Common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Signup from "./pages/Signup";
import  ForgotPassword  from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Propertytax from "./components/Common/Propertytax";
import PayPropertyTax from "./components/Common/PayPropertytax";
import Success from "./components/Common/Success";
import Chat from "./components/fachatboat/Chat";
import Cancel from "./components/Common/Cancel";
import Receipt1 from "./components/Common/Receipt1";
import Admindashboard from "./components/Common/Admindashboard";
import Manageuser from "./components/Common/Manageuser";
import Recentpayment from "./components/Common/Recentpayment";
import Watertax from "./components/Common/Watertax";
import Complaint from "./components/Common/Complaint";
import Onlinebuildingplan from "./components/Common/Onlinebuildingplan";
import Garbagetax from "./components/Common/Garbagetax";

import HomePage from "./pages/HomePage";
import ImageSlider from "./components/ImageSlider";
import ImageSlider1 from "./components/ImageSlider1";
import ImageSlider2 from "./components/Imageslider2";
import Main from "./pages/Main";
import Sample from "./components/Common/Sample";
import ImageSlider3 from "./components/ImageSlider3";
import ChatRedirect from "./components/Chatredirect";
//import Marquee from "./components/Common/Marque";
function App() {
  let obj={
    name:'dasvir',
    rollno:123
  };
  return (
    <div className="w-screen min-h-screen  bg-richblack-900 flex  flex-col font-inter">
    <Navbar/>
    
<Routes>  
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element = {  <Login />  } />
  <Route path="/signup" element = { <Signup />  } />
  <Route path="/forgot-password" element = { <OpenRoute> <ForgotPassword/> </OpenRoute> } />
  <Route path="/update-password/:id" element = { <OpenRoute> <UpdatePassword/> </OpenRoute> } />
  <Route path="/verify-email" element = { <OpenRoute> <VerifyEmail/> </OpenRoute> } />
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/propertytax" element={<Propertytax/>}/>
  <Route path="/paypropertytax" element={<PayPropertyTax/>}/>
  <Route path="/success" element={<Success/>}/>
  <Route path="/cancel" element={<Cancel/>}/>
  <Route path="/chat" element={<ChatRedirect/>}/>
  <Route path="/receipt" element={<Receipt1/>}/>
  <Route path="/recentpayment" element={<Recentpayment/>}/>




  <Route 
      element={
        <PrivateRoute>
        </PrivateRoute>
      }
    />
    
      <Route path="dashboard/my-profile" element={<MyProfile />} />
      <Route path="/admindashboard" element={<Admindashboard/>} />
      <Route path="/manageuser" element={<Manageuser/>} />
      <Route path="/watertax" element={<Watertax/>} />
      <Route path="/complaint" element={<Complaint/>} />
      <Route path="/onlinebuilding" element={<Onlinebuildingplan/>} />
      <Route path="/garbagetax" element={<Garbagetax/>} />

      <Route path="/main" element={<Main/>}/>
<Route path="/forecast" element={<HomePage/>}/>
<Route path="/pongdam" element={<ImageSlider/>}/>
<Route path="/kulumanali" element={<ImageSlider1/>}/>
<Route path="/bhakhra" element={<ImageSlider2/>}/>
<Route path="/patiala" element={<ImageSlider3/>}/>

</Routes>
<Contact/>
<Chat/>
    </div>
  );
}

export default App;
