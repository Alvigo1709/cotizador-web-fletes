// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyBYMXyBtPMHSDfsjnGR_xZ4kbAWiZjicy8",
  authDomain: "cotizador-fletes-ca0d8.firebaseapp.com",
  projectId: "cotizador-fletes-ca0d8",
  storageBucket: "cotizador-fletes-ca0d8.firebasestorage.app",
  messagingSenderId: "385602786001",
  appId: "1:385602786001:web:8b09f79ef239b062622bf0"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);

// Inicializa Firestore
export const db = getFirestore(app);
