import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import LoginForm from '../LoginForm';

const poesessidFaqUri = 'https://code.google.com/archive/p/procurement/wikis/LoginWithSessionID.wiki';

export default () => (
  <div className="stretch">
    <Grid
      className="stretch"
      style={{ height: '100%' }}
      textAlign="center"
      verticalAlign="middle"
    >
      <Grid.Column style={{ width: '450px' }}>
        <Header content="Currrrrrrrrr (ency tracker)" />
        <LoginForm />
        (<a href={poesessidFaqUri}><h7>what is a POESESSID???</h7></a>)
      </Grid.Column>
    </Grid>
  </div>
);
