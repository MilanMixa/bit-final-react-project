import "./Reports.css";

const Reports = ({ reports, modalHandler }) => {
  return (
    <div className="reports-container">
      <h4 className="reports-title">Reports</h4>
      <table className="table table-striped table-hover mt-3 mb-5">
        <thead className="fs-4">
          <tr>
            <th>Company</th>
            <th>Interview Date</th>
            <th colSpan="2">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => {
            return (
              <tr key={index}>
                <td>{report.companyName}</td>
                <td>{new Date(report.interviewDate).toLocaleString("en-GB", {year:"numeric", month:"2-digit", day:"2-digit"})}</td>
                <td>{report.status}</td>
                <td>
                  <span
                    onClick={() => {
                      modalHandler(report);
                    }}
                  >
                    <i className="far fa-eye"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
