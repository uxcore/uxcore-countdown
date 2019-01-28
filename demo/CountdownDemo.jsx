/**
 * Countdown Component Demo for uxcore
 * @author qihan.lqh
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Countdown from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  customRenderer1 = ({
    hours, minutes, seconds,
  }) => (
    <span>{`${hours}:${minutes}:${seconds}`}</span>
  )

  onComplete = () => {
    console.log('ended!');
  }

  render() {
    return (
      <div>
        <div>
          <h2>type = normal && daysInHours</h2>
          <Countdown type="normal" date={Date.now() + 186411000} />
        </div>
        <div>
          <h2>type= days</h2>
          <Countdown type="days" date={Date.now() + 86411000} />
        </div>
        <div>
          <h2>type days when locale is en_US</h2>
          <Countdown type="days" locale="en_US" date={Date.now() + 86411000} />
        </div>
        <div>
          <h2>type = secords</h2>
          <Countdown type="sss" date={Date.now() + 1000000} />
        </div>
        <div>
          <h2>countdown onComplete text</h2>
          <Countdown date={Date.now() + 9000}>
            <span>已结束</span>
          </Countdown>
        </div>
        <div>
          <h2>countdown with onComplete</h2>
          <Countdown date={Date.now() + 4000} onComplete={this.onComplete}>
            <span>已结束</span>
          </Countdown>
        </div>
        <div>
          <h2>custom render</h2>
          <Countdown renderer={this.customRenderer1} date={Date.now() + 9000}>
            <span>已结束</span>
          </Countdown>
        </div>
      </div>
    );
  }
}

export default Demo;
