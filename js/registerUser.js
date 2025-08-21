// js/registerUser.js
import { db } from './firebase.js';
import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Verificar si el usuario es administrador
const userJSON = localStorage.getItem("usuarioActivo");
const user = JSON.parse(userJSON);

// Elementos del DOM
const mensaje = document.getElementById("adminMessage");
const adminUser = document.getElementById("adminUser");

// Mostrar nombre del admin
adminUser.textContent = user?.username || "Desconocido";

// Validar acceso
if (!user || user.rol !== "admin") {
  alert("Acceso denegado. Debes ser administrador.");
  window.location.href = "login.html";
}

// Evento de registro de nuevo usuario
document.getElementById("adminRegisterForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("newUsername").value.trim();
  const password = document.getElementById("newPassword").value.trim();
  const rol = document.getElementById("newRole").value;

  // Verificar si el usuario ya existe
  const usuariosRef = collection(db, "usuarios");
  const q = query(usuariosRef, where("username", "==", username));
  const existing = await getDocs(q);

  if (!existing.empty) {
    mensaje.textContent = "El usuario ya existe.";
    mensaje.style.color = "red";
    return;
  }

  try {
    await addDoc(usuariosRef, {
      username,
      password,
      rol
    });

    mensaje.textContent = "Usuario creado exitosamente.";
    mensaje.style.color = "green";

    // Limpiar campos
    document.getElementById("adminRegisterForm").reset();
  } catch (error) {
    console.error("Error al crear usuario:", error);
    mensaje.textContent = "Error al crear usuario.";
    mensaje.style.color = "red";
  }
});

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "login.html";
}
window.cerrarSesion = cerrarSesion;
