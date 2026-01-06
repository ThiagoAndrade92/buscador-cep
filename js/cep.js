const btnCep = document.querySelector('.btn button');
const resultados = document.querySelector('.resultados');

const inputUf = document.getElementById('uf');
const inputCidade = document.getElementById('cidade');
const inputLogradouro = document.getElementById('logradouro');

resultados.style.visibility = 'hidden';

btnCep.addEventListener('click', async () => {
   const uf = inputUf.value.trim();
   const cidade = inputCidade.value.trim();
   const logradouro = inputLogradouro.value.trim();

   if (!uf || !cidade || !logradouro) {


      resultados.style.visibility = 'visible';
      resultados.innerHTML = `<p class="campo-vazio">Preencha todos os campos!</p>`;
      btnCep.disabled = true;

      setTimeout(() => {
         resultados.style.visibility = 'hidden';
         resultados.textContent = '';
         btnCep.disabled = false;
      }, 3000);
      
      return;
   }

   btnCep.disabled = true;

   try {
      const res = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`);

      const data = await res.json();

      resultados.innerHTML = '';
      

      const ul = document.createElement('ul');

      data.forEach(endereco => {
         const liRua = document.createElement('li');
         liRua.innerHTML = ` <b>Rua:</b> ${endereco.logradouro}`;
         const liBairro = document.createElement('li');
         liBairro.innerHTML = ` <b>Bairro:</b> ${endereco.bairro}`;
         const liCidade = document.createElement('li');
         liCidade.innerHTML = ` <b>Cidade:</b> ${endereco.localidade} - ${endereco.uf}`;
         const liCep = document.createElement('li');
         liCep.innerHTML = ` <b>CEP:</b> ${endereco.cep}`;
         ul.appendChild(liRua);
         ul.appendChild(liBairro);
         ul.appendChild(liCidade);
         ul.appendChild(liCep);
      });
      resultados.style.visibility = 'visible';
      resultados.appendChild(ul);
      inputUf.value = '';
      inputCidade.value = '';
      inputLogradouro.value = '';
      inputUf.focus();
   } catch (error) {
      resultados.innerHTML = '<h1 class="erro">Erro na consulta</h1>'

      setTimeout(() => {
         resultados.style.visibility = 'hidden';
         resultados.textContent = '';
         btnCep.disabled = false;
      }, 3000);
   } finally {
      btnCep.disabled = false;
   };

});