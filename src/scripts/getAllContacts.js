
const readContacts = require('../utils/readContacts');

async function getAllContacts() {
    try {
        const contacts = await readContacts();
        console.log(contacts.length > 0 ? contacts : 'No contacts found.');
    } catch (error) {
        console.error('Error fetching all contacts:', error.message);
    }
}

getAllContacts();