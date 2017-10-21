module.exports = {
    SignUpAPI:{
        signUpWithEmail(firebase, email, pwd){
            if( !email.include('@')){
                alert('Invalid Email!');
                return;
            }
            
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(user) {
                LoginAPI.loginWithEmail(firebase, email, passward);
            })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
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
                    if (errorCode == 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    alert(error);
                });
        }
    },

    timelineAPI: {
        // duration unit is in minutes
        insertActivities(firebase, userId, flightDate, duration){
            var sliceNum = Math.floor(duration / 30);
            var activityArr = [];
            for (var i = 0; i < sliceNum; i++) { 
                activityArr.push(null);
            }

            firebase.database().ref('users/' + userId + '/' + flightDate).set({
                activities: activityArr
            });
        }
    }
}