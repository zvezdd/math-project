import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSckPTDk5mckAxC7NgOZWizNERVAiJCN8",
  authDomain: "mathproject-4effd.firebaseapp.com",
  projectId: "mathproject-4effd",
  storageBucket: "mathproject-4effd.appspot.com",
  messagingSenderId: "9024122494",
  appId: "1:9024122494:web:e5579220dfa7696b7f722f",
  measurementId: "G-GEL18K2CH9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()