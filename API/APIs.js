import * as firebase from 'firebase';
import firebaseConfig from '../key';
firebase.initializeApp(firebaseConfig);
module.exports = {
    LoginAPI: {
        loginWithEmail(email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    alert(firebaseUser.email);
                })
                .catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // [START_EXCLUDE]
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                    // [END_EXCLUDE]
                });
        }
    }
}