import React, { Component } from 'react';
import { Button, Dropdown, Modal } from 'semantic-ui-react';

export default class AddBatchModal extends Component {
  constructor() {
    super();

    this.state = { logId: undefined };
  }

  onDropdownChange = (_, e) => this.setState({ logId: e.value })

  render() {
    const {
      closeModal,
      logDropdownOptions,
      open,
    } = this.props;
    const { logId } = this.state;

    return (
      <Modal size="mini" open={open}>
        <Modal.Content>
          <Dropdown
            fluid
            onChange={this.onDropdownChange}
            options={logDropdownOptions}
            placeholder="select log"
            search
            selection
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            icon="ban"
            labelPosition="right"
            content="Cancel"
            onClick={closeModal}
          />
          <Button
            positive
            disabled={logId === undefined}
            icon="checkmark"
            labelPosition="right"
            content="Log"
            onClick={() => {
              closeModal();
            }}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
