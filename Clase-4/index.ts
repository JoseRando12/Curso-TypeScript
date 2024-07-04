import {v4 as uuid} from 'uuid'

abstract class User {
    id: string = uuid()
    name!: string;
    role!: "teacher" | "student"

    abstract getDataUser(): void;
}

class Teacher extends User {
    private course!: string;
    constructor(name:string, course:string){
        super();
        this.role = "teacher";
        this.name = name;
        this.course = course;
    }
    private readonly isDirector: boolean = true

    public getDataUser(): void{
        console.log({
            ...this,
        })
    } 
}

class Student extends User {

    constructor(name:string){
        super();
        this.role = "student";
        this.name = name;
    }

    private courses: Array<string> = [];

    public addCourse(course:string){
        this.courses.push(course)
    }

    getDataUser(): void {
        console.log({
            ...this,
        });
    }
}

const newTeacher = new Teacher('Rodolfo','TypeScript')
newTeacher.getDataUser()

const newStudent = new Student('Jose')
newStudent.getDataUser()
newStudent.addCourse('TypeScript')
newStudent.getDataUser()
newStudent.addCourse('NodeJs')
newStudent.getDataUser()