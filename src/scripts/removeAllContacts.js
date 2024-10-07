const writeContacts = require('../utils/writeContacts');

async function removeAllContacts() {
    try {
        await writeContacts([]);
        console.log('All contacts have been removed.');
    } catch (error) {
        console.error('Error removing all contacts:', error.message);
    }
}

removeAllContacts();