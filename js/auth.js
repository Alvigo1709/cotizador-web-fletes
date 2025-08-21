import { db } from './firebase.js';
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Función de login
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const usuariosRef = collection(db, 'usuarios');
      const snapshot = await getDocs(usuariosRef);
      let encontrado = false;

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.usuario === username && data.contrasena === password) {
          encontrado = true;

          if (data.rol === 'admin') {
            window.location.href = 'admin.html';
          } else {
            window.location.href = 'index.html';
          }
        }
      });

      if (!encontrado) {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error al iniciar sesión. Inténtalo de nuevo.');
    }
  });
});
