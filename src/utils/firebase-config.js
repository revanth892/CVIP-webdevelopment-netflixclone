import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBiUeBXIlOCeRxbEHDid8nia_gt462yfDo",
  authDomain: "netflix-clone-212f7.firebaseapp.com",
  projectId: "netflix-clone-212f7",
  storageBucket: "netflix-clone-212f7.appspot.com",
  messagingSenderId: "592784845607",
  appId: "1:592784845607:web:56cab6a1ec1677d0449702",
  measurementId: "G-1HGDRG5B96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)