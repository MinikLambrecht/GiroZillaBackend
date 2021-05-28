export class CustomerModel {
    constructor(id, FirstName, LastName, Address, ZipCode, CityID, ServicesNeeded, Comment, MobilePhoneNumber, HomePhoneNumber, Email, Month) {
        this.id                 = id,
        this.Firstname          = FirstName,
        this.LastName           = LastName,
        this.Address            = Address,
        this.ZipCode            = ZipCode,
        this.CityID             = CityID,
        this.ServicesNeeded     = ServicesNeeded,
        this.Comment            = Comment,
        this.MobilePhoneNumber  = MobilePhoneNumber,
        this.HomePhoneNumber    = HomePhoneNumber,
        this.Email              = Email,
        this.Month              = Month
    }
};