export class Admin {
    constructor(
        public email: string = "",
        // public username:string = "",
        public password: string = "",
        public role: string = "admin",
        public token: string = "",
    ) { }
}
