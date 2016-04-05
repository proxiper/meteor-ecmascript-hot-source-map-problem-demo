import React from 'react';
import { NICE, SUPER_NICE } from './Colors';
import { Counter } from './Counter';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter increment={22} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}

