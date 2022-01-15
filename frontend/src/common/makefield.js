import {Form, Input} from "antd";
import React from "react";

const makeField = Component => (
    {
      input,
      meta,
      children,
      hasFeedback,
      label,
      ...rest
    }) => {
  const hasError = meta.touched && meta.invalid;
  return (
      <Form.Item
          label={label}
          validateStatus={hasError ? "error" : "success"}
          hasFeedback={hasFeedback && hasError}
          help={hasError && meta.error}
      >
        <Input {...input} children={children} {...rest}/>
      </Form.Item>
  );
};

export const AInput = makeField(Input);
