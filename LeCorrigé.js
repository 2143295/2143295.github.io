/* 	Nom du script: mv112.js
	Auteur: VotreNom
	Date: date de creation
    Modifier le: date de modification
*/

/** 
* Retourne true si data vaut null. Sinon elle retourne false
* @param  {String} data
* @return {Boolean}
*/
function isNull(data) {
	return (data == null);
}

/**
* Retourne true si data est de type number. Sinon elle retourne false
* @param  {String} data
* @return {Boolean}
*/
function isNumber(data) {
	return ((!isNull(data)) && (typeof data == 'number'));
}

/**
* Retourne true si data est une chaÃ®ne de caractÃ¨res (de type string). Sinon elle retourne false
* @param  {String} data
* @return {Boolean}
*/
function isString(data) {
	return ((!isNull(data)) && (typeof data == 'string'));
}

/**
* Retourne true si data1 et data2 sont de mÃªme type. Sinon elle retourne false
* @param data1
* @param data2
* @return {Boolean}
*/
function sameType(data1, data2) {
	return ((!isNull(data1)) && (!isNull(data2)) && (typeof data1 == typeof data2));
}

/**
Retourne true si data est situÃ©e entre valeurA et valeurB. Sinon elle retourne false; data, valeurA et valeurB sont toutes de mÃªme type
* @param data1
* @param ValueA
* @param ValueB
* @return {Boolean}
* 
* inInterval(6, 5, 9) retourne true
* inInterval(4, 4, 15) retourne true
* inInterval(9, 4, 9) retourne true
* inInterval(9, 4,8)  retourne false
* inInterval(3, 5, 6) retourne false
* inInterval(6, 9,3)  retourne false
* inInterval('6', 3, 9) retourne false
* inInterval(6, '3', 9) retourne false
* inInterval('c', 'b', 'z') retourne true
* inInterval(('d', 'k', 'z')) retourne false
* inInterval('C', 'B', 'Z') retourne true
* inInterval('Jean', 'Jane', 'Julie') retourne true
*/
function inInterval(data, valeurA, valeurB) {
    var boolSameType = sameType(data, valeurA) && sameType(data, valeurB);
	return (data >= valeurA && data <= valeurB && boolSameType);
}

/**
* Retourne true si data contient un nombre. sinon retourne false
* @param {String} data
* @return {Boolean}
*
* hasOnlyNumber(0) retourne false
* hasOnlyNumber(60.1) retourne false
* hasOnlyNumber('')   retourne false
* hasOnlyNumber(' ')  retourne false
* hasOnlyNumber('0') retourne true
* hasOnlyNumber('0s') retourne false
* hasOnlyNumber('0.1') retourne true
* hasOnlyNumber('Allo') retourne false
* hasOnlyNumber('-70') retourne true
* hasOnlyNumber('-0.1') retourne true
* hasOnlyNumber(true) retourne false
*/
function hasOnlyNumber(data) {
    return isString(data) && !isNaN(data) && !isNaN(parseFloat(data));
}

/**
* Retourne true si data contient un nombre entier. Sinon retourne false
* @param {String} data
* @return {Boolean} 
*
* hasOnlyIntegerNumber('0') retourne true
* hasOnlyIntegerNumber('0.1') retourne false
* hasOnlyIntegerNumber(0) retourne 
* hasOnlyIntegerNumber(0.1) retourne false
* hasOnlyIntegerNumber('Bonjour') retourne false
* hasOnlyIntegerNumber('0s') retourne false
* hasOnlyIntegerNumber('-80') retourne true
* hasOnlyIntegerNumber ('-80.5') retourne false
* hasOnlyIntegerNumber('') retourne false
* hasOnlyIntegerNumber(' ') retourne false
* hasOnlyIntegerNumber(true) retourne false
*/
function hasOnlyIntegerNumber(data) {
    return hasOnlyNumber(data) && sameType(data, 1);
}

/* Retourne true si data est vide. Sinon retourne false.
* @param {String} data
* @return {Boolean} 
*
* isEmptyString(0) retourne false
* isEmptyString(null) retourne false
* isEmptyString('')  retourne true
* isEmptyString(' ') retourne false
* isEmptyString('\n') retourne false
* isEmptyString('Bonjour') retourne false
*/
function isEmptyString(data) {
    return isString(data) && data === '';
}

/**
* Retourne true si data (une chaÃ®ne de caractÃ¨res) ne contient que des caractÃ¨res blancs (espaces, changements de ligne, tabulation). Sinon retourne false.
* @param {String} data
* @return {Boolean} 
*
* isWhiteString(10) retourne false
isWhiteString(' ') retourne true
isWhiteString('\n') retourne true
isWhiteString('\t') retourne true
isWhiteString('\n\t') retourne true
isWhiteString('\t\n0\n\t') retourne false
isWhiteString(' 0 ') retourne false
isWhiteString('Bonjour') retourne false
isWhiteString(' ') retourne true
isWhiteString(' Bonjour ') retourne false
*/
function isWhiteString(data) {
    return isEmptyString(data.trim()) ;
}

/**
* Retourne true si data contient un seul chiffre. Sinon elle retourne false
* @param {String} data
* @return {Boolean} 
*
* isNumericalCaractere(9) retourne false
* isNumericalCaractere(null) retourne false
* isNumericalCaractere(15) retourne false
* isNumericalCaractere('') retourne false
* isNumericalCaractere ('9') retourne true
* isNumericalCaractere('-9') retourne false
* isNumericalCaractere ('89') retourne false
* isNumericalCaractere('A') retourne false
* isNumericalCaractere ('8A') retourne false
*/
function isNumericalCaractere(data) {
    return inInterval(data, '0', '9') && isString(data) && data.length === 1;
}

