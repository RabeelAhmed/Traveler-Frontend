import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"; // Import necessary components from react-router-dom
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import Account from "./components/steps/Account";
import Detail from "./components/steps/Detail";
import Final from "./components/steps/Final";
import Login from "./components/steps/Login";
import { StepperContext } from "./contexts/StepperContext";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

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

    // Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <Router>
      <StepperContext.Provider
        value={{
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <div className="xs:w-1/2 sm:w-1/2 md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
          <div className="container horizontal mt-4">
            {/* Only show Stepper if not on Login page */}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/register"
                element={
                  <>
                    <Stepper steps={steps} currentStep={currentStep} />
                    <div className="my-4 p-8">{displaySteps(currentStep)}</div>
                    <StepperControl
                      handlerClick={handlerClick}
                      currentStep={currentStep}
                      steps={steps}
                    />
                  </>
                }
              />
              <Route path="/" element={<Navigate to="/register" />} />
            </Routes>
          </div>
        </div>
      </StepperContext.Provider>
    </Router>
  );
}

export default App;
