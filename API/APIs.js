module.exports = {
    SignUpAPI: {
        signUpWithEmail(firebase, email, pwd) {
            if (!email.include('@')) {
                alert('Invalid Email!');
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(function(user) {
                    LoginAPI.loginWithEmail(firebase, email, passward);
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
        addActivityArray(firebase, flightDate, duration){
            var userId = firebase.auth().currentUser.uid;
            var sliceNum = Math.floor(duration / 30);
            var activityArr = [];
            for (var i = 0; i < sliceNum; i++) {
                activityArr.push(null);
            }

            var objArr = {};
            for (var i = 0; i < activityArr.length; ++i)
                objArr[i] = activityArr[i];
   
            firebase.database().ref('users/' + userId + '/' + flightDate).set({
                activities: objArr
            });
        },
/*
        insertActivities(firebase, flightDate, path){
            var userId = firebase.auth().currentUser.uid;
            var index = firebase.database().ref(path + '/duration').once('value').then(function(snapshot) {
                var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            });
        },
*/

        addFlightInfo(firebase, flightDate){
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + userId + '/').set({
                flightInfo: flightDate
            });
        }
    },
}