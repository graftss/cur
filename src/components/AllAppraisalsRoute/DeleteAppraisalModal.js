import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const DeleteAppraisalModal = ({
  appraisalName,
  closeModal,
  deleteAppraisal,
  open,
 }) => (
  <Modal size="mini" open={open} className="modal">
    <Modal.Content>
      <p>Are you sure you want to delete <b>{appraisalName}</b>?</p>
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
          deleteAppraisal();
        }}
      />
    </Modal.Actions>
  </Modal>
);

export default DeleteAppraisalModal;
