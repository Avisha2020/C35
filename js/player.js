class Player
{
    constructor(){

    }
    getCount(){
        database.ref('/playercount').on("value", function(data){
        playerCount=data.val();

        });

    }
    update(count){
        database.ref('/').update({
            playercount:count
        });
    }
    updatename(name1){
        var playerIndex= "player" + playerCount;
        database.ref(playerIndex).set({
            name:name1
        })

    }
}