const PrevButton = ({ onClick }) => {
  return (
    <button
      className="text-blue border border-blue py-1 px-4 text-xs min-[377px]:text-sm rounded-full min-[377px]:px-6 min-[377px]:py-2 hover:shadow-lg"
      onClick={onClick}
    >
      Previous
    </button>
  );
};

export default PrevButton;
