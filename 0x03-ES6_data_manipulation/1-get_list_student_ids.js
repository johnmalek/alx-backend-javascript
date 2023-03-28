export default function getListStudentIds(arrayObject) {
  if(!Array.isArray(arrayObject))
  {
    return [];
  } else {
    return arrayObject.map((n => n.id));
  }
}
