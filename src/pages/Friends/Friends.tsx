import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFollowedFriends } from "../../redux/reducers/friendsReducer";
import { followThunk, unfollowThunk } from "../../redux/user-reducer";
import { getFriends } from "../../redux/selectors/friendsSelector";
import { getFollowingInProgress } from "../../redux/users-selectors";
// import { UpButton } from '../../components/common/UpButton/UpButton';

import sadImage from "../../assets/images/sad.png";
import styles from "./Friends.module.css";
import FriendsMiniBlock from "../../commponents/FriendsMiniBlock/FriendsMiniBlock";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles((theme: any) => ({
  friendsWrapper: {
    width: "210px",
    display: "flex",
    flexWrap: "wrap",
    padding: "5px 5px 0px 5px",
    overflow: "auto",
    height: "250px",
    margin: "10px 0px 0px 0px",
    borderRadius: "8px",
    direction: "rtl",
    boxShadow: theme.palette.boxShadow,
    background: theme.palette.background.paper,
  },
}));

const Friends: FC = () => {
  const classes = useStyles();
  const friends = useSelector(getFriends);
  const inProgressFollow = useSelector(getFollowingInProgress);
  const dispatch = useDispatch();
  const follow = (userId: number) => dispatch(followThunk(userId));
  const unfollow = (userId: number) => dispatch(unfollowThunk(userId));

  useEffect(() => {
    dispatch(getFollowedFriends());
  }, [dispatch, inProgressFollow]);

  return (
    <Box>
      {friends.length !== 0 ? (
        <div className={classes.friendsWrapper}>
          {friends.map((friend) => {
            return (
              <FriendsMiniBlock
                user={friend}
                followingInProgress={inProgressFollow}
                followThunk={follow}
                unfollowThunk={unfollow}
                key={friend.id}
              />
            );
          })}
          {/* <UpButton /> */}
        </div>
      ) : (
        <div className={styles.sadness}>
          <img src={sadImage} alt="Грусть" />
        </div>
      )}
    </Box>
  );
};
export default React.memo(Friends);
