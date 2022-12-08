if (tabHeures.length > 0) {
    let total_normal = 0
    let total_demi = 0
    let total_double = 0

    for (let elem = 0; elem < tabHeures.length; elem++) {
       if (tabHeures[elem] <= 8) {
          total_normal = total_normal + parseFloat(tabHeures[elem])

       } 
       else if (tabHeures[elem] > 8) {
          total_demi = total_demi + parseFloat(tabHeures[elem] - 8)
       }
       
       }
       // Calacul samedi 
       if (isNaN(flSamedi) == false) {
          total_demi = total_demi + parseFloat(flSamedi)
       }
       //Calcul dimanche 
       if ((tabHeures.length == 5) && (isNaN(flSamedi) == false) && (isNaN(flDimanche) == false)) {
          total_double = total_double + parseFloat(flDimanche)
       } else if (isNaN(flDimanche)== false ) {
          total_demi = total_demi + parseFloat(flDimanche)
       }   

       totalheures = (total_normal + total_demi + total_double)
       
       document.getElementById('lblHeuresNormales').innerHTML = total_normal
       document.getElementById('lblHeuresDemies').innerHTML = total_demi
       document.getElementById('lblHeuresDoubles').innerHTML = total_double
       document.getElementById('lblHeuresTotales').innerHTML = totalheures}