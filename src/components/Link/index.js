import React from 'react';

import './Link.css';
import withState from '../../state/withState';

const connections = {
  actions: ['push'],
};

const Link = ({ children, onClick, push, to }) => (
    <div
      className="no-select shrink-to-fit link brighten-hover"
      onClick={() => {
        if (to !== undefined) push(to);
        if (typeof onClick === 'function') onClick();
      }}
    >
      {children}
    </div>
);

export default withState(connections)(Link);
