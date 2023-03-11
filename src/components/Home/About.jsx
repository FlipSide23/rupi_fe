import { FaArrowRight } from "react-icons/fa";

export const About = () => {
  return (
    <div className="p-4 md:p-16" data-aos="fade-up">
      <div className="bg-[#EDF7FF] p-6 flex flex-col md:flex-row md:rounded-full rounded-3xl">
        <div className="bg-white py-20 px-24 rounded-full md:rounded-r-none mr-8 md:border-r-2 border-r-slate-400 hidden md:block">
          <h1 className="text-green font-bold text-xl md:text-2xl text-center md:text-left">
            About RUPI
          </h1>
        </div>
        <h1 className="text-green font-bold text-xl md:text-2xl text-center md:text-left my-4 md:hidden">
          About RUPI
        </h1>
        <div className="flex flex-col justify-center space-y-8 mx-8 text-center md:text-left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget duis
            mi nunc bibendum. Tellus elementum nec lorem eget dictumst. Risus in
            gravida eu, enim lorem. Sed consequat ut suspendisse eros. Nunc nunc
            accumsan, viverra enim. Mi.
          </p>

          <div className="mx-auto md:m-0">
            <button className="text-sm text-green font-semibold flex items-center space-x-4 outline-none underline">
              <span>Learn More</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
