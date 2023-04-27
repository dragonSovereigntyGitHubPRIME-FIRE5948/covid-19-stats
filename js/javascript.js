Chart.register(ChartDataLabels);


// $('#fullpage').fullpage({
//     afterLoad: function (origin, destination, direction) {
//         if (destination.index == 0) {
//             s1TL.play();
//         }
//     }
// });

// DataTables
$(document).ready(function () {
    $('#bi-monthly-dataTable').DataTable({
        pagingType: 'numbers',
    });

    $('.paginate_button').addClass('s1-btn');
});

$(document).ready(function () {
    $('#location-table').DataTable({
        pagingType: 'numbers',
        pageLength: 5,
    });

    // $('.paginate_button').addClass('s1-btn');
});

// Line Chart

var lineCTX = document.getElementById('lineChart');

const lineData = {
    labels: ['Q1 2020', 'Q2 2020', 'Q3 2020', 'Q4 2020',
        'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021',
        'Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022'],
    datasets: [{
        data: [820, 8615, 913, 371, 433, 510, 26939, 13356, 347924, 137196, 66619, 33013],
        backgroundColor: [
            '#965d99'
        ],
        borderColor: [
            '#F7DCC1'
        ],
        order: 1,
    },
        // {
        //     data: [820, 8615, 913, 371, 433, 510, 26939, 13356, 347924, 137196, 66619, 33013],
        //     backgroundColor: [
        //         '#F7DCC1',
        //     ],
        //     borderColor: [
        //         '#F7DCC1'
        //     ],
        //     order: 0,
        //     type: 'line',
        // }
    ]
};

const lineChartConfig = {
    type: 'line',
    data: lineData,
    options: {

        responsive: true,
        legend: {
            display: false
        },
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'end',
                align: 'right',
                clamp: true,
                offset: 5,
                color: '#F7DCC1',
                font: {
                    size: 12
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: "#F7DCC1"
                }
            },
            y: {
                ticks: {
                    color: "#F7DCC1"
                }
            }
        }
    },
};

lineChart = new Chart(lineCTX, lineChartConfig);

// Bar Line Chart
var barlineCTX = document.getElementById('linebarChart');

const linebarData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8',
        '9', '10', '11', '12', '13', '14'],
    datasets: [{
        data: [1134, 1056, 986, 771, 756, 721, 654,
            742, 689, 512, 455, 376, 244, 103],
        backgroundColor: [
            '#d591d9',
        ],
        borderColor: [
            '#d591d9'
        ],
        order: 1,
    },
    {
        data: [1134, 1056, 986, 771, 756, 721, 654,
            742, 689, 512, 455, 376, 244, 103],
        backgroundColor: [
            '#F7DCC1',
        ],
        borderColor: [
            '#F7DCC1'
        ],
        order: 0,
        type: 'line',
    }
    ]
};

const linebarChartConfig = {
    type: 'bar',
    data: linebarData,
    options: {
        responsive: true,
        animation: {
            duration: 3000,
            easing: 'easeOutElastic',
        },
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'center',
                align: 'top',
                color: '#F7DCC1',
                font: {
                    size: 10
                }
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'December',
                    color: '#F7DCC1',
                    font: {
                        family: 'Playfair Display',
                        size: 15,
                        lineHeight: 1.8,
                    }
                },
                ticks: {
                    color: "#F7DCC1"
                },
            },
            y: {
                ticks: {
                    color: "#F7DCC1"
                },
                title: {
                    display: true,
                    text: 'No. of Cases',
                    color: '#F7DCC1',
                    font: {
                        family: 'Playfair Display',
                        size: 15,
                        lineHeight: 1.8,
                    }
                },
            }
        }
    },
};

var barlineChart = new Chart(barlineCTX, linebarChartConfig)

// Multi-series Pie
const multi_pieChart_id = document.getElementById('multi_pieChart');

