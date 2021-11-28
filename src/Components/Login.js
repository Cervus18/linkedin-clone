import './Login.css'
import { auth } from '../firebase'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [profilePic,setProfilePic] = useState("")
    const dispatch = useDispatch()
    
    const register = () => {
        if(!name){
            return alert('Please return a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
            .then(userAuth => {
                    userAuth.user.updateProfile({
                    displayName: name,
                    photoURL : profilePic
                }).then(() => {
                    dispatch(login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL:profilePic
                    }))
                })
            })
            .catch(err => alert(err))
          
    }

    const loginToApp = (e) => {
       e.preventDefault()
       auth.signInWithEmailAndPassword(email,password)
                                     .then(userAuth => {
                                         dispatch(login({
                                            email:userAuth.user.email,
                                            uid: userAuth.user.uid,
                                            displayName: userAuth.user.displayName,
                                            profileUrl:userAuth.user.photoURL
                                         }))
                                     }).catch(err => alert(err))
    }

    return (
        <div className='login'>
            <img src="https://www.encoreplusnet.com/wp-content/uploads/2015/08/LinkedIn_Logo.svg_.png" alt="" />

            <form >
                <input type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Profile pic Url (optional)" value={profilePic} onChange={e => setProfilePic(e.target.value)}/>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p>Not a member?{"  "} <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
