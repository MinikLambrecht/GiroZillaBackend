export class ServiceDataModel {
    constructor(id, CustomerID, ServiceNumber, Chimneys, Pipes, KW, Lighting, Height, Diameter, Length, Type) {
        this.id             = id,
        this.CustomerID     = CustomerID,
        this.ServiceNumber  = ServiceNumber,
        this.Chimneys       = Chimneys,
        this.Pipes          = Pipes,
        this.KW             = KW,
        this.Lighting       = Lighting,
        this.Height         = Height,
        this.Diameter       = Diameter,
        this.Length         = Length,
        this.Type           = Type
    }
};