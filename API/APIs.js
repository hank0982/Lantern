module.exports = {
    SignUpAPI:{
        signUpWithEmail(firebase, email, pwd){
            if( !email.include('@')){
                alert('Invalid Email!');
            }
            
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error){
                
            });
        }
    },
    LoginAPI: {
        loginWithEmail(firebase, email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    return firebaseUser;
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    alert(error);
                });
        }
    },
    RegisterAPI: {

    },

    timelineAPI: {
        // duration unit is in minutes
        insertActivities(firebase, duration){
            var sliceNum = duration / 30;
        },
        

    },



}