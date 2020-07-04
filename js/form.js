class Form
{
    constructor(){

    }
    display(){
        var input= createInput('Name');
        input.position(100,100);
        var greeting=createElement("h1");
        var button = createButton('Play');
        button.position(100,150);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount= playerCount+1;
            player.updatename(name);
            player.update(playerCount);
            greeting.html("Hello"+ name);
            greeting.position(100,100);


        })
    }
}