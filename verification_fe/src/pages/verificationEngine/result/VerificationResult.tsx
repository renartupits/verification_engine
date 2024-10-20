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
    <div className="flex flex-col justify-between">
      <div className="px-4 pt-4 flex justify-between">
        <Icon icon="restart" onClick={setVerificationView} />
      </div>
      <div className="p-12 flex flex-col justify-center items-center">
        <div className="h-[150px] w-[150px]">
          {success ? <AnimatedSuccess /> : <AnimatedError />}
        </div>
        <div className="mt-8 text-center">
          <span>Your answer was:</span>
          <div className="mt-6 font-semibold text-4xl">{success ? 'YES' : 'NO'}</div>
        </div>
      </div>
    </div>
  );
}
