import { useState } from "react";
import "../styles/GeneralForm.css";

function Education() {
  const [info, setInfo] = useState({
    institution: "",
    course: "",
    startDate: "",
    finalDate: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  return (
    <form className="form">
      <h3>Education</h3>
      <div className="divider"></div>
      <div className="input">
        <label htmlFor="institution">Institution Name</label>
        <input
          placeholder="Institution Name"
          onChange={handleChange}
          value={info.institution}
          required
          id="institution"
        />
      </div>
      <div className="input">
        <label htmlFor="course">Course</label>
        <input
          placeholder="Your Course"
          onChange={handleChange}
          value={info.course}
          required
          id="course"
          type="text"
        />
      </div>
      <div className="date-inputs">
        <div className="input">
          <label htmlFor="startDate">Start Date</label>
          <input
            onChange={handleChange}
            value={info.startDate}
            id="startDate"
            type="date"
          />
        </div>
        <div className="input">
          <label htmlFor="finalDate">Final Date</label>
          <input
            onChange={handleChange}
            value={info.finalDate}
            id="finalDate"
            type="date"
          />
        </div>
      </div>
    </form>
  );
}

export default Education;
