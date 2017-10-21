module.exports = {
    SignUpAPI: {
        signUpWithEmail(firebase, email, pwd, repwd) {
            if (!email.include('@')) {
                alert('Invalid Email!');
                return 0;
            }
            if(pwd != repwd){
                alert('the first pwd and the second is different~');
                return -1;
            }
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(function(user) {
                    LoginAPI.loginWithEmail(firebase, email, pwd);
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
                return 0;
        }
    },
    LoginAPI: {
        loginWithEmail(firebase, email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(function(firebaseUser) {
                    console.log('sucess');
                    return firebase.auth().currentUser;
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
        addActivityArray(firebase, userId, flightDate, duration){
            var sliceNum = Math.floor(duration / 30);
            var activityArr = [];
            for (var i = 0; i < sliceNum; i++) {
                activityArr.push(null);
            }

            firebase.database().ref('users/' + userId + '/' + flightDate).set({
                activities: activityArr
            });
        },
        insertActivities(firebase, userId, activityId){
            
        }
    },

    storeFlightAPI:{
        addFlightInfo(firebase, userId, flightDate){
            firebase.database().ref('users/' + userId + '/').set({
                flightInfo: flightDate
            });
        }
    }
}