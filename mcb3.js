
// $(document).ready(function () {
//     var x = document.getElementById("nhiet-do").innerHTML = Math.floor(Math.random() * 101);
    
//     document.getElementById("do-am").innerHTML= Math.floor(Math.random() * 101)+'%';
//     document.getElementById("anh-sang").innerHTML= Math.floor(Math.random() * 101)+'%';
//     if (x < 10) {
//         // $(".div-nd").css("background-image", "linear-gradient(to right, #52607F, #AAB7C4, #CFD7DF)");
//         document.getElementById("nhiet-do").innerHTML=x+'°C';
//         document.getElementById("div-nd").style.backgroundImage = "#FF414D";
        
//     } else if (x > 10 && x < 40) {
//         // $(".div-nd").css("background-image", "linear-gradient(to right, #CE7C3A, #F5BE58, #FCE882)");
//         document.getElementById("nhiet-do").innerHTML=x+'°C';
//         document.getElementById("div-nd").style.backgroundImage = "#FF414D";
//     } else {
//         // $(".div-nd").css("background-image", "linear-gradient(to right, #C23D4B, #E25950, #FFA27B)");
//         document.getElementById("nhiet-do").innerHTML=x+'°C';
//         document.getElementById("div-nd").style.backgroundImage = "#FF414D";
//     }
//     $("#button-on").click(function(){
//         if(confirm('Bat den ?')==true){
//           $("#div-btna").css("background-color", "#1ED395");
//           $('#myImage').attr('src','/imgs/bongdensang.png');
//         }
//     })
//     $("#button-off").click(function(){
//         if(confirm('Tat den ?')==true){
//           $("#div-btna").css("background-color", "#FF414D");
//           $('#myImage').attr('src','/imgs/bongdentat.png');
//         }
//     })

//     Highcharts.chart('container', {
//       chart: {
//         zoomType: 'xy'
//       },
//       title: {
//         text: 'Average Monthly Precipitation and Temperature in Karasjok, 2021',
//         align: 'left'
//       },
//       subtitle: {
//         text: 'Source: ' +
//           '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
//           'target="_blank">YR</a>'
//       },
//       xAxis: [{
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         crosshair: true
//       }],
//       yAxis: [{ // Primary yAxis
//         labels: {
//           format: '{value}°C',
//           style: {
//             color: Highcharts.getOptions().colors[1]
//           }
//         },
//         title: {
//           text: 'Temperature',
//           style: {
//             color: Highcharts.getOptions().colors[1]
//           }
//         }
//       }, { // Secondary yAxis
//         title: {
//           text: 'Precipitation',
//           style: {
//             color: Highcharts.getOptions().colors[0]
//           }
//         },
//         labels: {
//           format: '{value} mm',
//           style: {
//             color: Highcharts.getOptions().colors[0]
//           }
//         },
//         opposite: true
//       }],
//       tooltip: {
//         shared: true
//       },
//       legend: {
//         align: 'left',
//         x: 80,
//         verticalAlign: 'top',
//         y: 80,
//         floating: true,
//         backgroundColor:
//           Highcharts.defaultOptions.legend.backgroundColor || // theme
//           'rgba(255,255,255,0.25)'
//       },
//       series: [{
//         name: 'Humidity',
//         type: 'column',
//         yAxis: 1,
//         // data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
//         //   60.0, 28.6, 32.1],
//         tooltip: {
//           valueSuffix: ' %'
//         }
    
//       }, {
//         name: 'Temperature',
//         type: 'spline',
//         // data: [-13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8,
//         //   -0.7, -11.0, -16.4],
//         tooltip: {
//           valueSuffix: '°C'
//         }
//       }, {
//         name: 'Brightness',
//         type: 'spline',
//         // data: [27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0,
//         //   60.0, 28.6, 32.1],
//         tooltip: {
//           valueSuffix: '°C'
//         }
//       }
//       ]
//     });
// });


import { redrawChart } from "./bieu-do.js";

 export const arrayT =[];
 export const arrayH =[];
 export const arrayL =[];

function timechange() {
  // // thay đổi nhiệt độ
  const nhietdo = document.getElementById("nhietdo");
  const changeN1 = Math.floor(Math.floor(Math.random() * 61));
  if (arrayT.length <= 10) {
    arrayT.push(changeN1);
  } else {
    arrayT.splice(0, 1);
    arrayT.push(changeN1);
  }
  // console.log(arrayT);
// console.log(nhietdo.innerText);
  const changeN = (nhietdo.innerText = `${changeN1} \xB0C`);
  if (changeN1 <=10 ) {
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #52607F, #AAB7C4, #CFD7DF)";
  } else if (changeN1 <40){
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #CE7C3A, #F5BE58, #FCE882)";
  } else {
    document.getElementById("div-nd").style.backgroundImage = "linear-gradient(to right, #C23D4B, #E25950, #FFA27B)";
  }
  // thay đổi độ ẩm
  const doam = document.getElementById("doam");
  const changeD1 = Math.floor(Math.floor(Math.random() * 101));
  const changeD = (doam.innerText = changeD1 + "%");
  if(arrayH.length <= 10) {
    arrayH.push(changeD1);
  }else{
    arrayH.splice(0,1);
    arrayH.push(changeD1);
  }

  // console.log(changeD.length);

  if (changeD1 >= 40) {
    document.getElementById("div-da").style.backgroundColor = "green";
  } else {
    document.getElementById("div-da").style.backgroundColor = "orange";
  }
  // thay đổi ánh sáng

  const anhsang = document.getElementById("anhsang");
  // console.log(anhsang);
  const changeA = Math.floor(Math.random() * 101);
  anhsang.innerText = `${changeA} %`;
  if (changeA >= 50) {
    document.getElementById("div-as").style.backgroundColor = "blue";
  } else {
    document.getElementById("div-as").style.backgroundColor = "purple";
  }
  if(arrayL.length <= 10){
    arrayL.push(changeA);
  }else{
    arrayL.splice(0,1);
    arrayL.push(changeA);
  }
  // if(arrayTime.length <= 10){
  //   arrayTime.push(getTime());
  // }
  // else{
  //   arrayTime.splice(0,1);
  //   arrayTime.push(getTime());
  // }
  redrawChart(arrayT,arrayH,arrayL);
}
setInterval(timechange, 2000);
// batDen();

///////////////////////////////////////////////////////////////
// function batDen(){
//   const a = confirm("Xác nhận bật");
//   if (a == true) {
//     document.getElementById("div-btna").style.backgroundColor = "#1ED395";
//     document.getElementById("myImage").src = "./imgs/bongdensang.png";
//   }
// }
// function tatDen(){
//   const a = confirm("Xác nhận tắt");
//   if (a == true) {
//     document.getElementById("div-btna").style.backgroundColor = "#FF414D";
//     document.getElementById("myImage").src = "./imgs/bongdentat.png";
//   }
// }

///////////////////////////////////////////////////////////////

const buttonON = document.querySelector("#button-on");
const buttonOFF = document.querySelector("#button-off");
const divBtnA = document.querySelector("#div-btna");
const myImages = document.getElementById("myImage");

buttonON.onclick = function () {
  const a = confirm("Xác nhận bật");
  if (a == true) {
    divBtnA.style.backgroundColor = "#1ED395";
    myImages.src = "./imgs/bongdensang.png";
  }
};
buttonOFF.onclick = function () {
  const a = confirm("Xác nhận tắt");
  if (a == true) {
    divBtnA.style.backgroundColor = "#FF414D";
    myImages.src = "./imgs/bongdentat.png";
  }
};