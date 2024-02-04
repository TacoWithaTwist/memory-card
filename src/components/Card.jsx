import React from "react";
import PropTypes from "prop-types";

function Card({ cardName, isClicked, onClick, index, style }) {
  return (
    <div onClick={() => onClick(index)} style={style}>
      <img src={cardName} alt="" />
      <span> </span>
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default Card;
