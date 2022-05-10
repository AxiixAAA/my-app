import React, { useState } from "react";
import s from "./Profileinfo.module.css";
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from "./ProfileDataForm/ProfileDataForm";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileData from "./ProfileDataForm/ProfileData";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { follow, unfollow } from "../../../redux/user-reducer";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFriend } from "../../../redux/users-selectors";
import { SendMessage } from "../SendMessage/SendMessage";

const useStyles = makeStyles((theme) => ({
  NewPhotoText: {
    color: theme.palette.text.paper,
    backgroundColor: theme.palette.background.button,
    boxShadow: theme.palette.boxShadow,
    display: "block",
    textAlign: "center",
    paddingBottom: "5px",
    fontFamily: "monospace",
    fontSize: "15px",
    cursor: "pointer",
    lineHeight: "200%",
    borderRadius: "8px",
  },
  sss: {
    "& > label:hover": {
      color: theme.palette.text.hover,
    },
  },
  mainFoto: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: theme.palette.boxShadow,
  },
  ProfileDataForm: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.palette.boxShadow,
    borderRadius: "20px",
    padding: "2.4%",
    width: "95%",
    fontSize: "13px",
    fontFamily: "sans-serif",
    paddingTop: "5px",

    "& > * b": {
      color: "#848484",
    },
  },
  button: {
    "& > button": {
      width: "120px",
      height: "30px",

      backgroundColor: theme.palette.background.button,
      color: theme.palette.text.primary,
      borderRadius: "7px",
      border: "none",
      cursor: "pointer",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& > svg": {
      marginRight: "5px",
    },
    "& > button:hover": {
      backgroundColor: theme.palette.background.buttonHover,
      color: "white",
    },
  },
  containerMiniBloc: {
    width: "212px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    borderRadius: "8px",
    height: "100px",
    marginTop: "10px",
  },
}));

const Profileinfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const classes = useStyles();
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Box />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  console.log(profile.userId);
  return (
    <>
      <Grid
        container
        // direction="row"
        // justifyContent="center"
        // alignItems="flex-start"
        spacing={2}
      >
        {/* Lev */}
        <Grid item xs={3.5}>
          {/* Photo */}
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <div>
                <img
                  src={profile.photos.large || userPhoto}
                  className={classes.mainFoto}
                />
                {isOwner ? (
                  <Box className={classes.sss}>
                    <label htmlFor={"img"} className={classes.NewPhotoText}>
                      обновить фотографию
                    </label>
                  </Box>
                ) : (
                  <ProfileButtonFollo profileID={profile.userId} />
                )}
                <div className={s.NewPhoto}>
                  {isOwner && (
                    <input
                      type={"file"}
                      onChange={onMainPhotoSelected}
                      id={"img"}
                    />
                  )}
                </div>
              </div>
            </Grid>
            <Grid item>
              <FriendMiniBloc />
              <SendMessage userId={profile.userId} isOwner={isOwner} />
            </Grid>
          </Grid>
        </Grid>
        {/* Prav */}
        <Grid item xs={8.5}>
          <Grid container>
            <Grid item xs>
              <Box className={classes.ProfileDataForm}>
                {editMode ? (
                  <ProfileDataFormReduxForm
                    initialValues={profile}
                    profile={profile}
                    onSubmit={onSubmit}
                  />
                ) : (
                  <ProfileData
                    goToEditMode={() => {
                      setEditMode(true);
                    }}
                    profile={profile}
                    isOwner={isOwner}
                    status={status}
                    updateStatus={updateStatus}
                  />
                )}
              </Box>
            </Grid>
            <Grid style={{ width: "100%" }}>
              <MyPostsContainer isOwner={isOwner} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Profileinfo;

const ProfileButtonFollo = ({ profileID }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const followw = (userId) => {
    dispatch(follow(userId));
  };
  const unfolloww = (userId) => {
    dispatch(unfollow(userId));
  };
  return (
    // {/* follow /  unfollow*/}
    <div className={classes.button}>
      {profileID.followed ? (
        <button
          onClick={() => {
            unfolloww(profileID);
          }}
        >
          Удалить
        </button>
      ) : (
        <button
          onClick={() => {
            followw(profileID);
          }}
        >
          {/* <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="add_16__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="add_16__add_16"><path id="add_16__Rectangle-2" d="M0 0h16v16H0z"></path><path d="M9 9v4a1 1 0 01-2 0V9H3a1 1 0 110-2h4V3a1 1 0 112 0v4h4a1 1 0 010 2H9z"id="add_16__Mask" fill="currentColor"></path></g></g></svg> */}
          Добавить
        </button>
      )}
    </div>
  );
};

export const FriendMiniBloc = () => {
  const classes = useStyles();
  const filter = useSelector(getUsersFriend)

  console.log(filter);
  return (
    <Box className={classes.containerMiniBloc}>
        {/* {filter.some(filter => filter === 'true')} */}
        {filter === 'true'
        ? 'true'
        : 'false'
        }
        <p>{filter}</p>
      {/* <NavLink to={"/profile/" + user.id}>
        <img
          src={user.photos.small != null ? user.photos.small : userPhoto}
          alt="картинка"
          className={s.userPhoto}
        />
      </NavLink> */}
    </Box>
  );
};
