import { drawLinesWithAnimation } from './drawLinesWithAnimation';
import { isNil } from 'ramda';
import { getWinLine } from './getWinLine';

const drawWinLine = (theme, ctx, raf) => (game) => {
  if (isNil(game.winners)) {
    return null;
  }

  setTimeout(() => {
    const line = getWinLine(ctx.canvas, game);
    drawLinesWithAnimation(theme, ctx, raf)([line]);
  }, 500);

  return null;
};

export {
  drawWinLine
};
