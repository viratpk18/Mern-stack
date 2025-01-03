const express = require("express");
let router = express.Router();


router.get("/", (req, res) => {
    res.send("user information");
});
router.get("/newuser", (req, res) => {
    res.send("new user added");
});
router.get("/deleteuser", (req, res) => {
    res.send("user deleted");
});
// router.get('/:id',(req,res)=>{
//     res.send('id value : '+req.params.id);
// });
router.route('/:id')
    .get((req,res)=>{
        res.send('retrive id value : '+req.params.id);
    })
    .put((req,res)=>{
        res.send('update this id value : '+req.params.id);
    })
    .delete((req,res)=>{
        res.send('delete this id value : '+req.params.id);
    });

module.exports = router;