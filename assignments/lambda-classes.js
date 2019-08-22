class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}I am from ${this.location}`;
    }
}
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.specialty = attributes.specialty
        this.favLanguage = attributes.favLanguage
        this.catchPhrase = attributes.catchPhrase
    }
    demo() {
        console.log(`Today we will be lerning about ${subject}.`)
    }
    grade() {
        return `${student.name} receives a perfect score on ${subject}`
    }
}
class Students extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects() {
        this.favSubjects.array.forEach((element) => {

        });
    }
    PRAssignment() {

    }
    sprintChallange() {

    }
}
class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradeClassName = attributes.gradeClassName
        this.favInstructor = attributes.favInstructor
    }
    standup() {

    }
    debug

}









//Students///////////Start////////////////////Here/////////////////////////////////////!!





const fn = (arg) => arg + 1