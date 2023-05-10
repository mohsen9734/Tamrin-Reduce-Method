let text = [];

function letterOperation(myDream) {
  for (let i = 0; i < myDream.length; i++) {
    if (myDream[i] !== " ") {
      text.push(myDream[i]);
    }
  }
  let counter = text.reduce((prev, cur) => {
    if (!prev[cur]) {
      prev[cur] = 1;
    } else {
      prev[cur] += 1;
    }
    return prev;
  }, {});
  return counter;
}

console.log(letterOperation("A World Full Of Kindness And Love"));
