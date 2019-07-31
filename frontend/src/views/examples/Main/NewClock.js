import './NewClock.css'

// function component
const AnimatedCard = ({ animation, digit }) => {
    return (
      React.createElement("div", { className: `flipCard ${animation}` },
      React.createElement("span", null, digit)));
  
  
  };
  
  // function component
  const StaticCard = ({ position, digit }) => {
    return (
      React.createElement("div", { className: position },
      React.createElement("span", null, digit)));
  
  
  };
  
  // function component
  const FlipUnitContainer = ({ digit, shuffle, unit }) => {
  
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit - 1;
  
    // to prevent a negative value
    if (unit !== 'hours') {
      previousDigit = previousDigit === -1 ?
      59 :
      previousDigit;
    } else {
      previousDigit = previousDigit === -1 ?
      23 :
      previousDigit;
    }
  
    // add zero
    if (currentDigit < 10) {
      currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
      previousDigit = `0${previousDigit}`;
    }
  
    // shuffle digits
    const digit1 = shuffle ?
    previousDigit :
    currentDigit;
    const digit2 = !shuffle ?
    previousDigit :
    currentDigit;
  
    // shuffle animations
    const animation1 = shuffle ?
    'fold' :
    'unfold';
    const animation2 = !shuffle ?
    'fold' :
    'unfold';
  
    return (
      React.createElement("div", { className: 'flipUnitContainer' },
      React.createElement(StaticCard, {
        position: 'upperCard',
        digit: currentDigit }),
  
      React.createElement(StaticCard, {
        position: 'lowerCard',
        digit: previousDigit }),
  
      React.createElement(AnimatedCard, {
        digit: digit1,
        animation: animation1 }),
  
      React.createElement(AnimatedCard, {
        digit: digit2,
        animation: animation2 })));
  
  
  
  };
  
  // class component
  class FlipClock extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        hours: 0,
        hoursShuffle: true,
        minutes: 0,
        minutesShuffle: true,
        seconds: 0,
        secondsShuffle: true };
  
    }
  
    componentDidMount() {
      this.timerID = setInterval(
      () => this.updateTime(),
      50);
  
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    updateTime() {
      // get new date
      const time = new Date();
      // set time units
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      // on hour chanage, update hours and shuffle state
      if (hours !== this.state.hours) {
        const hoursShuffle = !this.state.hoursShuffle;
        this.setState({
          hours,
          hoursShuffle });
  
      }
      // on minute chanage, update minutes and shuffle state
      if (minutes !== this.state.minutes) {
        const minutesShuffle = !this.state.minutesShuffle;
        this.setState({
          minutes,
          minutesShuffle });
  
      }
      // on second chanage, update seconds and shuffle state
      if (seconds !== this.state.seconds) {
        const secondsShuffle = !this.state.secondsShuffle;
        this.setState({
          seconds,
          secondsShuffle });
  
      }
    }
  
    render() {
  
      // state object destructuring
      const {
        hours,
        minutes,
        seconds,
        hoursShuffle,
        minutesShuffle,
        secondsShuffle } =
      this.state;
  
      return (
        React.createElement("div", { className: 'flipClock' },
        React.createElement(FlipUnitContainer, {
          unit: 'hours',
          digit: hours,
          shuffle: hoursShuffle }),
  
        React.createElement(FlipUnitContainer, {
          unit: 'minutes',
          digit: minutes,
          shuffle: minutesShuffle }),
  
        React.createElement(FlipUnitContainer, {
          unit: 'seconds',
          digit: seconds,
          shuffle: secondsShuffle })));
  
  
  
    }}
  
  
  // function component
  const Header = () => {
    return (
      React.createElement("header", null,
      React.createElement("h1", null, "React Flip Clock")));
  
  
  };
  
  // function component
  const App = () => {
    return (
      React.createElement("div", null,
      React.createElement(Header, null),
      React.createElement(FlipClock, null)));
  
  
  };
  
  ReactDOM.render(
  React.createElement(App, null),
  document.querySelector('#app'));
  