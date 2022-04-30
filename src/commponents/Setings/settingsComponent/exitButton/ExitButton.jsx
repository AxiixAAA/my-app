import { NavLink } from "react-router-dom"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../../../redux/users-selectors";
import { logout } from "../../../../redux/auth-reducer";



const ExitButton = () =>{
const isAuth = useSelector(getIsAuth)
const dispatch = useDispatch()
return<>
    {isAuth
        ? <button  onClick={() => dispatch(logout())}>Выйти<PowerSettingsNewIcon /> </button>
        : <NavLink to={'/login'}>Войти</NavLink> 
    }
{/* onClick={props.logout} */}
</>
}

export default ExitButton  