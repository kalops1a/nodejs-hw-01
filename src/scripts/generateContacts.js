const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');
const createFakeContact = require('../utils/createFakeContact');

async function generateContacts(count) {
    try {
        let contacts = await readContacts();
        for (let i = 0; i < count; i++) {
            contacts.push(createFakeContact());
        }
        await writeContacts(contacts);
        console.log(`${count} new contacts added successfully.`);
    } catch (error) {
        console.error('Error generating contacts:', error);
    }
}

generateContacts(5);