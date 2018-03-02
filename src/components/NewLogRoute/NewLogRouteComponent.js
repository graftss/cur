import React from 'react';
import { Button, Form, Input, Segment } from 'semantic-ui-react';

export default ({
  createLog,
  description,
  name,
  onDescriptionChange,
  onNameChange,
  submitDisabled,
}) => (
  <Segment raised>
    <p>Create a new log:</p>
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
        content="Create log"
        disabled={submitDisabled}
        fluid
        onClick={createLog}
      />
    </Form>
  </Segment>
);
