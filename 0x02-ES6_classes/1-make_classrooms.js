import ClassRoom from './0-classroom.js';
const classroomObjects = [];
function initializeRooms() {
  classroomObjects.push(ClassRoom(19));
  classroomObjects.push(ClassRoom(20));
  classroomObjects.push(ClassRoom(21));

  return classroomObjects;
}
