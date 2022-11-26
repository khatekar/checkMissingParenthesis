const isCheckValidBrackets = str => {
  const bracketsMap = {
    ')': '(',
    '}': '{',
    '[': ']',
  };
  let bracketStack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      bracketStack.push(str[i]);
    } else if (
      bracketStack[bracketStack.length - 1] === bracketsMap[str[i]]
    ) {
      bracketStack.pop();
    } else {
      return false;
    }
  }
  return bracketStack.length ? false : true;
};
