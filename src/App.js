import "./App.css";
import Scanner from "./components/scanner/Scanner";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6O1WUkiv62L65BCaZd7eW1UspycVobGM",
  authDomain: "barcodeproject-cdc99.firebaseapp.com",
  projectId: "barcodeproject-cdc99",
  storageBucket: "barcodeproject-cdc99.appspot.com",
  messagingSenderId: "406919863810",
  appId: "1:406919863810:web:6435f8b744aace6228911b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Scanner />
    </div>
  );
}

export default App;
