
export class likes{
    constructor(public likeNum: number, public selected: boolean){

    }
   /*get Like(){
        return this._likeNum;
    }
    set Like(value){
        this._likeNum = value;
    }*/
    likeValue(){
        if (this.selected){
            console.log('You liked this post');
            console.log('+1 Like');
            this.likeNum++;
            console.log('Likes: '+this.likeNum);
        }
        else{
            console.log('You unliked this post');
            console.log('-1 Like');
            this.likeNum--;
            console.log('Likes: '+this.likeNum);
        }
        this.selected = !this.selected;
    }
}