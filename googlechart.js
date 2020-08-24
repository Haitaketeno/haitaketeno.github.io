google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
  ['event', 'person 1 no safety net', 'person 1 safety net', 'person two', 'point of no return'],
  ['start of unlucky run',  520,	,      580,		0],
  ['continuing decline',  200,		,      260,		0],
  ['we\'ve hit the bottom',  0,	0,      40,		0],
  ['recovery, but not for all',  -50,	60,      240,		0],
  ['more ups & downs',  -50, 	20,     130,		0],
  ['one can thrive again, the other is fucked',  -50, 	270,     380,		0]
]);

var options = {
  title: 'gambler\'s ruin',
  curveType: 'function',
  legend: { position: 'top', maxLines: 3 },
  series: { 0:{color: '#B61219'},
			1:{color: 'navy'},
			2:{color: 'dimgrey'},
			3:{ color: 'grey', lineDashStyle: [2,2]} 
			},
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

window.onresize = drawChart;