export class Student {
    constructor(
        public _id:string,
        public email:string,
        public password:string,
        public role:string = "student"
    ){}
}
