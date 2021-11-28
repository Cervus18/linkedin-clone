import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import './App.css';
import RightSidebar from './Components/RightSidebar'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login,logout } from './features/userSlice';
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid: userAuth.uid,
          displayName : userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }else {
        //user is logged out
        dispatch(logout())
      }
    })
  },[])


  return (
    
    <div className="app">
      {!user ? <Login/> :
       <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
        </>
      }
   
     
   
    </div>
  );
}

export default App;
