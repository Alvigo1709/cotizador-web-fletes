// Verifica si las credenciales coinciden con un usuario en Firestore
querySnapshot.forEach((doc) => {
  const userData = doc.data();
  if (userData.password === password) {
    localStorage.setItem('user', JSON.stringify({ username, rol: userData.rol }));
    
    // Redirigir según el rol
    if (userData.rol === 'admin') {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }

    userFound = true;
  }
});
