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
      success: function(richiesta){

        var risultatoRichiesta = richiesta.response;

        console.log(risultatoRichiesta);
        // Stampo a schermo l'array dei dischi ottenuti tramite l'apposita funzione
        stampaDischi(risultatoRichiesta);

        // SELECT

        $(document).on('click', '.confirm',
          function(){

            var valoreSelect = $('select').val();

            console.log(valoreSelect);





          }
        );


      },


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

  }















	//Code
});
