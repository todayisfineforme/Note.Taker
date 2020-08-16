const notes = require('../db/db.json');

exports.route = (app,fs) =>{
    app.get('/status', (req,res) => {
        const status = {
            status: "good"
        }
        res.json(status);
    });
};