var prompt = require('prompt-sync')();
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
try {
    var contactList = new Array();
    let number = parseInt(prompt("Enter number of contacts to be created:  "));
    var contacts;
    while (number--) {
        let firstName = prompt("Enter First Name:  ");
        let lastName = prompt("Enter Last Name:  ");
        let address = prompt("Enter Address:  ");
        let city = prompt("Enter City:  ");
        let state = prompt("Enter State:  ");
        let zip = prompt("Enter Zip:  ");
        let phoneNumber = prompt("Enter Phone Number:  ");
        let email = prompt("Enter Email:  ");
        //UC 7: Checking duplicates
        let duplicateCount = contactList.filter(x => firstName == x.firstName)
        if (duplicateCount == 0) {
            contacts = new Contacts(firstName, lastName, address, city, state, zip, phoneNumber, email);
            contactList.push(contacts);
        }
        else {
            console.log("Duplicate Entry Attempt");
            number++;
        }
    }
}
catch (message) {
    console.error(message);
}
//Displaying objects and contacts details 
console.log(contactList);
//UC 4: Edit the contact
let editchoice = prompt("Do you want to Edit any contact (y/n) : ");
//Using Lable to Break if
Editloop:
if (editchoice.toLowerCase() == 'y') {
    let i = 0;
    let search = prompt("Enter First Name to Edit Contact :");
    try {
        while (search != contactList[i].firstName) {
            i++;
        }
    }
    catch (message) {
        console.error(message);
        break Editloop;
    }
    EditingContacts(i);

    //After Editing 
    console.log("\n After Editing Contact :");
    console.log(contactList);
}

//Uc 5:  Delete contact
let deletechoice = prompt("Do you want to Delete any contact (y/n) : ");
Deleteloop:
if (deletechoice.toLowerCase() == 'y') {
    i = 0;
    search = prompt("Enter First Name to Delete Contact :");
    try {
        while (search != contactList[i].firstName) {
            i++;
        }
    }
    catch (message) {
        console.error(message);
        break Deleteloop;
    }
    if (i <= contactList.length) {
        //splice add and delete at same time.Here we use for only delete
        contactList.splice(i, 1);
        console.log("Deleted Successful");
    }
    else {
        console.log("Contact Not Exit . Enter Valid Input");
    }
    //After Editing 
    console.log("\n After Deleteing Contact :");
    console.log(contactList);
}

//Find count of Contacts
let contactCount = contactList.reduce((count) => count += 1, 0);
console.log("Total Number of contacts are : " + contactCount);

function EditingContacts(i) {
    console.log("Which One You Want Edit \n1.firstName 2.lastName 3.Address 4.city 5.state 6.zip 7.phoneNumber 8.email");
    let choice = parseInt(prompt("Enter Your choice : "));
    switch (choice) {
        case 1:
            firstName = prompt("Enter First Name:  ");
            duplicateCount = contactList.filter(x => firstName == x.firstName)
            if (duplicateCount == 0) {
                contactList[i].firstName = firstName;
            }
            else {
                console.log("Not Updated . Duplicate Entry Attempted");
            }
            break;
        case 2:
            lastName = prompt("Enter Last Name:  ");
            contactList[i].lastName = lastName;
            console.log("Update Successful");
            break;
        case 3:
            address = prompt("Enter Address:  ");
            contactList[i].address = address;
            console.log("Update Successful");
            break;
        case 4:
            city = prompt("Enter City:  ");
            contactList[i].city = city;
            console.log("Update Successful");
            break;
        case 5:
            state = prompt("Enter State:  ");
            contactList[i].state = state;
            console.log("Update Successful");
            break;
        case 6:
            zip = prompt("Enter Zip:  ");
            contactList[i].zip = zip;
            console.log("Update Successful");
            break;
        case 7:
            phoneNumber = prompt("Enter Phone Number:  ");
            contactList[i].phoneNumber = phoneNumber;
            console.log("Update Successful");
            break;
        case 8:
            email = prompt("Enter Email:  ");
            contactList[i].email = email;
            console.log("Update Successful");
            break;
        default:
            console.log("Enter Valid Input ");
            console.log("NOT Updated");
            break;
    }
}

//UC 8: Search contact useing City are state
let cityChoice = prompt("Do you want list of contact from same city (y/n) : ");
if(cityChoice.toLowerCase() == 'y')
{
    let citySearch = prompt("Enter City Name : ");
    let cityContactList = contactList.filter(x=>x.city==citySearch);
    console.log("These are the contacts from same city");
    console.log(cityContactList);
}
