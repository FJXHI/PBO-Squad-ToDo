export default class TodoEntry {
    name: string = "ToDo Entry";
    deadline?: Date = undefined;
    
    // used to store time information only from milliseconds to hours
    expenditure?: Date = undefined;

    description: string = "";

    // list of tags for the entry
    // -> tags have a unique color, name, dependencies, ... 
    //tags: Tag[];

    // contains r, g, b, a of the color if not specified by tag?
    color: Array<number> = [255, 255, 255, 255]

    flatPriority: number = 0

    priority: number = 0

    public constructor(name: string, description: string, color: Array<number>, deadline?: Date, expenditure?: Date, flatPriority?: number){
        this.name = name;
        this.deadline = deadline;
        this.expenditure = expenditure;
        this.description = description;

        for (let i = 0; i < color.length; i++){
            this.color[i] = color[i];
        }

        if (flatPriority != undefined)
            this.flatPriority = flatPriority ;
    }

}