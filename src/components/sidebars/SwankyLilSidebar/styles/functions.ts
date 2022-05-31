const transitionTable = {
  ['text-indent']: 0.2,
};

export function getTransition(keyword: keyof typeof transitionTable) {
  const duration = transitionTable[keyword];
  return duration ? `transition: ${keyword} ${duration}s;` : '';
}
