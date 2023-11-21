// Click and Drag an object
// Daniel Shiffman <http://www.shiffman.net>

class DraggableCircle {
  constructor(x, y, r) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.r = r;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
    //if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    
  }

  pressed() {
    // Did I click on the rectangle?
    if (dist(mouseX, mouseY, this.x, this.y) < this.r) {
      this.dragging = true;
      // If so, keep track of relative location of click to circle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}