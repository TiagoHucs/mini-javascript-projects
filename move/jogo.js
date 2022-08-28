console.log('MOVES');

const sprites = new Image();
sprites.src = './sprites/player1.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const hero = {
    spriteX: 0,
    spriteY: 0,
    largura: 28,
    altura: 32,
    x: 50,
    y: 50,
    movimentos: [
        {spriteX: 0,spriteY: 0},
        {spriteX: 28,spriteY: 0},
        {spriteX: 56,spriteY: 0},
        {spriteX: 84,spriteY: 0},
    ],
    incremento: 0,
    spriteAtual: 0,
    atualizaSprite(){
       if(this.incremento >= 10){
        this.spriteAtual = this.spriteAtual >= 3 ? 0 : this.spriteAtual+1;
        this.incremento = 0;
        this.y = this.y+1; //TODO: remover
       } else {
        this.incremento++;
       }
        console.log(this.spriteAtual);
    },
    desenha(){
        const  {spriteX , spriteY } = hero.movimentos[this.spriteAtual]
        contexto.drawImage(
            sprites,
            spriteX,spriteY, //posicao no png
            this.largura,this.altura,//tamanho no png
            this.x,this.y, //posicao na tela
            this.largura,this.altura); //tamanho na tela
        this.atualizaSprite();
    }
}

const chao = {
    desenha(){
        contexto.fillStyle = 'green';
		contexto.fillRect(0, 0, canvas.width, canvas.height);
    }
}

//////////
function loop() {
    chao.desenha();
    hero.desenha();
    requestAnimationFrame(loop);
}

loop();

//////////

