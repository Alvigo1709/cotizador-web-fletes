import { db } from './firebase.js';
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  const usuariosRef = collection(db, 'usuarios');
  const snapshot = await getDocs(usuariosRef);

  let acceso = false;

  snapshot.forEach((doc) => {
    const data = doc.data();
    if (data.usuario === usuario && data.contrasena === contrasena) {
      acceso = true;
      if (data.rol === 'admin') {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'index.html';
      }
    }
  });

  if (!acceso) {
    alert('Usuario o contraseña incorrectos');
  }
});

