import { Subscriber } from "./subscriber";

export class Certificate {
    _id: string = "";
    name: string = "";
    taxNumber: number = 0;
    headquarters: string = "";
    date: string = "";
    legalReference: string = "";
    director: string = "";
    subscriber: Subscriber = new Subscriber();
}
