import React from "react";
import Card from "./Card";
//import "/home/codeyourfuture/Documents/React/Projects/My Contacts/contacts/src/index.css";
import contacts from "../contacs";

function App() {
  //console.log(contacts);
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
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
