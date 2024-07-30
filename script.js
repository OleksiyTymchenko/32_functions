"use strict;" 

//1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), 
//підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), 
//передбач можливість введення невірних даних.

const user_age = prompt('Please enter your age');

if(user_age >= 0 && user_age <= 11){
        alert('Дитина');
}else if(user_age >= 12 && user_age <= 17){
        alert('Підліток');
}else if(user_age >= 18 && user_age <= 59){
        alert('Дорослий');
}else if(user_age >= 60 && user_age <= 120){
        alert('Пенсіонер');
}else{
        alert('Данні введено не корректно!');
}

//2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д)
const current_user_number = prompt('Please, enter your number', ' ');

switch (current_user_number) {
        case '1':
                alert('!');
                break;
        case '2':
                alert('@');
                break;
        case '3':
                alert('#');
                break;
        case '4':
                alert('$');
                break;
        case '5':
                alert('%');
                break;
        case '6':
                alert('^');
                break;
        case '7':
                alert('&');
                break;
        case '8':
                alert('*');
                break;
        case '9':
                alert('(');
                break;
        case '0':
                alert(')');
                break;

        default:
                break;
}
// 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const range_start = +prompt('Enter first number in a range');
const range_end = +prompt('Enter last number in a range');

let range_number = 0;

  for (let i = range_start; i <= range_end; i++) {
        range_number += i;
    console.log(`${range_number}`)
  }

  alert(`${range_number}`)

//4 Запитай у користувача число і виведи всі дільники цього числа.

const user_number = prompt(`Enter your number`);

for (let i = 1; i <= user_number; i++) {
        if (user_number % i === 0) {
          console.log(i);
        }
      }
