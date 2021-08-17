class Contacts {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
    toString() {
        return ("Name: " + this.firstName + " " + this.lastName + " \t Address: " + this.address + " \t City: " + this.city + " \t State: " + this.state + " \t Pincode: " + this.zip + " \t Phone Number: " + this.phoneNumber + " \t Email Id: " + this.email);
    }
}
let contacts = new Contacts("Sai", "Vijay", "gandi nagar", "Nellore", "AP", 8893, 98388339, "sai@gmail.com");
console.log("Contact Details : " + contacts.toString());
