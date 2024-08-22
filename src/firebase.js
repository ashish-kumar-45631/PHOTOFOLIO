import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOCrewi5MJ_il4lmaKT0qfd1uqXtY_UnE",
  authDomain: "photofolio-c46dc.firebaseapp.com",
  projectId: "photofolio-c46dc",
  storageBucket: "photofolio-c46dc.appspot.com",
  messagingSenderId: "646921875489",
  appId: "1:646921875489:web:96f16f64f828900ef4b360",
  measurementId: "G-PCQWGHJ5G9"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };



