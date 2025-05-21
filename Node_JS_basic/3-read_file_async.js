const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Enlever l'en-tête

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
      .reduce((sum, curr) => sum + curr.length, 0);

    // 🧵 Construction de la chaîne à retourner
    let output = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    // On retourne la chaîne au lieu de faire console.log()
    return output;

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
