import { curry } from 'ramda';
import { getLineMidPoint } from './getLineMidPoint';
import { addFrame } from './addFrame';

const addLineFrame = addFrame('line');

/**
 * Split line into small lines to draw by frame
 * @param {*} percentageByFrame percentage of the line to draw by frame
 * @param {*} line [[x,y],[x,y]] 
 * @return {[[[Number]]]} line chunks
 */
const getLineFrames = curry((percentageByFrame, line) => {
  let frames = [];
  let previousPoint = line[0];

  const getMidPoint = getLineMidPoint(line[0], line[1]);

  for (var i = percentageByFrame; i < 100; i += percentageByFrame) {
    const midLine = [
      previousPoint,
      getMidPoint(i / 100)
    ];
    frames = addLineFrame(frames, midLine);

    previousPoint = midLine[1];
  }

  const lastLine = [
    previousPoint,
    line[1]
  ];

  frames = addLineFrame(frames, lastLine);

  return frames;
});

export {
  getLineFrames
};