const multi_pieData = {
    labels: ['Recovered', 'Died',
        'Vaccinated', 'Unvaccinated',
        'Local', 'Import',],
    datasets: [{
        data: [2141169, 1720],
        backgroundColor: [
            '#623864',
            '#bc8dbf'
        ],
        borderColor: [
            '#94618E'
        ],
        borderWidth: 0
    },
    {
        data: [2119901, 88115],
        backgroundColor: [
            '#8c578e',
            '#a571a8',
        ],
        borderColor: [
            '#94618E'
        ],
        borderWidth: 0
    },
    {
        data: [18764, 11587],
        backgroundColor: [
            '#bf84c2',
            '#d3aad5',
        ],
        borderColor: [
            '#94618E'
        ],
        borderWidth: 0
    }]
};

const multi_pieChart_config = {
    type: 'pie',
    data: multi_pieData,
    options: {
        responsive: true,
        rotation: 60,
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'center',
                align: 'right',
                color: '#F7DCC1',
                font: {
                    size: 15
                }
            },
            legend: {
                labels: {
                    generateLabels: function (chart) {
                        // Get the default label list
                        const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                        const labelsOriginal = original.call(this, chart);

                        // Build an array of colors used in the datasets of the chart
                        let datasetColors = chart.data.datasets.map(function (e) {
                            return e.backgroundColor;
                        });
                        datasetColors = datasetColors.flat();

                        // Modify the color and hide state of each label
                        labelsOriginal.forEach(label => {
                            // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                            label.datasetIndex = (label.index - label.index % 2) / 2;

                            // The hidden state must match the dataset's hidden state
                            label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                            // Change the color to match the dataset
                            label.fillStyle = datasetColors[label.index];
                        });

                        return labelsOriginal;
                    },
                    color: '#F7DCC1'
                },
                onClick: function (mouseEvent, legendItem, legend) {
                    // toggle the visibility of the dataset from what it currently is
                    legend.chart.getDatasetMeta(
                        legendItem.datasetIndex
                    ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
                    legend.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                        return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#F7DCC1"
                    }
                },
                y: {
                    ticks: {
                        color: "#F7DCC1"
                    }
                }
            },
        }
    },
};

var multipie_Chart = new Chart(multi_pieChart_id, multi_pieChart_config);

// Staggered Pie

// Pie
const pieData = {
    labels: ['Community', 'Workers Dormitories', 'Import',],
    datasets: [{
        data: [2030, 40, 9],
        backgroundColor: [
            '#623864',
            '#8c578e',
            '#bf84c2'
        ],
        borderColor: [
            '#94618E'
        ],
        borderWidth: 0
    },]
};

const pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        rotation: 50,
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'end',
                align: 'left',
                color: '#F7DCC1',
                font: {
                    size: 15
                }
            },
            legend: {
                labels: {
                    generateLabels: function (chart) {
                        // Get the default label list
                        const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
                        const labelsOriginal = original.call(this, chart);

                        // Build an array of colors used in the datasets of the chart
                        let datasetColors = chart.data.datasets.map(function (e) {
                            return e.backgroundColor;
                        });
                        datasetColors = datasetColors.flat();

                        // Modify the color and hide state of each label
                        labelsOriginal.forEach(label => {
                            // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                            label.datasetIndex = (label.index - label.index % 2) / 2;

                            // The hidden state must match the dataset's hidden state
                            label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                            // Change the color to match the dataset
                            label.fillStyle = datasetColors[label.index];
                        });

                        return labelsOriginal;
                    },
                    color: '#F7DCC1'
                },
                onClick: function (mouseEvent, legendItem, legend) {
                    // toggle the visibility of the dataset from what it currently is
                    legend.chart.getDatasetMeta(
                        legendItem.datasetIndex
                    ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
                    legend.chart.update();
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
                        return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: "#F7DCC1"
                    }
                },
                y: {
                    ticks: {
                        color: "#F7DCC1"
                    }
                }
            }
        }
    },
});

//Doughnut Chart - Vaccinated

var donutCTX = document.getElementById('doughnutChart');

const doughnutData = {
    labels: [
        "2 or more doses",
        "Full Regime",
        "Unvaccinated",
    ],
    datasets: [{
        data: [80, 16, 4],
        borderColor: '#975e90',
        borderWidth: 3,
        cutout: 70,
        backgroundColor: [
            "#492447",
            "#623864",
            "#F7DCC1",
        ],
    }]
};

