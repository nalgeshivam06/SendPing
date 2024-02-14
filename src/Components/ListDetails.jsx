import React from 'react'

function ListDetails({ list }) {
  return (
    <div>
    <h2>List Details</h2>
    <h3>List Name: {list.name}</h3>
    <p>Created At: {list.createdAt}</p>
    <p>Number of Contacts: {list.contacts.length}</p>
    <h4>Contacts:</h4>
    <ul>
      {list.contacts.map((contact, index) => (
        <li key={index}>
          {contact.name} {contact.lastName} - Email: {contact.email} - Phone: {contact.phone}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default ListDetails