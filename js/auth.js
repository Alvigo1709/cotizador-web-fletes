import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  const usuariosCol = collection(db, 'usuarios');
  const usuariosSnap = await getDocs(usuariosCol);

  let accesoConcedido = false;

  usuariosSnap.forEach((doc) => {
    const data = doc.data();
    if (data.usuario === username && data.contrasena === password) {
      accesoConcedido = true;
      if (data.rol === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'index.html';
      }
    }
  });

  if (!accesoConcedido) {
    alert('Usuario o contraseña incorrectos');
  }
});
