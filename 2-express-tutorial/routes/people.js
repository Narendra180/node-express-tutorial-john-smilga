const express = require("express");
const router = express.Router();

const {
    getPeople, 
    createPerson, 
    updatePerson,
    deletePerson 
} = require("../controllers.js/people");

router.get("/", getPeople);

router.post("/", createPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

// we can also do this way or only above way.
// router.route("/").get(getPeople).post(createPerson);
// router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;