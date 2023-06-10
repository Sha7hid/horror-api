const { horror } = require("../models/horror");

const getAllHorror = (req, res, next) => {
  horror.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
};

const saveHorror = (req, res, next) => {
  const hor = new horror({
    name: req.body.name,
    rating: req.body.rating,
    release_year: req.body.release_year,
    image: req.body.image,
  });
  hor.save((err, data) => {
    if (!err) {
      res
        .status(200)
        .json({
          code: 200,
          message: "Horror Movie Added Successfully",
          addhorror: data,
        });
    } else {
      console.log(err);
    }
  });
};

const getHorror = (req, res, next) => {
  horror.findById(req.params.id, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
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
    { new: true },
    (err, data) => {
      if (!err) {
        res
          .status(200)
          .json({
            code: 200,
            message: "Horror Movie Updated Successfully ",
            updatehorror: data,
          });
      } else {
        console.log(err);
      }
    }
  );
};

const deleteHorror = (req, res, next) => {
  horror.findByIdAndDelete(req.params.id, (err, data) => {
    if (!err) {
      res
        .status(200)
        .json({
          code: 200,
          message: "Horror Movie Deleted Successfully",
          deletehorror: data,
        });
    } else {
      console.log(err);
    }
  });
};

module.exports = {
  getAllHorror,
  saveHorror,
  getHorror,
  updateHorror,
  deleteHorror,
};
