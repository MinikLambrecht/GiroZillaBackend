export class CustomerModel {
    constructor(data) {
        this.id              = data.id;
        this.firstname       = data.firstname;
        this.lastname        = data.lastname;
        this.address         = data.address;
        this.zipcode         = data.zipcode;
        this.city            = data.city;
        this.services_needed = data.services_needed;
        this.comment         = data.comment;
        this.mobile          = data.mobile;
        this.home            = data.home;
        this.email           = data.email;
        this.month           = data.month;
    }
};