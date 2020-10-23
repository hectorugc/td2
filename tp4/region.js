//region code
var app ={
    init:function (){
        var that = this;
        this.load_region();
        document.getElementById('region').addEventListener('change',function (){
            that.load_departement(this.value);
        })
        document.getElementById('departement').addEventListener('change',function (){
            that.load_commune(this.value);
        })
    },
    load_region:function(){
        let urlRegion = 'https://geo.api.gouv.fr/regions'
        fetch(urlRegion,{
            method:"GET"
        })
            .then(response => {
                return (response.json());
            })
            .then((data)=>{
                console.log(data);
                data.forEach(function(value){
                    let op = document.createElement('option');
                    op.innerText = value.nom;
                    op.setAttribute('value',value.code);
                    var codeRegion = value.code;
                    console.log(codeRegion);
                    document.getElementById('region').appendChild(op);
                })
            })
    },



//departament code
    load_departement:function(idDepertment){
        document.getElementById('departement').innerHTML = '';
       let urlDepartement = "https://geo.api.gouv.fr/regions/"+idDepertment+"/departements"
        console.log(urlDepartement)
        fetch(urlDepartement,{
            method:"GET"
        })
            .then(response => {
                return (response.json());
            })
            .then((data)=>{

                data.forEach(function(value){
                    let op = document.createElement('option');
                    op.innerText = value.nom;
                    op.setAttribute('value',value.codeRegion);
                    document.getElementById('departement').appendChild(op);
                })
            })
    },

//commune code
    load_commune:function(idDepertment){
        document.getElementById('commune').innerHTML = '';
       // https://geo.api.gouv.fr/departements/01/communes
        let urlCommune = "https://geo.api.gouv.fr/departements/"+idDepertment+"/communes"
        console.log(urlCommune);
        fetch(urlCommune,{
            method:"GET"
        })
            .then(response => {
                return (response.json());
            })
            .then((data)=>{

                data.forEach(function(value){
                    let op = document.createElement('option');
                    op.innerText = value.nom;
                    op.setAttribute('value',value.code);
                    document.getElementById('commune').appendChild(op);
                })
            })

    }
}
localStorage.getItem('app')
app.init();