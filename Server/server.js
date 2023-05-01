const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect("mongodb://127.0.0.1:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("podcasts");
    const podcastsCollection = db.collection("podcasts");
    const podcastsRouter = createRouter(podcastsCollection);
    app.use("/api/podcasts", podcastsRouter);
  })
  .catch(console.err);

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
