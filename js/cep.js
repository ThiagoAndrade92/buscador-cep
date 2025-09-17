const btnCep = document.querySelector('.btn button');
const resultados = document.querySelector('.resultados');

resultados.style.visibility = 'hidden';

btnCep.addEventListener('click', async () => {
   const uf = document.getElementById('uf').value.trim();
   const cidade = document.getElementById('cidade').value.trim();
   const logradouro = document.getElementById('logradouro').value.trim();

   if (!uf || !cidade || !logradouro) {
      resultados.textContent = 'Preencha todos os campos!';
      return;
   }

   try {
      const res = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`);

      const data = await res.json();


      console.log(data)

      resultados.innerHTML = '';
      

      const ul = document.createElement('ul');

      data.forEach(endereco => {
         const li = document.createElement('li');
         li.innerHTML = `
               <b>Rua:</b> ${endereco.logradouro} <br>
               <b>Bairro:</b> ${endereco.bairro} <br>
               <b>Cidade:</b> ${endereco.localidade} - ${endereco.uf}<br>
               <b>CEP:</b> ${endereco.cep}
         `;
         ul.appendChild(li);
      });
      resultados.style.visibility = 'visible';
      resultados.appendChild(ul);
   } catch (error) {
      resultados.innerHTML = '<h1>Erro na consulta</h1>'
   };
});