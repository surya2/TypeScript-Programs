//ts framwork

import { likes } from './class_likes';
let myClass = new likes(3, false);
myClass.likeValue();
console.log(`Likes are now: ${myClass.likeNum}, Selection is now: ${myClass.selected}`);