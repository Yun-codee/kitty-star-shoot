export const ShootingStates = {
  IDLE: 0,
  INTERMEDIATE_1: 1,
  INTERMEDIATE_2: 2,
  INTERMEDIATE_3: 3,
  INTERMEDIATE_4: 4,
  FULLY_EXTENDED: 5,
};

const ShootingDirections = {
  UP: 1,
  DOWN: -1,
  NONE: 0,
};

export class Player {
  constructor(game) {
    this.game = game;

    this.playerSprites = document.getElementById("playerSprites");
    this.playerSpritesCat = document.getElementById("playerSpritesCat");
    this.playerSpritesCat3 = document.getElementById("playerSpritesCat3");
    this.playerSpritesCat4 = document.getElementById("playerSpritesCat4");
    this.playerSpritesCat5 = document.getElementById("playerSpritesCat5");
    this.playerSpritesCat6 = document.getElementById("playerSpritesCat6");
    this.playerSpritesCat7 = document.getElementById("playerSpritesCat7");
    this.playerSpritesCat8 = document.getElementById("playerSpritesCat8");
    this.playerSpritesCat9 = document.getElementById("playerSpritesCat9");
    this.playerWidth = 68;
    this.playerHeight = 100;
    this.playerX = 10;
    this.playerY = (this.game.height - this.playerHeight) / 2;
    this.shootingState = ShootingStates.IDLE;
    this.shootingDirection = ShootingDirections.NONE;
    this.shootingFps = 20;
    this.lastUpdateTime = 0;
    this.fallAcceleration = 0;
    this.playerCharacter = "cat";
  }

  update(inputKeys) {
     if (inputKeys.has("1")) {
      this.playerCharacter = "cat";
    }
    if (inputKeys.has("2")) {
      this.playerCharacter = "cat2";
    }
    if (inputKeys.has("3")) {
      this.playerCharacter = "cat3";
    }
    if (inputKeys.has("4")) {
      this.playerCharacter = "cat4";
    }
    if (inputKeys.has("5")) {
      this.playerCharacter = "cat5";
    }
    if (inputKeys.has("6")) {
      this.playerCharacter = "cat6";
    }
    if (inputKeys.has("7")) {
      this.playerCharacter = "cat7";
    }
    if (inputKeys.has("8")) {
      this.playerCharacter = "cat8";
    }
    if (inputKeys.has("9")) {
      this.playerCharacter = "cat9";
    }

    if (inputKeys.has("w")) {
      this.playerY = Math.max(this.playerY - 3, 0);
      this.fallAcceleration = 0;
    } else {
      this.playerY = Math.min(
        this.playerY + this.fallAcceleration,
        this.game.height - this.playerHeight
      );

      this.fallAcceleration += 0.1;
    }

    const diffSinceLastUpdate =
      (performance.now() - this.lastUpdateTime) / 1000;

    if (diffSinceLastUpdate < 1 / this.shootingFps) {
      return;
    }

    if (inputKeys.has(" ") && this.shootingState === ShootingStates.IDLE) {
      this.shootingDirection = ShootingDirections.UP;
    }

    if (
      (this.shootingDirection === ShootingDirections.UP &&
        this.shootingState < ShootingStates.FULLY_EXTENDED) ||
      (this.shootingDirection === ShootingDirections.DOWN &&
        this.shootingState > ShootingStates.IDLE)
    ) {
      this.shootingState += this.shootingDirection;
    }

    if (this.shootingState === ShootingStates.FULLY_EXTENDED) {
      this.shootingDirection = ShootingDirections.DOWN;
    } else if (this.shootingState === ShootingStates.IDLE) {
      this.shootingDirection = ShootingDirections.NONE;
    }

    this.lastUpdateTime = performance.now();
  }

  draw(ctx) {
    if (this.playerCharacter === "cat") {
    ctx.drawImage(
      this.playerSprites,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat2") {
    ctx.drawImage(
      this.playerSpritesCat,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat3") {
    ctx.drawImage(
      this.playerSpritesCat3,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat4") {
    ctx.drawImage(
      this.playerSpritesCat4,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat5") {
    ctx.drawImage(
      this.playerSpritesCat5,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat6") {
    ctx.drawImage(
      this.playerSpritesCat6,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat7") {
    ctx.drawImage(
      this.playerSpritesCat7,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat8") {
    ctx.drawImage(
      this.playerSpritesCat8,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} else if (this.playerCharacter === "cat9") {
    ctx.drawImage(
      this.playerSpritesCat9,
      this.playerWidth * this.shootingState,
      0,
      this.playerWidth,
      this.playerHeight,
      this.playerX,
      this.playerY,
      this.playerWidth,
      this.playerHeight
    );} 
  }

  checkCollision(starball) {
    if (
      starball.x >= this.playerX + this.playerWidth / 2 &&
      starball.x <= this.playerX + this.playerWidth &&
      starball.y >= this.playerY + (2 / 3) * this.playerHeight &&
      starball.y <= this.playerY + this.playerHeight
    ) {
      starball.markAsShot();
    }
  }
}
