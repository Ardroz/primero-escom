function start(){
  $( ".draggable" ).draggable({ snap: true, 
                                snapMode: "outer",
                                revert: true,
                                revertDuration: 200});

  $( ".droppable" ).droppable({
    accept: ".draggable",
    hoverClass: "droppable-hover",
    drop: elementDropped
  });
}

function elementDropped(event, ui){
  var element = $(ui.draggable).data('element'),
      elementContainer = $( "<div class = 'temporal-element text-center' " +
                            "data-element = '" + element + "'> "+
                              "<span class= 'element'>" + element + "</span>"+
                              "<span class='cross'> X </span>" +
                            "</div>");

  $(this).append(elementContainer);
  $('.cross').hide();

  $(".temporal-element").on('mouseenter', showCloseOption);
  $(".temporal-element").on('mouseleave', hideCloseOption);
}

function showCloseOption(){
  $(this).find(".element").hide();
  $(this).find(".cross").fadeIn();
}

function hideCloseOption(){
  $(this).find(".cross").hide();
  $(this).find(".element").fadeIn();
}

$(document).on('ready', start);