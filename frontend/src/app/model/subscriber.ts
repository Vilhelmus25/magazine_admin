export class Subscriber {
    _id: string = "";
    date: string = this.formatDate(new Date());
    name: string = "";
    postalCode: number = 0;
    city: string = "";
    address: string = "";
    licence_id: string = "";
    licenced_seasons: number = 0;
    seasons_left: number = 0;
    amount: number = 0;
    colleague: string = "";

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


