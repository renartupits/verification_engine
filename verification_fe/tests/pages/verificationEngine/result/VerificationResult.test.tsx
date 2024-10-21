import { render, screen } from '@testing-library/react';
import VerificationResult from '../../../../src/pages/verificationEngine/result/VerificationResult.tsx';

describe('Verification result view', () => {
  it('render result view with success', () => {
    render(<VerificationResult success setVerificationView={() => {}} />);

    const yourAnswerElement = screen.getByText(/Your answer was:/i);
    const answerElement = screen.getByText(/YES/i);

    expect(yourAnswerElement).toBeInTheDocument();
    expect(answerElement).toBeInTheDocument();
  });

  it('render result view with not success', () => {
    render(<VerificationResult success={false} setVerificationView={() => {}} />);

    const yourAnswerElement = screen.getByText(/Your answer was:/i);
    const answerElement = screen.getByText(/NO/i);

    expect(yourAnswerElement).toBeInTheDocument();
    expect(answerElement).toBeInTheDocument();
  });
});
