let contacts = [
    {
    name:"tal",
    email:"tal@tal.com",
    phone:"050-3242343"
    },
    {
    name:"gal",
    email:"gal@tal.com",
    phone:"054-3223343"
    }
        
]

function ShowContact(p){
    return(
        p.contacts.map(contact =>
        <div className="contact">
        <div>{contact.name}</div>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        </div>
)
    )
}

const main = ReactDOM.createRoot(document.getElementById("main"));
main.render(<ShowContact contacts={contacts}/>)

