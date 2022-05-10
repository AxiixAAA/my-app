import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { TOpponent } from "../../../api/dialogs";
import {
  actionCreators,
  getDialogWithOpponent,
} from "../../../redux/dialogs-reducer";
import userImage from "../../../assets/images/user.png";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
    wrapper:{
        height: '83vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        '& :hover':{
            backgroundColor: theme.palette.background.backgroundHover,
        }
    },
    opponent:{
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        borderRadius: '8px',
        padding: '5px',
        cursor: 'pointer',
        // boxShadow: theme.palette.boxShadow,
        backgroundColor: theme.palette.background.paper,
    },
    name:{
        margin: '0',
    },
    photo:{
        borderRadius: '50%',
    },

}));

export const Opponents: FC<TProps> = ({ opponents }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleClick = (opponent: TOpponent) => {
    dispatch(getDialogWithOpponent(opponent.id));
    dispatch(actionCreators.setCurrentOpponent(opponent));
  };

  return (
    <div className={classes.wrapper}>
      {opponents.map((o) => {
        return (
          <div
            key={o.id}
            onClick={() => handleClick(o)}
            className={classes.opponent}
          >
            <img
              src={o.photos.small || userImage}
              alt={o.userName}
              className={classes.photo}
              width="50px"
            />
            <p className={classes.name}>{o.userName}</p>
          </div>
        );
      })}
    </div>
  );
};

type TProps = {
  opponents: TOpponent[];
};