const donutChartConfig = {
    type: 'doughnut',
    data: doughnutData,
    options: {
        responsive: true,
        rotation: 100,
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            }
        }
    },
    plugins: [{
        id: 'text',
        beforeDraw: function (chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 100);
            ctx.font = fontSize + "em Playfair Display";
            ctx.fillStyle = '#F7DCC1'
            ctx.textBaseline = "middle";

            var text = "96%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.7;

            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    }]
};

var donutChart = new Chart(donutCTX, donutChartConfig);

//Waffle Chart - 
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

options = {
    series: [
        {
            name: 'Unvaccinated',
            data: generateData(10, {
                min: 12,
                max: 12,
            })
        },
        {
            name: 'Fully Vaccinated',
            data: [{
                x: 'W1',
                y: 87
            }, {
                x: 'W2',
                y: 87
            }, {
                x: 'W3',
                y: 87
            }, {
                x: 'W4',
                y: 87
            }, {
                x: 'W4',
                y: 87
            }, {
                x: 'W4',
                y: 87
            }, {
                x: 'W4',
                y: 87
            }, {
                x: 'W4',
                y: 88
            }, {
                x: 'W4',
                y: 12
            }, {
                x: 'W4',
                y: 12
            }]
        },
        {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        }, {
            name: 'Fully Vaccinated',
            data: generateData(10, {
                min: 87,
                max: 87
            })
        },
    ],
    chart: {
        height: 320,
        width: 280,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#94618E"],
    title: {
        text: 'HeatMap Chart (Single color)'
    },
    xaxis: {
        labels: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    stroke: {
        colors: ["#975e90"],
        width: 6,
    },
    legend: {
        show: true,
        showForSingleSeries: true,
    },
    plotOptions: {
        heatmap: {
            shadeIntensity: 0,
            // radius: 0,
            // useFillColorAsStroke: true,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 87,
                    name: 'Fully Vaccinated',
                    color: '#492447'
                },
                {
                    from: 88,
                    to: 88,
                    name: 'At least 1 dose',
                    color: '#623864'
                },
                {
                    from: 12,
                    to: 12,
                    name: 'Unvaccinated',
                    color: '#F7DCC1'
                },
                ]
            }
        }
    },
    title: {
        text: ''
    },
    tooltip: {
        y: {
            formatter: 'm',
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
    },
};

var chart = new ApexCharts(document.querySelector("#waffleChart"), options);
chart.render();

// Bar - Age Group
const barData = {
    labels: [
        "12 - 29",
        "30 - 59",
        "60+",
    ],
    datasets: [{
        label: "Minimum Protection (3 Doses)",
        backgroundColor: "#492447",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [87, 90, 87]
    },
    {
        label: "Full Regime",
        backgroundColor: "#623864",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [77, 65, 62]
    },
    {
        label: "Unvaccinated",
        backgroundColor: "#F7DCC1",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [14, 10, 15]
    },
    ]
};


const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: barData,
    options: {
        responsive: true,
        animations: {
            duration: 5000,
            easing: 'linear',
            // from: 1,
            // to: 0,
            // loop: true
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "#F7DCC1"
                }
            },
            x: {
                ticks: {
                    color: "#F7DCC1"
                }
            },
            yAxes: [{
                barPercentage: 1.0,
                categoryPercentage: 1.0,
            }],
        },
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            }
        }
    },
});

// Tipply.js //
const bedok = document.getElementById('bedok-content');
const bukit_batok = document.getElementById('bukitbatok-content');
const bukit_merah = document.getElementById('bukitmerah-content');
const cck = document.getElementById('cck-content');
const clementi = document.getElementById('clementi-content');
const geylang = document.getElementById('geylang-content');
const hougang = document.getElementById('hougang-content');
const jurong = document.getElementById('jurong-content');
const marine_parade = document.getElementById('marineparade-content');
const outram = document.getElementById('outram-content');
const pasir_ris = document.getElementById('pasirris-content');
const pioneer = document.getElementById('pioneer-content');

