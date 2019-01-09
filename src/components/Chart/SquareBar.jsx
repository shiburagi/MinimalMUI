import PropTypes from "prop-types";
import React from "react";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
            ${x + width},${y + height}
            ${x + width},${y}
            ${x},${y}
            Z`;
};

const SquareShape = (props) => {
  const { fill, x, y, width, height, opacity } = props;

  return <path d={getPath(x, y, width, height)} opacity={opacity} strokeWidth={2} fill="none" stroke={fill} />;
};

SquareShape.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SquareShape;