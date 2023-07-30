import React, { useState } from 'react';
import '../assets/css/WebsiteDevelopmentCostCalculator.css'

const Test = () => {
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
            question: "Budget",
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
            condition: (answers) => answers[1] === "Custom Theme", // Show this question only if Custom Theme is selected
        },
        {
            question: "Additional Features",
            type: "text", // User can provide an open-ended text input
        },
        {
            question: "Timeline",
            type: "date", // User can provide a date input
        },
    ];

    const [state, setState] = useState({
        currentStep: 0,
        userAnswers: {},
        totalCost: 0,
    });

    const { currentStep, userAnswers, totalCost } = state;

    const handleAnswerChange = (questionIndex, answer) => {
        setState((prevState) => ({
            ...prevState,
            userAnswers: { ...prevState.userAnswers, [questionIndex]: answer },
        }));
    };

    const handleNextStep = () => {
        setState((prevState) => ({ ...prevState, currentStep: prevState.currentStep + 1 }));
    };

    const handlePreviousStep = () => {
        setState((prevState) => ({ ...prevState, currentStep: prevState.currentStep - 1 }));
    };

    const handleCheckboxChange = (questionIndex, option, checked) => {
        setState((prevState) => {
            const prevOptions = prevState.userAnswers[questionIndex] || [];
            if (checked) {
                return {
                    ...prevState,
                    userAnswers: { ...prevState.userAnswers, [questionIndex]: [...prevOptions, option] },
                };
            } else {
                return {
                    ...prevState,
                    userAnswers: {
                        ...prevState.userAnswers,
                        [questionIndex]: prevOptions.filter((item) => item !== option),
                    },
                };
            }
        });
    };

    const calculateTotalCost = () => {
        let cost = 0;
        Object.keys(userAnswers).forEach((questionIndex) => {
            const question = websiteDevelopmentQuestions[questionIndex];
            const answer = userAnswers[questionIndex];

            if (question.type === 'dropdown' || question.type === 'radio') {
                const selectedOption = question.options.find((option) => option.label === answer);
                if (selectedOption) {
                    cost += selectedOption.cost;
                }
            } else if (question.type === 'checkbox') {
                question.options.forEach((option) => {
                    if (answer.includes(option.label)) {
                        cost += option.cost;
                    }
                });
            } else if (question.type === 'number') {
                cost += parseInt(answer, 10) || 0;
            }
        });
        return cost;
    };

    const handleCalculate = () => {
        const cost = calculateTotalCost();
        setState({ ...state, totalCost: cost, currentStep: websiteDevelopmentQuestions.length });
    };

    const renderForm = () => {
        const currentQuestion = websiteDevelopmentQuestions[currentStep];

        if (!currentQuestion) {
            return (
                <div>
                    {renderCostSummary()} {/* Add this line to display the cost summary */}
                    <h2>Thank you for filling out the form!</h2>
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
            <div className='website-development-cost-calculator'>
                <div className="form">
                    <h2>{currentQuestion.question}</h2>
                    {currentQuestion.type === 'dropdown' && (
                        <select
                            value={userAnswers[currentStep] || ''}
                            onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                        >
                            <option value="">Select an option</option>
                            {currentQuestion.options.map((option, index) => (
                                <option key={index} value={option.label}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    )}

                    {currentQuestion.type === 'number' && (
                        <input
                            type="number"
                            value={userAnswers[currentStep] || ''}
                            onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                        />
                    )}

                    {currentQuestion.type === 'radio' && (
                        <div>
                            {currentQuestion.options.map((option, index) => (

                                <div key={index}>
                                    <input
                                        type="radio"
                                        name={currentQuestion.question.replace(/ /g, '')}
                                        id={option.label.replace(/ /g, '')}
                                        value={option.label.replace(/ /g, '')}
                                        checked={userAnswers[currentStep] === option.label}
                                        onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                                        className="radio" />
                                    <label
                                        htmlFor={option.label.replace(/ /g, '')}
                                        className='label'>{option.label}</label>
                                </div>

                            ))}
                        </div>
                    )}

                    {currentQuestion.type === 'checkbox' && (
                        <div>
                            {currentQuestion.options.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        value={option.label}
                                        checked={userAnswers[currentStep]?.includes(option.label)}
                                        onChange={(e) =>
                                            handleCheckboxChange(currentStep, option.label, e.target.checked)
                                        }
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    )}

                    {currentQuestion.type === 'text' && (
                        <textarea
                            value={userAnswers[currentStep] || ''}
                            onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                        />
                    )}

                    {currentQuestion.type === 'date' && (
                        <input
                            type="date"
                            value={userAnswers[currentStep] || ''}
                            onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
                        />
                    )}
                </div>

                <div className="actions">
                    {currentStep > 0 && (
                        <button className='button' onClick={handlePreviousStep}>Previous</button>
                    )}
                    {currentStep < websiteDevelopmentQuestions.length - 1 && (
                        <button className='button' onClick={handleNextStep}>Next</button>
                    )}
                    {currentStep === websiteDevelopmentQuestions.length - 1 && (
                        <button className='button' onClick={handleCalculate}>Calculate</button>
                    )}
                </div>
            </div>
        );
    };

    // Function to render the cost summary
    const renderCostSummary = () => {
        const totalCost = calculateTotalCost();

        return (
            <div>
                <h2>Cost Summary</h2>
                {Object.keys(userAnswers).map((questionIndex) => {
                    const question = websiteDevelopmentQuestions[questionIndex];
                    const answer = userAnswers[questionIndex];

                    if (question.type === 'dropdown' || question.type === 'radio') {
                        const selectedOption = question.options.find((option) => option.label === answer);
                        if (selectedOption) {
                            return (
                                <p key={questionIndex}>
                                    {question.question}: {selectedOption.label} - ${selectedOption.cost}
                                </p>
                            );
                        }
                    } else if (question.type === 'checkbox') {
                        const selectedOptions = question.options.filter((option) => answer.includes(option.label));
                        if (selectedOptions.length > 0) {
                            return (
                                <div key={questionIndex}>
                                    <p>{question.question}:</p>
                                    <ul>
                                        {selectedOptions.map((option) => (
                                            <li key={option.label}>
                                                {option.label} - ${option.cost}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        }
                    } else if (question.type === 'number') {
                        return (
                            <p key={questionIndex}>
                                {question.question}: {answer} - ${parseInt(answer, 10) || 0}
                            </p>
                        );
                    }
                    return null;
                })}
                <h3>Total Cost of Website Development: ${totalCost}</h3>
            </div>
        );
    };

    return (
        <div>
            {renderForm()}
        </div>
    );
};

export default Test;
