import { useState } from "react";
import SideBar from "./components/SideBar";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Your Name",
    email: "youremail@email.com",
    phone: "(11) 91234-5678",
  });

  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const [personalExperience, setPersonalExperience] = useState({
    company: "Your Company",
    position: "Your Position",
    description: "Brief description",
    startDate: "01-01-2001",
    finalDate: "31-12-2022",
  });

  const handlePersonalExperienceChange = (e) => {
    const { id, value } = e.target;
    setPersonalExperience((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  const [education, setEducation] = useState({
    institution: "Your Institution",
    course: "Your course",
    startDate: "01-01-2001",
    finalDate: "31-12-2022",
  });

  const handleEducationChange = (e) => {
    const { id, value } = e.target;
    setEducation((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <div className="app-container">
      <SideBar
        onPersonalInfoChange={handlePersonalInfoChange}
        personalInfo={personalInfo}
        onPersonalExperienceChange={handlePersonalExperienceChange}
        personalExperience={personalExperience}
        onEducationChange={handleEducationChange}
        education={education}
      />
      <Resume
        personalInfo={personalInfo}
        personalExperience={personalExperience}
        education={education}
      />
    </div>
  );
}

export default App;
