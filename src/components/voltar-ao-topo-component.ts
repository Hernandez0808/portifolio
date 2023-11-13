class BotaoVoltarAoTopo {
  private btnSubir: HTMLElement;

  constructor(selector: string) {
      this.btnSubir = document.querySelector(selector) as HTMLElement;

      document.addEventListener("DOMContentLoaded", () => this.verificarPosicaoInicial());

      window.addEventListener("scroll", () => this.verificarPosicaoScroll());

      this.btnSubir.addEventListener("click", () => this.rolarParaOTopo());
  }

  private verificarPosicaoInicial() {
      const minhaPosicao = window.scrollY || document.documentElement.scrollTop;

      this.atualizarVisibilidadeBotao(minhaPosicao);
  }

  private verificarPosicaoScroll() {
      const minhaPosicao = window.scrollY || document.documentElement.scrollTop;

      this.atualizarVisibilidadeBotao(minhaPosicao);
  }

  private atualizarVisibilidadeBotao(posicao: number) {
      if (posicao >= 400) {
          this.btnSubir.style.display = "block";
      } else {
          this.btnSubir.style.display = "none";
      }
  }

  private rolarParaOTopo() {
      // Rola suavemente para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Uso da classe
const botaoTopo = new BotaoVoltarAoTopo(".botao-voltar-ao-topo");