/**
* Retourne true si data contient une seule lettre (caractÃ¨re alphabÃ©tique). Sinon elle retourne false
* @param {String} data
* @return {Boolean} 
*
* estUnCaractereAlpha(8) retourne false
* isAlphaCaractere(null) retourne false
* isAlphaCaractere(true) retourne false
* isAlphaCaractere('') retourne false
* isAlphaCaractere('8') retourne false
* isAlphaCaractere('a') retourne true
* isAlphaCaractere('b') retourne true
* isAlphaCaractere('A') retourne true
* isAlphaCaractere('aD') retourne false
* isAlphaCaractere('K') retourne true
* isAlphaCaractere('w') retourne true
* isAlphaCaractere(',') retourne false
* isAlphaCaractere(' $') retourne false

*/
function isAlphaCaractere(data) {
    return isString(data) && (inInterval(data, 'a', 'z') || inInterval(data, 'A', 'Z')) && data.length === 1;
}

/**
* Retourne true si data contient un seul chiffre ou une seule lettre (un caractÃ¨re alphanumÃ©rique). Sinon elle retourne false. 
* Il faut utiliser explicitement les deux fonctions prÃ©cÃ©dentes.
* @param {String} data
* @return {Boolean} 
*
*/
function isAlphaNumericCaractere(data) {
    return isAlphaCaractere(data) || isNumericalCaractere(data);
}

/**
* Retourne true si data est prÃ©sent dans dataChoice. Sinon elle retourne false 
* @param {String} data (un seul caractÃ¨re)
* @param {String} dataChoice (un seul caractÃ¨re)
* @return {Boolean} 
*
* isValidCaractere('Q', 'PQR') retourne true
* isValidCaractere('S', 'PQR') retourne false.
*/
function isValidCaractere(data, dataChoice) {
    if (!isString(data) || !isString(dataChoice) || data.length > 1) 
        return false;
	return dataChoice.indexOf(data) != -1;
}

/**
* Retourne true si une donnÃ©e est dans un format valide. Sinon elle retourne false
* Dans le dataFormat, le # reprÃ©sente un chiffre, @ reprÃ©sente une lettre et tout autre caractÃ¨re est le caractÃ¨re lui-mÃªme 
* @param {String} data
* @param {String} dataFormat
* @return {Boolean}
* 
* isInValidFormat('A9B 3K6', '@#@ #@#') retourne true
* isInValidFormat('A9B 3KB', '@#@ #@#') retourne false.
*/
function isInValidFormat(data, dataFormat) {
    // A programmer
    // if (!isString(data) || !isString(dataFormat) || dataFormat.length != data.length) 
    //     return false;
    
    // for (i = 0; i < dataFormat.length; i++) {
    //     if((dataFormat.charAt(i) === '@' && isAlphaCaractere(data.charAt(i))) 
    //         || (dataFormat.charAt(i)=== '#' && isNumericalCaractere(data.charAt(i))) 
    //         || data.charAt(i) === dataFormat.charAt(i) )
    //         continue
    //     else
    //         return false;
    // }
    // return true;

    let binValide = isString(data) && isString(dataFormat) && data.length == dataFormat.length;

    if (binValide)
        for (let i = 0; (i < data.length) && binValide; i++)
            switch (dataFormat.charAt(i)) {
            case '@':
                binValide = isAlphaCaractere(data.charAt(i));
                break;

            case '#':
                binValide = isNumericalCaractere(data.charAt(i));
                break;

            default:
                binValide = dataFormat.charAt(i) == data.charAt(i);
        }

        return binValide;
}

/**
* Retourne true si data est un code postal valide (Le format d'un code postal est '@#@ #@#â€™). Sinon elle retourne false
* @param {String} data
* @return {Boolean}
*/
function isCodePostal(data) {
    return isInValidFormat(data, '@#@ #@#');
}

/**
* Retourne true si data est un numÃ©ro d'assurance sociale valide (Le format d'un NAS est '### ### ###â€™). Sinon elle retourne false
* @param {String} data
* @return {Boolean}
* isNAS('123 456 789') retourne true
*/
function isNAS(data) {
    return isInValidFormat(data, '### ### ###');
}

/** Retourne true si data est un matricule (le format dâ€™un matricule est '#######â€™). Sinon elle retourne false
*
* @param {String} data
* @return {Boolean}
* isMatricule('1234567') retourne true
* isMatricule('123456A') retourne false
* isMatricule('12345678') retourne false
*/
function isMatricule(data) {
    return isInValidFormat(data, '#######');
}

/**
* Retourne true si data est un code permanent (le format d'un code permanent est ' @@@@########â€™). Sinon elle retourne false
*
* @param {String} data
* @return {Boolean}
* isPermanentCode('ABSX12089012') retourne true
* isPermanentCode('ABSX120890A2') retourne false
*/
function isPermanentCode(data) {
    return isInValidFormat(data, '@@@@########');
}

/** Retourne true si data est un numÃ©ro de tÃ©lÃ©phone (le format d'un numÃ©ro de tÃ©lÃ©phone est '(###) ###-####â€™ ou '###-###-####â€™). Sinon elle retourne false
* 
* @param {String} data
* @return {Boolean}
*
* isPhoneNumber('(514) 513-2869') retourne true
* isPhoneNumber('514-513-2869') retourne true
* isPhoneNumber('514/513-2869') retourne false
*/
function isPhoneNumber(data) {
    return isInValidFormat(data, '(###) ###-####') || isInValidFormat(data, '###-###-####');
}
