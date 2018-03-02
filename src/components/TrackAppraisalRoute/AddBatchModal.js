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
      addBatchToLog,
      closeModal,
      logDropdownOptions,
      open,
    } = this.props;
    const { logId } = this.state;

    return (
      <Modal size="mini" open={open}>
        <Modal.Content>
          Select a log to add to:
          <Dropdown
            fluid
            onChange={this.onDropdownChange}
            options={logDropdownOptions}
            placeholder="select log"
            search
            selection
            value={logId}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Cancel"
            icon="ban"
            labelPosition="right"
            negative
            onClick={closeModal}
          />
          <Button
            content="Log"
            disabled={logId === undefined}
            icon="checkmark"
            labelPosition="right"
            onClick={() => {
              closeModal();
              addBatchToLog(logId);
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
