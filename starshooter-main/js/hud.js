export class HUD {
  constructor(game) {
    this.game = game;
  }

  update() {}

  draw(ctx) {
    ctx.font = "25px 'Comic Sans MS'";
    ctx.fillStyle = "pink";
    const rectX = (this.game.width * 3) / 4 - 30;
    const rectY = 10;
    const rectWidth = 140;
    const rectHeight = 36;
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const text = `Score: ${this.game.score}`;
    const textX = rectX + rectWidth / 2;
    const textY = rectY + rectHeight / 1.8;
    ctx.fillText(text, textX, textY);
    ctx.textAlign = "start";
    ctx.textBaseline = "alphabetic";
  }
}
