import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAUhnqaVTEmmSHwPlbA3R2LHmdf_cVdmsA",
  authDomain: "fir-frontend-5a97d.firebaseapp.com",
  projectId: "fir-frontend-5a97d",
  storageBucket: "fir-frontend-5a97d.appspot.com",
  messagingSenderId: "478437663675",
  appId: "1:478437663675:web:ea86e08258d84c7fc9da9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;