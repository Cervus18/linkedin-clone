import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { auth } from '../firebase'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'

const HeaderOption = ({avatar,Icon,title}) => {

    const dispatch = useDispatch()
      
    const user = useSelector(selectUser)

    const logoutUser = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="headerOption" >
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={user.photoUrl} onClick={logoutUser}>{user.displayName[0].toUpperCase()}</Avatar>}
            <h3 className="headerOption__title">{title}</h3>
            
        </div>
    )
}

export default HeaderOption

