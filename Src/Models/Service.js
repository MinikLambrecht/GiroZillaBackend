export class ServiceModel {
    constructor(id, CustomerID, Date, Year, PaymentForm, InvoiceNumber, Paydate, TimesSwept) {
        this.id             = id,
        this.CustomerID     = CustomerID,
        this.Date           = Date,
        this.Year           = Year,
        this.PaymentForm    = PaymentForm,
        this.InvoiceNumber  = InvoiceNumber,
        this.Paydate        = Paydate,
        this.TimesSwept     = TimesSwept
    }
};