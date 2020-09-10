import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1Name: props.p1Name,
      p2Name: props.p2Name,
      win: props.win,
      alternate: props.alternate,
      submitted: props.submitted,
    };
    this.handleP1 = this.handleP1.bind(this);
    this.handleP2 = this.handleP2.bind(this);
    this.handleAlternate = this.handleAlternate.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleP1(e) {
    this.setState({ p1Name: e.currentTarget.value });
  }
  handleP2(e) {
    this.setState({ p2Name: e.currentTarget.value });
  }
  handleWin(e) {
    this.setState({ win: e.currentTarget.value });
  }
  handleAlternate(e) {
    this.setState({ alternate: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      p1Name: "",
      p2Name: "",
      win: "",
      alternate: "",
    });
  }
  render() {
    const { p1Name, p2Name, win, alternate } = this.state;
    return (
      <div>
        <header className="jumbotron mt-5 mb-4">
          <h1>Ready to play?</h1>
        </header>
        <form>
          <div class="form-group">
            <label for="player1Name">Player 1 Name</label>
            <input
              type="text"
              class="form-control"
              id="player1Name"
              aria-describedby="name"
              onChange={this.handleP1}
              value={p1Name}
            />
          </div>
          <div class="form-group">
            <label for="player2Name">Player 2 Name</label>
            <input
              type="text"
              class="form-control"
              id="player2Name"
              aria-describedby="name"
              onChange={this.handleP2}
              value={p2Name}
            />
          </div>
          <div class="form-group">
            <label for="WinningScore">Winning Score</label>
            <input
              type="number"
              class="form-control"
              id="winningScore"
              aria-describedby="winningScore"
              onChange={this.handleWin}
              value={win}
            />
          </div>
          <div class="form-group">
            <label for="alternateEvery">Alternate Every</label>
            <input
              type="number"
              class="form-control"
              id="alternateEvery"
              aria-describedby="winningScore"
              onChange={this.handleAlternate}
              value={alternate}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
