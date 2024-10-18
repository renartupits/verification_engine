import { fetchWithoutAuthorization } from './client.ts'
import { useQuery } from '@tanstack/react-query'
import { VerificationItem } from '../pages/verificationEngine/verification/types.ts'

export const useGetCheckItems = () => {
  const fetch = async () => {
    const url = '/verification'
    const {data} = await fetchWithoutAuthorization(url, 'GET')
    return data
  }

  return useQuery<VerificationItem[], Error>({
    queryFn: fetch,
    queryKey: ['verification-items']
  })
}
