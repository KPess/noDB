let express = require('express'),
    app = express(),
    url = '/api/garage',
    PORT_SERVER = 5000,
    controller = require('./controller');
app.use(express.json())

app.get(url, controller.getGarage)
app.post(url, controller.addCar)
//app.put(url, controller.updateCar)
app.delete (`${url}/:id`, controller.deleteCar)
//app.put(url, controller.updateProject)
//app.delete (url, controller.deleteProject)
//app.post (url, controller.addProject)


app.listen(PORT_SERVER, () => {
    console.log(`Listening on ${PORT_SERVER}`);
})



