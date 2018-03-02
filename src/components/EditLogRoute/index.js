import React, { Component } from 'react';

import EditLogRouteComponent from './EditLogRouteComponent';
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

  render() {
    const { description, name } = this.state;

    const submitDisabled = description.length === 0 || name.length === 0;

    return (
      <EditLogRouteComponent
        description={description}
        name={name}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        saveEditedLog={this.saveEditedLog}
        submitDisabled={submitDisabled}
      />
    );
  }
}

export default withState(connections)(EditLogRoute);
