class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayer();
    this.ready = false;
  }

  /** 
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */

  createPlayer() {
    const players = [
      new Player('Player 1', 'yellow', 1, true),
      new Player('Player 2', 'red', 2)
    ]
    return players;
  }

  startGame() {
    alert('clicked in Game object');
  }
}