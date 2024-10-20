import { useState } from 'react'
import { VerificationItem, VerificationItemWithDisabled } from './verification/types.ts'
import { VerificationLayout } from '../../components/layouts/VerificationLayout.tsx'
import { Verification } from './verification/Verification.tsx'
import { VerificationResult } from './result/VerificationResult.tsx'
import { useGetCheckItems, useSubmitCheck } from '../../api/verificationApi.ts'
import { CenteredSpinner } from '../../components/spinners/Spinner.tsx'

interface VerificationView {
  type: 'VERIFICATION',
  data: VerificationItem[]
}

interface VerificationResultView {
  type: 'RESULT',
  success: boolean;
}

export type VerificationViewState = VerificationView | VerificationResultView

export const VerificationEngine = () => {
  const [viewState, setViewState] = useState<VerificationViewState>({type: 'VERIFICATION', data: []})

  const {data, isPending, isError} = useGetCheckItems()
  const {mutate: submitChecks} = useSubmitCheck()

  const onSubmit = (verificationItems: VerificationItemWithDisabled[]) => {
    const mappedRequest = {
      results: verificationItems.map(item => ({
        checkId: item.id,
        result: item.selected ? 'yes' : 'no'
      }))
    }

    submitChecks({body: JSON.stringify(mappedRequest)}, {
      onSuccess: (response) => setResultView(response.success)
    })
  }

  const setResultView = (value: boolean) => {
    setViewState({
      type: 'RESULT',
      success: value
    })
  }

  const setVerificationView = () => {
    setViewState({
      type: 'VERIFICATION',
      data: data ?? []
    })
  }

  const renderView = () => {
    if (viewState.type === 'VERIFICATION') {
      if (isPending) return <CenteredSpinner />
      if (isError) return <div>Something happened, please try again later</div>

      return (
        <Verification
          verificationItems={data}
          onSubmit={onSubmit}
        />
      )
    } else if (viewState.type === 'RESULT') {
      return (
        <VerificationResult
          success={viewState.success}
          setVerificationView={setVerificationView}
        />
      )
    } else {
      throw Error('Unknown view state')
    }
  }

  return (
    <VerificationLayout>
      {renderView()}
    </VerificationLayout>
  )
}
