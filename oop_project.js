"user strict";
const shortid = require("shortid");

module.exports = class Teacher {
  constructor(name, class_ids) {
    this.teacher_id = shortid.generate();
    this.name = name;
    this.classes = class_ids;
  }

  createQuiz(quiz, name, quiz_id) {}

  assignQuiz(quizId, studenId) {}

  grading_semester(student) {}
};

module.exports = class Student {
  constructor(name, class_ids) {
    this.student_id = shortid.generate();
    this.name = name;
    this.classes = classes;
  }
};

module.exports = class Class {
  constructor(name, teacher, students) {
    this.class_id = shortid.generate();
    this.name = name;
    this.teacher = teacher;
    this.students = students;
  }
};

module.exports = class Quiz {
  constructor(name, quizObj) {
    this.quiz_id = shortid.generate();
    this.name = name;
    this.quizObj = quizObj;
  }
};
