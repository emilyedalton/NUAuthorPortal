import React from 'react';
import { Segment, Header, Form, Divider, Label, Button, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../common/form/TextInput';

const Account = ({ error }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      <div>
        <Header color="teal" sub content="Change password" />
        <p>Use this form to update your account settings</p>
        <Form>
          <Field
            width={8}
            name="newPassword1"
            type="password"
            pointing="left"
            inline={true}
            component={TextInput}
            basic={true}
            placeholder="New Password"
          />
          <Field
            width={8}
            name="newPassword2"
            type="password"
            inline={true}
            basic={true}
            pointing="left"
            component={TextInput}
            placeholder="Confirm Password"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Divider />
          <Button size="large" positive content="Update Password" />
        </Form>
      </div>

     

     
    </Segment>
  );
};

export default reduxForm({ form: 'account' })(Account);