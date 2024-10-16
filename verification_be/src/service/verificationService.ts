import {mockData} from './mockData'
import logger from '../middlewares/logger'

export const listCheckItems = () => {
  const checkItems = mockData
  logger.info(`Found ${checkItems.length} items total`)
  return checkItems
}
