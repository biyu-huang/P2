//P2-2(A) 
var isArmstrong = function(n){

	"use strict";

	//turn the number to string
	n = String(n);

	var sum = 0;

	//use for loop to maltiple number individually
	for(var i = 0; i < n.length; ++i){

		sum = sum + Math.pow(n[i], n.length);

	}
	
	//is armstrong number or not?
	if(n == sum)
		return true;

	else
		return false;

}



//P2-2(B)
function allArmstrongs(){

	"use strict"

	var result ="";
    
    for(var i =1; i <= 99999; i++) {
    	
    	if(isArmstrong(i)) {
            
		result = result + String(i) + ", ";
    	
    	}
    
    }
    
    return result;

}






//P2-2(C)
var allSubstrings1 = function(string){

	"use strict"

	var result = "";

	for(var n = 0; n < string.length; n++){

		for(var i = n+1; i <= string.length; i++){

			var rest = string.substring(n, i);

			result = result + rest + ", ";
	
		}	
	}

	return result;

}





//P2-2(D)
var allSubstrings2 = function(string){

	"use strict"

	var stringArray = new Array(); 

	for(var n = 0; n < string.length; n++){

		for(var i = n+1; i <= string.length; i++){

			var rest = string.substring(n, i);

			   stringArray.push(rest);
	
		}	
	
	}

	return stringArray;

}





//P2-2(E)
var maxWord = function(words){

	"use strict"

	var wordSplit = words.split(" ");

	var max = 0;
    
    var position = 0;
	
	for(var i = 0; i < wordSplit.length; i++){
        
        var len = wordSplit[i].length;
        
        if(max < len) {
        
        	max = len;

        	position = i;
        
        }
	
	}

 return wordSplit[position];

}



