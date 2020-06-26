$(document).ready(function() {
  // CONSEGNA

  // Attraverso una chiamata ajax all’Api di boolean avremo a
  // disposizione una decina di dischi musicali.
  // Servendoci di handlebars stampiamo tutto a schermo.
  // In questo momento non è importante la parte grafica.
  //
  // Bonus: Creare una select con i seguenti generi: pop, rock,
  // metal e jazz. In base a cosa scegliamo nella select vedremo i
  // corrispondenti cd.


  // Faccio la chiamata AJAX al relativo url per ottenere i dischi
  var chiamata = $.ajax(
    {
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",

      // SE LA CHIAMATA HA SUCCESSO:

      success: function(richiesta){

        var risultatoRichiesta = richiesta.response;

        console.log(risultatoRichiesta);
        // Stampo a schermo l'array dei dischi ottenuti tramite l'apposita funzione
        stampaDischi(risultatoRichiesta);

        // SELECT

        $(document).on('change', 'select',
          function(){

            ricercaGenere(risultatoRichiesta);

          }
        );


      },
      // SE LA CHIAMATA FALLISCE
      // visualizzo un errore
      error: function(){
        alert('Qualcosa è andato storto');

      }
    }
  );



  // FUNZIONE PER STAMPARE I DISCHI inserendo il template handlebars

  function stampaDischi(lista){
    // Inserisco le variabili del template
    var source = $("#music_template").html();
    var template = Handlebars.compile(source);

    // Inizializzo un ciclo for per scorrere tra gli elementi dell'array che sarà inserito
    for (var i = 0; i < lista.length; i++) {
      var singoloElemento = lista[i];
      // Inidico l'elemento html che sarà inserito.
      var html = template(singoloElemento);
      // Appendo l'elemento al container del cds
      $('.cds-container').append(html);

    }

  };

  // FUNZIONE PER LA RICERCA DI GENERE
  // visualizza il risultato filtrato per genere


  function ricercaGenere(listaRicerca){

    // Azzero il contenitore dei cd creati dinamicamente
    $('.cds-container').html('');
    // Inseririsco le variabili handlebars fuori da ciclo
    var source = $("#music_template").html();
    var template = Handlebars.compile(source);
    // Inizializzo un ciclo for per fare la ricerca e
    // trovare le corrispondenze
    for (var i = 0; i < listaRicerca.length; i++) {

      var elementiRicerca = listaRicerca[i];

    // creo la variabile genere musical che sarà uguale al genre contenuto nell'elemento.
      var genereMusicale = elementiRicerca.genre;

      // Inserisco il valore dell select
      var valoreSelect = $('select').val();

      var html = template(elementiRicerca);

      // Se c'è corrispondenza,
      // appendo l'elemento al container del cds visualizzandolo

      if (valoreSelect.includes(genereMusicale)){
        $('.cds-container').append(html);
      }


    }



    //
    // for (var i = 0; i < risultatoRichiesta.length; i++) {
    //   var elementiRicerca = risultatoRichiesta[i];
    //
    //   console.log(elementiRicerca);
    //
    //   for( chiave in elementiRicerca){
    //
    //     // console.log("l'oggetto è : " + elementiRicerca[chiave]);
    //
    //     var genereMusicale = elementiRicerca.genre;
    //
    //     var singoloCd = $(this).find('.cd');
    //
    //     console.log(singoloCd);
    //
    //
    //     //
    //     if (valoreSelect.includes(genereMusicale)) {
    //       $(singoloCd).show()
    //     } else {
    //       $(singoloCd).hide()
    //     }
    //   }

  };






	//Code
});
