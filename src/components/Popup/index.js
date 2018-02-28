import React from 'react';
import { Popup } from 'semantic-ui-react';

import './Popup.css';

export default ({ children, ...props }) => (
  <Popup
    basic
    className="popup"
    flowing
    hoverable
    position="top center"
    trigger={children}
    {...props}
  />
);
