import React from "react";
import Card from "./components/Card";
//import "/home/codeyourfuture/Documents/React/Projects/My Contacts/contacts/src/index.css";
import contacts from "./contacts";
import Avatar from "./components/Avatar";

function App() {
  //console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2tlbGV0b24lMjBhdmF0YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgUrl}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgUrl}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
    </div>
  );
}

export default App;
