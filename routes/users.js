import express from "express";

const router = express.Router();

const users = [
    {
        firstname: "John",
        lastname: "Doe",
        age: 25
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        age: 24
    }

]

router.get('/', (req, res) => {
    res.send(users);

});

router.post('/', (req, res) =>{
    const user = req.body;

    users.push(user)

    res.send('POST ROUTE REACHED');
})

export default router;