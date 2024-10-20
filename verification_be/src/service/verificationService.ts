import {mockData} from './mockData'
import {ChecksJson} from '../controller/request/checksJson'

export const listCheckItems = () => {
  return mockData
}

export const validateChecksSubmit = (checks: ChecksJson): boolean => {
  return checks.results.some(check => check.result === 'no') ||
    checks.results.every(check => check.result === 'true')
}
