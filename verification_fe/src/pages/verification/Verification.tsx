import { CheckBlock } from './components/CheckBlock.tsx'
import { Button } from '../../components/button/Button.tsx'
import { useEffect, useState } from 'react'
import { mockData } from '../mockData.ts'
import { AllowedKeyboardArrowsClicked, AllowedKeyboardNumbersClicked, VerificationItemWithDisabled } from './types.ts'
import { handleCheckBlockKeyNavigation, handleCheckButtonGroupKeyNavigation } from '../../listeners/keyboardListeners.ts'


export const Verification = () => {
  const [verificationItems, setVerificationItems] = useState<VerificationItemWithDisabled[]>([])
  const [activeTab, setActiveTab] = useState<number | null>(null)

  useEffect(() => {
    const data = mockData
      .sort((a, b) => a.priority - b.priority)
      .map((item, index) => ({...item, disabled: index !== 0}))
    setVerificationItems(data)
  }, [])

  useEffect(() => handleCheckBlockKeyNavigation(onArrowsClick));
  useEffect(() => handleCheckButtonGroupKeyNavigation(onNumbersClick))

  const itemSelectedValue = verificationItems.some(item => item.selected)

  // @TODO Managing disabled fields needs to be refactored
  useEffect(() => {
    if (activeTab !== null) {
      if (activeTab < 0 || activeTab >= verificationItems.length) {
        return
      }

      const item = verificationItems[activeTab]
      if (item.selected) {
        const nextTab = activeTab + 1
        if (nextTab < verificationItems.length) {
          const updatedList = verificationItems.map((item, index) => {
            if (index === nextTab) {
              return { ...item, disabled: false };
            }
            return item;
          });
          setVerificationItems(updatedList);
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
        const isNextDisabled = verificationItems[nextTab].disabled
        if (!isNextDisabled && nextTab < verificationItems.length) {
          setActiveTab(nextTab)
        }
      }
    }
  }

  const onNumbersClick = (keyboardNumber: AllowedKeyboardNumbersClicked) => {
    if (activeTab !== null) {
      const item = verificationItems[activeTab]
      if (keyboardNumber === AllowedKeyboardNumbersClicked.NR1) {
        setVerificationItemSelectValue(item, true)
      } else if (keyboardNumber === AllowedKeyboardNumbersClicked.NR2) {
        setVerificationItemSelectValue(item, false)
      }
    }
  }

  const setVerificationItemSelectValue = (item: VerificationItemWithDisabled, value: boolean) => {
    const updatedItem = {...item, selected: value}
    const listWithoutItem = verificationItems.filter(i => i.id !== item.id)
    const updatedVerificationList = [...listWithoutItem, updatedItem].sort((a, b) => a.priority - b.priority)
    setVerificationItems(updatedVerificationList)
  }

  const onSubmitClick = () => {
    console.log('Submit clicked', verificationItems)
  }

  const isSubmitDisabled =
    verificationItems.some(item => item.selected === false) ||
    verificationItems.every(item => item.selected === true)

  return (
    <div className="flex items-center justify-center font-inter">
      <div className="flex w-fit flex-col justify-between border shadow min-h-[476px]">
        <ul>
          {verificationItems.map((item, index) =>
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
      </div>
    </div>
  )
}
