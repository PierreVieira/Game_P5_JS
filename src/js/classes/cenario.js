class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem
        this.velocidade = velocidade
        this.x1 = 0
        this.x2 = windowWidth
    }
    exibe(){
        image(this.imagem, this.x1, 0, windowWidth, windowHeight)
        image(this.imagem, this.x2 + 1, 0, windowWidth, windowHeight)
    }
    move(){
        this.x1 -= this.velocidade
        this.x2 -= this.velocidade

        if(this.x1 < -windowWidth){
            this.x1 = windowWidth
        }
        if(this.x2 < -windowWidth){
            this.x2 = windowWidth
        }
    }
}