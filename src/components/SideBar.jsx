import "../styles/SideBar.css";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";

function SideBar() {
  return (
    <div className="SideBar">
      <PersonalInfo />
      <Education />
    </div>
  );
}

export default SideBar;
