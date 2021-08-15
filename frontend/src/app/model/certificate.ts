import { Subscriber } from "./subscriber";

export class Certificate {
    _id: string = "";
    name: string = "";
    taxNumber: string = "";
    headquarters: string = "";
    date: string = this.formatDate(new Date());
    legalReference: string = "";
    director: string = "";
    subscriber?: Subscriber = new Subscriber();

    formatDate(date: Date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}
