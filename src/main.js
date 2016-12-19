import dicts from './dicts';
import {isKyr, isUpperCase} from './utils';


function getChar(word){
	if(isKyr(word)){
		console.log(true, word)
	}else{
		console.log(false, word)
	};
	var reg = isUpperCase(word);
	console.log(`Регистр: ${reg}`);
/*
let result = [];
var str = Object.values(word)
		let arr = word.split('');

		arr.map((key)=>{
			result.push(dict[key])
		});
		
		return result.join("");
		*/
}

const res = getChar('Г'/*'wuxia'*/);

//console.log(res);