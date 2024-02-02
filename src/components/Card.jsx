import Proptypes from 'prop-types';
function Card(props) {
  return (
    <>
      <img src={props.cardName} alt="" />,{props.isClicked}
    </>
  );
}
Card.propTypes = {
  cardName: Proptypes.string,
  isClicked: Proptypes.bool,
};
export default Card;
