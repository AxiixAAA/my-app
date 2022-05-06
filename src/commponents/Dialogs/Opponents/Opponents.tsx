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
        height: '600px',
        overflowY: 'auto',
        overflowX: 'hidden',
    },
    opponent:{
        marginBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: 'var(--bg-content)',
        borderRadius: '5px',
        padding: '5px',
        cursor: 'pointer',
    },
    name:{
        margin: '0',
    },
    photo:{
        borderRadius: '50%',
    },
    // @media (max-width: 600px) {
    //     .wrapper {
    //         height: auto;
    //         display: flex;
    //         align-items: baseline;
    //         overflow-x: auto;
    //     }
    
    //     .opponent {
    //         padding: 0;
    //         gap: 0px;
    //         width: 100px;
    //         margin-bottom: 5px;
    //         display: flex;
    //         flex-direction: column;
    //         background-color: transparent;
    //         text-align: center;
    //     }
    
    //     .name {
    //         width: 55px;
    //         margin: 0;
    //         margin-left: 2px;
    //         margin-right: 2px;
    //         font-size: 10px;
    //         text-overflow: ellipsis;
    //         overflow-x: hidden;
    //     }
    // }

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
