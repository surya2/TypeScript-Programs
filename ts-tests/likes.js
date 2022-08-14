"use strict";
//ts framwork
exports.__esModule = true;
var class_likes_1 = require("./class_likes");
var myClass = new class_likes_1.likes(3, false);
myClass.likeValue();
console.log("Likes are now: " + myClass.likeNum + ", Selection is now: " + myClass.selected);
