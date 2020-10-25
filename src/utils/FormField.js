import React from "react";

function FormField({ id, formdata, change }) {
  const showError = () => {
    let errorMessage = "";
    if (formdata.validation && !formdata.valid) {
      errorMessage = (
        <div className="error_label">{formdata.validationMessage}</div>
      );
    }
    return errorMessage;
  };
  const generateField = () => {
    let template = "";
    switch (formdata.element) {
      case "input":
        template = (
          <div>
            <input
              {...formdata.config}
              value={formdata.value}
              onBlur={(event) => {
                change({ event, id, blur: true });
              }}
              onChange={(event) => {
                change({ event, id });
              }}
            />
            {showError()}
          </div>
        );
        break;
      default:
        return template;
    }
    return template;
  };
  return <div>{generateField()}</div>;
}

export default FormField;
