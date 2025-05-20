const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1); // Skip the header
    const fields = {};

    for (const line of students) {
      const parts = line.split(',');
      if (parts.length >= 4) {
        const firstName = parts[0];
        const field = parts[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    }

    const totalStudents = Object.values(fields)
      .reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
