export const shuffle = (correct_answer: string, array: string[]): string[] => {
  let copy = [...array.slice(), correct_answer];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
};