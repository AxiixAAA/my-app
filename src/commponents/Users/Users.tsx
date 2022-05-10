import { FC, useEffect } from "react";
import User from "./User";
import s from "./Users.module.css";
import UserNavbar from "./UserNavbar/UserNavbar";
import UsersSearchForm from "./UsersSearchForm/UsersSearchForm";
import {
  FilterType,
  followThunk,
  getUsers,
  unfollowThunk,
} from "../../redux/user-reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getUsersFilter,
  SelectorUsers,
} from "../../redux/users-selectors";
import { useHistory, useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

type Theme = {
  palette: any;
};
const useStyles = makeStyles((theme: Theme) => ({
  userContainer: {
    display: "flex",
    flexDirection: "column",
    // width: '100%',
    boxShadow: theme.palette.boxShadow,
    backgroundColor: theme.palette.background.paper,
    marginRight: "2%",
    borderRadius: "20px",
  },
}));

export const Users: FC = (props) => {
  const classes = useStyles();

  const users = useSelector(SelectorUsers);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const followingInProgress = useSelector(getFollowingInProgress);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const queryString = require("query-string");
    const parsed = queryString.parse(location.search) as {
      term: string;
      page: string;
      friend: string;
    };
    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) actualPage = Number(parsed.page);

    if (!!parsed.term)
      actualFilter = { ...actualFilter, term: parsed.term as string };
    if (!!parsed.friend)
      actualFilter = {
        ...actualFilter,
        friend:
          parsed.friend === "null"
            ? null
            : parsed.friend === "true"
            ? true
            : false,
      };

    dispatch(getUsers(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    const query: any = {};
    if (!!filter.term) query.term = filter.term;
    if (filter.friend !== null) query.friend = String(filter.friend);

    history.push({
      pathname: "/users",
      search: `?term=${filter.term}&friend=${filter.friend}`,
    });
  }, [filter]);
  // Обработчик события Фильтр
  const onFilterChenged = (filter: FilterType) => {
    dispatch(getUsers(1, pageSize, filter));
  };

  const followw = (userId: number) => {
    dispatch(followThunk(userId));
  };
  const unfolloww = (userId: number) => {
    dispatch(unfollowThunk(userId));
  };

  return (
    <>
      {/* Список пользователей */}
      <Grid container>
        <Grid item xs={8.7} className={classes.userContainer}>
          <UsersSearchForm onFilterChenged={onFilterChenged} />
          {users.map((u) => (
            <User
              user={u}
              followingInProgress={followingInProgress}
              key={u.id}
              unfollowThunk={unfolloww}
              followThunk={followw}
            />
          ))}
        </Grid>

        <Grid item xs={3} className={s.UserNavbar}>
          <UserNavbar />
        </Grid>
      </Grid>
    </>
  );
};
