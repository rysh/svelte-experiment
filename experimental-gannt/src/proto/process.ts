export class Process {
    name:string
    subProcesses:Process[]

    constructor(name, subProcesses?) {
        this.name = name;
        this.subProcesses = (subProcesses) ? subProcesses! : [];
    }
}


export function genProcesses(num:number) :Process[] {
    const list :Process[] = []
    const now = new Date()
    for (var i = 1; i < num; i++) {
        const subList :Process[] = []
        for (var j = 1; j < 9; j++) {
            subList.push(new Process(`小項目${i}-${j}`))
        }
        list.push(new Process(`大項目${i}`,subList))
    }
    return list
}