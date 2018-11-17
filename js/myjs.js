//jQuery begins... NOW//

$(document).ready(function() {

//function to hide all audio players

function hideAll() {
    $('#nineteen').hide();
    $('#twentyone').hide();
    $('#skyfall').hide();
    $('#twentyfive').hide();
  }

  hideAll();

//when cover clicked then song should appear

$('.cover').click(function() {

  hideAll();

  switch ($(this).attr("id")) {
    case "fotouna":
      $('#nineteen').show();
      break;
    case "fotodos":
      $('#twentyone').show();
      break
    case "fototres":
      $('#skyfall').show();
      break;
    case "fotocuatro":
      $('#twentyfive').show();
      break;
  }
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
});

    $('.text').click(function() {
    $('.text').show();
  });

}); // end of f(x)


  //this bracket thing & parenthesis MUST STAY AT THE END//
    })
