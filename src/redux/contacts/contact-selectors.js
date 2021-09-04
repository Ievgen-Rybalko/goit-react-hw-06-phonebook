export const getContactsTotal = state => state.contacts.items.length;

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getContactsFiltered = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
       
    return contacts.filter(contact => contact.name.includes(filter))};