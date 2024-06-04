// Função para navegar entre as seções da SPA
function navigate(section) {
  const content = document.getElementById('content');
  switch (section) {
      case 'home':
          content.innerHTML = `
              <h1>Bem-vindo ao Universo</h1>
              <p>Explore os mistérios do universo através das nossas seções dedicadas a planetas, estrelas e galáxias.</p>
          `;
          break;
      case 'planets':
          content.innerHTML = `
              <h1>Planetas</h1>
              <p>Os planetas são corpos celestes que orbitam uma estrela. Explore os diferentes planetas do nosso sistema solar e além.</p>
          `;
          break;
      case 'stars':
          content.innerHTML = `
              <h1>Estrelas</h1>
              <p>Estrelas são esferas de plasma que brilham devido às reações nucleares em seu núcleo. Conheça mais sobre estas fascinantes fontes de luz.</p>
          `;
          break;
      case 'galaxies':
          content.innerHTML = `
              <h1>Galáxias</h1>
              <p>Galáxias são sistemas massivos compostos de estrelas, planetas, poeira e gás, todos ligados pela gravidade. Descubra os diferentes tipos de galáxias no universo.</p>
          `;
          break;
      default:
          content.innerHTML = `
              <h1>Página não encontrada</h1>
              <p>A página que você está procurando não existe.</p>
          `;
          break;
  }
}

// Carregar a seção inicial
document.addEventListener('DOMContentLoaded', () => {
  navigate('home');
});