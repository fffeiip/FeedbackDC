import {firebase} from '@react-native-firebase/database';

var config = {
    databaseURL: "https://feedbackdc-d0bc7.firebaseio.com/",
    projectId: "feedbackdc-d0bc7",
}
export default firebase.initializeApp(config);