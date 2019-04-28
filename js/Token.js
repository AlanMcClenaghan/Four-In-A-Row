class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  /** 
   * Gets associated htmlToken.
   * @return  {element}   HTML element associated with token object.
   */
  get htmlToken() {
    return drawHTMLToken();
  }

  /** 
   * Draws new HTML token.
   */
  drawHTMLToken() {
    const token = document.createElement('div');
    document.getElementById('game-board-underlay').appendChild(token);
    token.setAttribute('id', this.id);
    token.setAttribute('class', 'token');
    token.style.backgroundColor = this.owner.color;
  }

  /** 
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /** 
   * Moves html token one column to left.
   */
  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  /** 
   * Moves html token one column to right.
   * @param   {number}    columns - number of columns in the game board
   */
  moveRight(columns) {
    if (this.columnLocation < -1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }


}