import { fetchWithoutAuthorization } from './client.ts'
import { useMutation, useQuery } from '@tanstack/react-query'
import { SubmitResponse, VerificationItem } from '../pages/verificationEngine/verification/types.ts'
import { queryClient } from '../main.tsx'

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

export const useSubmitCheck = () => {
  const fetch = async (requestBody: string) => {
    const url = '/verification/submit'
    const {data} = await fetchWithoutAuthorization(url, 'POST', requestBody)
    return data
  }

  return useMutation<SubmitResponse, Error, { body: string; }>({
    mutationFn: ({body}) => fetch(body),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['verification-submit']
      })
    }
  })
}
