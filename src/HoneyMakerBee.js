class HoneyMakerBee extends Grub {
  constructor() {
    super();

    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';
    this.honeyPot = 0;
  }

  makeHoney() {
    this.honeyPot++;
  }

  giveHoney() {
    this.honeyPot--;
  }
};
