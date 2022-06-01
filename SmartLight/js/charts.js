window.onload = function () {

    var chart = new CanvasJS.Chart("electro", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "dark2",
        title: {
            text: "Электроенергия"
        },
        axisX: {
            title: "Месяц",
            valueFormatString: "##",
            interval: 1
        },
        axisY: {
            logarithmic: true, //change it to false
            title: "Ватт",
            titleFontColor: "#6D78AD",
            lineColor: "#6D78AD",
            gridThickness: 0,
            lineThickness: 0,
            //includeZero: false,
            labelFormatter: addSymbols
        },
        legend: {
            verticalAlign: "top",
            fontSize: 16,
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            xValueFormatString: "##",
            yValueFormatString: "####",
            showInLegend: false,
            name: "Log Scale",
            dataPoints: [
                { x: 01, y: 72 },
                { x: 02, y: 69 },
                { x: 03, y: 61 },
                { x: 04, y: 60 },
                { x: 05, y: 71 },
                { x: 06, y: 67 },
                { x: 07, y: 12 },
                { x: 08, y: 64 },
                { x: 09, y: 63 },
                { x: 10, y: 67 },
                { x: 11, y: 70 },
                { x: 12, y: 68 }
            ]
        }]
    });
    chart.render();

    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];

        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

    var chart = new CanvasJS.Chart("money", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "dark2",
        title: {
            text: "Деньги"
        },
        axisX: {
            title: "Месяц",
            valueFormatString: "##",
            interval: 1
        },
        axisY: {
            logarithmic: true, //change it to false
            title: "Грн",
            titleFontColor: "rgb(226, 185, 1)",
            lineColor: "rgb(226, 185, 1)",
            gridThickness: 0,
            lineThickness: 0,
            //includeZero: false,
            labelFormatter: addSymbols
        },
        legend: {
            verticalAlign: "top",
            fontSize: 16,
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            color: "rgb(226, 185, 1)",
            xValueFormatString: "##",
            yValueFormatString: "####",
            showInLegend: false,
            name: "Log Scale",
            dataPoints: [
                { x: 01, y: 6.48 },
                { x: 02, y: 6.21 },
                { x: 03, y: 5.49 },
                { x: 04, y: 5.40 },
                { x: 05, y: 6.39 },
                { x: 06, y: 6.03 },
                { x: 07, y: 1.08 },
                { x: 08, y: 5.76 },
                { x: 09, y: 5.67 },
                { x: 10, y: 6.03 },
                { x: 11, y: 6.30 },
                { x: 12, y: 6 }
            ]
        }]
    });
    chart.render();

    function addSymbols(e) {
        var suffixes = ["", "K", "M", "B"];

        var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        var suffix = suffixes[order];
        return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }

}