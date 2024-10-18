import { Check } from './Check.tsx'

interface CheckGroupProps {
  selected?: boolean;
  disabled: boolean;
  onClick?: () => void;
  onChange: (value: boolean) => void;
}

export const CheckButtonGroup = ({selected, disabled, onChange}: CheckGroupProps) => {
  return (
    <div>
      <Check
        position={1}
        selected={selected !== undefined && selected}
        disabled={disabled}
        onClick={() => onChange(true)}
      >
        Yes
      </Check>
      <Check
        position={2}
        selected={selected !== undefined && !selected}
        disabled={disabled}
        onClick={() => onChange(false)}
      >
        No
      </Check>
    </div>
  )
}
