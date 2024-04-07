// eslint-disable-next-line no-unused-vars
import React from "react"


// eslint-disable-next-line react/prop-types
const ContactList = ({ contacts, updateContact, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error) {
            alert(error)
        }
    }
    return <div className='container'>
        <h2>Contatos</h2>
        <div className='main'>
            <table>
                <thead>
                    <tr>
                        <th>Primeiro Nome</th>
                        <th>Sobrenome</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button className="btn1" onClick={() => updateContact(contact)} >Update</button>
                                <button className="btn2" onClick={() => onDelete(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ContactList;