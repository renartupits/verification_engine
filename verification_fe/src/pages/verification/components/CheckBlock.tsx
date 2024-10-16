import { CheckButtonGroup } from '../../../components/check/CheckButtonGroup.tsx'
import classNames from 'classnames'
import { VerificationItemWithDisabled } from '../types.ts'

interface CheckBlockProps {
  i: number;
  isActive: boolean;
  verificationItem: VerificationItemWithDisabled;
  onClick: () => void;
  onValueChange: (item: VerificationItemWithDisabled, value: boolean) => void;
}

export const CheckBlock = ({i, isActive, verificationItem, onClick, onValueChange}: CheckBlockProps) => {
  const { description, selected, disabled } = verificationItem

  const descriptionClassNames = classNames('text-sm text-content-default', {
    'text-content-disabled': disabled
  })

  const checkBlockClassNames = classNames(
    'py-3 px-4 space-y-2 hover:bg-content-hover', {
      'bg-content-focus': isActive
  })

  const onCheckButtonGroupValueChange = (value: boolean) => {
    onClick()
    onValueChange(verificationItem, value)
  }

  return (
    <li tabIndex={i} className={checkBlockClassNames} onClick={onClick}>
      <span className={descriptionClassNames}>{description}</span>
      <CheckButtonGroup selected={selected} disabled={disabled} onChange={onCheckButtonGroupValueChange} />
    </li>
  )
}
