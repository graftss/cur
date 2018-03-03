import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import withState from '../../state/withState';

const leagueToOption = league => ({
  text: league,
  value: league,
});

const connections = {
  actions: ['setLeague'],
  selectors: ['allLeagues', 'currentLeague'],
}

const LeagueDropdown = ({
  allLeagues,
  currentLeague,
  setLeague,
}) => (
  <span>
    <Dropdown
      inline
      onChange={(_, e) => setLeague(e.value)}
      options={allLeagues.map(leagueToOption)}
      value={currentLeague}
    />
  </span>
);

export default withState(connections)(LeagueDropdown);
