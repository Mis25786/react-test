// import React, { Component } from 'react';
// import css from './Clock.module.css';

// export default class Clock extends Component {
//   state = {
//     time: new Date().toLocaleTimeString(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     console.log('setInterval');

//     this.intervalId = setInterval(
//       () => this.setState({ time: new Date().toLocaleTimeString() }),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return <div className={css['Clock__face']}>{this.state.time}</div>;
//   }
// }

// // export default Clock;

//===================== HOOK =========================

import { useState, useEffect, useRef } from 'react';
import css from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      // console.log('interval 1000' + Date.now());
      setTime(new Date());
    }, 1000);

    return () => {
      // console.log('clinear');
      stop();
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <div className={css['Clock__face']}>{time.toLocaleTimeString()}</div>
      <button type="button" onClick={stop}>
        STOP
      </button>
    </>
  );
}
