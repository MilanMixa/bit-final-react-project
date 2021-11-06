import "./AboutCandidate.css";

import avatar from "../../../assets/avatar.jpg"

const AboutCandidate = (props) => {
  return (
    <div className="d-flex flex-wrap flex-xl-nowrap justify-content-center justify-content-xl-between mt-5 mx-5 w-75 mx-auto">
      <div className="col-11 col-sm-8 col-md-8 col-xl-4 col-xxl-3 about-avatar-container mb-5 mb-xl-0 d-flex flex-column justify-content-between">
        <img
          src={avatar}
          alt="avatar img"
          className="about-avatar mx-auto"
        />
        <h4 className="about-name">{props.candidateData.name}</h4>
      </div>

      <div className="col-11 col-sm-8 col-md-8 col-xl-7 col-xxl-7 d-flex flex-column justify-content-around about-data-container p-4">
        <h4 className="about-title col-12 text-center">Personal Information</h4>

        <div className="col-12 d-flex flex-wrap ps-xxl-5">
          <div className="col-12 col-xl-6 about-container mt-4 m-xl-0">
            <h6 className="about-info">Name:</h6>
            <p className="about-data">{props.candidateData.name}</p>
          </div>
          <div className="col-12 col-xl-6 about-container pt-3 pt-xl-0 m-xl-0">
            <h6 className="about-info">Email:</h6>
            <p className="about-data">{props.candidateData.email}</p>
          </div>

          <div className="col-12 col-xl-6 about-container pt-3 m-xl-0">
            <h6 className="about-info">Date of birth:</h6>
            <p className="about-data">
              {new Date(props.candidateData.birthday).toLocaleString("en-GB", {year:"numeric", month:"2-digit", day:"2-digit"})}
            </p>
          </div>
          <div className="col-12 col-xl-6 about-container mb-4 pt-3 m-xl-0">
            <h6 className="about-info">Education:</h6>
            <p className="about-data">{props.candidateData.education}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCandidate;
