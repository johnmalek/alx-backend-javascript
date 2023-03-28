export default function getStudentsByLocation(students, city) {
  const filteredArray = students.filter(n => city === n.location);
  return filteredArray;
}
