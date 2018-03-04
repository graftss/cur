import React, { Component } from 'react';

import LogFormComponent from '../LogFormComponent';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const clearedFields = { description: '', name: '' };

const connections = {
  actions: ['createLog', 'push'],
  selectors: ['currentLeague'],
};

class NewLogRoute extends Component {
  constructor() {
    super();

    this.state = clearedFields;
  }

  createLog = () => {
    const { currentLeague, createLog, push } = this.props;
    const { description, name } = this.state;

    const newLog = logSchema.new(name, description, currentLeague);
    createLog(newLog);
    push('/logs');
  }

  clearFields = () => this.setState(clearedFields)

  close = () => {
    this.clearFields();
    this.props.closeModal();
  }

  onNameChange = e => this.setState({ name: e.target.value })

  onDescriptionChange = e => this.setState({ description: e.target.value })

  render() {
    const { description, name } = this.state;

    const submitDisabled = name.length === 0 || description.length === 0;

    return (
      <LogFormComponent
        description={description}
        headerPrompt="Create a new log:"
        name={name}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        onSubmit={this.createLog}
        submitDisabled={submitDisabled}
      />
    );
  }
}

export default withState(connections)(NewLogRoute);
