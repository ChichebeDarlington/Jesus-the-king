import { useContextApp } from "../context/contextApp";

const Alert = () => {
  const { alertType, alertText } = useContextApp();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
