// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://songs-server-gdehner.herokuapp.com',
  firebase: {
    apiKey: "AIzaSyDFI2mbRXh6Np-joTKfzS0YTYELjHlFlGQ",
    authDomain: "songs-4baa3.firebaseapp.com",
    databaseURL: "https://songs-4baa3-default-rtdb.firebaseio.com",
    projectId: "songs-4baa3",
    storageBucket: "songs-4baa3.appspot.com",
    messagingSenderId: "187925847148",
    appId: "1:187925847148:web:d023cec72e66cb3a150c49"
  }
};
/**
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFI2mbRXh6Np-joTKfzS0YTYELjHlFlGQ",
  authDomain: "songs-4baa3.firebaseapp.com",
  databaseURL: "https://songs-4baa3-default-rtdb.firebaseio.com",
  projectId: "songs-4baa3",
  storageBucket: "songs-4baa3.appspot.com",
  messagingSenderId: "187925847148",
  appId: "1:187925847148:web:d023cec72e66cb3a150c49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
