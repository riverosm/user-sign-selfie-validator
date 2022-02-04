import React from "react";
import { types } from "./../models/inputs";

class Input extends React.Component {
  render() {
    const {
      type,
      forwardRef,
      defaultValue,
      placeholder,
      // step,
      // min,
      // max,
      // disabled,
      // onBlur,
      // onchangeFunction,
      // id,
    } = this.props;

    const errors = this.props.err ? this.props.err : [];

    const className = errors.length === 0 ? "" : "border-danger";

    return (
      <React.Fragment>
        {(type === types.TEXT ||
          type === types.CHECKBOX ||
          type === types.PASSWORD ||
          type === types.NUMBER) && (
            <input
              className={className}
              defaultValue={defaultValue}
              type={type}
              ref={forwardRef}
              placeholder={placeholder}
            // min={min}
            // max={max}
            // disabled={disabled}
            // step={step}
            // lang="es"
            // onBlur={onBlur}
            // onChange={onchangeFunction}
            // id={id}
            ></input>
          )}

        {type === types.TEXTAREA && (
          <textarea
            // id={id}
            className="form-control"
            ref={forwardRef}
          // defaultValue={defaultValue}
          // onChange={onchangeFunction}
          ></textarea>
        )}

        <small className="text-small text-danger">
          {errors.map((err) => err.message)}
          &nbsp;
        </small>
      </React.Fragment>
    );
  }
}

export default Input;
