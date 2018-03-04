import React from 'react';
import { Button, Dimmer, Grid, Input, Loader, Segment } from 'semantic-ui-react';

import TabList from '../TabList';

export default ({
  appraisalName,
  canSubmitAppraisal,
  isIdSelected,
  loading,
  onAppraisalSubmit,
  onAppraisalNameChange,
  onItemClick,
  submitPrompt,
  tabs,
}) => (
  <Segment raised>
    <Dimmer active={tabs.length === 0}>
      <Loader>Requesting tabs</Loader>
    </Dimmer>
    <Input
      onChange={onAppraisalNameChange}
      placeholder="name your appraisal"
      value={appraisalName}
    />
    <Button
      content={submitPrompt}
      disabled={!canSubmitAppraisal}
      onClick={onAppraisalSubmit}
      primary
      style={{ 'marginLeft': '20px' }}
    />
    <Grid centered style={{ margin: '20px 0' }}>
      <div>
        <h1>untracked</h1>
        <TabList
          tabs={tabs}
          onItemClick={onItemClick}
          isIdSelected={isIdSelected}
        />
      </div>
      <div>
        <h1>tracked</h1>
        <TabList
          tabs={tabs}
          onItemClick={onItemClick}
          isIdSelected={id => !isIdSelected(id)}
        />
      </div>
    </Grid>
  </Segment>
);
