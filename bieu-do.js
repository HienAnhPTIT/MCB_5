// const chart = Highcharts.chart('container', {
//   chart: {
//     zoomType: 'xy'
//   },
//   title: {
//     text: 'Average Monthly Precipitation and Temperature in Karasjok, 2021',
//     align: 'left'
//   },
//   subtitle: {
//     text: 'Source: ' +
//       '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
//       'target="_blank">YR</a>'
//   },
//   xAxis: [{
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     crosshair: true
//   }],
//   yAxis: [{ // Primary yAxis
//     labels: {
//       format: '{value}°C',
//       style: {
//         color: Highcharts.getOptions().colors[1]
//       }
//     },
//     title: {
//       text: 'Temperature',
//       style: {
//         color: Highcharts.getOptions().colors[1]
//       }
//     }
//   }, { // Secondary yAxis
//     title: {
//       text: 'Precipitation',
//       style: {
//         color: Highcharts.getOptions().colors[0]
//       }
//     },
//     labels: {
//       format: '{value} mm',
//       style: {
//         color: Highcharts.getOptions().colors[0]
//       }
//     },
//     opposite: true
//   }],
//   tooltip: {
//     shared: true
//   },
//   legend: {
//     align: 'left',
//     x: 80,
//     verticalAlign: 'top',
//     y: 80,
//     floating: true,
//     backgroundColor:
//       Highcharts.defaultOptions.legend.backgroundColor || // theme
//       'rgba(255,255,255,0.25)'
//   },
//   series: [{
//     name: 'Humidity',
//     type: 'column',
//     yAxis: 1,
//     // data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
//     //   60.0, 28.6, 32.1],
//     tooltip: {
//       valueSuffix: ' %'
//     }

//   }, {
//     name: 'Temperature',
//     type: 'spline',
//     // data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
//     //   -0.7, -11.0, -16.4],
//     tooltip: {
//       valueSuffix: '°C'
//     }
//   }, {
//     name: 'Brightness',
//     type: 'spline',
//     // data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
//     //   60.0, 28.6, 32.1],
//     tooltip: {
//       valueSuffix: '°C'
//     }
//   }
//   ]
// });

// export function redrawChart(dataT, dataH, dataL) {
//   chart.series[0].setData(dataT);
//   chart.series[1].setData(dataH);
//   chart.series[2].setData(dataL);
// }

//tesst 2

// import { arrayTime } from "./main2.js";
const chart = Highcharts.chart("container", {
  chart: {
    zoomType: 'xy'
  },
  title: {
    text: 'Average hourly Temperature, Humidity and brightness in PTIT',
    align: 'left'
  },
  subtitle: {
    text: 'Source: ' +
      '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
      'target="_blank">YR</a>'
  },
  xAxis: [{
    categories: [],
    crosshair: true
  }],
  yAxis: [{ // Primary yAxis
    labels: {
      format: '{value}°C',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    },
    title: {
      text: 'Temperature',
      style: {
        color: Highcharts.getOptions().colors[1]
      }
    }
  }, { // Secondary yAxis
    title: {
      text: 'Humidity + Brightness',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    labels: {
      format: '{value} %',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
    opposite: true
  }],
  tooltip: {
    shared: true
  },
  legend: {
    align: 'left',
    x: 80,
    verticalAlign: 'top',
    y: 80,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || // theme
      'rgba(255,255,255,0.25)'
  },

  series: [
    {
      name: "Temperature",
      type: 'column',
      
      // data: [
      //   43, 48, 65, 81, 11, 14, 17, 16, 15,
      //   16, 15,
      // ],
      // data: arrayN
      tooltip: {
        valueSuffix: '°C'
      }
    },
    {
      name: "Humidity",
      type: 'spline',
      yAxis: 1,
      // data: [24, 37, 29, 29, 32, 30,
      //   38, 36, 33, 34, 31]
      // data: arrayN,
      tooltip: {
        valueSuffix: ' %'
      }
    },
    {
      name: "Brightness",
      type: 'spline',
      // data: [
      //   11, 30, 16, 19, 20, 24, 32, 30, 29, 29,
      //   25,
      // ],
      tooltip: {
        valueSuffix: ' %'
      }
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

export function redrawChart(dataT, dataH, dataL) {
  chart.series[0].setData(dataT);
  chart.series[1].setData(dataH);
  chart.series[2].setData(dataL);
  // console.log();
}
