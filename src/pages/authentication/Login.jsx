import { Link } from 'react-router-dom';
import TextField from './elements/TextField';
import GoogleButton from './elements/GoogleButton';
import FacebookButton from './elements/FacebookButton';
import SubmitButton from './elements/SubmitButton';

const Login = () => {
  return (
    <div className="flex">
      <div className="w-full p-12">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <div className="flex items-center space-x-2 my-8">
          <div className="h-1.5 w-1/5 bg-black"></div>
          <p className="text-blue font-semibold">Sign in with</p>
        </div>
        <div className="flex space-x-4 px-4 mb-10">
          <GoogleButton />
          <FacebookButton />
        </div>
        <div className="flex items-center text-xs space-x-2 px-16 mb-10">
          <div className="h-[1px] rounded-full w-full bg-slate-400"></div>
          <span>Or</span>
          <div className="h-[1px] rounded-full w-full bg-slate-400"></div>
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
        <SubmitButton text={'Sign In'} />
        <div className="text-sm flex space-x-2 my-4">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-blue underline">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="w-full h-[750px] hidden md:block">
        <img
          src="https://source.unsplash.com/random"
          className="object-cover"
          alt="sign in user"
        />
      </div>
    </div>
  );
};

export default Login;
