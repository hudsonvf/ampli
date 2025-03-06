// Pegando os elementos do menu pelo ID
const homeLink = document.getElementById('nav-home');
const sobreLink = document.getElementById('nav-sobre');
const contatoLink = document.getElementById('nav-contato');

// Pegando as seções correspondentes
const homeSection = document.getElementById('home');
const sobreSection = document.getElementById('sobre');
const contatoSection = document.getElementById('contato');

// Criando um array com os itens do menu e as seções
const menuItems = [homeLink, sobreLink, contatoLink];
const sections = [homeSection, sobreSection, contatoSection];

// Função para ativar menu ao clicar
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        menuItems.forEach(el => el.classList.remove('ativo'));
        item.classList.add('ativo');
    });
});

// Função para ativar menu ao rolar a página
function ativarPorScroll() {
    let scrollPos = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight) {
            menuItems.forEach(el => el.classList.remove('ativo'));
            menuItems[index].classList.add('ativo');
        }
    });
}

// Evento de scroll para ativar o menu
window.addEventListener('scroll', ativarPorScroll);
