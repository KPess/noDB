let garage = [
    {id: 1,
    make: "Bimmer",
    model: "E30",
    year: 1989
    }
]

const getGarage = (req, res) => {
    res.status(200).json(garage)
}

const addCar = (req, res) => {
    console.log(req.body)
    garage.push(req.body)
    res.status(200).json(garage)
}
module.exports = {
    getGarage,
    addCar
}