//jQuery begins... NOW//

$(document).ready(function() {

//function to hide all audio players

function hideAll() {
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
      $('#19').play('.album');
      $('#19').show('p');
      break;
    case "fotodos":
      $('#21').play();
      $('#21').show('p');
      break
    case "fototres":
      $('#bond').play();
      $('#bond').show('p');
      break;
    case "fotocuatro":
      $('#25').play();
      $('#25').show('p');
      break;
  }
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
});

}); // end of f(x)


  //this bracket thing & parenthesis MUST STAY AT THE END//
    })
