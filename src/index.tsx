import * as React from "react";
import * as ReactDOM from "react-dom";
import ListContainer from './containers/ListContainer';
import { Provider } from 'react-redux';
import Store from './store'

import './styles/index.scss'

ReactDOM.render(
  <Provider store={Store}>
    <ListContainer />
  </Provider>,
  document.getElementById("root")
);