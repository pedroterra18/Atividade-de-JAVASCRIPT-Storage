
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const signupForm = document.getElementById('signupForm');


loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

 
    const usuario = {
        nome,
        email,
        telefone,
        cpf,
        senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

 
    alert('Seu cadastro foi realizado com sucesso!');

   
    modal.style.display = 'none';

   
    window.location.href = 'pagina.html';
});

function pag2Load(){
    console.log("test")
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('usuarioNome').innerText = usuario.nome;
        document.getElementById('usuarioEmail').innerText = usuario.email;
        document.getElementById('usuarioTelefone').innerText = usuario.telefone;
        document.getElementById('usuarioCpf').innerText = usuario.cpf;
    } else {
        alert('Usuário não encontrado. Faça o cadastro!');
        window.location.href = 'index.html';
    }
}

