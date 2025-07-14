const generateRandomGuess = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomGuess(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default generateRandomGuess;
