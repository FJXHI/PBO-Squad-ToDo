import type Expenditure from "./Expenditure";

export default class TodoEntry {
    title: string = "ToDo Entry";
    deadline?: Date = undefined;
    
    // used to store time information only from milliseconds to hours
    expenditure?: Expenditure = undefined;

    description: string = "";

    // list of tags for the entry
    // -> tags have a unique color, name, dependencies, ... 
    //tags: Tag[];

    // contains r, g, b, a of the color if not specified by tag?
    color: Array<number> = [255, 255, 255, 255]

    flatPriority: number = 0

    priority: number = 0

    /*public*/ constructor(title: string, description: string, color: Array<number>, flatPriority?: number, deadline?: Date, expenditure?: Expenditure){
        this.title = title;
        this.deadline = deadline;
        this.expenditure = expenditure;
        this.description = description;

        for (let i = 0; i < color.length; i++){
            this.color[i] = color[i];
        }

        if (flatPriority != undefined)
            this.flatPriority = flatPriority ;
    }

    // might have to be adjusted to look at tags
    public getCSSColorString() : string{
        return "rgba(" + this.color[0] + "," + this.color[1] + "," +this.color[2] + "," + this.color[3] + ")";
    }
}