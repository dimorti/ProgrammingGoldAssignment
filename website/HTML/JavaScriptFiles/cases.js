    

class City {
    constructor(name, newPositive, totalCases, newDeaths, totalDeaths) {
        this.name = name;
        this.newPositive = newPositive;
        this.totalCases = totalCases;
        this.newDeaths = newDeaths;
        this.totalDeaths = totalDeaths;


    }
}

var city11 = new City("Clackmannanshire",21,1601,1,60);
var city2 = new City("Dumfries & Galloway",29,3572,1,115); 
var city3 = new City("East Ayrshire",29,4795,2,177);
var city4 = new City("East Lothian",15,2141,0,84);
var city5 = new City("East Renfrewshire",36,3739,1,137,);
var city6 = new City("Na h-Eileanan Siar",9,180,0,1);
var city7 = new City("Falkirk",47,4309,1,148);
var city8 = new City("Highland",34,2614,2,56,);
var city9 = new City("Inverclyde",14,2535,1,106);
var city10 = new City("Midlothian",17,2431,2,131);
var city1 = new City("Moray",26,935,0,19,);
var city12 = new City("North Ayrshire",24,4912,3,212,);
var city13 = new City("Scottish Borders",11,2597,2,80,);
var city14 = new City("Orkney Islands",1,61,0,2);
var city15 = new City("Shetland Islands",0,210,0,9);
var city16 = new City("South Ayrshire",15,3398,1,173,);
var city17 = new City("South Lanarkshire",90,15270,4,480,);
var city18 = new City("Stirling",21,2302,1,80);
var city19 = new City("Aberdeen City",40,6155,3,199);
var city20 = new City("Aberdeenshire",28,4823,2,157);
var city21 = new City("Argyll & Bute",11,1160,1,57);
var city22 = new City("City of Edinburgh",66,13731,8,477);
var city23 = new City("Renfrewshire",48,8358,2,280);
var city24 = new City("West Dunbartonshire",35,3398,1,138);
var city25 = new City("West Lothian",51,5439,1,217);
var city26 = new City("Angus",12,2508,6,98);
var city27 = new City("Dundee City",25,5736,2,191);
var city28 = new City("East Dunbartonshire",34,4266,2,160);
var city29 = new City("Fife",56,8786,4,310);
var city30 = new City("Perth & Kinross",27,3544,2,169);
var city31 = new City("Glasgow City",184,32958,11,911);
var city32 = new City("North Lanarkshire",143,17025,15,525);


var cities = [city1 ,city2 ,city3 ,city4 ,city5 ,city6 ,city7 
    ,city8 ,city9 ,city10,city11,city12,city13,city14,city15,city16,
    city17,city18,city19,city20,city21,city22,city23,city24,
    city25,city26,city27,city28,city29,city30,city31,city32 ];



var searchInput = document.getElementById("search-input");
searchInput.addEventListener('keyup',function(){
var value = this.value;

var data = searchTable(value,cities);
buildTable(data); 

}); 


function searchTable(value, data){
    var filteredData= [];

    for(var i = 0; i < data.length; i++){
        value = value.toLowerCase();
        var name = data[i].name.toLowerCase();

        if(name.includes(value)){
            filteredData.push(data[i]);
        }
    }


    return filteredData;
}


    buildTable(cities)


        function buildTable(data){
            var table = document.getElementById("myTable");
            table.innerHTML = " ";
            for(var i = 0; i < data.length; i ++){
                var row = `<tr>
                                <td> ${cities[i].name}   </td>
                                <td> ${cities[i].newPositive}   </td>
                                <td> ${cities[i].totalCases}  </td>
                                <td> ${cities[i].newDeaths}  </td>
                                <td> ${cities[i].totalDeaths}  </td>
                                
                                
                        </tr>`

                table.innerHTML += row;
                
            }
        }



       
        
        

































































