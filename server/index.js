const app = require("./app");
const conn = require("./db/conn");
const { syncAndSeed, Question } = require("./db");

const init = async () => {
  try {
    await conn.sync({ force: true });
    console.log("syncing");
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
