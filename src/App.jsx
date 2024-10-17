import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

import Account from "./components/steps/Account";
import Detail from "./components/steps/Detail";
import Final from "./components/steps/Final";
import Payment from "./components/steps/Payment";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])

  const steps = ["Personal Details", "Interest", "Complete"];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Detail />;
      case 3:
        return <Final />;
        default:
          return <div>Step not found</div>;
    }
  };

  const handlerClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
  {/* Stepper */}
  <div className="container horizontal mt-5">
    <Stepper steps={steps} currentStep={currentStep} />

    {/* Display Components */}
    <div className="my-10 p-10">
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
      }}>
        {displaySteps(currentStep)}
      </StepperContext.Provider>
    </div>
  </div>

  {/* StepperControl */}
  <StepperControl
    handlerClick={handlerClick}
    currentStep={currentStep}
    steps={steps}
  />
</div>

  );
}

export default App;
