import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    // Render this div only if props.alert is truthy
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {/* Display the capitalized type and message of the alert */}
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      {/* Button to dismiss the alert */}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  );
}

export default Alert;


