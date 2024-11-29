function openDialog() {
    const dialog = document.getElementById("loginDialog");
    dialog.showModal();
  }
  
  
  function closeDialog() {
    const dialog = document.getElementById("loginDialog");
    dialog.close();
  }
  
  function handleOk() {
    alert("Login Berhasil!");
    closeDialog();
  }