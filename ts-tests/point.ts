export class drawPoint {
    x: number;
    y: number;

   /* constructor(x?:number, y?:number){
        this.x;
        this.y;
    }*/
    drawPoint(){
        console.log('X: '+this.x+' Y: '+this.y);
    }

    calDistance(another: drawPoint){

    }
    senseSum(){
        let sum: number = this.x+this.y;
        console.log('Sum of coordinates is '+sum);
        if (sum>100){
            console.log('X and Y coordinate combine value is greater than 100');
        }else{
            console.log('Value of X and Y combied value is less than 100');
        }
    }
}

//divider

export class Point {
   constructor(private x?:number, private y?:number){
    }
    drawPoint(){
        console.log('X: '+this.x+' Y: '+this.y);
    }

    /*calDistance(another: Point){

    }*/
    get X() {
        return this.x;
    }
    set X(value) {
        this.x=value;
        if (value<=-1){
            throw new Error('Value cannot be less than 0');
        }
    }
    senseSum(){
        let sum: number = this.x+this.y;
        console.log('Sum of coordinates is '+sum);
        if (sum>100){
            console.log('X and Y coordinate combine value is greater than 100');
        }else{
            console.log('Value of X and Y combied value is less than 100');
        }
    }
}