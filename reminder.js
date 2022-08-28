'use strict';

const e = React.createElement;

class Notif extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.update_remind(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  update_remind() {
    this.setState({counter : this.state.counter + 1})
    this.remind()
  }
  remind() {
    alert(`Hey, you've been here for ${this.state.counter * 10} s`);
  }

  render() {

    return e(
      'button',
      { onClick: () => this.remind() },
      'How long have I been here?'
    );
  }
}

const domContainer = document.querySelector('#reminder');
const root = ReactDOM.createRoot(domContainer);
root.render(e(Notif));