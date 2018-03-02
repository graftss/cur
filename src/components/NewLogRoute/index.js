import React, { Component } from 'react';

import NewLogRouteComponent from './NewLogRouteComponent';
import { logSchema } from '../../state/schema/log';
import withState from '../../state/withState';

const clearedFields = { description: '', name: '' };

const connections = {
  actions: ['createLog', 'push'],
};

class NewLogRoute extends Component {
  constructor() {
    super();

    this.state = clearedFields;
  }

  createLog = () => {
    const { description, name } = this.state;
    const newLog = logSchema.new(name, description);
    this.props.createLog(newLog);
    this.props.push('/logs');
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
      <NewLogRouteComponent
        createLog={this.createLog}
        description={description}
        name={name}
        onDescriptionChange={this.onDescriptionChange}
        onNameChange={this.onNameChange}
        submitDisabled={submitDisabled}
      />
    );
  }
}

export default withState(connections)(NewLogRoute);
