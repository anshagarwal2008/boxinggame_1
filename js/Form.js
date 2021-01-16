class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.start = createButton('start');
    this.starts = createButton('Ready For Boxing');

  }
  hide() {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.start.hide();
    this.starts.hide();
  }

  display() {
    this.title.html("boxing game");
    textSize = 20;

    this.title.position(displayWidth / 2 - 50, 0);

    this.input.position(displayWidth / 2 - 40, displayHeight / 2 - 80);
    this.button.position(displayWidth / 2 + 10, displayHeight / 2);


    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      this.title.hide();
     playerName = this.input.value();
     // this.greeting.html("Hello " + name)
      //this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
      gameState=1; 
      
      //this.starts.position(displayWidth / 2 + 100, displayHeight / 2 + 100)

    });

    /*this.starts.mousePressed(() => {
      this.greeting.hide();
      this.starts.hide();
     // player=new Player();
      gameState=1;      
     
     
    });*/
    
    


  }

}
