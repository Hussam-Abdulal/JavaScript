const coursers = [
    {
        title: 'JavaScript for eperts',
        number: 2522
    },
    {
        title: 'ddddd for eperts',
        number: 7865
    },
    {
        title: 'Jaaaa for eperts',
        number: 4566
    },
    

]

function initPage() {
    listCourser();
}

function listCourser() {
    coursers.forEach((course) => {
        console.log(course);
    });
    
}
 document.addEventListener('DomContentLoad', init