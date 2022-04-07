
import avatar from "../../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
    DialogItem: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        height: '60px',
        margin: '0 auto',
        flexDirection: 'row',
        fontSize: '12px',
        fontWeight: '600',
        borderRadius: '0',
        borderBottom: '2px solid #2B2B2B',
        color:'#B3B3B3',
        fontFamily: 'Arial',
        fontWeight: '400',
        fontFamily: 'Arial',
        fontSize: '13px',

        '& > :hover': {
            backgroundColor: '#2B2B2B',
            borderRadius: '0',
        },
    },
    containerDialogs: {
        display: 'flex',
    },
    messageIcon: {
        width: '45px',
        height: '45px',
        boxShadow: '0px 0px 2px wheat',
        padding: '0px 2px 2px 2px',
        borderRadius: '100%',
        marginRight: '15px',
        marginLeft: '15px',
    },
    messageFullName:{
    
    }

}));


let DialogItem = (props) => {
const classes = useStyles();   
     
    return (
        <div className={classes.DialogItem}>
            <NavLink to="/message">
            <div className={classes.containerDialogs}>
                <div>
                    <img 
                    src={props.icon  != null ? props.icon  : avatar}
                    alt="картинка"
                    className={classes.messageIcon}
                    />
                </div>
                <div className={classes.messageFullName}>{props.name}</div>
            </div>
            </NavLink>
        </div>
    );
  }

export default DialogItem;
