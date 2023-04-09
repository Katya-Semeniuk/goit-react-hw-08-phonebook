export const selectLoading = state => state.contacts.loading;

export const selectFilter = state => state.contacts.filter;

export const selectAllContacts = state => state.contacts.items;

export const visibleContacts = state => {
  const normalizedFilter = state.contacts.filter.toLowerCase();

  return state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
