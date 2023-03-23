class HolbertonCourse {
  constructo(name, length, students) {
    if(typeof(name) === String){
      this._name = name;
    }
    if(typeof(length) === Number){
      this._length = length;
    }
    if(typeof(students) === String[]){
      this._students = students;
    }
    getName() {
      return this._name;
    }
    setName(newName) {
      if(typeof(newName) !== String) {
        throw 'Name must be a string';
      }
      this._name = newName;
    }
    getLength() {
      return this._length;
    }
    setLength(newLength) {
      if(typeof(newLength) !== Number) {
        throw 'Length must be a number;'
      }
      this._length = newLength;
    }
    getStudents() {
      return this._students;
    }
    setStudents(newStudents) {
      if(typeof(newStudents) !== String[]) {
        throw 'Students must be an array of strings';
      }
      this._students = newStudents;
    }
  }
}
