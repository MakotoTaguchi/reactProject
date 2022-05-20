import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwbmgrDH3S_uTLzCRtODu6YEFhdq_b7hQ",
  authDomain: "twitter-clone-udemy-dc1e5.firebaseapp.com",
  projectId: "twitter-clone-udemy-dc1e5",
  storageBucket: "twitter-clone-udemy-dc1e5.appspot.com",
  messagingSenderId: "512344933227",
  appId: "1:512344933227:web:9403f55f5b40993eca422e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
