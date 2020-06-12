var Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFullName = () => fullName;
    this.getFirstName = () => fullName.split(' ')[0];
    this.getLastName = () => fullName.split(' ')[1];

    this.setFullName = (name) => {
        fullName = name;
    };
    this.setFirstName = (firstName) => {
        fullName = firstName + " " + this.getLastName()
    };
    this.setLastName = (lastName) => {
        fullName = this.getFirstName() + " " + lastName
    };
};

var bob = new Person('Bob Ross');

