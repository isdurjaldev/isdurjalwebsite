// let modal = document.getElementById("MsgBox");
// let btn = document.getElementById("msg");
// let span = document.getElementsByClassName("close")[0];

// btn.onclick = function()
// {
//     modal.style.display = "block";
// }

// span.onclick = function()
// {
//     modal.style.display = "none";
// }

// window.onclick = function(event)
// {
//     if (event.target == modal)
//     {
//         modal.style.display = "none";
//     }
// }

let sender = document.getElementById("Correo");
let description = document.getElementById("Descripcion");
function enviarMail()
{
    Email.send({
        Host: "smtp.gmail.com",
        Username: sender,
        Password: "We-wont-diegmail",
        To: 'alberto.diaz.sw@gmail.com',
        From: sender,
        Subject: "Hola encontre tu Website",
        Body: description,
    })
        .then(function(message){
            alert("Mail enviado correctamente")
        });
}