import React from "react";
//semantic modal
import { Button, Header, Modal } from "semantic-ui-react";

const StartModal = () => (
  <Modal trigger={<Button>Info</Button>} basic size="small">
    <Header icon="bullhorn" content="Info" />
    <Modal.Content>
      <p>
        Communication barriers are a major cause of adverse events in acute care
        hospitals (Hurting, Nilsen, Happ, & Blackstone, 2015). To facilitate
        effective patient-provider communication, this app offers patients with
        limited expressive language abilities or language differences to express
        basic and immediate wants and needs through individualized communication
        boards.
      </p>
    </Modal.Content>
  </Modal>
);
export default StartModal;
