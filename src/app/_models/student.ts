export class Student {
    constructor(
        // public data:{
        //      _id:"",
        //      email:"",
        //      username:"",
        //      name:"",
        //      bio:"",
        //      age:0,
        //      password:"",
        // },
        public _id:string="",
        public email:string="",
        public username:string="",
        public name:string="",
        public bio:string="",
        public age:number=0,
        public password:string="",
        public role:string = "student",
        public token: string ="",
    ){}
}
