export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(newGrades instanceof Array)) {
    return 'N/A';
  }
  const studentsInCity = students.filter((student) => student.location === city);
  /* ajout notes aux étudiants */
  const updatedStudents = studentsInCity.map((student) => {
    /* Utiliser find pour trouver la note associée à l'id */
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    /* si note trouvée on l'ajoute sinon 'N/A' */
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents;
}
