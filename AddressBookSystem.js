console.log("Welcome to address book system");

class AddressBookContact {

    constructor (firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}

let addressBook = new AddressBookContact("Stuti", "Saurya", "Abc Colony", 
    "Gaya", "Bihar", 410058, "8095232954", "stuti11@gmail.com");

console.log(addressBook.toString());
