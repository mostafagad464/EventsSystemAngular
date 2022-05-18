export class Speaker {
    constructor(
        public _id:string,
        public email:string,
        public username:string,
        public name:string,
        public bio:string,
        public age:number,
        public password:string,
        public address: {
            city:string,
            street:string,
            building:string
        },
        public role:string = "speaker"
    ){}
}

