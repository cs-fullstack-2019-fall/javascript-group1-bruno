//function to create an array of words:





var  english=['apple','pear','watermelon','grape','lime','cherry','peach','orange','raisins','papaya'];
var  spanish=['manzana','pera','sandia','uva','lima','cereza','durazno','naranja','pasas','papaya'];
console.log(english);
console.log(spanish);

function english_to_spanish() {
    userEnglishInput = prompt("Enter the new english word:");
    english.push(userEnglishInput);
    userSpanishInput = prompt("Enter the equivalent spanish word:");
    spanish.push(userSpanishInput);
}

function spanish_to_english() {
    userSpanishInput = prompt("Enter the  spanish word:");
    spanish.push(userSpanishInput);
    userEnglishInput = prompt("Enter the equivalent english word:");
    english.push(userEnglishInput);
}

english_to_spanish();
spanish_to_english();