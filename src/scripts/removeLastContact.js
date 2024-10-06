const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

async function removeLastContact() {
    try {
        const contacts = await readContacts();
        if (contacts.length > 0) {
            contacts.pop();
            await writeContacts(contacts);
            console.log('Last contact has been removed.');
        } else {
            console.log('No contacts to remove.');
        }
    } catch (error) {
        console.error('Error removing last contact:', error);
    }
}

removeLastContact();