
$(document).ready(function(){
    //region code
    $.ajax({
        url: 'https://geo.api.gouv.fr/regions',
         type: 'GET',
         dataType: 'json',
         success: function (data){
             console.log(data);
             data.forEach(function(value) {
                let op = document.createElement('option');
                op.innerText = value.nom;
                op.setAttribute('value',value.code);
                var codeRegion = value.code;
                $('#region').append(op)
             });
         },
         error: function (objet,statut,erreur){
            console.log(erreur);
         }
     });
     //departament code
     $("#region").on("change",function(){
        let idDepertment=$(this).val();
        console.log(idDepertment); 
        $.ajax({
            url: 'https://geo.api.gouv.fr/regions/'+idDepertment+'/departements',
             type: 'GET',
             dataType: 'json',
             success: function (data){
                $("#departement").empty();
                 console.log(data);
                 data.forEach(function(value) {   
                     let op = document.createElement('option');           
                    op.innerText = value.nom;
                    op.setAttribute('value',value.codeRegion);
                    $('#departement').append(op)
                 });
             },
             error: function (objet,statut,erreur){
                console.log(erreur);
             }
         });
     })
     //commune code
     $("#departement").on("change",function(){
        let idDepertment=$(this).val();
        console.log(idDepertment);
        $.ajax({
            url: "https://geo.api.gouv.fr/departements/"+idDepertment+"/communes",
             type: 'GET',
             dataType: 'json',
             success: function (data){
                $("#commune").empty();
                 console.log(data);
                 data.forEach(function(value) {
                    let op = document.createElement('option');
                    op.innerText = value.nom;
                    op.setAttribute('value',value.code);
                    $('#commune').append(op)
                 });
             },
             error: function (objet,statut,erreur){
                console.log(erreur);
             }
         });
     }) 

    
     
     
});
           
