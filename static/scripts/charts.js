
function ChartSetup(element, adata) {
    let el = element.className;
    // <block:setup:1>
    let runs = adata.running_distance;
    let labels = [];
    let numbers = [];
    for (let i = 1; i < runs.length; i++) {
        if (runs[i] > 0) {
            labels.push(GetMonth(i));
            numbers.push(runs[i]);
        }
    }
    const data = {
        labels: labels,
        datasets: [{
            label: 'Gazo kiekis',
            data: numbers,
            backgroundColor: [
                '#9c0a0cb9',
            ],
            borderColor: [
                '#9c0a0c',
            ],
            borderWidth: 1
        }]
    };
    // </block:setup>

    // <block:config:0>
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value, index, values) {
                            return value + " km.";
                        }
                    }
                }

            },
        },
    };
    // </block:config>
    var myChart = new Chart(
        document.getElementById(el),
        config
    );
}

function GetMonth(n) {
    switch (n) {
        case 1:
            return "Sausis";
            break;
        case 2:
            return "Vasaris";
            break;
        case 3:
            return "Kovas";
            break;
        case 4:
            return "Balandis";
            break;
        case 5:
            return "Gegužė";
            break;
        case 6:
            return "Birželis";
            break;
        case 7:
            return "Liepa";
            break;
        case 8:
            return "Rugpjūtis";
            break;
        case 9:
            return "Rugsėjis";
            break;
        case 10:
            return "Spalis";
            break;
        case 11:
            return "Lapkritis";
            break;
        case 12:
            return "Gruodis";
            break;
    }

}