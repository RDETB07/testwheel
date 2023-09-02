import { useState } from 'react';
import { RouletteWheel } from '../react-casino-roulette';

// import '../react-casino-roulette/index.css';

export const Wheel = () => {
  const [start, setStart] = useState(false);
  const [winningBet, setWinningBet] = useState('-1');

  const doSpin = () => {
    setWinningBet('5');
    setStart(true);
  };

  return (
    <div>
      <div
        style={{ paddingTop: 10, display: 'flex', justifyContent: 'center' }}
      >
        <RouletteWheel start={start} winningBet={winningBet} />
      </div>
      <div>
        <button type="button" disabled={start} onClick={doSpin}>
          Spin
        </button>
      </div>
    </div>
  );
};
