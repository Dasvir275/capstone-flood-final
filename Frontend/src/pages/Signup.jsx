import signupImg from "../images/cwclogo.gif"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Experience a new level of efficiency and transparency in managing Flood anaysis using Geospatial Satelitte"
      description1="Flood Indundation level,Alert and Rescue System"
      description2="Efficient Flood chatbot system which automatically alert on danger level of Flood"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup