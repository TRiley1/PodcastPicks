const express = require("express");
const { ObjectId } = require("mongodb");

const handleError = (res) => {
  return (err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  };
};

const createRouter = function (collection) {
  const router = express.Router();

  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch(handleError(res));
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: new ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch(handleError(res));
  });

  router.post("/", (req, res) => {
    const newDatas = req.body;
    collection.insertMany(newDatas).then((result) => {
      res
        .json({
          insertedCount: result.insertedCount,
          insertedIds: result.insertedIds,
        })
        // .catch(handleError(res));
    });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((doc) => res.json(doc))
      .catch(handleError(res));
  });

  return router;
};

module.exports = createRouter;
