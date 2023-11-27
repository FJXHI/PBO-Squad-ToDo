import { TimeUnit } from "./TimeUnit";

export default class Expenditure {
    time: number = 0;
    unit: TimeUnit = TimeUnit.Minute

    public constructor(time: number, unit: TimeUnit) {
        this.time = time;
        this.unit = unit;
    }

    public toString() : string {
        let ret: string = this.time + " " + this.unit; 
        return ret;
    }
}