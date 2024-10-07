const readContacts = require('../utils/readContacts');

async function countContacts() {
    try {
        const contacts = await readContacts();
        console.log(`Total contacts: ${contacts.length}`);
    } catch (error) {
        console.error('Error counting contacts:', error.message);
    }
}

countContacts();