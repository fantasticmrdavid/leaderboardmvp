import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import Cta from 'components/Cta';
import * as Yup from 'yup';
import * as styles from './styles';

const LoginForm = ({ login }) => {
  const {
    Error,
    Field,
    Heading,
    Input,
    Label,
  } = styles;

  const initialValues = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => login(values)}
      validationSchema={{
        username: Yup.string()
          .required('Please enter your username'),
        password: Yup.string()
          .required('Please enter your password'),
      }}
      render={(formProps) => {
        const {
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          submitForm,
          touched,
          values,
        } = formProps;
        return (
          <form onSubmit={handleSubmit}>
            <Heading>Account Sign In</Heading>
            <Field>
              <Label htmlFor="username" error={!!errors.username}>Username</Label>
              { errors.username && touched.username && <Error>{errors.username}</Error> }
              <Input name="username" type="text" onBlue={handleBlur} onChange={handleChange} values={values.username} required placeholder="Your username" />
            </Field>
            <Field>
              <Label htmlFor="password" error={!!errors.password}>Password</Label>
              { errors.password && touched.username && <Error>{errors.password}</Error> }
              <Input name="password" type="text" onBlue={handleBlur} onChange={handleChange} values={values.password} required placeholder="Your password" />
            </Field>
            <Cta primary onClick={submitForm}>Sign In</Cta>
          </form>
        );
      }}
    />
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
