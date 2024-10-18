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

interface VerificationProps {
  verificationItems: VerificationItem[];
  setResultView: (value: boolean) => void;
}

export const Verification = ({verificationItems, setResultView}: VerificationProps) => {
  const [checkListItems, setCheckListItems] = useState<VerificationItemWithDisabled[]>([])
  const [activeTab, setActiveTab] = useState<number | null>(null)

  useEffect(() => {
    const data = verificationItems
      .sort((a, b) => a.priority - b.priority)
      .map((item, index) => ({...item, disabled: index !== 0}))
    setCheckListItems(data)
  }, [])

  useEffect(() => handleCheckBlockKeyNavigation(onArrowsClick));
  useEffect(() => handleCheckButtonGroupKeyNavigation(onNumbersClick))

  const itemSelectedValue = checkListItems.some(item => item.selected)

  // @TODO Managing disabled fields needs to be refactored
  useEffect(() => {
    if (activeTab !== null) {
      if (activeTab < 0 || activeTab >= checkListItems.length) {
        return
      }

      const item = checkListItems[activeTab]
      if (item.selected) {
        const nextTab = activeTab + 1
        if (nextTab < checkListItems.length) {
          const updatedList = checkListItems.map((item, index) => {
            if (index === nextTab) {
              return { ...item, disabled: false };
            }
            return item;
          });
          setCheckListItems(updatedList);
        }
      }

    }
  }, [activeTab, itemSelectedValue])

  const onArrowsClick = (keyboardArrow: AllowedKeyboardArrowsClicked) => {
    if (keyboardArrow === AllowedKeyboardArrowsClicked.UP) {
      if (activeTab !== null) {
        const nextTab = activeTab - 1
        if (nextTab >= 0) {
          setActiveTab(nextTab)
        }
      }
    } else if (keyboardArrow === AllowedKeyboardArrowsClicked.DOWN) {
      if (activeTab === null) {
        setActiveTab(0)
      } else {
        const nextTab = activeTab + 1
        const isNextDisabled = checkListItems[nextTab].disabled
        if (!isNextDisabled && nextTab < checkListItems.length) {
          setActiveTab(nextTab)
        }
      }
    }
  }

  const onNumbersClick = (keyboardNumber: AllowedKeyboardNumbersClicked) => {
    if (activeTab !== null) {
      const item = checkListItems[activeTab]
      if (keyboardNumber === AllowedKeyboardNumbersClicked.NR1) {
        setVerificationItemSelectValue(item, true)
      } else if (keyboardNumber === AllowedKeyboardNumbersClicked.NR2) {
        setVerificationItemSelectValue(item, false)
      }
    }
  }

  const setVerificationItemSelectValue = (item: VerificationItemWithDisabled, value: boolean) => {
    const updatedItem = {...item, selected: value}
    const listWithoutItem = checkListItems.filter(i => i.id !== item.id)
    const updatedVerificationList = [...listWithoutItem, updatedItem].sort((a, b) => a.priority - b.priority)
    setCheckListItems(updatedVerificationList)
  }

  const onSubmitClick = () => {
    // Send API call
    const allAnswersYes = checkListItems.every(item => item.selected === true)
    setResultView(allAnswersYes)
  }

  const isSubmitDisabled =
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
            onValueChange={setVerificationItemSelectValue}
          />
        )}
      </ul>
      <div className="p-3">
        <Button fullWidth disabled={!isSubmitDisabled} onClick={onSubmitClick}>Submit</Button>
      </div>
    </>
  )
}
