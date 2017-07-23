import ICCar from './course/car';
import { SuperCar } from './course/car';

let car = new ICCar(4, 100);
car.start();

let superCar = new SuperCar(4, 100);
superCar.start();