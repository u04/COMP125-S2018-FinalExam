
// dey, 300920267, 2018-15-08, comp-125
(function(){
    class AddressBook {
        constructor() {
            this.Contacts = [];
        }
        // complete the addressbook class
         AddContacts(input){
            this.Contacts.push(input);
            console.log("hello");
        }   

                    
    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));