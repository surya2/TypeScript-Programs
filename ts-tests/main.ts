import { drawPoint } from './point';
//let xCoor: number = 32;
//let yCoor: number = 54;
let classOne = new drawPoint();
classOne.x = 99;
classOne.y = 34;
classOne.drawPoint();
classOne.senseSum();


//divider

import { Point } from './point';
//let xCoor: number = 32;
//let yCoor: number = 54;
let classTwo = new Point(1, 2);
let getX = classTwo.X;
classTwo.X = 10;
//classTwo.x = 99;
//classTwo.y = 34;
classTwo.drawPoint();
classTwo.senseSum();


