import {
  AllowedKeyboardArrowsClicked,
  AllowedKeyboardNumbersClicked,
  VerificationItemWithDisabled,
} from './verification/types.ts'

export const onArrowsClick = (
  keyboardArrow: AllowedKeyboardArrowsClicked,
  activeTab: number | null,
  setActiveTab: (nextNum: number) => void,
  checkListItems: VerificationItemWithDisabled[]
) => {
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

export const onNumbersClick = (
  keyboardNumber: AllowedKeyboardNumbersClicked,
  activeTab: number | null,
  setVerificationItemSelectValue: (index: number, value: boolean) => void
) => {
  if (activeTab !== null) {
    if (keyboardNumber === AllowedKeyboardNumbersClicked.NR1) {
      setVerificationItemSelectValue(activeTab, true)
    } else if (keyboardNumber === AllowedKeyboardNumbersClicked.NR2) {
      setVerificationItemSelectValue(activeTab, false)
    }
  }
}

export const handleYesClick = (
  index: number,
  checkListItems: VerificationItemWithDisabled[],
  setCheckListItems: (updatedItems: VerificationItemWithDisabled[]) => void
) => {
  const updatedItems = [...checkListItems];
  if (updatedItems[index].disabled) {
    return
  }

  updatedItems[index].selected = true;
  if (index < checkListItems.length - 1) {
    updatedItems[index + 1].disabled = false;
  }

  setCheckListItems(updatedItems)
}

export const handleNoClick = (
  index: number,
  setActiveTab: (nextTab: number) => void,
  checkListItems: VerificationItemWithDisabled[],
  setCheckListItems: (updatedItems: VerificationItemWithDisabled[]) => void
) => {
  const updatedItems = [...checkListItems];
  if (updatedItems[index].disabled) {
    return
  }

  updatedItems[index].selected = false;
  updatedItems.forEach((item, idx) => {
    item.disabled = idx !== 0;
  });
  updatedItems[0].selected = false;

  setCheckListItems(updatedItems);
  setActiveTab(0)
};
