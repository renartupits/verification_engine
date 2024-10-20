import { AllowedKeyboardArrowsClicked, AllowedKeyboardNumbersClicked } from '../pages/verificationEngine/verification/types.ts';

export const handleCheckBlockKeyNavigation = (
  onClick: (value: AllowedKeyboardArrowsClicked) => void,
) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowUp') {
      onClick(AllowedKeyboardArrowsClicked.UP);
    } else if (event.key === 'ArrowDown') {
      onClick(AllowedKeyboardArrowsClicked.DOWN);
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};

export const handleCheckButtonGroupKeyNavigation = (
  onClick: (value: AllowedKeyboardNumbersClicked) => void,
) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '1') {
      onClick(AllowedKeyboardNumbersClicked.NR1);
    } else if (event.key === '2') {
      onClick(AllowedKeyboardNumbersClicked.NR2);
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
};
