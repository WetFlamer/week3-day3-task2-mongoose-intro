const Student = require('../models/Student.model')
module.exports.StudentsController = {
    getStudents: function (req, res) {
      Student.find().then(student => {res.json(student)})
    },
    addStudents: function (req, res) {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age // возраст
          }).then(() => {
            res.json("Студент добавлен")
          })
    },
    deleteStudents: function (req, res) {
      Student.findByIdAndRemove(req.params.studentId).then(student => {res.json(student)})
    },
    
    updateStudents: function (req, res) {
      Student.findByIdAndUpdate(
        req.params.studentId, {
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age

      },
      {new: true}).then(student => {res.json(student)})
    },
  };