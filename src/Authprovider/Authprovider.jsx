import  { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
import { GithubAuthProvider, GoogleAuthProvider,  } from 'firebase/auth';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null)
const Authprovider = ({children}) => {
    // loading 
     const [loading, setLoading] = useState(false)
    // user state 
    const [user, setUser] = useState({})
    console.log(user)
    // create user 
    const handleCreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    };
    // update user
    
    const handleUpdateUser = (name,image)=>{
        return updateProfile(auth.currentUser, {
             displayName: name, photoURL: image
           })
           
      }
    // login user
    const handleLoginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout user
    const handleLogoutUser =()=>{
        return auth.signOut();
    };
    // auth state
   // auth state
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('changed from onState ', currentUser);
        // Update the user state regardless of whether currentUser is truthy
        setUser(currentUser);
        setLoading(false); // Set loading to false after updating user state
    });
    return () => {
        unSubscribe();
    }
}, []); // Empty dependency array to run the effect only once when the component mounts

  // social providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('you have successfully logged in ', user);
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
        });
      })
      .catch((error) => {
        console.error('Google login error:', error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login failed. Please try again.',
        });
      });
  };
  
  const handleGithubProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log('you have successfully logged in ', user);
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
        });
      })
      .catch((error) => {
        console.error('GitHub login error:', error);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login failed. Please try again.',
        });
      });
  };
  

    console.log(user,'user changed')
    const authInfo = {
        user,
        loading,
        handleCreateUser,
        handleLoginUser,
        handleLogoutUser,
        handleUpdateUser,
        handleGoogleProvider,
        handleGithubProvider
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Authprovider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Authprovider;