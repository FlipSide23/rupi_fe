import { FaArrowRight } from "react-icons/fa";

export const About = () => {
  return (
    <div className="p-16">
      <div className="bg-[#EDF7FF] p-6 flex rounded-full">
        <div className="bg-white py-20 px-24 rounded-l-full mr-8 border-r-2 border-r-slate-400">
          <h1 className="text-green font-bold text-2xl">
            About
            <br />
            RUPI
          </h1>
        </div>
        <div className="flex flex-col justify-center space-y-8 mx-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis
            mi nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
            gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
            accumsan, viverra enim. Mi.
          </p>

          <div className="text-left">
            <button
            
              className="text-sm text-green font-semibold flex items-center space-x-4 outline-none underline"
            >
              <span>Learn More</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
