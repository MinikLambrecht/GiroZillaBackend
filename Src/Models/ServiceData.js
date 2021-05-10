export class ServiceDataModel {
    constructor(data) {
        this.id         = data.id;
        this.customerid = data.customerid;
        this.servicenum = data.servicenum;
        this.chimneys   = data.chimneys;
        this.pipes      = data.pipes;
        this.kw         = data.kw;
        this.lighting   = data.lighting;
        this.height     = data.height;
        this.dia        = data.dia;
        this.length     = data.length;
        this.type       = data.type;
    }
};