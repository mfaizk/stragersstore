import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiB7o0Tv7IcOcIcHXuvwZ_4F9ISaktevg",

  authDomain: "strangerstore-a32fe.firebaseapp.com",

  projectId: "strangerstore-a32fe",

  storageBucket: "strangerstore-a32fe.appspot.com",

  messagingSenderId: "1057722592693",

  appId: "1:1057722592693:web:5cb874066f13a05f987dfc",

  measurementId: "G-MBD3TP0ENG",
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
