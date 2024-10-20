import { CheckBlock } from './components/CheckBlock.tsx'
import { Button } from '../../../components/buttons/Button.tsx'
import { useEffect, useState } from 'react'
import {
  AllowedKeyboardArrowsClicked,
  AllowedKeyboardNumbersClicked,
  VerificationItem,
  VerificationItemWithDisabled,
} from './types.ts'
import {
  handleCheckBlockKeyNavigation,
  handleCheckButtonGroupKeyNavigation,
} from '../../../listeners/keyboardListeners.ts'
import { handleNoClick, handleYesClick, onArrowsClick, onNumbersClick } from '../utils.ts'

interface VerificationProps {
  verificationItems: VerificationItem[];
  onSubmit: (verificationItems: VerificationItemWithDisabled[]) => void;
}

export const Verification = ({verificationItems, onSubmit}: VerificationProps) => {
  const [checkListItems, setCheckListItems] = useState<VerificationItemWithDisabled[]>([])
  const [activeTab, setActiveTab] = useState<number | null>(null)

  useEffect(() => {
    const data = verificationItems
      .sort((a, b) => a.priority - b.priority)
      .map((item, index) => ({...item, disabled: index !== 0}))
    setCheckListItems(data)
  }, [verificationItems])

  useEffect(() => {
    const arrowsCallback = handleCheckBlockKeyNavigation((arrow: AllowedKeyboardArrowsClicked) => {
      onArrowsClick(arrow, activeTab, setActiveTab, checkListItems)
    })

    const numbersCallback = handleCheckButtonGroupKeyNavigation((number: AllowedKeyboardNumbersClicked) => {
      onNumbersClick(number, activeTab, setVerificationItemSelectValue)
    })

    return () => {
      arrowsCallback()
      numbersCallback()
    }
  }, [checkListItems, activeTab]);

  const setVerificationItemSelectValue = (index: number, value: boolean) => {
    if (value) {
      handleYesClick(index, checkListItems, setCheckListItems)
    } else {
      handleNoClick(index, setActiveTab, checkListItems, setCheckListItems)
    }
  }

  const isSubmitEnabled =
    checkListItems.some(item => item.selected === false) ||
    checkListItems.every(item => item.selected === true)

  return (
    <>
      <ul>
        {checkListItems.map((item, index) =>
          <CheckBlock
            key={item.id}
            i={index}
            verificationItem={item}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
            setVerificationItemSelectValue={setVerificationItemSelectValue}
          />
        )}
      </ul>
      <div className="p-3">
        <Button fullWidth disabled={!isSubmitEnabled} onClick={() => onSubmit(checkListItems)}>Submit</Button>
      </div>
    </>
  )
}
