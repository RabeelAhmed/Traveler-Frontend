import { useContext, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";

export default function Detail() {
  const { userData, setUserData } = useContext(StepperContext);
  const [selectedInterests, setSelectedInterests] = useState(
    userData.interests || []
  );

  const interests = [
    "Mountains",
    "Beaches",
    "Deserts",
    "Forests",
    "Cities",
    "Villages",
    "Rivers",
    "Lakes",
    "Historical Places",
    "National Parks",
  ];

  const handleCheckboxChange = (interest) => {
    let updatedInterests;
    if (selectedInterests.includes(interest)) {
      updatedInterests = selectedInterests.filter((item) => item !== interest);
    } else {
      updatedInterests = [...selectedInterests, interest];
    }
    setSelectedInterests(updatedInterests);

    // Update the context with the new selected interests
    setUserData({ ...userData, interests: updatedInterests });
  };

  return (
    <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-green-600 mb-6">
        Select your Interests
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {interests.map((interest) => (
          <label
            key={interest}
            className={`flex items-center cursor-pointer p-2 border-2 rounded-xl transition-colors duration-300 ${
              selectedInterests.includes(interest)
                ? "bg-green-400 text-white border-green-400"
                : "border-gray-300 text-black"
            }`}
          >
            <input
              type="checkbox"
              checked={selectedInterests.includes(interest)}
              onChange={() => handleCheckboxChange(interest)}
              className="hidden"
            />
            <span className="w-full text-center">{interest}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