tippy('#Bedok', {
    content: bedok.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#BukitBatok', {
    content: bukit_batok.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#CCK', {
    content: cck.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Clementi', {
    content: clementi.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Pioneer', {
    content: pioneer.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Jurong', {
    content: jurong.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#MarineParade', {
    content: marine_parade.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Geylang', {
    content: geylang.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Hougang', {
    content: hougang.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Pasir_Ris', {
    content: pasir_ris.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Bukit_Merah', {
    content: bukit_merah.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});

tippy('#Outrams', {
    content: outram.innerHTML,
    allowHTML: true,

    placement: 'right-start',
    arrow: true,
    animation: 'scale',
    inertia: true,
    theme: 'centre',
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slides", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active-slides";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slides", "");
    }
    slides[slideIndex2 - 1].style.display = "flex";
    dots[slideIndex2 - 1].className += " active-slides";
}

document.getElementById('allDeaths').onclick = function () {
    slideIndex2 = 1
    showSlides2(slideIndex2)
};

document.getElementById('statusDeaths').onclick = function () {
    slideIndex2 = 4
    showSlides2(slideIndex2)
};

document.getElementById('ageDeaths').onclick = function () {
    slideIndex2 = 3
    showSlides2(slideIndex2)
};

document.getElementById('agestatusDeaths').onclick = function () {
    slideIndex2 = 2
    showSlides2(slideIndex2)
};

document.getElementById('statusDeaths2').onclick = function () {
    slideIndex2 = 4
    showSlides2(slideIndex2)
};

document.getElementById('ageDeaths2').onclick = function () {
    slideIndex2 = 3
    showSlides2(slideIndex2)
};

document.getElementById('allDeaths2').onclick = function () {
    slideIndex2 = 1
    showSlides2(slideIndex2)
};

// Pie - Age Deaths
// const piePlugins = {

// }

var donutAgeDeathCTX = document.getElementById('donutAgeDeaths');

const donutAgeDeathsData = {
    labels: ['80+', '70 - 79', '60 - 69', '50 - 59', '40 - 49', '20 - 29'],
    datasets: [{
        data: [63, 21, 12, 3, 0.8, 0.2],
        borderColor: '#452447',
        borderWidth: 6,
        cutout: 110,
        backgroundColor: [
            '#623864',
            '#824a82',
            '#a25da2',
            '#b57db5',
            '#c69dc8',
            '#ecdfec'
        ],
    }]
};

const donutAgeDeathsConfig = {
    type: 'doughnut',
    data: donutAgeDeathsData,
    options: {
        responsive: true,
        rotation: 110,
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            }
        }
    },
    plugins: [{
        id: 'text',
        beforeDraw: function (chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 100);
            ctx.font = fontSize + "em Playfair Display";
            ctx.fillStyle = '#F7DCC1'
            ctx.textBaseline = "middle";

            var text = "96%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.8;

            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    }]
};

var donutAgeDeathsChart = new Chart(donutAgeDeathCTX, donutAgeDeathsConfig);

const donutStatusDeathsData = {
    labels: ['Unvaccinated', 'Minimum Protection', 'Full Regime'],
    datasets: [{
        data: [95, 4.1, 0.9],
        borderColor: '#452447',
        borderWidth: 6,
        cutout: 110,
        backgroundColor: [
            '#623864',
            '#814983',
            '#c69dc8',
        ],
    }]
};

// const labelStatusDeathsTooltip = (tooltipItems, data) => {
//     if(tooltipItem.datasetIndex.datalabels === 0) {
//         return 'ok'
//     } 
//     else {
//         return 'mmm'
//     }
// }

const donutStatusDeathsChart = new Chart(document.getElementById('donutStatusDeaths'), {
    type: 'doughnut',
    data: donutStatusDeathsData,
    options: {
        responsive: true,
        rotation: 70,
        plugins: {
            datalabels: {
                display: false,
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            },
            // tooltip: {
            //     callbacks: {
            //         label: function (tooltipItem, data) {
            //             var indice = tooltipItem.index;
            //             return " person visited " + data.labels[indice] + ' times';
            //         }
            //     }
            // }
        }
    },
    plugins: [{
        id: 'text',
        beforeDraw: function (chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 100);
            ctx.font = fontSize + "em Playfair Display";
            ctx.fillStyle = '#F7DCC1'
            ctx.textBaseline = "middle";

            var text = "78%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.8;

            ctx.fillText(text, textX, textY);
            ctx.save();
        },
    }]
});


