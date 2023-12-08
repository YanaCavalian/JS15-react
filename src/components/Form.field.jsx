import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const FieldForm = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First name is not found";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is not found";
    }
    if (!values.city) {
      errors.city = "City is not found";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", city: "" }}
      onSubmit={(values, formikBag) => {
        console.log(values);
        formikBag.resetForm();
      }}
      validate={validate}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <Field type="text" name="city" />
          <ErrorMessage name="city" component="div" className="error-message" />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};
