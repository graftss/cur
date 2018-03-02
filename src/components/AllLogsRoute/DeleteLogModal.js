import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const DeleteAppraisalModal = ({
  closeModal,
  deleteLog,
  open,
  name,
 }) => (
  <Modal size="mini" open={open} className="modal">
    <Modal.Content>
      <p>Are you sure you want to delete <b>{name}</b>?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        negative
        icon="ban"
        labelPosition="right"
        content="No"
        onClick={closeModal}
      />
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Yes"
        onClick={() => {
          closeModal();
          deleteLog();
        }}
      />
    </Modal.Actions>
  </Modal>
);

export default DeleteAppraisalModal;
