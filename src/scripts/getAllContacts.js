const readContacts = require('../utils/readContacts');

async function getAllContacts() {
    try {
        const contacts = await readContacts();
        console.log(contacts);
    } catch (error) {
        console.error('Error fetching all contacts:', error);
    }
}

getAllContacts();