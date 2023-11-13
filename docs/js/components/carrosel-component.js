class Carousel {
    carrosel;
    carroselItems;
    toggleButtons;
    lstProjetos;
    constructor() {
        this.iniciaComponent();
    }
    async iniciaComponent() {
        this.carrosel = document.querySelector('.carrosel');
        await this.generateCarouselItemsHtml();
        this.carroselItems = document.querySelectorAll('.carrosel-item');
        this.toggleButtons = document.querySelectorAll('.toggle');
        setTimeout(() => {
            this.initCarousel();
        });
    }
    generateCarouselItemsHtml() {
        return new Promise((resolve) => {
            let lstProjetos = this.getProjetos();
            lstProjetos.forEach((projeto, i) => {
                const carroselItem = document.createElement("div");
                carroselItem.classList.add("carrosel-item");
                if ((lstProjetos.length - 1) == i) {
                    carroselItem.classList.add("first");
                }
                const projeHospedado = `
        <a class="underline" href="${projeto.url_projeto_online}" target="_blank">
          <span class="material-icons">language</span> Visualizar
        </a>`;
                const projeNaoHospedado = `
        <div class='naoHospedado'>
          <span class="material-icons">block</span> Não Hospedado
        </div>
          `;
                carroselItem.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <img src="${projeto.caminho_img}" class="img-carrosel">
                    <div class="content-acessar">
                        <div class="nm_proje">
                            <p>${projeto.nm_projeto}</p>
                        </div>
                        ${projeto.url_projeto_online ? projeHospedado : projeNaoHospedado}
                        <div class="descrition_pag">
                            <p>${projeto.descricao}</p>
                        </div>
                    </div>
                </div>

                <div class="card-footer">
                    <a class="link-icon" href="${projeto.url_repositorio}" target="_blank">
                        <i class="bi bi-github icon-github"></i>
                    </a>
                </div>
            </div>
        `;
                this.carrosel.appendChild(carroselItem);
            });
            resolve();
        });
    }
    initCarousel() {
        this.toggleButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                const el = document.querySelector('.first');
                el.classList.remove('first');
                let novoItemAparecer;
                if (e.currentTarget instanceof HTMLElement) {
                    if (e.currentTarget.getAttribute('data-toggle') === 'next') {
                        novoItemAparecer = this.next(el);
                        this.carrosel.classList.remove('transition-reverse');
                    }
                    else {
                        novoItemAparecer = this.prev(el);
                        this.carrosel.classList.add('transition-reverse');
                    }
                    novoItemAparecer.classList.add('first');
                    novoItemAparecer.style.order = '1';
                    for (let i = 2, j = 2, ref = this.carroselItems.length; (2 <= ref ? j <= ref : j >= ref); i = 2 <= ref ? ++j : --j) {
                        novoItemAparecer = this.next(novoItemAparecer);
                        novoItemAparecer.style.order = i.toString();
                    }
                    this.carrosel.classList.remove('transition');
                    setTimeout(() => {
                        this.carrosel.classList.add('transition');
                    }, 50);
                }
            });
        });
    }
    next(el) {
        if (el.nextElementSibling) {
            return el.nextElementSibling;
        }
        else {
            return this.carroselItems[0];
        }
    }
    prev(el) {
        if (el.previousElementSibling) {
            return el.previousElementSibling;
        }
        else {
            return this.carroselItems[this.carroselItems.length - 1];
        }
    }
    getProjetos() {
        let lstProjetos = [
            {
                nm_projeto: 'Pokédex - Angular',
                descricao: 'Pokédex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Termo - Angular',
                descricao: 'Clone do jogo termo feito em Angular framework, utilizando diversas tecnicas de manipulação de inputs e animaçoes para uma boa experiência do usuário.',
                caminho_img: 'imgs/projetos/termo.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/termo-angular',
                url_repositorio: 'https://github.com/Hernandez0808/termo-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: '',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
            {
                nm_projeto: 'Pkedex - Angular',
                descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
                caminho_img: 'imgs/projetos/pokedex.jpg',
                url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
                url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
            },
        ];
        return lstProjetos;
    }
}
const carousel = new Carousel();
export {};
