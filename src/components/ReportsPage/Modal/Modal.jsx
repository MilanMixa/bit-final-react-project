import "./Modal.css";

const Modal = ({ modalReport, showModal, cancelModal }) => {
  return showModal && (
    <div className="modal-container overflow-auto h-50">
      <div className="modal-title-header d-flex justify-content-between px-3 pt-2 border-bottom">
        <h5 className="display-5">{modalReport.candidateName}</h5>
        <span className="cancel-modal-button">
          <i
            onClick={cancelModal}
            className="far fa-times-circle fs-2 mt-3"
          ></i>
        </span>
      </div>
      <div className="modal-container-body d-flex flex-wrap flex-lg-nowrap justify-content-between px-3 mt-4">
        <div className="col-12 col-lg-4">
          <h6 className="modal-title">Company</h6>
          <p>{modalReport.companyName}</p>
          <h6 className="modal-title">Interview date</h6>
          <p> {new Date(modalReport.interviewDate).toLocaleString("en-GB", {year:"numeric", month:"2-digit", day:"2-digit"})}</p>
          <h6 className="modal-title">Phase</h6>
          <p> {modalReport.phase}</p>
          <h6 className="modal-title">Status</h6>
          <p> {modalReport.status}</p>
        </div>
        <div className="col-12 col-lg-7">
          <h6 className="modal-title">Notes</h6>
          <p>{modalReport.note}</p>
        </div>
      </div>
    </div>)
};

export default Modal;
