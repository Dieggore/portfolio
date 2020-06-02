export const calculateMinHeight = (range) => (height) => height + height * range;
export const setTransformRange = (offset) => [offset - 500, offset + 300];
export const setTransformValues = (range) => ['0%', `${range * 100}%`];
export const rand = (min = 0, max = 100) => Math.floor(Math.random() * (+max - +min)) + +min;
