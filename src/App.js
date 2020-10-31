import React, { Fragment } from 'react';
import AnimatedCursor from "react-animated-cursor"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import Routes from './Utils/Router'

const App = () => {
  return (
    <Fragment>
      {isMobile ? null :
        <AnimatedCursor
          innerSize={14}
          outerSize={20}
          color='210, 230, 3'
          outerAlpha={0.4}
          innerScale={1}
          outerScale={2}
        />
      }
      <Router>
        {Routes.map((route, index) => (
          <Route exact path={route.route} component={route.component} key={index} />
        ))}
      </Router>
    </Fragment>
  );
}

export default App;