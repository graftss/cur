import React, { Component } from 'react';
import { Button, Form, Grid, Input, Segment } from 'semantic-ui-react';

const icon = iconName => ({ icon: iconName, iconPosition: 'left' });

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPoesessidChange,
      onSubmit,
      onUsernameChange,
      poesessid,
      username,
    } = this.props;

    return (
      <Grid
        stretched
        style={{ height: '100%' }}
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column style={{ width: '450px' }}>
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
        </Grid.Column>
      </Grid>
    );
  }
}
