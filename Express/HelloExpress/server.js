const express = require("express");
const app = express();
const port = 8000;

const faker = require ('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];

const createCompany = () => {
  return {
    companyName: faker.company.companyName(),
    department: faker.commerce.department(),
    // using an object to group all of the address data together
    //    We can create and group whatever data we want using faker
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country(),
    }
  }
}

app.get("/api/users/new", (request, response) => {
  const newUser = createUser();

  console.log("new user:")
  console.log(newUser);

  // response.json() is like a return statement at the end of a callback function
  //    Whatever you send as an argument will be in the response.data object
  response.json(newUser);

  // A very concise way of doing this can be put all the important pieces together 
  //    in a single line like so:
  //      response.json(new User());

  // There would be nothing output to the console, but it still sends back the exact
  //    same data
});



app.get("/api/companies/new", (request, response) => {
  let newCompany = createCompany();

  console.log("new company:")
  console.log(newCompany);

  // this is an extra piece that is not required, but is just to demonstrate that you 
  //    can do whatever you want inside of this callback function
  // changing the department to a new random one before sending it back to the client
  newCompany.department = faker.commerce.department();
  console.log("updated company department:")
  console.log(newCompany);

  response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
  let newUser = createUser();
  let newCompany = createCompany();

  console.log("new user:")
  console.log(newUser);

  console.log("new company:")
  console.log(newCompany);

  // you can combine a bunch of data into a new object of your own creation
  //    to be returned in json to the client that requested this data
  response.json({ user: newUser, company: newCompany });
});

// using port 8000 is the common port for Node / Express servers, but it is not required
//    you can use any port over the number 1,024 and less than about 64,000
app.listen(8000, () => console.log("Listening on port 8000"));












// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );

// // we can hard code some users like this
// // later on we will want to store users in a database
// const createUser = [
//   { firstName: "Reimu",  lastName: "Hakurei"    },
//   { firstName: "Marisa", lastName: "Kirisame"   },
//   { firstName: "Sanae",  lastName: "Kochiya"    },
//   { firstName: "Sakuya", lastName: "Izayoi"     },
//   { firstName: "Momiji", lastName: "Inubashiri" }
// ];
  
// app.get("/api/users", (req, res) => {
//     res.json( users );
// });

// // make sure these lines are above any app.get or app.post code blocks
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// app.post("/api/users", (req, res) => {
//       // req.body will contain the form data from Postman or from React
//       console.log(req.body);
//       // we can push it into the users array for now...
//       // later on this will be inserted into a database
//       users.push(req.body);
//       // we always need to respond with something
//       res.json( { status: "ok" } );
//   });
  

//   // if we want to get a user with a specific id, we can make the id a part of the url
// // be sure to preface the id variable with a `:` colon
// app.get("/api/users/:id", (req, res) => {
//       // we can get this `id` variable from req.params
//       console.log(req.params.id);
//       // assuming this id is the index of the users array we could return one user this way
//       res.json( users[req.params.id] );
//   });
  

//   app.put("/api/users/:id", (req, res) => {
//         // we can get this `id` variable from req.params
//         const id = req.params.id;
//         // assuming this id is the index of the users array we can replace the user like so
//         users[id] = req.body;
//         // we always need to respond with something
//         res.json( { status: "ok" } );
//     });
    

//     app.delete("/api/users/:id", (req, res) => {
//       // we can get this `id` variable from req.params
//       const id = req.params.id;
//       // assuming this id is the index of the users array we can remove the user like so
//       users.splice(id, 1);
//       // we always need to respond with something
//       res.json( { status: "ok" } );
//   });
  
  