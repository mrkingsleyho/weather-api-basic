//URL https://api.openweathermap.org/data/2.5/weather?q=orlando&units=imperial&appid=5504a0540e147aca5a89bc2014ecbebc
//API KEY 5504a0540e147aca5a89bc2014ecbebc
// Using US City = Orlando 
// Changed units to imperial

// click to change text style
$(document).ready(function(){
  $('h1').on({
    click: function(){
      $(this).css("background-color", "skyblue");
      $(this).css("font-size", "24px");
      $(this).css("color", "lightyellow");
      $(this).css("font-family", "verdana");
      $(this).text("Weather API, thanks for clicking!");
    }  
  });

  $('h2').on({
    click: function(){
      $(this).css("background-color", "black");
      $(this).css("font-size", "24px");
      $(this).css("color", "lightyellow");
      $(this).css("font-family", "verdana");
      $(this).text("Phoenix Weather, thanks for clicking!");
    }  
  });

});

$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=phoenix&units=imperial&appid=5504a0540e147aca5a89bc2014ecbebc', function(data) {

  console.log(data);

  var icon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
  var temp = Math.floor(data.main.temp);
  var weather = (data.weather[0].main);
  var city = (data.name);

  $('.icon').attr('src', icon);
  $('.temp').append(temp + '&#176;');
  $('.weather').append(weather);
  $('.city').append(city);

});