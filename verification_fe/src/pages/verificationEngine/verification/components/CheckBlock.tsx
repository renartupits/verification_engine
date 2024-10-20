import classNames from 'classnames';
import CheckButtonGroup from '../../../../components/checks/CheckButtonGroup.tsx';
import { VerificationItemWithDisabled } from '../types.ts';

interface CheckBlockProps {
  i: number;
  isActive: boolean;
  verificationItem: VerificationItemWithDisabled;
  onClick: () => void;
  setVerificationItemSelectValue: (index: number, value: boolean) => void;
}

function CheckBlock({
  i, isActive, verificationItem, onClick, setVerificationItemSelectValue,
}: CheckBlockProps) {
  const { description, selected, disabled } = verificationItem;

  const descriptionClassNames = classNames('text-sm text-content-default', {
    'text-content-disabled': disabled,
  });

  const checkBlockClassNames = classNames('py-3 px-4 space-y-2 hover:bg-content-hover', {
    'bg-content-focus': isActive,
  });

  const onCheckButtonGroupValueChange = (value: boolean) => {
    onClick();
    setVerificationItemSelectValue(i, value);
  };

  return (
    <li role="presentation" tabIndex={i} className={checkBlockClassNames} onClick={onClick}>
      <span className={descriptionClassNames}>{description}</span>
      <CheckButtonGroup
        selected={selected}
        disabled={disabled}
        onChange={onCheckButtonGroupValueChange}
      />
    </li>
  );
}

export default CheckBlock;
