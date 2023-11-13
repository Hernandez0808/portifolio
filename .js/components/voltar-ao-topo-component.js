class BotaoVoltarAoTopo {
    btnSubir;
    constructor(selector) {
        this.btnSubir = document.querySelector(selector);
        document.addEventListener("DOMContentLoaded", () => this.verificarPosicaoInicial());
        window.addEventListener("scroll", () => this.verificarPosicaoScroll());
        this.btnSubir.addEventListener("click", () => this.rolarParaOTopo());
    }
    verificarPosicaoInicial() {
        const minhaPosicao = window.scrollY || document.documentElement.scrollTop;
        this.atualizarVisibilidadeBotao(minhaPosicao);
    }
    verificarPosicaoScroll() {
        const minhaPosicao = window.scrollY || document.documentElement.scrollTop;
        this.atualizarVisibilidadeBotao(minhaPosicao);
    }
    atualizarVisibilidadeBotao(posicao) {
        if (posicao >= 400) {
            this.btnSubir.style.display = "block";
        }
        else {
            this.btnSubir.style.display = "none";
        }
    }
    rolarParaOTopo() {
        // Rola suavemente para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
// Uso da classe
const botaoTopo = new BotaoVoltarAoTopo(".botao-voltar-ao-topo");
