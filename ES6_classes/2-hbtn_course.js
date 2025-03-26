export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    }
    if (!students.every((student) => typeof student === 'string')) {
      throw new Error('Each student must be a string');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(NewName) {
    if (typeof NewName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = NewName;
  }

  get length() {
    return this._length;
  }

  set length(NewLength) {
    if (typeof NewLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = NewLength;
  }

  get students() {
    return this._students;
  }

  set students(NewStudents) {
    if (!Array.isArray(NewStudents)) {
      throw new TypeError('Students must be an array');
    }
    if (!NewStudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Student must be an array of string');
    }
    this._students = NewStudents;
  }
}
