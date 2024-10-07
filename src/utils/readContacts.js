const fs = require('fs').promises;
const { PATH_DB } = require('../constants/contacts');

async function readContacts() {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(data || '[]'); 
    } catch (error) {
        console.error('Error reading contacts:', error.message);
        return [];
    }
}

module.exports = readContacts;