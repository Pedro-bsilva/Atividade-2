document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  // Verificar se há dados armazenados no LocalStorage e preencher o formulário
  if (localStorage.getItem("formData")) {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    document.getElementById("name").value = storedData.name;
    document.getElementById("email").value = storedData.email;
    document.getElementById("message").value = storedData.message;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Coletar os dados diretamente dos campos de entrada
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validação simples do formulário
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Armazenar os dados no LocalStorage
    const formData = { name, email, message };
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log("Formulário enviado", formData);

    // Criar e exibir a mensagem de sucesso
    const successMessage = document.createElement("div");
    successMessage.textContent = "Mensagem enviada com sucesso!";
    successMessage.style.color = "green";
    successMessage.style.marginTop = "20px";
    successMessage.style.fontSize = "18px";
    successMessage.style.fontWeight = "bold";
    
    // Adicionar a mensagem no formulário ou na página
    form.appendChild(successMessage);

    // Limpar o formulário após o envio
    form.reset();

    // Ocultar a mensagem após 5 segundos
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
  });
});
