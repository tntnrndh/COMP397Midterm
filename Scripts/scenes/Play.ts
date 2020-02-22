module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private rollButton:objects.Button;
        private dice1:objects.Button;
        private dice1Text:objects.Label;
        private dice2:objects.Button;
        private dice2Text:objects.Label;




        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {

            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            this.Main();
            this.Update();
        }        
        
        public Update(): void 
        {
            this.addChild(this.rollButton);
            this.addChild(this.dice1Text);
            this.addChild(this.dice2Text);

            this.addChild(this.dice1);
            this.addChild(this.dice2);

            this.rollButton.on("click",()=>{
                this.removeAllChildren();
                let i:number;
                let j:number;
                i = Math.floor(Math.random() * 6) + 1;
                j = Math.floor(Math.random() * 6) + 1;

                this.dice1 = new objects.Button(config.Game.ASSETS.getResult(i.toString()), 180, 200,true);
                this.dice1Text = new objects.Label(i.toString(),"35px", "Consolas","#000000", 180, 350, true)
                this.dice2 = new objects.Button(config.Game.ASSETS.getResult(j.toString()), 500, 200,true);
                this.dice2Text = new objects.Label(j.toString(),"35px", "Consolas","#000000", 500, 350, true)
            });
            

          
        }
        
        public Main(): void 
        {
            


        }



        
    }
}