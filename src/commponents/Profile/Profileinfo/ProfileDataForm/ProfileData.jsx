import { Online } from "../../../../commponents/Common/NavigatorOnline/NavigatorOnline"
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks"
import s from '../Profileinfo.module.css';
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    ProfileData_Top:{
        borderBottom: theme.palette.borderBottom,
        color: theme.palette.text.primary,
        fontSize: '19px',
        fontFamily:'Arial',
        padding: '7px 0px 5px 0px',
    
        '& > * span': {
            fontSize: '14px',
            color: theme.palette.text.primary,
        },
        '& > div:nth-child(2)': {
            fontSize: '14px',
            color: theme.palette.text.primary,
        },
    },
    ProfileData_NameAndOnline:{
        display: 'flex',
        justifyContent: 'space-between',
        color: theme.palette.text.primary,
    },
    ProfileData_Content:{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #2B2B2B',
        paddingTop: '15px ',
    },
    ProfileData_ContentName:{
        width: '40%',
        color: theme.palette.text.secondary,

        '& > div':{
            marginBottom: '15px',
        }
    },
    ProfileData_ContentData:{
        width: '60%',
        color: theme.palette.text.auxiliary,

        '& > div':{
            marginBottom: '15px',
        }
    },
    ProfileDataFooter: {
        paddingTop: '10px',
    },
    Contact:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    contactTitle: {
        color: theme.palette.text.auxiliary,
        width: '20%',
        paddingLeft: '60px',
        marginBottom: '3px',
    },
    contactValue:{
        width: '80%',
        '& > a:hover':{
            color: theme.palette.text.primary,
            textDecoration: 'underline',
        }
    },
    button:{
        '& > button':{
            borderRadius: '4px',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.button,
        },
    }
  }),
);

const ProfileData = ({profile,isOwner, goToEditMode,status,updateStatus}) =>{
const classes = useStyles(); 
    return <Box className={s.ProfileData}>
    
        <Box className={classes.ProfileData_Top}>
            <Box className={classes.ProfileData_NameAndOnline}>
                <Box>{profile.fullName}</Box>
                <span><Online /></span>  
            </Box>
            <Box className={classes.status}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/></Box>
        </Box>
    
        <Box className={classes.ProfileData_Content}>
            <Box className={classes.ProfileData_ContentName}>
                <Box><b>Ищу работу:</b></Box>
                <Box><b>Мои профессиональные навыки:</b></Box>
                <Box><b>Обо мне:</b></Box>
            </Box>
            <Box className={classes.ProfileData_ContentData}>
                <Box>{profile.lookingForAJob ? "Yes" : "No"}</Box>
                <Box>{profile.lookingForAJobDescription}</Box>
                <Box>{profile.aboutMe}</Box>
            </Box>
        </Box>
        <Box className={classes.ProfileDataFooter}>
            {/* Contacts - обьект, по нему нужно итерироваться, делаем это при помощи Object.keys()  */}
            {/* .map(key => мы хотим на базе каждого ключа, мы хотим отрисовать компонент  Contact*/}
           <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
               return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </Box>
        {isOwner && <Box className={classes.button}> <button onClick={goToEditMode}>Редактировать</button> </Box>}
     </Box>
    } 
    
    const Contact = ({contactTitle, contactValue}) => {
    const classes = useStyles(); 
       return <Box className={classes.Contact}>
            <Box className={classes.contactTitle}> {contactTitle}:</Box>
            <Box className={classes.contactValue}> <a href={contactValue}> {contactValue} </a> </Box>
        </Box>
    }
    
export default ProfileData