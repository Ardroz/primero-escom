function start(){
  $( ".draggable" ).draggable({ snap: true, 
                                snapMode: "outer",
                                revert: true,
                                revertDuration: 200});

  $( ".droppable" ).droppable({ accept: ".draggable",
                                hoverClass: "droppable-hover",
                                drop: elementDropped });
}

function elementDropped(event, ui){
  var element = $(ui.draggable).data('element'),
      elementContainer = $( "<div class = 'temporal-element text-center' " +
                            "data-element = '" + element + "'> "+
                              "<span class= 'element'>" + element + "</span>"+
                              "<span class='cross'> X </span>" +
                            "</div>"),
      flag = false,
      newElement,
      temporalElements = $(this).children('.temporal-element'),
      temporalElementsLength,
      i;

  temporalElementsLength = temporalElements.length;
  for (i = 1 ; i <= temporalElementsLength; i++) {
    newElement = $('.temporal-element:nth-child(' + i +')').data('element');

    if(newElement == element){
      flag = true;
      break;
    }
  };

  if(!flag){
    $(this).append(elementContainer);
    $('.cross').hide();

    $(".temporal-element").on('mouseenter', showCloseOption);
    $(".temporal-element").on('mouseleave', hideCloseOption);
    $(".cross").on("click", removeElement);
  }
}

function showCloseOption(){
  $(this).find(".element").hide();
  $(this).find(".cross").show();
}

function hideCloseOption(){
  $(this).find(".cross").hide();
  $(this).find(".element").show();
}

function removeElement(){
  $(this).parent().remove();
}

function union( subsetA, subsetB ){

}

function intersection( subsetA, subsetB ){

}

function complement(){

}

function operations( subsetA, subsetB ){

}

$(document).on('ready', start);