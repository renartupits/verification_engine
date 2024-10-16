import { VerificationItem } from './verification/types.ts'

export const mockData: VerificationItem[] = [
  {
    id: "aaa",
    priority: 10,
    selected: undefined,
    description: "Face on the picture matches face on the document",
  },
  {
    id: "bbb",
    priority: 5,
    selected: undefined,
    description: "Veriff supports presented document",
  },
  {
    id: "ccc",
    priority: 7,
    selected: undefined,
    description: "Face is clearly visible",
  },
  {
    id: "ddd",
    priority: 3,
    selected: undefined,
    description: "Document data is clearly visible",
  },
];
