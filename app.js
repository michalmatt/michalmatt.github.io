//funkcja na zaladowanie dokumentu
$(function(){
    console.log("jquery works");
    
    //przykładowa funkcja na klikniecie diva w obszarze roboczym
    $("#right div").click(function(e){
      var index = $(e.target).index('#right div');
      console.log(index);
    });
    
    //funkcja getColor
    function getColor() {
        var color = document.getElementById("color").value;
        return color;
    }
    
    //fukcja getOption
    function getOption() {
        var option = document.getElementById("opcja").value;
        return option;
    }
    
    $("#wlacz").click(function() {
        $("#right div").off('click');
        console.log(parseInt(getOption(), 10));
        switch(parseInt(getOption(), 10)) {
            
            //1: Kolorowanie pola diva
            case 1:
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    $(this).css("background-color", getColor());
                    console.log(getColor());
                });
                break;
            
            //2: Dodawanie diva
            case 2:
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    var newDiv = document.createElement("div");
                    $(this).append(newDiv);
                });
                break;
            
            //3: Usuwanie diva
            case 3:
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    $(this).remove();
                });
                break;
            
            //4: Przenoszenie diva
            case 4:
                var clickCounter = 0;
                var divClone;
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    if (clickCounter%2 == 0) {
                        divClone = $(this).clone();
                        $(this).remove();
                    } else if (clickCounter%2 != 0) {
                        $(this).append(divClone);
                    }
                    clickCounter++;
                });
                break;
            
            //5: Kolorowanie ramki diva
            case 5:
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    $(this).css("border-color", getColor());
                    console.log(getColor());
                });
                break;

            //6: Dodawanie diva zaokrąglonego
            case 6:
                $("#right div").click(function(event) {
                    event.stopPropagation();
                    $(this).append('<div style="border-radius:15px"></div>');
                });
        }
        
    });
    
});
