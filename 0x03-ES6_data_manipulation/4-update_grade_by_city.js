/*eslint-disable*/
export default function updateStudentGradeByCity(students, city, newGrades){
  const cityStud = students.filter(n => n.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  return cityStud;
}
