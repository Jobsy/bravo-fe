import React from 'react';
import { TooltipWrapper, Tooltip as TooltipContainer } from '../../styling/atoms/Tooltip';

const Tooltip = props => {
  const { face, bgColor, color, text } = props;
  face = face || 'down';
  const arrowBorderColor = (() => {
    switch (face) {
      case 'left':
        return `transparent ${color} transparent transparent`;
      case 'right':
        return `transparent transparent transparent ${color}`;
      case 'up':
        return `transparent transparent ${color} transparent`;
      case 'down':
        return `${color} transparent transparent transparent`;
      default:
        return `${color} transparent transparent transparent`;
    }
  })();

  const arrowX = (() => {
    switch (face) {
      case 'left':
        return '0%';
      case 'right':
        return '100%';
      default:
        return `50%`;
    }
  })();

  const arrowY = (() => {
    switch (face) {
      case 'up':
        return '0%';
      case 'down':
        return '100%';
      default:
        return `50%`;
    }
  })();

  const arrowTransform = (() => {
    switch (face) {
      case 'left':
        return 'translateX(-100%) translateY(-50%)';
      case 'right':
        return 'translateY(-50%)';
      case 'up':
        return 'translateX(-50%) translateY(-100%)';
      case 'down':
        return 'translateX(-50%)';
      default:
        return `translateX(-50%)`;
    }
  })();
};

const TooltipLeft = props => {
  const { bgColor, color, text } = props;
  return (
    <TooltipContainer
      y="50%"
      transform="translateX(-100%) translateY(-50%)"
      background={bgColor}
      color={color}
      borderColor={`transparent transparent transparent ${bgColor}`}
      arrowY="50%"
      arrowX="100%"
      arrowTransform="translateX(-50%)"
    />
  );
};

const TooltipRight = props => {
  const { bgColor, color, text } = props;
  return (
    <TooltipContainer
      x="100%"
      y="50%"
      transform="translateY(-50%)"
      background={bgColor}
      color={color}
      borderColor={`transparent ${bgColor} transparent transparent`}
      arrowY="50%"
      arrowTransform="translateX(-100%) translateY(-50%)"
    />
  );
};

const TooltipUp = props => {
  const { bgColor, color, text } = props;
  return (
    <TooltipContainer
      x="50%"
      y="0%"
      transform="translateX(-100%) translateY(-100%)"
      background={bgColor}
      color={color}
      borderColor={`${bgColor} transparent transparent transparent`}
      arrowX="50%"
      arrowY="100%"
      arrowTransform="translateX(-50%)"
    />
  );
};

export default Tooltip;
