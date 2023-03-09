export const services = {
  0: {
    title: (
      <p>
        Membership Fee
        <br />
        Payment
      </p>
    ),
    url: "/payment",
  },
  1: {
    title: (
      <p>
        Publication on our
        <br />
        Website
      </p>
    ),
    url: "/publication",
  },
  2: {
    title: (
      <p>
        Application
        <br />
        Submission
      </p>
    ),
    url: "/application",
  },
  3: {
    title: (
      <p>
        Generate Membership
        <br />
        Certificate
      </p>
    ),
    url: "/certificate",
  },
};

export const dots = dotsFunc();
function dotsFunc() {
  const localDoc = [];
  for (let i = 0; i < 10; i++) {
    localDoc.push(
      <span
        className={`w-[1.3px] h-2 my-[3px] md:w-3 md:h-[1.3px] bg-slate-500 mx-[3px] ${
          i < 7 ? "hidden md:block" : ""
        }`}
        key={i}
      ></span>
    );
  }
  return localDoc;
}
