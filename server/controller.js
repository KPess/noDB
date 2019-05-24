const garage = [
    {
        id: 1,
        make: "BMW",
        model: "325i",
        year: 1989,
        nickname: "Rogue 3",
        projects: ["Misfire ", "Air Conditioning"],
        displayProjects: false
      },
      {
        id: 2,
        make: "Scion",
        model: "xB",
        year: 2009,
        nickname: "Brave Little Toaster",
        projects: ["Headlamp ", "Bumper"],
        displayProjects: false
      }
    ]

let id=3;
const getGarage = (req, res) => {
    res.status(200).json(garage)
}

const addCar = (req, res) => {
    console.log(req.body)
    garage.push({...req.body, id: id});
    id++;
    res.status(200).json(garage)
}

const updateCar = (req, res) => {
    
}
const deleteCar = (req, res) => {

}
const updateProject = (req, res) => {

}
const deleteProject = (req, res) => {

}

module.exports = {
    getGarage,
    addCar
}