import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "cotizador-fletes",
  storageBucket: "cotizador-fletes.appspot.com",
  messagingSenderId: "ID_DEL_MENSAJERO",
  appId: "TU_APP_ID"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
