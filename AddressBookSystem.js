var prompt=require('prompt-sync')();
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[A-Za-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_PATTERN = RegExp('^[9][1][6-9]{1}[0-9]{9}$'); 
const EMAIL_REGEX_PATTERN=RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');
let contactArray = new Array();

class Contact {

    set firstName(firstName) {
        if (NAME_REGEX_PATTERN.test(firstName))
            this.perFirstName = firstName;
        else throw "Invalid first name ";
    }
    get firstName() {
        return this.perFirstName;
    }
    set lastName(lastName) {
        if (NAME_REGEX_PATTERN.test(lastName))
            this.perLastName = lastName;
        else throw "Invalid last name";
    }
    get lastName() {
        return this.perLastName;
    }
    set address(address) {
        if (ADDRESS_REGEX_PATTERN.test(address))
            this.perAddress = address;
        else throw "Invalid address";
    }
    get address() {
        return this.perAddress;
    }
    set city(city) {
        if (ADDRESS_REGEX_PATTERN.test(city))
            this.perCity = city;
        else throw "Invalid city name";
    }
    get city() {
        return this.perCity;
    }
    set state(state) {
        if (ADDRESS_REGEX_PATTERN.test(state))
            this.perState = state;
        else throw "Invalid state";
    }
    get state() {
        return this.perState;
    }
    set zip(zip) {
        if (PINCODE_REGEX_PATTERN.test(zip))
            this.perZip = zip;
        else throw "Invalid zip code";
    }
    get zip() {
        return this.perZip;
    }
    set phoneNumber(phoneNumber) {
        if (PHONE_NUMBER_PATTERN.test(phoneNumber))
            this.perPhoneNumber = phoneNumber;
        else throw "Invalid phone number";
    }
    get phoneNumber() {
        return this.perPhoneNumber;
    }
    set email(email) {
        if (EMAIL_REGEX_PATTERN.test(email))
            this.perEmail = email;
        else throw "Invalid email";
    }
    get email() {
        return this.perEmail;
    }

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

try {
    let contact1= new Contact("Stuti", "Saurya", "Abc Colony","Gaya", "Bihar", 410058, "8095232954", "stuti11@gmail.com");
    let contact2 = new Contact("Sakshi", "Priyal", "Gandhi vihar", "Delhi", "New Delhi", 577201, 7876745678, "sakshi@gmail.com");

    contactArray.push(contact1);
    contactArray.push(contact2);
    console.log(contactArray);

} catch (Exception) {
    console.log(Exception)
}