import Models from '../Models/db';

const modifyentry = function (req, res) {
    const id = parseInt(req.params.id, 10);
    let EntryFound;
    let item;
    Models.map((db, index) => {
      if (db.id === id) {
        EntryFound = db;
        item = index;
      }
    });
  
    if (!EntryFound) {
      return res.status(404).send({
        success: 'false',
        message: 'ID of entry is not found',
      });
    }
  
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
  
    const modifyentry = {
      id: EntryFound.id,
      title: req.body.title || EntryFound.title,
      description: req.body.description || EntryFound.description,
    };
  
    Models.splice(item, 1, modifyentry);
  
    return res.status(201).send({
      success: 'true',
      message: 'This entry has already modified',
      modifyentry,
    });
  };
  export default modifyentry;
