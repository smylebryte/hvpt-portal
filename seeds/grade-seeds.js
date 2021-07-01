const { Grade } = require("../models");

const gradeData = [
  {
    grade: 0.85,
    module_id: 1,
    student_id: 3,
  },
  {
    grade: 0.9,
    module_id: 2,
    student_id: 2,
  },
  {
    grade: 0.75,
    module_id: 3,
    student_id: 4,
  },
  {
    grade: 0.82,
    module_id: 5,
    student_id: 3,
  },
  {
    grade: 0.7,
    module_id: 2,
    student_id: 5,
  },
];

const seedGrades = () => Category.bulkCreate(gradeData);

module.exports = seedGrades;