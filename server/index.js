let express = require('express'),
    app = express(),
    url = '/api/garage',
    PORT_SERVER = 5000,
    controller = require('./controller');
app.use(express.json())

app.get(url, controller.getGarage)
app.post(url, controller.addCar)
app.listen(PORT_SERVER, () => {
    console.log(`Listening on ${PORT_SERVER}`)
})



