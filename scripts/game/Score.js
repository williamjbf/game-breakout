import { GameObject } from '../game-engine/gameObject.js';

export class Score extends GameObject{

    constructor() {
        super();
        this.canCollide = false;
        this.score = 0;
        this.lifes = 3;
        this.isGameOver = false;
        this.isGameWin = false;
    }

    draw(){
        this.drawing.drawRect(0,0, this.game.canvas.right,40,'gray');

        this.drawing.setText({h: 'left',size :'12'});
        this.drawing.drawText(20,20, `Score = ${this.score}`);

        this.drawing.setText({h: 'rigth'});
        this.drawing.drawText(this.game.canvas.right-125,20, `Lifes = ${this.lifes}`);

        if (this.isGameOver){
            this.drawing.setText({h:'center', v:'middle',size:30});
            this.drawing.drawText(this.game.canvas.center.x,this.game.canvas.center.x, 'Game Over');
        }
        if(this.isGameWin){
            this.drawing.setText({h:'center', v:'middle',size:30});
            this.drawing.drawText(this.game.canvas.center.x,this.game.canvas.center.x, 'Game Win');
        }
    }

    onGameOver(){}
}