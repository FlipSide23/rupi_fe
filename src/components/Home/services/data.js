export const services = {
  0: {
    title: "Membership Fee\nPayment",
    url: "/payment",
  },
  1: {
    title: "Publication on our Website",
    url: "/publication",
  },
  2: {
    title: "Application Submission",
    url: "/application",
  },
  3: {
    title: "Generate Membership Certificate",
    url: "/certificate",
  },
};

export const dots = dotsFunc();
function dotsFunc() {
  const localDoc = [];
  for (let i = 0; i < 10; i++) {
    localDoc.push(<span className="w-3 h-[1.3px] bg-slate-500 mx-[3px]" key={i}></span>);
  }
  return localDoc;
}
