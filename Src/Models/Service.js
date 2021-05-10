export class ServiceModel {
    constructor(data) {
        this.id             = data.id;
        this.customerid     = data.customerid;
        this.date           = data.date;
        this.year           = data.year;
        this.paymentfrom    = data.paymentfrom;
        this.invoice_number = data.invoice_number;
        this.number         = data.number;
        this.paydate        = data.paydate;
    }
};