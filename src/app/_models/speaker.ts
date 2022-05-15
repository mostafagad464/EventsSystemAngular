export class Speaker {
    constructor(
        public _id:string,
        public email:string,
        public username:string,
        public password:string,
        public address: {
            city:string,
            street:string,
            building:string
        },
        public role:string = "speaker"
    ){}
}

