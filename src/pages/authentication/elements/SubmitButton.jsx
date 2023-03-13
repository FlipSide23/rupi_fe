const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className="bg-black text-white px-12 py-2 rounded-lg text-sm mt-8 mb-4">
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
