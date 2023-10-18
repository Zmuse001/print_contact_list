$(document).ready(function() {
    if (localStorage.phonebook) {
        var phonebook = JSON.parse(localStorage.phonebook);
    } else {
        var phonebook = [];
    }

    $('#add').click(function() {
        addContact();
    });

    function addContact() {
        var first = prompt("First name: ");
        var last = prompt("Last Name");
        var num = prompt("Number: ");

        var contact = {
            firstName: first,
            lastName: last,
            number: num
        };

        phonebook.push(contact);
        localStorage.phonebook = JSON.stringify(phonebook);
    }

    $("#retrieve").click(function() {
        var first = prompt("First Name:");
        var last = prompt("Last Name:");
        if (contactExists(first, last)) {
            retrieveContact(first, last);
        } else {
            var yesNo = prompt("That name is not in your contact list, would you like to add them?");
            if (yesNo.toLowerCase() === "yes") {
                addContact(first, last);
            }
        }
    });

    $("#print-contacts").click(function() {
        printContacts();
    });

    function contactExists(first, last) {
        for (var i = 0; i < phonebook.length; i++) {
            if (phonebook[i].firstName === first && phonebook[i].lastName === last) {
                return true;
            }
        }
        return false;
    }

    function retrieveContact(first, last) {
        $("#contact-reveal").empty(); // Clear the previous content
        for (var i = 0; i < phonebook.length; i++) {
            if (phonebook[i].firstName === first && phonebook[i].lastName === last) {
                $("#contact-reveal").append(phonebook[i].firstName + " " + phonebook[i].lastName + ": " + phonebook[i].number);
            }
        }
    }

    function printContacts() {
        var contactList = $("#contact-reveal");
        contactList.empty(); // Clear the previous content

        for (var i = 0; i < phonebook.length; i++) {
            var contact = phonebook[i];
            contactList.append("<div>" + contact.firstName + " " + contact.lastName + ": " + contact.number + "</div>");
        }
    }
});