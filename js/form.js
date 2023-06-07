function sendMail(){
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("fmessage").value,
  };

  const serviceID = "service_is0d6td";
  const templateID = "template_2fqyp4d";
  
  emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("fmessage").value = "";
      console.log(res);
      alert("Tu mensaje ha sido enviado correctamente");
    })
    .catch((err) => console.log(err));
}
