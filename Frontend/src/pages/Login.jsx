import loginImg from "../images/cwclogo.gif"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Your Gateway to Secure"
      description2="and Hassle-Free Revenue Collection and Tax Management"
      image={loginImg}
      formType="login"
    />
  )
}

export default Login