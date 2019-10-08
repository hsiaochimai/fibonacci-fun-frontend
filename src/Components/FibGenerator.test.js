import React from 'react';
import ReactDOM from 'react-dom';
import FibGenerator from './FibGenerator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FibGenerator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
