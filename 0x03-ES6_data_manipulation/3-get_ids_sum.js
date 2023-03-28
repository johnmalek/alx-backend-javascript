export default function(students) {
  const reduced = students.reduce((sum, val) => {
    return sum + val.id;
  }, 0);
  return reduced;
}
