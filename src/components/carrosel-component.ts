import { Projeto } from "../types/Projeto";

class Carousel {
  private carrosel: HTMLElement;
  private carroselItems: NodeListOf<HTMLElement>;
  private toggleButtons: NodeListOf<HTMLElement>;
  private lstProjetos: Projeto[];

  constructor() {
    this.iniciaComponent();

  }

  private async iniciaComponent() {
    this.carrosel = document.querySelector('.carrosel') as HTMLElement;
    await this.generateCarouselItemsHtml();

    this.carroselItems = document.querySelectorAll('.carrosel-item') as NodeListOf<HTMLElement>;
    this.toggleButtons = document.querySelectorAll('.toggle') as NodeListOf<HTMLElement>;

    setTimeout(() => { 
      this.initCarousel();
    });
  }

  private generateCarouselItemsHtml() {
    return new Promise<void>((resolve) => {
      let lstProjetos = this.getProjetos();
      lstProjetos.forEach((projeto: Projeto, i: number) => {
        const carroselItem = document.createElement("div");
        carroselItem.classList.add("carrosel-item");

        if ((lstProjetos.length - 1) == i) {
          carroselItem.classList.add("first");
        }
        const projeHospedado = `
        <a class="underline" href="${projeto.url_projeto_online}" target="_blank">
          <span class="material-icons">language</span> Visualizar
        </a>`

        const projeNaoHospedado = `
        <div class='naoHospedado'>
          <span class="material-icons">block</span> Não Hospedado
        </div>
          `

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

  private initCarousel() {
    this.toggleButtons.forEach((button) => {
      button.addEventListener('click', (e: MouseEvent) => {

        const el = document.querySelector('.first') as HTMLElement;
        el.classList.remove('first');

        let novoItemAparecer: HTMLElement;
        if (e.currentTarget instanceof HTMLElement) {
          if (e.currentTarget.getAttribute('data-toggle') === 'next') {
            novoItemAparecer = this.next(el);
            this.carrosel.classList.remove('transition-reverse');
          } else {
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

  private next(el: HTMLElement): HTMLElement {
    if (el.nextElementSibling) {
      return el.nextElementSibling as HTMLElement;
    } else {
      return this.carroselItems[0];
    }
  }

  private prev(el: HTMLElement): HTMLElement {
    if (el.previousElementSibling) {
      return el.previousElementSibling as HTMLElement;
    } else {
      return this.carroselItems[this.carroselItems.length - 1];
    }
  }

  private getProjetos(): Projeto[] {
    let lstProjetos: Projeto[] = [
      {
        nm_projeto: 'Pokédex - Angular',
        descricao: 'Pokédex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Termo - Angular',
        descricao: 'Clone do jogo termo feito em Angular framework, utilizando diversas tecnicas de manipulação de inputs e animaçoes para uma boa experiência do usuário.',
        caminho_img: '/dist/imgs/projetos/termo.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/termo-angular',
        url_repositorio: 'https://github.com/Hernandez0808/termo-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: '',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
      {
        nm_projeto: 'Pkedex - Angular',
        descricao: 'Pokedex feita em Angular, lidando com todas as informações vindas do back-end de forma dinâmica.',
        caminho_img: '/dist/imgs/projetos/pokedex.jpg',
        url_projeto_online: 'https://hernandez0808.github.io/pokedex-angular',
        url_repositorio: 'https://github.com/Hernandez0808/pokedex-angular',
      },
    ]

    return lstProjetos;
  }

}

const carousel = new Carousel();