export const getRandomNumber = (min = 0, max = 2) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
