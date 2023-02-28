export const getDifficultyColor = (difficulty: string): string => {
  let color = '';
  switch (difficulty) {
    case 'easy':
      color = 'green';
      break;
    case 'medium':
      color = 'yellow';
      break;
    case 'hard':
      color = 'red';
      break;
    default:
      color = 'white';
      break;
  }

  return color;
};