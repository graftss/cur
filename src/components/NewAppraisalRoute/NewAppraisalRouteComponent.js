import React from 'react';
import { Button, Grid, Input } from 'semantic-ui-react';

import TabList from '../TabList';

export default ({
  allTabs,
  appraisalName,
  canSubmitAppraisal,
  isIdSelected,
  onAppraisalSubmit,
  onAppraisalNameChange,
  onItemClick,
}) => (
  <div>
    <Input
      onChange={onAppraisalNameChange}
      placeholder="name your appraisal"
      value={appraisalName}
    />
    <Button
      content="Create"
      disabled={!canSubmitAppraisal}
      onClick={onAppraisalSubmit}
      primary
      style={{ 'marginLeft': '20px' }}
    />
    <Grid centered style={{ margin: '20px 0' }}>
      <div>
        <h1>untracked</h1>
        <TabList
          allTabs={allTabs}
          onItemClick={onItemClick}
          isIdSelected={isIdSelected}
        />
      </div>
      <div>
        <h1>tracked</h1>
        <TabList
          allTabs={allTabs}
          onItemClick={onItemClick}
          isIdSelected={id => !isIdSelected(id)}
        />
      </div>
    </Grid>
  </div>
);