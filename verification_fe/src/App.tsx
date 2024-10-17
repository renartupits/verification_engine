import { Verification } from './pages/verification/Verification.tsx'
import { useGetCheckItems } from './api/verificationApi.ts'

function App() {

  const {data, isPending, isError} = useGetCheckItems()

  if (isPending) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  return (
      <Verification verificationItems={data} />
  )
}

export default App
