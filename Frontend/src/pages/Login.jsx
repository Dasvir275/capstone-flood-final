import loginImg from "../images/cwclogo.gif"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Your Gateway to Flood Indundation level,Alert and Rescue System"
      description2="Efficient Flood chatbot system which automatically alert on danger level of Flood
"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
