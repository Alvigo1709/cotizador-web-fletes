// firebase.js
// Configuración e inicialización de Firebase

// Importación de módulos necesarios
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Configuración del proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBYMXyBtPMHSDfsjnGR_xZ4kbAWiZjicy8",
  authDomain: "cotizador-fletes-ca0d8.firebaseapp.com",
  projectId: "cotizador-fletes-ca0d8",
  storageBucket: "cotizador-fletes-ca0d8.firebasestorage.app",
  messagingSenderId: "385602786001",
  appId: "1:385602786001:web:8b09f79ef239b062622bf0"
};

// Inicializa Firebase y Firestore
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
