// определение текущей даты
let now = new Date();
let current_day = now.getDate();
let current_month = now.getMonth() + 1;

// функция получение строкового зачения текущей даты
let  date_counter = function(current_day, current_month){
    let dates_list = [];
    let temp_f = function(day, month){
        let temp_curr_day = "";
        if (day < 10){
            temp_curr_day = "0" + day.toString();
        }
        else{
            temp_curr_day = day.toString(); 
        } 
        let temp_curr_month = "";
        if (current_month < 10){
                    temp_curr_month = "0" + current_month.toString();
                }
        else{
            temp_curr_month = current_month.toString() ;
        }    
        let key_to_find = temp_curr_day + "." + temp_curr_month;
        return key_to_find
    }

    // определение дат "вчера сегодня завтра"
    dates_list.push(temp_f(current_day - 1, current_month ));
    dates_list.push(temp_f(current_day, current_month ));
    dates_list.push(temp_f(current_day + 1, current_month ));
    return dates_list
}


let list_of_dates = date_counter(current_day, current_month); // массив строковых значений дат

// функция поиска памятных дат 
let celebration_finder = function(tag_date, dates_base){
    let temp_result ='';
    for (let key in dates_base){         
        if(tag_date == dates_base[key]){
            temp_result = temp_result + ", " +  key;
        }
        else{
        }
    }
    return temp_result
}

// присваивание данных в текст страницы
let date_today =  celebration_finder(list_of_dates[1], dates_base); // вызов функции поиска памятных даты сегодня


// присваивание данных в текст страницы
if (date_today != ""){
    document.getElementById("date_today").textContent = list_of_dates[1] + " " + date_today.slice(1,length.date_today);
    document.getElementById("date_today").style.backgroundColor = "Cyan";      
}
else{
    document.getElementById("date_today").textContent = "сегодня дней рождений нет";  
}


let day_yesterday =  celebration_finder(list_of_dates[0], dates_base); // вызов функции поиска даты вчера
if (day_yesterday != ""){
    document.getElementById("date_yesterday").textContent = list_of_dates[0] + " " + day_yesterday.slice(1,length.day_yesterday);
    document.getElementById("date_yesterday").style.backgroundColor = "Cyan";
}
else{
    document.getElementById("date_yesterday").textContent = "вчера дней рождений не было";  
}


let day_tommorow =  celebration_finder(list_of_dates[2], dates_base); // вызов функции поиска даты завтра
if (day_tommorow != ""){
    document.getElementById("date_tommorow").textContent = list_of_dates[2] + " " + day_tommorow.slice(1,length.day_tommorow); 
    document.getElementById("date_tommorow").style.backgroundColor = "Cyan";
}
else{
    document.getElementById("date_tommorow").textContent = "завтра дней рождений нет";  
}


//  weather
let requesURL =  "https://api.openweathermap.org/data/2.5/weather?q=gomel&units=metric&appid=18bb4a0ebc152dd39fdeb42759651e19";
       let request = new XMLHttpRequest();
       request.open('GET', requesURL);
       request.responseType = 'json';
       request.send();
       request.onload = function(){
        let result = request.response;
        console.log(result);
        let show_weather = Math.round(result.main.temp);
        
        if (show_weather > 0){
            document.getElementById("weather").textContent = `температура +${show_weather}`;
        }
        else if(show_weather < 0){
            document.getElementById("weather").textContent = `температура -${show_weather}`;
        }
        else{
            document.getElementById("weather").textContent = `температура около 0 градусов`;
        }


        let weather_humidity = result.main.humidity;
        console.log(weather_humidity);
        document.getElementById("hUmidity").textContent = `влажность  ${weather_humidity} процентов`;
       }
