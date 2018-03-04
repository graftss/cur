import React, { Component } from 'react';

import LogFormComponent from '../LogFormComponent';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const connections = {
  actions: ['push', 'updateLog'],
  selectors: ['editedLog'],
};

class EditLogRoute extends Component {
  componentWillMount() {
    const { editedLog: log } = this.props;

    this.setState({
      description: logSchema.description(log),
      name: logSchema.name(log),
    });
  }

  onDescriptionChange = e => this.setState({ description: e.target.value })

  onNameChange = e => this.setState({ name: e.target.value })

  saveEditedLog = () => {
    const { editedLog, push, updateLog } = this.props;
    const { description, name } = this.state;

    updateLog(logSchema.edit(editedLog, name, description));
    push('/logs');
  }

  headerPrompt() {
    const originalName = logSchema.name(this.props.editedLog);
    return <span>Editing log <b>{originalName}</b>:</span>
  }

  render() {
    const { description, name } = this.state;

    const submitDisabled = description.length === 0 || name.length === 0;

    return (
      <LogFormComponent
        description={description}
        headerPrompt={this.headerPrompt()}
        name={name}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        onSubmit={this.saveEditedLog}
        submitDisabled={submitDisabled}
      />
    );
  }
}

export default withState(connections)(EditLogRoute);
