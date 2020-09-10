import axios from "../../axiosConfig";
import { submit, incrementP1, incrementP2 } from "../../data/actions/state";

export const handlePost = ({
  player_1,
  player_2,
  winning_score,
  change_serve,
  gameID,
}) => {
  return (dispatch) => {
    axios
      .post("/games", {
        player_1: player_1,
        player_2: player_2,
        winning_score: winning_score,
        change_serve: change_serve,
        id: gameID,
      })
      .then(
        ({ data }) => {
          dispatch(submit(data.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};

export const handlePatchP1 = (gameID) => {
  console.log(gameID);
  return (dispatch) => {
    axios
      .patch(`/games/${gameID}/score`, {
        player: 1,
      })
      .then(
        ({ data }) => {
          dispatch(incrementP1(data.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};

export const handlePatchP2 = (gameID) => {
  return (dispatch) => {
    axios
      .patch(`/games/${gameID}/score`, {
        player: 2,
      })
      .then(
        ({ data }) => {
          dispatch(incrementP2(data.data));
        },
        (error) => {
          console.log(error);
        }
      );
  };
};
