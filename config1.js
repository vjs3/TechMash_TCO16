var htmlDoughnut = document.getElementById("html").getContext("2d");
var cssDoughnut = document.getElementById("css").getContext("2d");
var jsDoughnut = document.getElementById("js").getContext("2d");

var htmlData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];

var cssData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];

var jsData = [
  {
    value: 90,
    color:"#74cfae"
  },
  {
    value : 10,
    color : "#f2f2f2"
  }
];


var myHTMLdoughnut = new Chart(htmlDoughnut).Doughnut(htmlData, {
  percentageInnerCutout : 80
});

var myCSSdoughnut = new Chart(cssDoughnut).Doughnut(cssData, {
  percentageInnerCutout : 80
});

var myJSdoughnut = new Chart(jsDoughnut).Doughnut(jsData, {
  percentageInnerCutout : 80
});