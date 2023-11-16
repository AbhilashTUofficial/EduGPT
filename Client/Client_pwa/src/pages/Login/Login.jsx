import bg from "../../assets/images/bg.png";
// import logo from '../../assets/logo.png';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Login() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="relative">
          <img src={bg} alt="background" />
          {/* <img src={logo} alt="logo" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> */}
        </div>
        <div className="relative h-screen/2 w-screen bg-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-teal-500 m-5">
            Login or signup
          </h1>
          <p>Enter your mobile number to get otp</p>
          <PhoneInput
            defaultCountry="IN"
            value=""
            className="w-[330px] h-[52px] bg-gray-100 shadow-inner rounded-xl m-10 "
            placeholder="Enter your number"
          />
          <button>Get OTP</button>
          <p className="mt-5">or</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
