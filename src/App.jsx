import React, { useState } from "react";
import Card from "./components/Card.jsx";
import image1 from "./assets/arcanoSmith.png";
import image2 from "./assets/demonFuse.png";
import image3 from "./assets/elvenArcher.png";
import image4 from "./assets/hobGoblin.png";
import image5 from "./assets/innerRage.png";
import image6 from "./assets/lockNload.png";
import image7 from "./assets/natureDefense.png";
import image8 from "./assets/tentacle.png";
import image9 from "./assets/whiteKing.png";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [cardArr, setCardArr] = useState([
    [image1, false],
    [image2, false],
    [image3, false],
    [image4, false],
    [image5, false],
    [image6, false],
    [image7, false],
    [image8, false],
    [image9, false],
  ]);

  function shuffleCards(arr) {
    const newArr = [...arr]; // Create a new array to avoid modifying the original state directly

    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
  }

  function handleScore(e) {
    if (cardArr) {
      let tmp = [cardArr];
      const clickedCardIndex = tmp.findIndex(
        (card) => card[0] === e.target.src
      );
      console.log("clickedCardIndex:", clickedCardIndex);
      if (tmp[clickedCardIndex][1]) {
        // If already clicked, reset the game
        setCardArr(shuffleCards(tmp));
        setScore(0);
        if (score > topScore) {
          setTopScore(score);
        }
      } else {
        // If not clicked, update the state
        tmp[clickedCardIndex][1] = true;
        setCardArr(shuffleCards(tmp));
        setScore((prev) => prev + 1);
      }
    }
  }

  function resetCards() {
    // Create a new array with reset isClicked properties
    const resetArr = cardArr.map((card) => [card[0], false]);
    setCardArr(shuffleCards(resetArr));
    setScore(0);
  }

  return (
    <>
      <h1>Welcome to the Hearthstone memory card game!</h1>
      <div className="score">
        Best Score: {topScore} <br />
        Current Score: {score}
      </div>
      <div className="cardsContainer">
        {cardArr.map((card, index) => (
          <Card
            key={index}
            cardName={card[0]}
            isClicked={card[1]}
            onClick={handleScore}
            style={{
              outerWidth: "200px",
              outerHeight: "auto",
              cursor: "pointer",
              border: "1px solid black",
              padding: "10px",
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
