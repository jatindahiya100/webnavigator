import React, { useState } from 'react';
import '../assets/css/WebsiteDevelopmentCostCalculator.css'

const WebsiteDevelopmentCostCalculator = () => {
    const websiteDevelopmentQuestions = [
        {
            question: "Type of Website",
            options: [
                {
                    label: "Basic Informational Website",
                    cost: 1000,
                },
                {
                    label: "E-Commerce Website",
                    cost: 2000,
                },
                {
                    label: "Portfolio Website",
                    cost: 500,
                },
                {
                    label: "Blog",
                    cost: 500,
                },
                {
                    label: "Community or Forum Website",
                    cost: 3000,
                },
                {
                    label: "Booking or Reservation Website",
                    cost: 1500,
                },
                {
                    label: "Educational Website",
                    cost: 2000,
                },
                {
                    label: "Social Media Platform",
                    cost: 5000,
                },
                {
                    label: "Non-Profit or Charity Website",
                    cost: 1000,
                },
                {
                    label: "Business Directory or Listing Website",
                    cost: 1500,
                },
                {
                    label: "News or Magazine Website",
                    cost: 2000,
                },
                {
                    label: "Real Estate Website",
                    cost: 1500,
                },
                {
                    label: "Government or Institutional Website",
                    cost: 3000,
                },
                {
                    label: "Subscription-based Website",
                    cost: 3000,
                },
                {
                    label: "Personal Website",
                    cost: 500,
                },
            ],
            type: "radio", // User can select multiple options
        },
        {
            question: "Theme",
            options: [
                {
                    label: "Custom Theme",
                    cost: 1000,
                },
                {
                    label: "Free Theme",
                    cost: 0,
                },
                {
                    label: "Paid Theme",
                    cost: 500,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Website Development Approach",
            options: [
                {
                    label: "From Scratch (Custom Development)",
                    cost: 3000,
                },
                {
                    label: "Using a Website Builder (e.g., WordPress, Wix, Squarespace, etc.)",
                    cost: 1000,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Content Creation",
            options: [
                {
                    label: "I will provide all the content.",
                    cost: 0,
                },
                {
                    label: "I need assistance with content creation.",
                    cost: 500,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Responsive Design",
            options: [
                {
                    label: "Yes, it should be fully responsive.",
                    cost: 500,
                },
                {
                    label: "No, I don't need a responsive design.",
                    cost: 0,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "SEO (Search Engine Optimization)",
            options: [
                {
                    label: "Yes, I need SEO services.",
                    cost: 1000,
                },
                {
                    label: "No, SEO is not required.",
                    cost: 0,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Payment Gateway Integration",
            options: [
                {
                    label: "Yes, I need a payment gateway integrated.",
                    cost: 1000,
                },
                {
                    label: "No, I don't need a payment gateway.",
                    cost: 0,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "API Integration",
            options: [
                {
                    label: "Yes, I need API integration.",
                    cost: 1000,
                },
                {
                    label: "No, I don't need API integration.",
                    cost: 0,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Chatbot Integration",
            options: [
                {
                    label: "Yes, I need a chatbot integrated.",
                    cost: 1000,
                },
                {
                    label: "No, I don't need a chatbot.",
                    cost: 0,
                },
            ],
            type: "radio", // User can select only one option
        },
        {
            question: "Number of Pages",
            type: "number", // User enters a numeric value
        },
        {
            question: "Developer Skill Level",
            options: [
                {
                    label: "Beginner",
                    cost: 1000,
                },
                {
                    label: "Intermediate",
                    cost: 2000,
                },
                {
                    label: "Expert",
                    cost: 3000,
                },
            ],
            type: "radio", // User can select only one option
        },
    ];

    const [state, setState] = useState({
        currentStep: 0,
        userAnswers: {},
        totalCost: 0,
        isVisible: true, // Add a state variable to control question visibility
    });

    const { currentStep, userAnswers, totalCost } = state;

    const handleAnswerChange = (questionIndex, answer) => {
        setState((prevState) => ({
            ...prevState,
            userAnswers: { ...prevState.userAnswers, [questionIndex]: answer },
        }));
    };

    const isQuestionAnswered = (question) => {
        const answer = state.userAnswers[state.currentStep];
        if (question.type === 'radio') {
            return answer !== undefined && answer !== '';
        } else if (question.type === 'number') {
            return answer !== undefined && !isNaN(parseInt(answer));
        }
        return false;
    };


    const handleNextStep = () => {
        const currentQuestion = websiteDevelopmentQuestions[currentStep];
        if (isQuestionAnswered(currentQuestion)) {
            setState((prevState) => ({ ...prevState, isVisible: false }));
            setTimeout(() => {
                setState((prevState) => ({
                    ...prevState,
                    currentStep: prevState.currentStep + 1,
                    isVisible: true,
                }));
            }, 300);
        } else {
            alert('Please select a valid option or provide valid input.');
        }
    };


    const handlePreviousStep = () => {
        // Hide the current question with a smooth fade-out effect
        setState((prevState) => ({ ...prevState, isVisible: false }));
        setTimeout(() => {
            // After the fade-out transition is complete, move to the previous question and show it with a smooth fade-in effect
            setState((prevState) => ({ ...prevState, currentStep: prevState.currentStep - 1, isVisible: true }));
        }, 300); // You can adjust the duration of the fade-out transition as needed
    };

    const calculateTotalCost = () => {
        return Object.keys(userAnswers).reduce((cost, questionIndex) => {
            const question = websiteDevelopmentQuestions[questionIndex];
            const answer = userAnswers[questionIndex];

            if (question.type === 'radio') {
                const selectedOption = question.options.find((option) => option.label === answer);
                if (selectedOption) {
                    cost += selectedOption.cost;
                }
            } else if (question.type === 'number') {
                cost += parseInt(answer, 10) || 0;
            }

            return cost;
        }, 0);
    };

    const handleCalculate = () => {
        const areAllQuestionsAnswered = websiteDevelopmentQuestions.every(
            (question, index) =>
                state.userAnswers[index] !== undefined &&
                (question.type !== 'number' || !isNaN(parseInt(state.userAnswers[index])))
        );

        if (areAllQuestionsAnswered) {
            const cost = calculateTotalCost();
            setState({ ...state, totalCost: cost, currentStep: websiteDevelopmentQuestions.length });
        } else {
            alert('Please answer all questions before calculating the cost.');
        }
    };


    // Function to render the cost summary
    const renderCostSummary = () => {
        return (
            <div className='render-cost-summary'>
                <h2>Cost Summary</h2>
                <table className="cost-summary-table">
                    <thead>
                        <tr className="total-cost-row">
                            <th>Question</th>
                            <th>Selected Option</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(userAnswers).map((questionIndex) => {
                            const question = websiteDevelopmentQuestions[questionIndex];
                            const answer = userAnswers[questionIndex];

                            if (question.type === 'radio') {
                                const selectedOption = question.options.find((option) => option.label === answer);
                                if (selectedOption) {
                                    return (
                                        <tr className="total-cost-row" key={questionIndex}>
                                            <td>{question.question}</td>
                                            <td>{selectedOption.label}</td>
                                            <td>${selectedOption.cost}</td>
                                        </tr>
                                    );
                                }
                            } else if (question.type === 'number') {
                                return (
                                    <tr className="total-cost-row" key={questionIndex}>
                                        <td>{question.question}</td>
                                        <td>{answer}</td>
                                        <td>${parseInt(answer, 10) || 0}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                        <tr className="total-cost-row">
                            <td>Total Cost of Website Development:</td>
                            <td colSpan="2">${totalCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };


    const renderForm = () => {
        const currentQuestion = websiteDevelopmentQuestions[currentStep];

        if (!currentQuestion) {
            return (
                <div>
                    {renderCostSummary()} {/* Add this line to display the cost summary */}
                </div>
            );
        }

        const conditionMet = !currentQuestion.condition || currentQuestion.condition(userAnswers);

        if (!conditionMet) {
            // If the condition is not met, skip this question and move to the next one
            setState((prevState) => ({ ...prevState, currentStep: prevState.currentStep + 1 }));
            return null;
        }

        return (
            <div className={`website-development-cost-calculator ${state.isVisible ? 'fade-in' : 'fade-out'}`}>
                <h2>{currentQuestion.question}</h2>

                <div className="inputs">

                    {/* Radio Buttons */}

                    {currentQuestion.type === 'radio' && (
                        <div className="radio-container">
                            {currentQuestion.options.map((option, index) => (

                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={option.label.replace(/ /g, '')}
                                        name={currentQuestion.question.replace(/ /g, '')}
                                        value={option.label}
                                        checked={userAnswers[currentStep] === option.label}
                                        onChange={(e) => handleAnswerChange(currentStep, e.target.value)} />

                                    <label htmlFor={option.label.replace(/ /g, '')}>{option.label}</label>
                                </div>

                            ))}
                        </div>
                    )}

                    {/* Number Input */}
                    {currentQuestion.type === 'number' && (
                        <input
                            type="number"
                            value={userAnswers[currentStep] || ''}
                            onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                        />
                    )}

                </div>

                <div className="actions">
                    {/* Previous Button */}
                    {currentStep > 0 && (
                        <button className='button' onClick={handlePreviousStep}>Previous</button>
                    )}

                    {/* Next Button */}
                    {currentStep < websiteDevelopmentQuestions.length - 1 && (
                        <button className='button' onClick={handleNextStep}>Next</button>
                    )}

                    {/* Calculate Button */}
                    {currentStep === websiteDevelopmentQuestions.length - 1 && (
                        <button className='button' onClick={handleCalculate}>Calculate</button>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderForm()}
        </div>
    );
};

export default WebsiteDevelopmentCostCalculator;
