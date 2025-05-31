const gameKeys = ["w", " ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "p", "o"];

export class InputHandler {
  constructor() {
    this.keys = new Set();

    this.init();
  }

  init() {
    window.addEventListener("keydown", (event) => {
      if (gameKeys.includes(event.key)) {
        this.keys.add(event.key);
      }
    });

    window.addEventListener("keyup", (event) => {
      if (gameKeys.includes(event.key)) {
        this.keys.delete(event.key);
      }
    });
  }
}
