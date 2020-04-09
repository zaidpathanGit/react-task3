import React, { Component } from 'react';

let counter = 60;
class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hours: null,
            minutes: null,
            counter: null,
        }

        //Binding functions
        this.countDown1 = this.countDown1.bind(this);
        this.countDown2 = this.countDown2.bind(this);
    }

    //Function to calculate time and hours for countdown timer
    componentDidMount() {
        let hours, minutes;

        if (this.props.time === 60) {
            hours = 0;
            minutes = 60;
        } else if (this.props.time < 60) {
            hours = "00";
            minutes = this.props.time;
        } else {
            hours = Math.round(this.props.time / 60);
            minutes = this.props.time - (hours * 60);
        }

        this.setState({ hours, minutes });

        //Calling function to start countdown
        this.countDown1(counter);
    }


    //Countdown function for decrement second from total time.
    countDown1(counter) {

        let minutes = this.state.minutes;
        let hours = this.state.hours;

        if (minutes === 0 && hours === 0) {
            this.setState({ minutes: "00", hours: "00", counter: "00" });
        } else {

            this.setState({ counter });

            if (counter === 0) {
                counter = 60;

                if (minutes !== 0) {
                    minutes = minutes - 1;
                    this.setState({ minutes });
                } else {
                    if (hours > 0) {
                        hours -= 1;
                        minutes = 60;

                        this.setState({ hours, minutes });
                    }
                }
            }

            setTimeout(() => {
                counter -= 1;
                this.countDown2(counter);
            }, 1000)

        }
    }

    //Countdown function for decrement second from total time.
    countDown2(counter) {

        let minutes = this.state.minutes;
        let hours = this.state.hours;

        if (minutes === 0 && hours === 0) {
            this.setState({ minutes: "00", hours: "00", counter: "00" });
        } else {
            this.setState({ counter });

            if (counter === 0) {
                counter = 60;

                if (minutes !== 0) {
                    minutes = minutes - 1;
                    this.setState({ minutes });
                } else {
                    if (hours > 0) {
                        hours -= 1;
                        minutes = 60;

                        this.setState({ hours, minutes });
                    }
                }
            }

            setTimeout(() => {
                counter -= 1;
                this.countDown1(counter);
            }, 1000)
        }
    }

    render() {
        return (
            <>
                &nbsp; {this.state.hours} : {this.state.minutes} : {this.state.counter}
            </>
        );
    }
}

export default Timer;
