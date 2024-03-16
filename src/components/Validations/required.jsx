import React from "react";

const Label = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc not-contain">
        <div className="required-text">Placeholder</div>
        <input type="text" name="label" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const Required = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="required-text">Field Required ?</div>
        <input type="checkbox" name="required" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const MinLength = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="min-length-text">Minimum Length </div>
        <input type="number" name="minLength" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const MaxLength = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="max-length-text">Maximum Length</div>
        <input type="number" name="maxLength" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const NotContain = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc not-contain">
        <div className="not-contain-text">Words Not Contain</div>
        <input type="text" name="notContain" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const EmailValidate = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="email-validate-text"> Validate Email</div>
        <input type="checkbox" name="emailValidate" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const NumberRange = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="number-range-text">Number Range</div>
        <input
          type="text"
          className="number-range"
          name="numberRangeFrom"
          onChange={onChange}
        />{" "}
        to
        <input
          type="text"
          className="number-range"
          name="numberRangeTo"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const PhoneValidate = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="phone-validate-text"> Validate Phone Number</div>
        <input type="checkbox" name="phoneValidate" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const PasswordValidate = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="password-validate-text"> Validate Password</div>
        <input
          type="checkbox"
          name="passwordValidate"
          id=""
          onChange={onChange}
        />
      </div>
    </div>
  );
};

const Options = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="options-text">Options</div>
        <input type="text" name="options" id="" onChange={onChange} />
      </div>
    </div>
  );
};

const Width = ({ onChange }) => {
  return (
    <div className="required-top">
      <div className="required-desc">
        <div className="options-text">Width</div>
        <input type="number" name="width" id="" onChange={onChange} />%
      </div>
    </div>
  );
};

export {
  Label,
  Required,
  MinLength,
  MaxLength,
  NotContain,
  EmailValidate,
  NumberRange,
  PhoneValidate,
  PasswordValidate,
  Options,
  Width,
};
