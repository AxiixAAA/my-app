import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ThemeSwitch from './settingsComponent/ThemeSwitch/ThemeSwitch';
import { TimeSwitch } from './settingsComponent/TimeSwitch/TimeSwitch';

const useStyles = makeStyles((theme) => ({
settingsContainer:{
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.boxShadow,
    width: '100%',
    height: '500px',
    borderRadius: '20px'
}
}))


const Setings = (props) =>{
const classes = useStyles()


return(<>
<Grid container className={classes.settingsContainer}>     
    <ThemeSwitch />
    <TimeSwitch/>
    Выйти
</Grid>
</>);
}

export default Setings;


