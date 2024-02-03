import Proptypes from "prop-types";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div onClick={props.onClick} style={props.style}>
        <img src={`${props.cardName}`} alt="" />
      </div>
    </>
  );
}
Card.propTypes = {
  cardName: Proptypes.string,
  isClicked: Proptypes.bool,
  onClick: Proptypes.func,
  style: Proptypes.object,
};
export default Card;
