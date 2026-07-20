import "./ApplyProgress.css";

function ApplyProgress({ steps, currentStep }) {
  return (
    <div
      className="apply-progress"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={steps.length}
      aria-valuenow={currentStep}
      aria-label={`Step ${currentStep} of ${steps.length}: ${steps[currentStep - 1]?.label}`}
    >
      <div className="apply-progress__steps">
        {steps.map((step, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isDone = stepNum < currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.label} className="apply-progress__row">
              <div
                className={`apply-progress__step ${isActive ? "active" : ""} ${isDone ? "done" : ""}`}
              >
                <span className="apply-progress__circle">
                  {isDone ? (
                    <i className="fa-solid fa-check" aria-hidden="true"></i>
                  ) : (
                    <i className={step.icon} aria-hidden="true"></i>
                  )}
                </span>
                <span className="apply-progress__label">{step.label}</span>
              </div>
              {!isLast && (
                <div
                  className={`apply-progress__line ${isDone ? "filled" : ""}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApplyProgress;
