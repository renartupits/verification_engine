import { useState } from 'react';
import { VerificationItem, VerificationItemWithDisabled } from './verification/types.ts';
import VerificationLayout from '../../components/layouts/VerificationLayout.tsx';
import Verification from './verification/Verification.tsx';
import VerificationResult from './result/VerificationResult.tsx';
import { useGetCheckItems, useSubmitCheck } from '../../api/verificationApi.ts';
import { CenteredSpinner } from '../../components/spinners/Spinner.tsx';
import Alert from '../../components/alerts/Alert.tsx';

interface VerificationView {
  type: 'VERIFICATION';
  data: VerificationItem[];
}

interface VerificationResultView {
  type: 'RESULT';
  success: boolean;
}

export type VerificationViewState = VerificationView | VerificationResultView;

function VerificationEngine() {
  const [viewState, setViewState] = useState<VerificationViewState>({ type: 'VERIFICATION', data: [] });

  const { data, isPending, isError } = useGetCheckItems();
  const { mutate: submitChecks } = useSubmitCheck();

  const setResultView = (value: boolean) => {
    setViewState({
      type: 'RESULT',
      success: value,
    });
  };

  const setVerificationView = () => {
    setViewState({
      type: 'VERIFICATION',
      data: data ?? [],
    });
  };

  const onSubmit = (verificationItems: VerificationItemWithDisabled[]) => {
    let mappedRequest;
    const hasSomeNo = verificationItems.some((item) => !item.selected);

    if (hasSomeNo) {
      mappedRequest = { results: [{ checkId: verificationItems[0].id, result: 'no' }] };
    } else {
      mappedRequest = {
        results: verificationItems.map((item) => ({
          checkId: item.id,
          result: item.selected ? 'yes' : 'no',
        })),
      };
    }

    submitChecks({ body: JSON.stringify(mappedRequest) }, {
      onSuccess: (response) => setResultView(response.success),
    });
  };

  const renderView = () => {
    if (viewState.type === 'VERIFICATION') {
      if (isPending) return <CenteredSpinner />;
      if (isError) return <Alert message="Start backend_be locally to view checks!" />;

      return (
        <Verification
          verificationItems={data}
          onSubmit={onSubmit}
        />
      );
    } if (viewState.type === 'RESULT') {
      return (
        <VerificationResult
          success={viewState.success}
          setVerificationView={setVerificationView}
        />
      );
    }
    throw Error('Unknown view state');
  };

  return (
    <VerificationLayout>
      {renderView()}
    </VerificationLayout>
  );
}

export default VerificationEngine;
