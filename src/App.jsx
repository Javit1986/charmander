import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHCNpoZBWIUVMy7HWSJVSBdgInu33IvUs",
  authDomain: "charmander-2024.firebaseapp.com",
  projectId: "charmander-2024",
  storageBucket: "charmander-2024.appspot.com",
  messagingSenderId: "967313682677",
  appId: "1:967313682677:web:5e0602a4970e4f3adc15bc",
  measurementId: "G-TGLN3E9Y8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  const [pokemones, setPokemones] = useState([]);

  const db = getDatabase();
  
  useEffect(()=>{const Referencia = ref(db, "frutas/");


    onValue(Referencia, (snapshot) => {
      const data = snapshot.val();
      setPokemones(data);
      console.log("poke desde useeffect: ",data)
    });
  },[])

  return (
    <>
      <h1>charman web</h1>
      <h2>{pokemones?.tituloo}</h2>
    </>
  );
}

export default App;
