import React, { Component } from 'react';
import { Button, Form, Input, Modal } from 'semantic-ui-react';

const clearedFields = { description: '', name: '' };

class NewLogModal extends Component {
  constructor() {
    super();

    this.state = clearedFields;
  }

  createLog = () => {
    const { description, name } = this.state;
    this.props.createLog({ description, name });
  }

  clearFields = () => this.setState(clearedFields)

  close = () => {
    this.clearFields();
    this.props.closeModal();
  }

  onNameChange = e => this.setState({ name: e.target.value })

  onDescriptionChange = e => this.setState({ description: e.target.value })

  render() {
    const { open } = this.props;
    const { description, name } = this.state;

    const submitDisabled = name.length === 0 || description.length === 0;

    return (
      <Modal size="small" open={open} className="modal">
        <Modal.Content>
          <p>Create a new log:</p>
            <Form>
              <Form.Field>
                <Input
                  onChange={this.onNameChange}
                  placeholder="name"
                  value={name}
                />
              </Form.Field>
              <Form.Field>
                <Input
                  fluid
                  onChange={this.onDescriptionChange}
                  placeholder="description"
                  value={description}
                />
              </Form.Field>
            </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            icon="ban"
            labelPosition="right"
            content="Cancel"
            onClick={this.close}
          />
          <Button
            disabled={submitDisabled}
            positive
            icon="checkmark"
            labelPosition="right"
            content="Create new"
            onClick={() => {
              this.createLog();
              this.close();
            }}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default NewLogModal;
