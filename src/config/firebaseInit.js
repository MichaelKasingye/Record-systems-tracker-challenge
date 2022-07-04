import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   // databaseURL: process.env.REACT_APP_PUBLIC_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC9WmMGW6b1mLmZVUbjehEnch96k-g3q2Q",
  authDomain: "retailor-920d6.firebaseapp.com",
  // databaseURL: process.env.REACT_APP_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: "retailor-920d6",
  storageBucket: "retailor-920d6.appspot.com",
  messagingSenderId: "671799999942",
  appId: "1:671799999942:web:70bd0c64fc1c2c3ea6c6c7",
  measurementId: "G-YH8G5BEBT1",
};

export const app = initializeApp(firebaseConfig);
