import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_1: props.player_1,
      player_2: props.player_2,
      winning_score: props.winning_score,
      change_serve: props.change_serve,
      gameID: props.gameID,
      submitted: props.submitted,
    };
    this.handleP1 = this.handleP1.bind(this);
    this.handleP2 = this.handleP2.bind(this);
    this.handleAlternate = this.handleAlternate.bind(this);
    this.handleWin = this.handleWin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleP1(e) {
    this.setState({ player_1: e.currentTarget.value });
  }
  handleP2(e) {
    this.setState({ player_2: e.currentTarget.value });
  }
  handleWin(e) {
    this.setState({ winning_score: e.currentTarget.value });
  }
  handleAlternate(e) {
    this.setState({ change_serve: e.currentTarget.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state });
    this.setState({
      player_1: "",
      player_2: "",
      winning_score: "",
      change_serve: "",
    });
  }
  render() {
    const { player_1, player_2, winning_score, change_serve } = this.state;
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
              value={player_1}
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
              value={player_2}
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
              value={winning_score}
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
              value={change_serve}
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
