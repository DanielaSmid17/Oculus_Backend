const express = require('express')
const router = express.Router();
const { patients, ObjectId } = require("../db")
const { patientSchema } = require('../validation');

router.post('/', async (req, res) => {
    const { error } = await patientSchema.validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const id = req.body.id

    const patientIdInDB = await patients().find({ id }).toArray();
    if (patientIdInDB.length !== 0)
        return res.status(400).send(`The patient ${req.body.firstName} ${req.body.lastName} has already been registered in the database`)
    await patients().insertOne(req.body)
    res.send(`Details of  ${req.body.firstName} ${req.body.lastName} have been uploaded to the system successfully`)
})

router.get('/:providerId', async (req, res) => {
    const { providerId } = req.params
    const patientsInDB = await patients().find({ providerId }).toArray();
    console.log(patientsInDB);
    res.send(patientsInDB)

})


module.exports = router