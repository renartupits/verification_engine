import axios, { AxiosResponse } from 'axios'

export type HttpMethod = 'GET' | 'PUT' | 'POST' | 'DELETE';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL

const axiosClient = axios.create({
  baseURL: apiBaseUrl
})

export const fetchWithoutAuthorization = (
  url: string,
  method: HttpMethod,
  body?: string
): Promise<AxiosResponse> => {
  return axiosClient.request({
    url,
    headers: {
      ...body && {'content-type': 'application/json'}
    },
    method,
    data: body
  })
}
