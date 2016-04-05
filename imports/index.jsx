import React from 'react';
import { App } from './client/App.jsx';
import { render } from 'react-dom';

Meteor.startup(function() {
  var rootDiv = document.createElement('div');
  document.body.appendChild(rootDiv);

  render(<App />, rootDiv);
});  