const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const cors = require('cors');
const schema = require('./schema');

// allow cross origin 
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true 
}));

const port  = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started listening on ${port}`));
