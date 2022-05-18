export class Student {
    constructor(
        public _id:number,
        public email:string,
        public username:string,
        public name:string,
        public bio:string,
        public age:number,
        public password:string,
        public role:string = "student"
    ){}
}
