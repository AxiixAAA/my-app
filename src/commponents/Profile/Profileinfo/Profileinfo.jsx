/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import s from "./Profileinfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import { ProfileDataFormReduxForm } from "./ProfileDataForm/ProfileDataForm";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import ProfileData from "./ProfileDataForm/ProfileData";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { followThunk } from "../../../redux/user-reducer";
import { useDispatch } from "react-redux";
import { SendMessage } from "../SendMessage/SendMessage";
import Friends from "../../../pages/Friends/Friends";

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
    backgroundColor: theme.palette.background.paper,
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
      width: "100%",
      height: "30px",

      backgroundColor: theme.palette.background.button,
      color: theme.palette.text.paper,
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
  // console.log(profile);

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
  //   console.log(profile.userId);
  return (
    <>
      <Grid container spacing={2}>
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
                  <>
                    <Box className={classes.sss}>
                      <label htmlFor={"img"} className={classes.NewPhotoText}>
                        обновить фотографию
                      </label>
                    </Box>

                    <Friends />
                  </>
                ) : (
                  <>
                    <ProfileButtonFollo profileID={profile.userId} />
                    <SendMessage userId={profile.userId} isOwner={isOwner} />
                  </>
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
              {isOwner ? <MyPostsContainer isOwner={isOwner} /> : null}
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
  const [subscribe, setSubscribe] = useState("Подписаться");

  const sss = () => {
    setSubscribe((prevMode) =>
      prevMode === "Подписаться" ? "Отписаться" : "Подписаться"
    );
  };

  const followw = (userId) => {
    dispatch(followThunk(userId));
  };

  //   const unfolloww = (userId) => {
  //     dispatch(unfollowThunk(userId));
  //   };
  console.log(subscribe);
  return (
    <div className={classes.button}>
      <button
        onClick={() => {
          sss();
          followw(profileID);
        }}
      >
        {subscribe}
      </button>
    </div>
  );
};
