export interface ChecksJson {
  results: CheckResultsJson[]
}

export interface CheckResultsJson {
  checkId: string;
  result: string;
}
