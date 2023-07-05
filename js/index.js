// кликабельная навигация
const list = document.querySelectorAll('.page-nav a')
list.forEach (item =>{
    item.addEventListener('click', (e) =>{
        list.forEach(el=>{el.classList.remove('page-nav__day_chosen');});
        item.classList.add('page-nav__day_chosen')
    })
})
//

//Изначальная функция
//const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
//function navTime(t = new Date()) {
    //let D = (t.getDate());
    //let d = days[t.getDay()];
    //return `${d}, ${D}`;   
   
//};

//Поняла, что получается хуйня и решила разделить дни недели и даты
const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
function navTime(t = new Date()) {
    //let D = (t.getDate());
    let d = days[t.getDay()];
    return `${d}`;
    //, ${D}`;   
   
};

document.querySelector('.page-nav__day-week').innerHTML = navTime(t = new Date());
function navDayTime(t = new Date()) {
    let D = (t.getDate());
    //let d = days[t.getDay()];
    return `${D}`;   
   
};
document.querySelector('.page-nav__day-number').innerHTML = navDayTime(t = new Date());

//что-то пытаюсь сделать с другими датами

let anotherDay = new Date();
function navanTime(anotherDay) {
    const date = anotherDay.getDate();
    return `${date}`;
}
anotherDay.setHours(24)
document.getElementById('index').innerHTML = navanTime(anotherDay) ;

let anotherDay1 = new Date();
function navanTime(anotherDay1) {
    const date = anotherDay1.getDate();
    return `${date}`;
}
anotherDay1.setHours(48)
document.getElementById('index1').innerHTML = navanTime(anotherDay1) ;

let anotherDay2 = new Date();
function navanTime(anotherDay2) {
    const date = anotherDay2.getDate();
    return `${date}`;
}
anotherDay2.setHours(72)
document.getElementById('index2').innerHTML = navanTime(anotherDay2) ;

let anotherDay3 = new Date();
function navanTime(anotherDay3) {
    const date = anotherDay3.getDate();
    return `${date}`;
}
anotherDay3.setHours(96)
document.getElementById('index3').innerHTML = navanTime(anotherDay3) ;

let anotherDay4 = new Date();
function navanTime(anotherDay4) {
    const date = anotherDay4.getDate();
    return `${date}`;
}
anotherDay4.setHours(120)
document.getElementById('index4').innerHTML = navanTime(anotherDay4) ;
//d1 = navTime((t = new Date()) )
//document.getElementById('index').innerHTML = navTime(t = new Date()) ;

//const d1 = new Date();
//document.querySelector('.page-nav__day-number').innerHTML = d1.getDate() ;
//document.querySelector('.page-nav__day-week').innerHTML = d1.getDay();






