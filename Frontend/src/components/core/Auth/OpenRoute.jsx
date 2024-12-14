/* This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

 // if (token === null) {
   // return children
  //} else {
    //return <Navigate to="/dashboard/my-profile" />
  //}
  return children;
}

export default OpenRoute
*/

import { useSelector } from "react-redux"
//import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const { token} = useSelector((state) => state.auth)

  if (token === null) {
    return children
  } 
}

export default OpenRoute
