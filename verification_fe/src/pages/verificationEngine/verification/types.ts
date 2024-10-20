export interface VerificationItem {
  id: string;
  description: string;
  priority: number;
  selected?: boolean;
}

export interface VerificationItemWithDisabled extends VerificationItem {
  disabled: boolean;
}


export enum AllowedKeyboardNumbersClicked {
  NR1 = '1',
  NR2 = '2',
}

export enum AllowedKeyboardArrowsClicked {
  UP = 'UP',
  DOWN = 'DOWN'
}

export interface SubmitResponse {
  success: boolean
}
