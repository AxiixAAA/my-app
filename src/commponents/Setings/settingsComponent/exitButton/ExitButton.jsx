import React from "react"


const ExitButton = () =>{

    return<>
    <div>
        <div className={s.HeaderRigth} >
            <div></div>
            <div className={s.loginBlock} >
                    {props.isAuth
                    ? <button onClick={props.logout} >Выйти <PowerSettingsNewIcon /> </button>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    </div>
    </>
}