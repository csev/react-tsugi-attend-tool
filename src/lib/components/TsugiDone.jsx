import * as React from 'react';

import {
  Button,
  PageHeaderTools,
} from '@patternfly/react-core';

import { inIframe, window_close } from './tsugi.js';

function TsugiDone() {
  function handleClick(e) {
    e.preventDefault();
    window_close();
  }

  if ( inIframe() ) return null;

  return (
     <div>
      <Button onClick={handleClick}>Done</Button>
     </div>
  );
}

export { TsugiDone };
