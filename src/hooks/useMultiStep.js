import { useState } from 'react'

/**
 * useMultiStep — drives any multi-step form.
 * Returns step state and navigation helpers.
 */
export function useMultiStep(totalSteps) {
    const [currentStep, setCurrentStep] = useState(1)
    const [direction, setDirection] = useState('forward') // 'forward' | 'back'

    function goNext() {
        setDirection('forward')
        setCurrentStep((s) => Math.min(s + 1, totalSteps))
    }

    function goBack() {
        setDirection('back')
        setCurrentStep((s) => Math.max(s - 1, 1))
    }

    function goTo(step) {
        setDirection(step > currentStep ? 'forward' : 'back')
        setCurrentStep(step)
    }

    function reset() {
        setDirection('forward')
        setCurrentStep(1)
    }

    return {
        currentStep,
        direction,
        isFirst: currentStep === 1,
        isLast: currentStep === totalSteps,
        totalSteps,
        goNext,
        goBack,
        goTo,
        reset,
    }
}