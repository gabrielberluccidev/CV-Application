import "../styles/SideBar.css";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import PersonalExperience from "./ProfessionalExperience";

function SideBar({
  onPersonalInfoChange,
  personalInfo,
  onEducationChange,
  education,
  onPersonalExperienceChange,
  personalExperience,
}) {
  return (
    <div className="SideBar">
      <PersonalInfo onChange={onPersonalInfoChange} info={personalInfo} />
      <Education onChange={onEducationChange} info={education} />
      <PersonalExperience
        onChange={onPersonalExperienceChange}
        info={personalExperience}
      />
    </div>
  );
}

export default SideBar;
