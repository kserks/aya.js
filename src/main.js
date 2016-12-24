
import { invert, isRu } from './utils';


function aya(str){
	let lowerStr = str.toLowerCase();

	return invert(lowerStr);

};


module.exports = aya;