// Line Chart
const lineDeathsData = {
    labels: ["21' Sept", "21' Oct", "21' Nov", "21' Dec",
        "22' Jan", "22' Feb", "22' Mar", "22' Apr", "22' May", "22' Jun",
        "22' Jul", "22' Aug", "22' Sept", "22' Oct", "22' Nov", "22' Dec"],
    datasets: [{
        data: [4, 14, 129, 63, 32, 6, 52, 92, 37, 32, 4, 34, 32, 8, 17, 13, 2],
        backgroundColor: [
            '#965d99'
        ],
        borderColor: [
            '#F7DCC1'
        ],
        order: 1,
        fill: true
    },
    ]
};

//line deaths
const lineDeathsChart = new Chart(document.getElementById('lineDeaths'), {
    type: 'line',
    data: lineDeathsData,
    animation: {
        duration:100000,
        easing: 'linear',
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'end',
                align: 'right',
                clamp: true,
                offset: 5,
                color: '#F7DCC1',
                font: {
                    size: 12
                }
            },
            legend: {
                display: false
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#F7DCC1"
                }
            },
            y: {
                ticks: {
                    color: "#F7DCC1"
                }
            }
        }
    },
});

const stackedAgeDeathData = {
    labels: ['80+', '70 - 79', '60 - 69', '50 - 59', '40 - 49', '20 - 29'],
    datasets: [{
        label: "Full Regime",
        backgroundColor: "#623864",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [78, 92, 96, 20, 0, 0]
    },
    {
        label: "Minimum Protection",
        backgroundColor: "#814983",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [11, 4, 2, 40, 50, 50]
    },
    {
        label: "Unvaccinated",
        backgroundColor: "#c69dc8",
        borderWidth: 0,
        categoryPercentage: 0.8,
        barPercentage: 1,
        data: [11, 4, 2, 30, 50, 50]
    }
    ]
};

const stackedAgeDeathChart = new Chart(document.getElementById('stackedAgeDeaths'), {
    type: 'bar',
    data: stackedAgeDeathData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                stacked: true,
                ticks: {
                    color: "#F7DCC1"
                }
            },
            x: {
                stacked: true,
                ticks: {
                    color: "#F7DCC1"
                }
            },
            yAxes: [{
                barPercentage: 1.0,
                categoryPercentage: 1.0,
            }],
        },
        plugins: {
            datalabels: { // This code is used to display data values
                anchor: 'center',
                align: 'center',
                color: '#F7DCC1',
                font: {
                    size: 15
                }
            },
            legend: {
                labels: {
                    color: '#F7DCC1'
                }
            }
        }
    },
});

// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: '#1f1f1f',
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: true,
        paddingTop: '100px',
        sectionsColor: ['#452447', '#975e90', '#F4DEC8'],
        anchors: ['section1', 'section2', 'section3'],

        afterLoad: function (origin, destination, direction) {
            if (destination.index === 0) {
                s1TL.play();
                // multipie_Chart = new Chart(multi_pieChart_id, multi_pieChart_config);
                // lineChart = new Chart(lineCTX, lineChartConfig);
            }
            else if (destination.index === 1) {
                s2TL.play();
                donutChart = new Chart(donutCTX, donutChartConfig);
            }
        },

        onLeave: function (origin, destination, direction) {
            if (destination.index != 0) {
                s1logoreverse.play();

                // s1
                // multipie_Chart.destroy();
                // lineChart.destroy();

                // s2
                donutChart.destroy();
            }
        },

        afterSlideLoad: function(section, origin, destination, direction) {
            if (destination.index == 1) {
                barlineChart = new Chart(barlineCTX, linebarChartConfig);
            }
        },

        onSlideLeave: function(section, origin, destination, direction) {
            if (destination.index != 1) {
                barlineChart.destroy();
            }
        }
    });
});


