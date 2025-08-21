// registerUser.js
import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = document.getElementById("nuevoUsuario").value;
  const contrasena = document.getElementById("nuevaContrasena").value;
  const rol = document.getElementById("rol").value;

  try {
    await addDoc(collection(db, "usuarios"), {
      usuario,
      contrasena,
      rol
    });
    alert("Usuario registrado con éxito.");
    document.getElementById("registerForm").reset();
  } catch (e) {
    alert("Error al registrar usuario: " + e.message);
  }
});
