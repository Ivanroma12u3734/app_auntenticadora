import { Router } from "express";
const router = Router();

let users = [
    {
        id: "1",
        name: "Jesus",
        address: "Aña",
        age: 85,
    }
]

//post
router.post('/users/create', (req, res) => {
    //body
    users.push(req.body)
    res.send("ok")
})
//est
router.get('/users', (req, res) => {
    res.status("200").json(users)
});

//put
router.put('/users/update/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        res.status(404).send("El recurso no se encuentra");
        return
    }
    const updateUser = { ...user, ...req.body }

    users = users.map(u => u.id === req.params.id ? updateUser : u);
    res.status(200).send("usuario actualizado con exito ");

})

export default router;