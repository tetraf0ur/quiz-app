const Progress = ({ size }: { size: number }) => {
  return (
    <div className="loader" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg className="circular-loader" viewBox="25 25 50 50">
        <circle
          className="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export { Progress };
