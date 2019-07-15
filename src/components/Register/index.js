import React from 'react';
import {connect} from 'react-redux'
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {registerUser} from '../../common/auth/authActions'
import TextInput from '../../common/form/TextInput';

const actions = {
  registerUser
}

const RegisterForm = ({handleSubmit, registerUser}) => {
  return (
    <div>
      <Form size="large" onSubmit={handleSubmit(registerUser)} autoComplete="off">
        <Segment>
          <Field
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)(reduxForm({form:'registerForm'})(RegisterForm));