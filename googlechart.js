google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['Event', 'Person 1', 'Person 2', 'Point of no return'],
  ['start of unlucky run',  480,      520,		0],
  ['continuing decline',  180,      220,		0],
  ['we\'ve hit the bottom',  -20,      20,		0],
  ['recovery, but not for all',  -50,      280,		0],
  ['more ups & downs',  -50,      130,		0],
  ['one can thrive again, the other is fucked',  -50,      480,		0]
]);

var options = {
  title: 'gambler\'s ruin',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: { 2: { color: 'grey', lineDashStyle: [2,2]} },
  vAxis: {
    gridlines: {
        color: 'transparent'
    },
	textStyle: {
		color: 'transparent'
	},
	baseline: -200
},
  hAxis: {
    gridlines: {
        color: 'transparent'
    },
	textStyle: {
		color: 'transparent'
	}
}
};

var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

chart.draw(data, options);
}