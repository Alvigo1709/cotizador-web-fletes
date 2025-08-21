// auth.js
import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  const q = query(
    collection(db, "usuarios"),
    where("usuario", "==", usuario),
    where("contrasena", "==", contrasena)
  );

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data();
    if (userData.rol === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }
  } else {
    alert("Credenciales incorrectas.");
  }
});
