class Contacts {
    constructor(...params) {
        let regexName = RegExp('^[A-Z]{1}[a-z]{2,}');
        let regexAddress = RegExp('^[A-za-z0-9]{4,}');
        let regexZip = RegExp('^[0-9]{4}$');
        let regexPhoneNumber = RegExp('^[0-9]{10}$');
        let regexEmail = RegExp('^[a-zA-z0-9]+([+. \-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2,3})?$');

        if (regexName.test(params[0]) && regexName.test(params[1])) {
            this.firstName = params[0];
            this.lastName = params[1];
        }
        else {
            throw 'Incorrect Name';
        }
        if (regexAddress.test(params[2]) && regexAddress.test(params[3]) && regexAddress.test(params[4])) {
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
        }
        else {
            throw 'Incorrect Address';
        }
        if (regexZip.test(params[5])) {
            this.zip = params[5];
        }
        else {
            throw 'Incorrect ZIP';
        }
        if (regexPhoneNumber.test(params[6])) {
            this.phoneNumber = params[6];
        }
        else {
            throw 'Incorrect Phone Number';
        }
        if (regexEmail.test(params[7])) {
            this.email = params[7];
        }
        else {
            throw 'Incorrect Email';
        }
    }
    toString() {
        return ("Name: " + this.firstName + " " + this.lastName + " \t Address: " + this.address + " \t City: " + this.city + " \t State: " + this.state + " \t Pincode: " + this.zip + " \t Phone Number: " + this.phoneNumber + " \t Email Id: " + this.email);
    }
}
let contacts = new Contacts("Sai", "Vijay", "gandi nagar", "Nellore", "America", 8893, 9989388339, "sai@gmail.com");
console.log("Contact Details : \n" + contacts.toString());
