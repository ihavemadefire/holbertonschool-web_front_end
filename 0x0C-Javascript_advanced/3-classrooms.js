function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }
    let i;
    let students = [];
    for (i = 0; i < numbersOfStudents + 1; i++) {
        let student = studentSeat(i + 1);
        students.push(student);
    }
    return students;
}

let classRoom = createClassRoom(10);