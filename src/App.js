import React from "react";
import Card from "./components/Card";
//import "/home/codeyourfuture/Documents/React/Projects/My Contacts/contacts/src/index.css";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  //console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.istockphoto.com/id/1442681935/photo/scary-halloween-skeleton-with-red-hair.jpg?b=1&s=170667a&w=0&k=20&c=HeW2DIIdXFfPrOsjFZKchJm7Cf3PM9mI5T1y81Te__8=" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
