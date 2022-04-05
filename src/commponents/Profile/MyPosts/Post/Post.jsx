import UserSmallPhotoContainer from '../../../../commponents/Common/UserSmallPhoto/UserSmallPhotoContainer';
import { NavLink } from 'react-router-dom';
import s from './Post.module.css';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    Post: {
        color: 'grey',
        backgroundColor: '#1F1F1F',
        marginTop: '15px',
        padding: '10px 10px 0px 10px',
        boxShadow: '0px 0px 2px wheat',
        borderRadius: '15px',
    }
    
    // postAvatar img{
    //     width: 50px;
    //     height: 50px;
    //     border-radius: 100%;
    //     cursor: pointer;
    // }
    // postAvatar {
    //     display: flex;
    // }
    // fullName {
    //     padding-left: 15px;
    //     color: #F53838;
    //     cursor: pointer;
    //     font-size: 15px;
    // }
    // fullName:hover{
    //     text-decoration:underline;
    // }
    // postFooter{
    //     border-top: 1px solid #2B2B2B;
    //     margin-top: 10px;
    // }
    // postLikes {
    //     display: flex;
    //     align-items: center;
    // }
    // postLikes svg{
    //     width: 20px;
    // }


    // NewPhotoText:{
    //     color: theme.palette.text.paper,
    //     backgroundColor: theme.palette.background.button,
    //     boxShadow: theme.palette.boxShadow,
    //     display: 'block',
    //     textAlign: 'center',
    //     paddingBottom: '5px',
    //     fontFamily: 'monospace',
    //     fontSize: '15px',
    //     cursor: 'pointer',
    //     lineHeight: '200%',
    //     borderRadius: '8px',
    // },
    // sss:{
    //     '& > label:hover':{
    //         color: theme.palette.text.hover
    //     }
    // },
    // mainFoto:{
    //     width: '100%',
    //     borderRadius: '8px',
    //     boxShadow: theme.palette.boxShadow,
    // }
  }),
);

const Post = (props) => {
const classes = useStyles();   
    return <> 
    <Grid container>
        
    </Grid>
    <Box className={s.Post}>
        <Box className={s.postAvatar}>
            <Box>
                <UserSmallPhotoContainer />
            </Box>
            <Box className={s.fullName}>
                {props.fullName}
            </Box>
        </Box>
        <Box className={s.postMessage}>
            { props.message }   
        </Box>
      
        <Box className={s.postFooter}> 
        
            <Box className={s.postLikes}>
                <NavLink to="/profile">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16 4a5.95 5.95 0 00-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 007.73 4 5.73 5.73 0 002 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0016.27 4zm.27 1.8a3.93 3.93 0 013.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 01-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 017.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 001.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fill-rule="nonzero"></path></g></svg>
                </NavLink>
                <NavLink to="/profile">
                    {props.likesCount}
                </NavLink>
            </Box>
        
        </Box>
    </Box>
</>
}


export default Post;
