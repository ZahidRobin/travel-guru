import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const  createUserWithEmailAndPassword = (name,email,password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
        const signInUser = {
            isLogin: false,
            email: ''
        } 
        updateUsername(name);
        return signInUser;
    })
    .catch(error => {
        const signInUser = {
            isLogin: false,
            email: ''
        }
        return signInUser;
    })
}

export const signInWithEmailAndPassword = (email,password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
        const {email, displayName} = result.user;
        const signInUser = {
            isLogin: true,
            name: displayName,
            email: email
        }
        return signInUser;
    })
    .catch(function(error) {
        const signInUser = {
            isLogin: false,
            name: '',
            email: '',
            error: error.message
        }
        return signInUser;
    });
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
        const {email, displayName} = result.user;
        const signInUser = {
            isLogin: true,
            name: displayName,
            email: email
        }
        return signInUser;
      }).catch(function(error) {
        console.log(error);
        console.log(error.message);
      });
}

export const handleFacebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
    .then(function(result) {
        const {email, displayName} = result.user;
        const signInUser = {
            isLogin: true,
            name: displayName,
            email: email
        }
        return signInUser;
      }).catch(function(error) {
        console.log(error);
        console.log(error.message);
      });
}

export const handleSignOut = () => {
    return firebase.auth().signOut().then(function() {
        const signInUser = {
            isLogin: false,
            name: '',
            email: ''
        }
        return signInUser;
      }).catch(function(error) {

      });
}

const updateUsername = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(function() {
        console.log("Username Updated Successfully");
    }).catch(function(error) {
        console.log(error);
    });
}