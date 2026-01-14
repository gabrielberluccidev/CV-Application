import { useState } from "react";
import "../styles/GeneralForm.css";

function PersonalInfo() {
  const [info, setInfo] = useState({
    fullName: "",
    mail: "",
    phone: "",
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
      <h3>Personal Information</h3>

      <div className="divider"></div>

      <div className="input">
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Your name"
          onChange={handleChange}
          value={info.fullName}
          required
          id="fullName"
        />
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Your email"
          onChange={handleChange}
          value={info.email}
          required
          id="email"
          type="email"
        />
      </div>

      <div className="input">
        <label htmlFor="phone">Phone</label>
        <input
          placeholder="Your phone"
          onChange={handleChange}
          value={info.phone}
          id="phone"
          type="tel"
        />
      </div>
    </form>
  );
}

export default PersonalInfo;
