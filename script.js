function gradeStudents() {
    const students = [
        { name: "Daria", grade: 100 },
        { name: "Daniel", grade: 75},
        { name: "Veronica", grade: 64},
        { name: "Nick", grade: 40}
    ]

    for (let i = 0; i < students.length; i++) {
        let score = students[i].grade;
        let letter;

        if (score > 90) {
            letter = "A";
        } else if (score > 70) {
            letter = "B";
        } else if (score > 50) {
            letter = "C";
        } else {
            letter = "F";
        }

        console.log(`${students[i].name} has grade ${score}, which is letter ${letter}`)
    }
}

gradeStudents();