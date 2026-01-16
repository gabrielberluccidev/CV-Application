import "../styles/GeneralForm.css";

function PersonalInfo({ onChange, info }) {
  return (
    <form className="form">
      <h3>Personal Information</h3>

      <div className="divider"></div>

      <div className="input">
        <label htmlFor="fullName">Full Name</label>
        <input
          placeholder="Your name"
          onChange={onChange}
          value={info.fullName}
          required
          id="fullName"
        />
      </div>

      <div className="input">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Your email"
          onChange={onChange}
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
          onChange={onChange}
          value={info.phone}
          id="phone"
          type="tel"
        />
      </div>
    </form>
  );
}

export default PersonalInfo;
