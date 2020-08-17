const app = require('./app');

const server = app.listen(3000, () => {
    console.log("server started");
});