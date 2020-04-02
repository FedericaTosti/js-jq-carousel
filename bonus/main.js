// ricreo lo slider
// faccio funzionare il tracciamento dei pallini anche in prev
// creo anche la possibilità di poter navigare cliccando anche sui pallini (quindi se clicco sul pallino 3, l’img vista è la 3 e il pallino 3 rimane rosso);
// BONUS
// navigazione anche da freccine della tastiera


$(document).ready(function(){

	// gestisco i click
	// quando premo su "prev"
	$('.prev').click(
		//funzione di callback
		prevImg
	);

	// quando premo su "next"
	$('.next').click(
		//funzione di callback
		nextImg
	);

	//quando premo sui pallini
	$('.nav').children().click(
		cliccaPallino
	);



	// funzioni
	// funzione next
	function nextImg() {
		// salvo riferimento a img attiva al momento del click
		var imgActive = $('.images img.active');
		console.log(imgActive);

		// salvo riferimento al pallino attivo
		var ballActive = $('.nav i.active');
		console.log(ballActive);

		// tolgo la classe active all'img selezionata
		imgActive.removeClass('active');

		// tolgo la classe active al pallino selezionato
		ballActive.removeClass('active');

		// verifica posizione ultima img (if else)
		if(imgActive.hasClass('last')){
			$('.images img.first').addClass('active');
			$('.nav i.first').addClass('active');
		} else {
			// applica classe active alla prox img e al prox pallino
			imgActive.next().addClass('active');
			ballActive.next().addClass('active');

			console.log(imgActive.next());
		}
	}


	// funzione prev
	function prevImg(){
		// salvo riferimento a img attiva al momento del click
		var imgActive = $('.images img.active');
		console.log(imgActive);

		// salvo riferimento al pallino attivo
		var ballActive = $('.nav i.active');
		console.log(ballActive);

		// tolgo la classe active all'img selezionata
		imgActive.removeClass('active');

		// tolgo la classe active al pallino selezionato
		ballActive.removeClass('active');

		// verifica posizione prima img (if else)
		if(imgActive.hasClass('first')){
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    } else {
      // applica classe active alla precedente img e al precedente pallino
      imgActive.prev().addClass('active');
      ballActive.prev().addClass('active');

      console.log(imgActive.prev());
    }
	}


	// funzione
	function cliccaPallino(){
		//creo variabile e assegno le img
    var img = $('.images img');

    console.log(img);

		// rimuovo classe active all'img e al pallino
		img.removeClass('active');
		$('.nav').children().removeClass("active");

		//e la metto al pallino cliccato
    $(this).addClass("active");

    // creo variabile e le assegno l'indice del pallino cliccato
    var pallinoRosso = $(this).index();

    console.log(pallinoRosso);

		// collego al pallinoRosso l'img con stesso indice e aggiungo la classe active
		img.eq(pallinoRosso).addClass("active");
	}

	// per utilizzare le frecce
	$(document).keydown(
    function(keyPushed){
			// freccia sinistra
      if(keyPushed.keyCode == 37){
				// eseguo tutta la funz
        prevImg();
				// freccia destra 
      }else if(keyPushed.keyCode == 39){
				// eseguo tutta la funz
        nextImg();
      }
    }
  )
})
