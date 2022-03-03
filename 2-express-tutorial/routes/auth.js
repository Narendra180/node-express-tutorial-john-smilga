const express = require("express");
const router = express.Router();

router.post("/", (req,res) => {
    const receivedData = req.body;
    if(!receivedData.name) {
        return res.status(401).json({success:false,msg: "Please Provide name value"});
    }
    res.status(200).send({success:true,person: receivedData.name});
});

module.exports = router;