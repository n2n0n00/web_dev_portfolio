/* eslint-disable react/react-in-jsx-scope */
import "./Alert.css";
const Alert = ({ type, text }) => {
  return (
    <div className="alert-container">
      <div
        className={`alert-box ${
          type === "danger" ? "alert-danger" : "alert-success"
        } `}
        role="alert"
      >
        <p
          className={` ${
            type === "danger" ? "alert-danger" : "alert-success"
          } alert-badge`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="alert-text">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
