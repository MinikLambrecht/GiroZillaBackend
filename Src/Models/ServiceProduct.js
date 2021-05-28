export class ServiceProductModel {
    constructor(id, ServiceID, ProductID, ProductName, ProductPrice, ProductDescription) {
        this.id                 = id,
        this.ServiceID          = ServiceID,
        this.ProductID          = ProductID,
        this.ProductName        = ProductName,
        this.ProductPrice       = ProductPrice,
        this.ProductDescription = ProductDescription
    }
};