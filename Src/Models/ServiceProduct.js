export class ServiceProductModel {
    constructor(data) {
        this.id                 = data.id;
        this.serviceid          = data.serviceid;
        this.productid          = data.productid;
        this.productname        = data.productname;
        this.productprice       = data.productprice;
        this.productdescription = data.productdescription;
    }
};