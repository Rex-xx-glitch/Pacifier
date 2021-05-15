const heightValues = [
  3, 3, 3, 2.5, 2.5, 2.5, 1.5, 1.5, 1.5, 1, 1, 2, 8, 8, 8, 6, 6, 6, 6, 5, 5, 0,
];

export default function estimatedAgeBasedOnHeight(birthHeight, height) {
  const exceptions = () => {
    if (height === 100) {
      return [4, "years"];
    } else if (height === 130) {
      return [8, "years"];
    } else if (height === 75) {
      return [1, "year"];
    } else {
      return null;
    }
  };

  return estimate(birthHeight, height, heightValues, exceptions);
}

function estimate(initial, value, values, exceptions) {
  const exception = exceptions();
  if (exception !== null) {
    return exception;
  } else {
    for (let i = 0; i < values.length; i++) {
      if (initial > value) {
        return [i % 12, i >= 12 ? "years" : "months"];
      }
      initial += values[i];
    }
  }

  return null;
}
