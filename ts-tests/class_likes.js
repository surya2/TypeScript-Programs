"use strict";
exports.__esModule = true;
var likes = (function () {
    function likes(likeNum, selected) {
        this.likeNum = likeNum;
        this.selected = selected;
    }
    /* get Like(){
         return this.likeNum;
     }
     set Like(value){
         this.likeNum = value;
     }*/
    likes.prototype.likeValue = function () {
        if (this.selected) {
            console.log('You liked this post');
            console.log('+1 Like');
            this.likeNum++;
            console.log('Likes: ' + this.likeNum);
        }
        else {
            console.log('You unliked this post');
            console.log('-1 Like');
            this.likeNum--;
            console.log('Likes: ' + this.likeNum);
        }
        this.selected = !this.selected;
    };
    return likes;
}());
exports.likes = likes;
