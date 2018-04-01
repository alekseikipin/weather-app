window.onload = function () {
    $(document).ready(function() {
        $.getJSON('https://ipinfo.io/json', function(jsonCoord) {
        
        var coord = jsonCoord.loc.split(",");
        var lat = coord[0];
        var long = coord[1];      
          
        var api = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=1630230acb450112798d535d740d0c82&units=metric';       
        
    
          
        $.getJSON(api, function(data){
          var weatherType = data.weather[0].description;
          var weather = Math.round(data.main.temp);
          var city = data.name;
    
          $("#tempsign").on("click", function(){
            var unit = $("#tempsign").text();
            if (unit.indexOf("C") == 1) {
              $("#weather").html(Math.round(weather * 9 / 5 + 32));
              $("#tempsign").html(String.fromCharCode(176) + "F");
            } else {
              $("#weather").html(weather);
              $("#tempsign").html(String.fromCharCode(176) + "C");
            };
          });      
          
          
          $("#location").html(city);
          $("#weather").html(weather);
          $("#weathertype").html(weatherType);
          $("#tempsign").click(function () {
    
          });
          
          switch (weatherType) {
            case "clear sky":
              $("#icon").attr("data-feather","sun");
              // $("#btn").css("display", "flex");
            break;
              
            case "few clouds":
              $("#icon").attr("data-feather","cloud");
              // $("#btn").css("display", "flex");          
            break;
              
            case "scattered clouds":
              $("#icon").attr("data-feather","feather");
              // $("#btn").css("display", "flex");          
            break;
              
            case "broken clouds":
              $("#icon").attr("data-feather","cloud-lightning");
              // $("#btn").css("display", "flex");          
            break;     
              
            case "shower rain":
              $("#icon").attr("data-feather","cloud-rain");
              // $("#btn").css("display", "flex");          
            break;
              
            case "rain":
              $("#icon").attr("data-feather","umbrella");
              // $("#btn").css("display", "flex");
            break;
              
            case "thunderstorm":
              $("#icon").attr("data-feather","zap");
              // $("#btn").css("display", "flex");          
            break;
              
            case "thunderstorm with heavy rain":
              $("#icon").attr("data-feather","zap");
              // $("#btn").css("display", "flex");          
            break;          
              
            case "thunderstorm with rain":
              $("#icon").attr("data-feather","zap");
              // $("#btn").css("display", "flex");          
            break;            
              
            case "heavy intensity shower rain":
              $("#icon").attr("data-feather","zap");
              // $("#btn").css("display", "flex");          
            break;          
              
            case "snow":
              $("#icon").attr("data-feather","cloud-snow");
              // $("#btn").css("display", "flex");          
            break;     
              
            case "mist":
              $("#icon").attr("data-feather","compass");
              // $("#btn").css("display", "flex");          
            break;     
            
            default:
            $("#icon").attr("data-feather","cloud");  
            }
            feather.replace()
          });
        });
    });
};
