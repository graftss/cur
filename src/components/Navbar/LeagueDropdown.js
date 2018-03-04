import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import withState from '../../state/withState';

const leagueToOption = league => ({
  text: league,
  value: league,
});

const connections = {
  actions: ['changeLeague'],
  selectors: ['allLeagues', 'currentLeague'],
}

const LeagueDropdown = ({
  allLeagues,
  currentLeague,
  changeLeague,
}) => (
  <span>
    <Dropdown
      inline
      onChange={(_, e) => changeLeague(e.value)}
      options={allLeagues.map(leagueToOption)}
      value={currentLeague}
    />
  </span>
);

export default withState(connections)(LeagueDropdown);
