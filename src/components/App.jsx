import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Section-Feedback/Statistics/Statistics';
import FeedbackOptions from './Section-Feedback/Feedback/FeedbackOptions';
import Section from './Section-Feedback/Section/Section';
import Notification from './Section-Feedback/Notification/Notification';

class App extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
    };

    incrementGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + this.props.step,
            };
        });
        this.countTotalFeedback();
    };

    incrementNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + this.props.step,
            };
        });
        this.countTotalFeedback();
    };

    incrementBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + this.props.step,
            };
        });
        this.countTotalFeedback();
    };

    countTotalFeedback = () => {
        this.setState((prevState) => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            };
        });

        this.countPositiveFeedbackPercentage();
    };

    countPositiveFeedbackPercentage() {
        this.setState((prevState) => {
            let totalFeedback = Math.round((prevState.good * 100) / prevState.total);
            return {
                feedback: totalFeedback,
            };
        });
    }

    render() {
        const { good, neutral, bad, total, feedback } = this.state;

        return (
            <div className="Feedback">
                <Section title="Please leave feedback" >
                    <FeedbackOptions
                        onIncrementGood={this.incrementGood}
                        onIncrementNeutral={this.incrementNeutral}
                        onIncrementBad={this.incrementBad}
                        onLeaveFeedback="Please leave feedback"
                    />
                </Section>

                <Section title="Statistics">
                    {!good && !neutral && !bad ? (
                        <Notification message="There is no feedback" />
                    ) : (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={feedback}
                        />
                    )}
                </Section>
            </div>
        );
    }
}
export default App;

App.propTypes = {
    defaultProps: PropTypes.shape({
        step: PropTypes.number.isRequired,
        initialValue: PropTypes.number.isRequired
    })
}