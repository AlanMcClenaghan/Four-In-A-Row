class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayer();
    this.ready = false;
  }

  /** 
   * Returns active player.
   * @return  {Object}    player - The active player.
   */
  get activePlayer() {
    return this.players.find(player => player.active);
  }

  /** 
   * Creates two player objects
   * @return  {Array}    An array of two Player objects.
   */
  createPlayer() {
    const players = [
      new Player('Player 1', 1, 'yellow', true),
      new Player('Player 2', 2, 'red')
    ]
    return players;
  }

  /** 
   * Initializes game. 
   */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */

  handleKeydown(event) {
    if (this.ready) {
      if (event.key === 'ArrowLeft') {
        // Move Left
      } else if (event.key === 'ArrowRight') {
        // Move Right
      } else if (event.key === 'ArrowDown') {
        // Drop token
      }
    }
  }
}