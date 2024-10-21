import AnimatedSuccess from '../../../components/animations/AnimatedSuccess.tsx';
import AnimatedError from '../../../components/animations/AnimatedError.tsx';
import Icon from '../../../components/icons/Icon.tsx';

interface VerificationResultProps {
  success: boolean;
  setVerificationView: () => void;
}

export default function VerificationResult(
  { success, setVerificationView }: VerificationResultProps,
) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between px-4 pt-4">
        <Icon icon="restart" onClick={setVerificationView} />
      </div>
      <div className="flex flex-col items-center justify-center p-12">
        <div className="h-[150px] w-[150px]">
          {success ? <AnimatedSuccess /> : <AnimatedError />}
        </div>
        <div className="mt-8 text-center">
          <span>Your result is</span>
          <div className="mt-6 text-4xl font-semibold">{success ? 'YES' : 'NO'}</div>
        </div>
      </div>
    </div>
  );
}
