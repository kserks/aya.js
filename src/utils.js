// toLowerCase()
function isUpperCase(char){

 if(char.toUpperCase()===char){
 	return true;
 }else{
 	return false;
 }
};

function isKyr(str){
	return /[а-яё]/i.test(str);
};

export {
	isKyr,
	isUpperCase
}