const { horror } = require("../models/horror");

const getAllHorror = (req, res, next) => {
  horror.find().then(function(data){
      res.send(data);
    }).catch(function(err) {
      console.log(err);
    });

};


const saveHorror = (req, res, next) => {
  const hor = new horror({
    name: req.body.name,
    rating: req.body.rating,
    release_year: req.body.release_year,
    image: req.body.image,
  });
  hor.save().then(function(data){
      res
        .status(200)
        .json({
          code: 200,
          message: "Horror Movie Added Successfully",
          addhorror: data,
        });
        
       }).catch(function(err) {
          console.log(err);
        });

};

const getHorror = (req, res, next) => {
  horror.findById(req.params.id).then(function(data) {
      res.send(data);
    }).catch(function(err){ 
      console.log(err);
    });
  
};

const updateHorror = (req, res, next) => {
  const hor = {
    name: req.body.name,
    rating: req.body.rating,
    release_year: req.body.release_year,
    image: req.body.image,
  };
  horror.findByIdAndUpdate(
    req.params.id,
    { $set: hor },
    { new: true }).then(function(data)  {
     
        res
          .status(200)
          .json({
            code: 200,
            message: "Horror Movie Updated Successfully ",
            updatehorror: data,
          });
      }).catch(function(err) {
        console.log(err);
      })
  
};

const deleteHorror = (req, res, next) => {
  horror.findByIdAndDelete(req.params.id).then(function(data) {
      res
        .status(200)
        .json({
          code: 200,
          message: "Horror Movie Deleted Successfully",
          deletehorror: data,
        });
    }).catch(function(err) {
      console.log(err);
    })

};

module.exports = {
  getAllHorror,
  saveHorror,
  getHorror,
  updateHorror,
  deleteHorror,
};
