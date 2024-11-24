import React, { useState, useEffect, useContext } from 'react';
import Card from './components/Card';
import { WaitingStateContext } from './context/WaitingStateProvider';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const { setWaitingState } = useContext(WaitingStateContext);
  const [cardArr, setCardArr] = useState(() => {
    return Array.from({ length: 10 }).map((_, index) => ({
      id: index,
      flipped: false,
      spriteSheet: '/assets/CuteCards - asset pack/CuteCards.png',
      spriteWidth: 100,
      spriteHeight: 144,
      totalFrames: 15,
      frameRate: 10,
      frameIndex: index,
    }));
  });

  function shuffleCards(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  function handleScore(index) {
    const tmp = [...cardArr];
    const clickedCard = tmp[index];

    if (clickedCard.flipped) {
      resetGame();
    } else {
      setWaitingState((prev) => !prev);
      setTimeout(() => {
        tmp[index].flipped = true;
        setCardArr(shuffleCards(tmp));
        setScore((prev) => prev + 1);
        setWaitingState((prev) => !prev);
      }, 1000);
    }
  }

  function resetGame() {
    setTimeout(() => {
      const resetArr = cardArr.map((card) => ({ ...card, flipped: false }));
      setCardArr(shuffleCards(resetArr));
      setScore(0);
    }, 1000);
  }

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score]);

  return (
    <>
      <h1>Welcome to a Memory Card Game!</h1>
      <div className="score">
        Best Score: {topScore} <br />
        Current Score: {score}
      </div>
      <button
        onClick={() => {
          resetGame();
        }}
      >
        Start!
      </button>
      <div className="game">
        <div className="cardsContainer">
          {cardArr.map(
            (
              {
                id,
                flipped,
                spriteSheet,
                spriteWidth,
                spriteHeight,
                totalFrames,
                frameRate,
                frameIndex,
                waitingState,
              },
              index
            ) => (
              <Card
                key={id}
                onClick={() => {
                  handleScore(index);
                }}
                spriteSheet={spriteSheet}
                spriteWidth={spriteWidth}
                spriteHeight={spriteHeight}
                totalFrames={totalFrames}
                frameRate={frameRate}
                frameIndex={frameIndex}
                flipped={flipped}
                waitingState={waitingState}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
