import './App.css';
import Card from './components/Card.jsx';
import image1 from './assets/arcanoSmith.png';
import image2 from './assets/demonFuse.png';
import image3 from './assets/elvenArcher.png';
import image4 from './assets/hobGoblin.png';
import image5 from './assets/innerRage.png';
import image6 from './assets/lockNload.png';
import image7 from './assets/natureDefense.png';
import image8 from './assets/tentacle.png';
import image9 from './assets/whiteKing.png';
function App() {
  const cards = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  return (
    <>
      <h1>Welcome to the hearthstone memory card game!</h1>
      <div className="cardsContainer">
        <Card cardName={cards[0]} isClicked={false}></Card>
        <Card cardName={cards[1]} isClicked={false}></Card>
        <Card cardName={cards[2]} isClicked={false}></Card>
        <Card cardName={cards[3]} isClicked={false}></Card>
        <Card cardName={cards[4]} isClicked={false}></Card>
        <Card cardName={cards[5]} isClicked={false}></Card>
        <Card cardName={cards[6]} isClicked={false}></Card>
        <Card cardName={cards[7]} isClicked={false}></Card>
        <Card cardName={cards[8]} isClicked={false}></Card>
      </div>
    </>
  );
}

export default App;
