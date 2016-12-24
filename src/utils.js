import dict from './dict';

function isRu(str){
	return /[а-яё]/i.test(str);
};

function getKeyByValue(dict, value ) {
    for( var prop in dict ) {
        if( dict.hasOwnProperty( prop ) ) {
             if( dict[ prop ] === value )
                 return prop;
        }
    }
}

function invert(str){

var result = [];
const strArr = str.split("");	

if(isRu(str)){
	
 	strArr.forEach((key)=>{
		result.push(dict[key]);
	});
	
}else{

	strArr.map((item)=>{
		result.push(getKeyByValue(dict, item));
	})
}
return result.join('');
};



export {
	invert
}