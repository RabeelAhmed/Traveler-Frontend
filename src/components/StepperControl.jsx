import {} from "react";

export default function StepperControl({ handlerClick, currentStep, steps }) {
  return (
    <div className="container flex justify-around mt-4 mb-6">
      {/* Back Button */}

      <button
        onClick={() => handlerClick("back")} // Pass "back" argument
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-salte-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>

      {/* Next Button */}

      <button
        onClick={() => handlerClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Confirm" : "Next"}
      </button>
    </div>
  );
}
