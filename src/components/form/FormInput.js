import React from "react";

const FormInput = ({ id, formdata, change }) => {
  const generateField = () => {
    let template = "";
    switch (formdata.element) {
      case "input":
        template = (
          <div className="form-group">
            {formdata.showLabel ? (
              <div className="label_inputs">{formdata.label}</div>
            ) : null}
            <input
              name={id}
              type="text"
              className="form-control"
              placeholder={formdata.placeholder}
              value={formdata.value}
              touched={formdata.touched}
              valid={formdata.valid}
              onChange={(e) => {
                change(e);
              }}
            />
            <span>{formdata.validationMessage}</span>
          </div>
        );
        break;
 
      default:
        return template;
    }
    return template;
  };
  return <>{generateField()}</>;
};

export default FormInput;
