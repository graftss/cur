import React from 'react';
import { Button, Form, Input, Segment } from 'semantic-ui-react';

const icon = iconName => ({ icon: iconName, iconPosition: 'left' });

export default ({
  onPoesessidChange,
  onSubmit,
  onUsernameChange,
  poesessid,
  username,
}) => (
  <Form size="small">
    <Segment size="small">
      <Form.Field>
        <Input
          {...icon('user')}
          onChange={onUsernameChange}
          placeholder="username"
          value={username}
        />
      </Form.Field>
      <Form.Field>
        <Input
          {...icon('lock')}
          onChange={onPoesessidChange}
          placeholder="POESESSID"
          value={poesessid}
        />
      </Form.Field>
      <Button content="Login" fluid onClick={onSubmit} />
    </Segment>
  </Form>
);
