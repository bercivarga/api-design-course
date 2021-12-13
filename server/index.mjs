import express from "express";

const app = express();

const router = express.Router();

app.get("/", (req, res) => {
    console.log("hello");
    res.send({message: 'hi'})
});

router.get("/me", (_, res) => {
    res.send({ me: "hello" });
});

app.use("/api", router);

router
    .route("/cat")
    .get(() => {
        console.log("get req");
    })
    .post(() => {
        console.log("post req");
    });

//////////////////////;
//

const sampleController = (req, res) => {
    res.send({ message: "hello" });
};

const itemRouter = express.Router();
app.use("/api/item", itemRouter);

itemRouter
    .route("/:id")
    .get((req, res) => {
        console.log(req, res);
    })
    .post((req, res) => {
        console.log(req, res);
    })
    .put()
    .delete();

app.listen(4500, () => {
    console.log("server listening on 4500");
});
