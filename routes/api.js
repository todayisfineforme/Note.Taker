const notes = './db/db.json';

exports.route = (app, fs) =>{
    app.get('/status', (req,res) => {
        const status = {
            status: "good"
        };
        res.json(status);
    });
    app.get('/api/notes', (req,res) => {
        fs.readFile(notes, (err,data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });
    app.post('/api/notes', (req,res) => {
        fs.readFile(notes, (err,data) => {
            if (err) throw err;
            const allNotes = JSON.parse(data);
            const newNote = req.body;
            newNote["id"] = allNotes.length + 1;
            allNotes.push(newNote);
            fs.writeFile(notes, JSON.stringify(allNotes), (err) => {
                if (err) throw err;
                res.json({created: true, ...allNotes})
            });
        });
    });
    app.delete('/api/notes/:id', (req,res) => {
        fs.readFile(notes, (err,data) => {
            if (err) throw err;
            const allNotes = JSON.parse(data);
            console.log(req.params);
            const deleteID = parseInt(req.params.id);
            const index = allNotes.findIndex((element) => element.id === deleteID);
            if (index > -1){
                allNotes.splice(index,1);
                fs.writeFile(notes, JSON.stringify(allNotes), (err) => {
                    if (err) throw err;
                });
            };
            res.json({deleted: true, ...allNotes});
        });
    });
};
