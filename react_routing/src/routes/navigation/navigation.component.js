import { Fragment } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.style.scss'

const Navigation = () => {
return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/home'>
                <CrownLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/plan'>
                    PLAN
                </Link>
                <Link className='nav-link' to='/user'>
                    USER
                </Link>
                <Link className='nav-link' to='/trainner'>
                    TRAINNER
                </Link>
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
                <Link className='nav-link' to='/sign-up'>
                    SIGN UP
                </Link>
            </div>
        </div>
        <div>
            <Outlet />
        </div>
    </Fragment>
)
}

export default Navigation;
