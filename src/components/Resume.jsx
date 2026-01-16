import "../styles/Resume.css";

function Resume({ personalInfo, education, personalExperience }) {
  return (
    <div className="resume-container">
      <div className="resume-preview">
        <div className="resume-header">
          <h1>{personalInfo.fullName}</h1>
          <p>
            {personalInfo.email} | {personalInfo.phone}
          </p>
        </div>
        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>{education.course}</h3>
            <p>{education.institution}</p>
            <p>
              {education.startDate} - {education.finalDate}
            </p>
          </div>
        </div>
        <div className="resume-section">
          <h2>Professional Experience</h2>
          <div className="resume-item">
            <h3>{personalExperience.position}</h3>
            <p>{personalExperience.company}</p>
            <p>
              {personalExperience.startDate} - {personalExperience.finalDate}
            </p>
            <p>{personalExperience.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
