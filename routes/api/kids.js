const express = require("express");
const Kids = require("../../models/Kid");

const Works = require("../../models/Work");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const router = express.Router();
// @route POST /api/kids
// @desc Register user
// @access Private

router.post("/registerkid", (req, res) => {
  // console.log('req: ', req.body);
  // console.log('res: ', res);
  const { errors, isValid } = validateRegisterkidInput(req.body);
  console.log("errors: ", errors);
  console.log("isValid: ", isValid);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Kid.findOne({ name: req.body.name }).then((kid) => {
    console.log("user: ", kid);
    if (kid) {
      return res.status(400).json({ name: "name already exist" });
    } else {
      const newKid = new Kid({
        name: req.body.name,
      });

      if (err) throw err;
      newUser.password = hash;
      console.log("newUser: ", newUser);
      newkid
        .save()
        .then((kid) => res.json(kid))
        .catch((err) => console.log(err));
    }
  });
});
// @route POST /api/kids
// @desc assign work to kid
// @access Private

router.post("/assignwork", (req, res) => {
  // console.log('req: ', req.body);
  // console.log('res: ', res);
  const { errors, isValid } = validateAssignWorkInput(req.body);
  console.log("errors: ", errors);
  console.log("isValid: ", isValid);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newWork = new Work({
    name: req.body.name,
    work: req.body.work,
    money: req.body.money,
  });
  newWork
    .save()
    .then((work) => res.json(work))
    .catch((err) => console.log(err));
  console.log("work added");
});
// @route POST /api/kids
// @desc assigned to done
// @access Private

router.post("/assignedtodone", (req, res) => {
  const name = req.body.name;
  const work = req.body.work;
  const money = req.body.money;
  Kid.findOne({ name: name, work: work, money: money }).then((kid) => {
    if (!kid) {
      return res.status(404).json({ name: "Kid not found" });
    }
    var ID = kid.id;
    Kid.updateOne({ _id: ID }, { $set: { status: done } }).then(
      (kid) => {
        res.json(kid);
      }
    );
  });
});
