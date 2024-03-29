import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from 'firebase/auth';
import dotenv from 'dotenv';
import "firebase/firestore";

 dotenv.config();

 const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const userSignOut = () => {
    signOut(auth).then(() => {
        console.log('success')
    }).catch(error => console.log(error))
}

export default { app, analytics, userSignOut };
export const auth = getAuth(app);

