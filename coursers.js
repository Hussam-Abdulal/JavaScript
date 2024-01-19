const coursers = [
    {
        title: 'JavaScript for experts',
        number: 2522
    },
    {
        title: 'ddddd for experts',
        number: 7865
    },
    {
        title: 'Jaaaa for experts',
        number: 0000
    }
];

function initPage() {
    listCourses();
}

function listCourses() {
    coursers.forEach((course) => {
        console.log(course);
    });
}

document.addEventListener('DOMContentLoaded', initPage);

console.log(coursers); 
