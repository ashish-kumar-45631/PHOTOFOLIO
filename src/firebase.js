import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_tg_B7KUUxVOltRv_rOA0zuZ9_bNcIs8",
  authDomain: "photof-3a928.firebaseapp.com",
  projectId: "photof-3a928",
  storageBucket: "photof-3a928.appspot.com",
  messagingSenderId: "680330484402",
  appId: "1:680330484402:web:ab3b4fc8006fbe426807ab",
  measurementId: "G-3T8391S18Y"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };



