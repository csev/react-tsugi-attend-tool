import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import '@app/app.css';

const App: React.FunctionComponent = () => {
  var bname="__TSUGI_RELATIVE_PATH__";
  console.log('App running at:', bname);
  return (
  <Router basename={ bname }>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </Router>
  );
};

export default App;
