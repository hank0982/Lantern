module.exports = {
    SignUpAPI: {
        signUpWithEmail(firebase, email, pwd, repwd) {
            if (!email.include('@')) {
                alert('Invalid Email!');
                return 0;
            }
            if (pwd != repwd) {
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
                    console.log('success');
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
        addActivityArray(firebase, flightDate, duration) {
            var userId = firebase.auth().currentUser.uid;
            var sliceNum = Math.floor(duration / 30);

            var activityArr = {};
            for (var i = 0; i < sliceNum; i++) {
                activityArr[i.toString()] = "empty";
            }

            firebase.database().ref('users/' + userId + '/' + flightDate).set({
                activities: activityArr
            });
        },
        returnActivities(firebase, flightData) {
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + userId + '/' + flightData + '/activities').once('value').then(function(snap) {
                return snap;
            });
        }
        // path is the path to the exact activity (e.g. fight club)
        // startIndex is an integer
        insertActivities(firebase, flightDate, path, startIndex) {
            var userId = firebase.auth().currentUser.uid;
            firebase.database().ref(path).once('value').then(function(snapshot) {
                var length = (snapshot.val() && snapshot.val().duration) || 'DURATION ERROR';
                if (length == 'DURATION ERROR') {
                    console.log(length);
                } else {
                    var span = Math.round(length / 30);
                }

                var result = path.split("/");
                // result[1] is category and result[2] is objectTitle     

                var updates = {};
                var change = { "category": result[1], "title": result[2], "span": span };

                for (var i = startIndex; i < startIndex + span; i++) {
                    updates[i.toString()] = change;
                }

                firebase.database().ref('users/' + userId + '/' + flightDate + '/activities').update(updates);

            });
        },
    },

    ActivityAPI: {
        lookupActivity(firebase, category, title) {
            var userId = firebase.auth().currentUser.uid;
            if (category && title) {
                firebase.database().ref('activities/' + category + '/' + title).once('value').then(function(snap) {
                    return snap;
                });
            } else if (category) {
                firebase.database().ref('activities/' + category).once('value').then(function(snap) {
                    return snap;
                })
            } else {
                firebase.database().ref('activities/').once('value').then(function(snap) {
                    return snap;
                })
            }
        },

    }
}