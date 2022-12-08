function calculePaie() {
    // Vérifie si les nombres d'heures du lundi à vendredi sont correctes
    var tabHeures = Array();

    for (var i = 0; i < 5; i++){

       const heuresTravailles = document.getElementById('tbNbHrs' + i).value
       
    if (!hasOnlyNumber(heuresTravailles)){    
       document.getElementById('tbNbHrs' + i).className = 'sNonNumerique'
    }
    else if(!inInterval(parseFloat(heuresTravailles), 0.0, 16.0)  ){             
       document.getElementById('tbNbHrs' + i).className = 'sValeurIncorrect'  //parseFloat(heuresTravailles) < 0 || parseFloat(heuresTravailles > 16)
    }
    else if (heuresTravailles > 8){
       document.getElementById('tbNbH,rs' + i).className = 'sQuartHeure'
       tabHeures.push(parseFloat(heuresTravailles))
    }
    else{ 
       document.getElementById('tbNbHrs' + i).className = 'sValeurCorrecte'
          tabHeures.push(parseFloat(heuresTravailles))}
          
           
    }

    // Vérifie si les nombres d'heures de samedi  sont correctes
       
    var flSamedi = document.getElementById('tbNbHrs5').value
    var flDimanche = document.getElementById('tbNbHrs6').value
   
    if(!hasOnlyNumber(flSamedi) ){
       document.getElementById('tbNbHrs5').className = 'sNonNumerique'
    }

    else if (!inInterval(parseFloat(flSamedi),0.0, 16.0) ){
       document.getElementById('tbNbHrs5').className = 'sValeurIncorrect'
    }
    else if (flSamedi > 8){
      document.getElementById('tbNbHrs5').className = 'sQuartHeure'
   }
    else{
       document.getElementById('tbNbHrs5').className = 'sValeurCorrecte'
    }

     // Vérifie si les nombres d'heures de dimanche sont correctes
    if(!hasOnlyNumber(flDimanche) ){
       document.getElementById('tbNbHrs6').className = 'sNonNumerique'
    }
    else if ( !inInterval(parseFloat(flDimanche),0.0, 16.0) ){
       document.getElementById('tbNbHrs6').className = 'sValeurIncorrect'
    }
    else if (flDimanche > 8){
       document.getElementById('tbNbHrs6').className = 'sQuartHeure'

    }
    else{
       document.getElementById('tbNbHrs6').className = 'sValeurCorrecte'
    }
 
        //Somme des heures normales
        totalNormal = 0

        for(let elem of tabHeures){
            totalNormal += elem
        }
        if (totalNormal >= 40){
             totalNormal
              
           document.getElementById('lblHeuresNormales').innerHTML = totalNormal
        }

        if (tabHeures.length > 0){
          totalDemie = 0
          for( let elem = 0; elem < tabHeures.length; elem++){
             if (tabHeures[elem] > 8) {
                totalDemie = totalDemie + parseFloat(elem)
             }
          }
          document.getElementById('lblHeuresDemies').innerHTML = totalDemie
        }
        

        
      
        

    
    

 }


















