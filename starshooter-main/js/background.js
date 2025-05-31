export class Background {
    constructor(game) {
        this.game = game;

        
        this.backgroundImages = {
            "pinkSky": document.getElementById("backgroundSky"),
            "blueSky": document.getElementById("backgroundSky2"),
            "purpleSky": document.getElementById("backgroundSky3"),
            "greenSky": document.getElementById("backgroundSky4"),
            "veryPinkSky": document.getElementById("backgroundSky5"),
            "darkBlueSky": document.getElementById("backgroundSky6")
        };

        this.backgroundNames = ["pinkSky", "blueSky", "purpleSky", "greenSky", "veryPinkSky", "darkBlueSky"];

        this.currentBackgroundIndex = 0;
        this.currentBackgroundName = this.backgroundNames[this.currentBackgroundIndex];

        this.x = 0;
        this.keyPressHandled = false;
    }

    update(inputKeys) {
        if (inputKeys) {
            const cycleKey = 'p';
            if (inputKeys.has(cycleKey) && !this.keyPressHandled) {
                this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundNames.length;
                this.currentBackgroundName = this.backgroundNames[this.currentBackgroundIndex];
                console.log("Switched to background:", this.currentBackgroundName);
                this.keyPressHandled = true;
            } else if (!inputKeys.has(cycleKey)) {
                this.keyPressHandled = false;
            }
        }

        if (this.x <= -this.game.width) {
            this.x = 0;
        } else {
            this.x--;
        }
    }

    draw(ctx) {
        const currentImage = this.backgroundImages[this.currentBackgroundName];

        if (currentImage) {
            ctx.drawImage(currentImage, this.x, 0, this.game.width, this.game.height);
            ctx.drawImage(currentImage, this.x + this.game.width, 0, this.game.width, this.game.height);
        } else {
            console.warn(`Background image element not found for name: "${this.currentBackgroundName}". Check your HTML IDs and this.backgroundImages object.`);
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, this.game.width, this.game.height);
        }
    }
}