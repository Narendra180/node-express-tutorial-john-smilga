const { people } = require("../../data");


const getPeople = (req,res) => {
    // console.log(req.headers,req.body)
    res.status(200).json({sucess:true,data: people});
}

const createPerson = (req,res) => {
    const { name } = req.body;
    if(!name) {
        return res.status(400).json({success:false,msg: "Please Provide name value"});
    }
    res.status(201).send({success:true,person: name});
};

const updatePerson = (req,res) => {
    const { name } = req.body;
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));

    if(!person) {
        return res.status(400).json({success:false,msg: "No person with id " + id});
    }

    const newPeople = people.map(person => {
        if(person.id === Number(id)) {
            person.name = name
        };

        return person;
    });

    res.status(200).send({success:true,data: newPeople});
}

const deletePerson = (req,res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if(!person) {
        return res.status(400).json({success:false,msg: "No person with id " + id});
    }
    const newPeople = people.filter(person => {
        if(person.id !== Number(id)) return person;
    });
    res.status(200).send({success:true,data: newPeople});
}

module.exports = {
    getPeople, 
    createPerson, 
    updatePerson,
    deletePerson 
}