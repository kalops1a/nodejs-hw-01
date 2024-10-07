const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

async function addOneContact() {
    try {
        const contacts = await readContacts();
        contacts.push(createFakeContact());
        await writeContacts(contacts);
        console.log('One contact added successfully.');
    } catch (error) {
        console.error('Error adding one contact:', error.message);
    }
}

addOneContact();