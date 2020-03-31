const app = require("./app");
const config = require("./config/index");

app.listen(config.port, () => {
  console.log(`Server is up and running at port ${config.port}`);
});
