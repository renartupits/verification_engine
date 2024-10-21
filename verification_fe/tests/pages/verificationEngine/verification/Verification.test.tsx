import { fireEvent, render, screen } from '@testing-library/react';
import Verification from '../../../../src/pages/verificationEngine/verification/Verification.tsx';
import mockData from '../../../mock/mockData.ts';

describe('Verification view', () => {
  it('should render the correct text in the list', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    expect(screen.getByText('Face on the picture matches face on the document')).toBeInTheDocument();
    expect(screen.getByText('Face is clearly visible')).toBeInTheDocument();
    expect(screen.getByText('Document data is clearly visible')).toBeInTheDocument();
    expect(screen.getByText('Veriff supports presented document')).toBeInTheDocument();
  });

  it('should render the list items in the correct order by priority', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const spans = screen.getAllByText(/Veriff supports presented document|Document data is clearly visible|Face on the picture matches face on the document|Face is clearly visible/i);

    expect(spans[0]).toHaveTextContent('Document data is clearly visible');
    expect(spans[1]).toHaveTextContent('Veriff supports presented document');
    expect(spans[2]).toHaveTextContent('Face is clearly visible');
    expect(spans[3]).toHaveTextContent('Face on the picture matches face on the document');
  });

  it('should have submit button disabled when nothing is selected', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const submitBtn = screen.getByText(/Submit/i);
    expect(submitBtn).toBeDisabled();
  });

  it('should have submit button enabled when "no" is clicked', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const noButton = screen.getAllByRole('button', { name: /No/i });
    fireEvent.click(noButton[0]);

    const submitBtn = screen.getByText(/Submit/i);
    expect(submitBtn).toBeEnabled();
  });

  it('should have submit button disabled when only two checks are selected yes', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const yesButton = screen.getAllByRole('button', { name: /Yes/i });

    fireEvent.click(yesButton[0]);
    fireEvent.click(yesButton[1]);

    const submitBtn = screen.getByText(/Submit/i);
    expect(submitBtn).toBeDisabled();
  });

  it('should have submit button enabled when "yes" and "no" is selected', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const yesButton = screen.getAllByRole('button', { name: /Yes/i });
    const noButton = screen.getAllByRole('button', { name: /No/i });

    fireEvent.click(yesButton[0]);
    fireEvent.click(noButton[1]);

    const submitBtn = screen.getByText(/Submit/i);
    expect(submitBtn).toBeEnabled();
  });

  it('should have submit button enabled when all "yes" are selected', () => {
    render(<Verification verificationItems={mockData} onSubmit={() => {}} />);

    const yesButton = screen.getAllByRole('button', { name: /Yes/i });

    yesButton.forEach((btn) => fireEvent.click(btn));

    const submitBtn = screen.getByText(/Submit/i);
    expect(submitBtn).toBeEnabled();
  });
});
