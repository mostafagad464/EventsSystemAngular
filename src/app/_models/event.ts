import { Speaker } from "./speaker";
import { Student } from "./student";

export class Event {
    constructor(
        public _id:number,
        public title:string,
        public description:string,
        public event:Date,
        public mainSpeaker:Speaker,
        public otherSpeakers:Speaker[],
        public students:Student[],
    ){}
}
