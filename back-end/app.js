const { port } = require("./config/index");



app.listen(port, () => {
    console.log(`Listening for requests on port ${port}...`);
});
