window.onload = function () {

    var chart1 = new CanvasJS.Chart("chartContainer1", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Тренированность"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 60, label: "False" },
                { y: 40, label: "True" }
            ]
        }]
    });
    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        title: {
            text: "Количество корма"
        },
        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Граммы корма",
            includeZero: false,
            valueFormatString: "0000",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function (e) {
                    return CanvasJS.formatNumber(e.value, "0")+ " г.";
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "0##г.",
            dataPoints: [
                { x: new Date(2016, 07, 01), y: 200},
                { x: new Date(2016, 07, 02), y: 100},
                { x: new Date(2016, 07, 03), y: 54},
                { x: new Date(2016, 07, 04), y: 42},
                { x: new Date(2016, 07, 05), y: 235},
                { x: new Date(2016, 07, 08), y: 25},
                { x: new Date(2016, 07, 09), y: 67},
                { x: new Date(2016, 07, 10), y: 35},
                { x: new Date(2016, 07, 11), y: 37},
                { x: new Date(2016, 07, 12), y: 79},
                { x: new Date(2016, 07, 15), y: 08},
                { x: new Date(2016, 07, 16), y: 76},
                { x: new Date(2016, 07, 17), y: 86},
                { x: new Date(2016, 07, 18), y: 37},
                { x: new Date(2016, 07, 19), y: 08},
                { x: new Date(2016, 07, 22), y: 70},
                { x: new Date(2016, 07, 23), y: 53},
                { x: new Date(2016, 07, 24), y: 35},
                { x: new Date(2016, 07, 25), y: 24},
                { x: new Date(2016, 07, 26), y: 311},
                { x: new Date(2016, 07, 29), y: 100},
                { x: new Date(2016, 07, 30), y: 114},
                { x: new Date(2016, 07, 31), y: 145}
            ]
        }]
    });
    chart1.render();
    chart2.render();

}