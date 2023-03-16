import React, { useEffect, useState } from "react";

const ProfileStatus = ({ statusProp, updateStatus }) => {
  const [flag, setFlag] = useState(false);
  const [status, setStatus] = useState(statusProp);

  const activateEditMode = () => {
    setFlag(true);
  };

  const deactivateEditMode = () => {
    setFlag(false);
    updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(statusProp);
  }, []);
  if (!statusProp) return <h3>no status</h3>;
  return (
    <>
      {!flag && (
        <div>
          <span onDoubleClick={activateEditMode}>{status}</span>
        </div>
      )}
      {flag && (
        <div>
          <input
            onBlur={deactivateEditMode}
            onChange={(e) => onStatusChange(e)}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
