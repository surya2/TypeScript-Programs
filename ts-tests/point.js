"use strict";
exports.__esModule = true;
var drawPoint = (function () {
    function drawPoint() {
    }
    /* constructor(x?:number, y?:number){
         this.x;
         this.y;
     }*/
    drawPoint.prototype.drawPoint = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    drawPoint.prototype.calDistance = function (another) {
    };
    drawPoint.prototype.senseSum = function () {
        var sum = this.x + this.y;
        console.log('Sum of coordinates is ' + sum);
        if (sum > 100) {
            console.log('X and Y coordinate combine value is greater than 100');
        }
        else {
            console.log('Value of X and Y combied value is less than 100');
        }
    };
    return drawPoint;
}());
exports.drawPoint = drawPoint;
//divider
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        /*calDistance(another: Point){
    
        }*/
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
            if (value <= -1) {
                throw new Error('Value cannot be less than 0');
            }
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.senseSum = function () {
        var sum = this.x + this.y;
        console.log('Sum of coordinates is ' + sum);
        if (sum > 100) {
            console.log('X and Y coordinate combine value is greater than 100');
        }
        else {
            console.log('Value of X and Y combied value is less than 100');
        }
    };
    return Point;
}());
exports.Point = Point;
