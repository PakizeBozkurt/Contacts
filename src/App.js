import React from "react";
import Card from "./Card";
function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        name="Pare"
        img="https://images.unsplash.com/photo-1600294808794-57bcf94a0c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNrZWxldG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        tel="+0123 456 789"
        email="p@pare.com"
      />
      <Card
        name="Bare"
        img="https://images.unsplash.com/photo-1603252945711-7b44a2e2bb69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNrZWxldG9uJTIwYXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        tel="+9876 543 210"
        email="b@bare.com"
      />
    </div>
  );
}

export default App;
