import React from 'react';
import { Button, Form, Input, Segment } from 'semantic-ui-react';

export default ({
  description,
  name,
  onDescriptionChange,
  onNameChange,
  onSubmit,
  headerPrompt,
  submitDisabled,
}) => (
  <Segment raised>
    <p>{headerPrompt}</p>
    <Form>
      <Form.Field>
        <Input
          onChange={onNameChange}
          placeholder="name"
          value={name}
        />
      </Form.Field>
      <Form.Field>
        <Input
          onChange={onDescriptionChange}
          placeholder="description"
          value={description}
        />
      </Form.Field>
      <Button
        content="Save"
        disabled={submitDisabled}
        fluid
        onClick={onSubmit}
      />
    </Form>
  </Segment>
);
