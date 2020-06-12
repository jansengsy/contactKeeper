import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../Context/Contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  // Pulling these in from contact state.
  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]); // Dependencies - So, when we set contactContext or current changes, this useEffect will fire

  // contact = object, setContact = mutator for that object
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact); // When form is submitted, it looks for this method
    } else {
      updateContact(contact);
      clearCurrent();
    }

    // Set the form object back to the defaults (aka blank)
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current === null ? 'Add Contact' : 'Edit Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      ></input>
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      ></input>
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      ></input>
      <h5>Contact Type:</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
        // Value checked based on type value - if persoanl is set, this will be checked
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current === null ? 'Add Contact' : 'Update Contact'}
          className='btn btn-primary btn-block'
        ></input>
      </div>
      {current && ( // If we have a contact currently selected, show clear button
        <div>
          <button className='btn btn-danger btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
