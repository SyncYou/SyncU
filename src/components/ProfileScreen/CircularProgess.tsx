import { useUserProgress } from "../../context/useUserProgress";

type ProgressProps = {
  size?: number;
  strokeWidth?: number;
  children?: React.ReactNode;
};

const CircularProgess = ({
  size = 150,
  strokeWidth = 15,
  children,
}: ProgressProps) => {
  const { progress } = useUserProgress();
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex relative items-center justify-center">
      <svg className="transform-rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E7F9EE"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#16BA52"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute z-10">{children}</div>
      <span className="bg-success100 absolute bottom-0 left-4 px-2 py-1 rounded text-success700 font-medium text-sm">
        {progress}% COMPLETED
      </span>
    </div>
  );
};

export default CircularProgess;
