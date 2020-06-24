let frame_image, personagem, cenario

function preload(){
    imagem_cenario = loadImage('../midia/imagens/cenario/floresta.png')
    imagem_personagem = loadImage('../midia/imagens/personagem/correndo.png')
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    personagem = new Item(0, windowHeight - 135, 110, 135)
    frame_image = new Item(0, 0, 220, 270)
    frame_image.img = imagem_personagem
    cenario = new Cenario(imagem_cenario, 7)
}

function draw(){
    // (caminho, x, y, largura, altura, ponto_x, ponto_y, largura, altura)
    cenario.exibe()
    cenario.move()
    image(frame_image.img, personagem.posicao.x, personagem.posicao.y, personagem.tamanho.largura, personagem.tamanho.altura, frame_image.posicao.x, frame_image.posicao.y, frame_image.tamanho.largura, frame_image.tamanho.altura)
}