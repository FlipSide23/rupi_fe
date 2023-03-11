import { Link } from 'react-router-dom';
import TextField from './elements/TextField';
import GoogleButton from './elements/GoogleButton';
import FacebookButton from './elements/FacebookButton';
import SubmitButton from './elements/SubmitButton';

const SignUp = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="w-full p-12">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <div className="flex items-center space-x-2 my-8">
          <div className="h-1.5 w-1/5 bg-black"></div>
          <p className="text-blue font-semibold">Sign up with</p>
        </div>
        <div className="flex space-y-4 md:space-y-0 md:space-x-4 mb-10 flex-col md:flex-row">
          <GoogleButton />
          <FacebookButton />
        </div>
        <div className="flex items-center text-xs space-x-2 px-16 mb-10">
          <div className="h-[1px] rounded-full w-full bg-slate-400"></div>
          <span>Or</span>
          <div className="h-[1px] rounded-full w-full bg-slate-400"></div>
        </div>
        <div className="flex md:space-x-4 md:flex-row flex-col">
          <TextField
            type="text"
            hint="Enter your first name"
            label="First Name"
          />
          <TextField
            type="text"
            hint="Enter your last name"
            label="Last Name"
          />
        </div>
        <TextField
          type="email"
          hint="Enter your email address"
          label="Email"
        />
        <TextField
          type="password"
          hint="Enter your password"
          label="Password"
        />
        <TextField
          type="password"
          hint="Re-enter your password"
          label="Repeat Password"
        />
        <SubmitButton text={'Sign Up'} />
        <div className="text-sm flex space-x-2 my-4">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue underline">
            Sign In
          </Link>
        </div>
      </div>
      <div className="w-full h-full hidden md:block bg-[url('../images/signUp/signUpImage.jpeg')]"></div>
    </div>
  );
};

export default SignUp;
