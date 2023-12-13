import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});
