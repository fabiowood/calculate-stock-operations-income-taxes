// import React from 'react';
// import {Bar} from 'react-chartjs-2';
// import {HorizontalBar} from 'react-chartjs-2';
// import {Line} from 'react-chartjs-2';
// import {Polar} from 'react-chartjs-2';

// import { defaults } from 'react-chartjs-2';

// Disable animating charts by default.
// defaults.global.animation = false;

// Bar

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// Horizontal Bar

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
//       hoverBorderColor: 'rgba(255,99,132,1)',
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// Line

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

// Polar

// const data = {
//   datasets: [{
//     data: [
//       11,
//       16,
//       7,
//       3,
//       14
//     ],
//     backgroundColor: [
//       '#FF6384',
//       '#4BC0C0',
//       '#FFCE56',
//       '#E7E9ED',
//       '#36A2EB'
//     ],
//     label: 'My dataset' // for legend
//   }],
//   labels: [
//     'Red',
//     'Green',
//     'Yellow',
//     'Grey',
//     'Blue'
//   ]
// };

// Mixed Example

// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//       label: 'Sales',
//       type:'line',
//       data: [51, 65, 40, 49, 60, 37, 40],
//       fill: false,
//       borderColor: '#EC932F',
//       backgroundColor: '#EC932F',
//       pointBorderColor: '#EC932F',
//       pointBackgroundColor: '#EC932F',
//       pointHoverBackgroundColor: '#EC932F',
//       pointHoverBorderColor: '#EC932F',
//       yAxisID: 'y-axis-2'
//     },{
//       type: 'bar',
//       label: 'Visitor',
//       data: [200, 185, 590, 621, 250, 400, 95],
//       fill: false,
//       backgroundColor: '#71B37C',
//       borderColor: '#71B37C',
//       hoverBackgroundColor: '#71B37C',
//       hoverBorderColor: '#71B37C',
//       yAxisID: 'y-axis-1'
//     }]
// };

// const options = {
//   responsive: true,
//   tooltips: {
//     mode: 'label'
//   },
//   elements: {
//     line: {
//       fill: false
//     }
//   },
//   scales: {
//     xAxes: [
//       {
//         display: true,
//         gridLines: {
//           display: false
//         },
//         labels: {
//           show: true
//         }
//       }
//     ],
//     yAxes: [
//       {
//         type: 'linear',
//         display: true,
//         position: 'left',
//         id: 'y-axis-1',
//         gridLines: {
//           display: false
//         },
//         labels: {
//           show: true
//         }
//       },
//       {
//         type: 'linear',
//         display: true,
//         position: 'right',
//         id: 'y-axis-2',
//         gridLines: {
//           display: false
//         },
//         labels: {
//           show: true
//         }
//       }
//     ]
//   }
// };

// const plugins = [{
//     afterDraw: (chartInstance, easing) => {
//         const ctx = chartInstance.chart.ctx;
//         ctx.fillText("This text drawn by a plugin", 100, 100);
//     }
// }];

// Radar

// const data = {
//   labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
//   datasets: [
//     {
//       label: 'My First dataset',
//       backgroundColor: 'rgba(179,181,198,0.2)',
//       borderColor: 'rgba(179,181,198,1)',
//       pointBackgroundColor: 'rgba(179,181,198,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(179,181,198,1)',
//       data: [65, 59, 90, 81, 56, 55, 40]
//     },
//     {
//       label: 'My Second dataset',
//       backgroundColor: 'rgba(255,99,132,0.2)',
//       borderColor: 'rgba(255,99,132,1)',
//       pointBackgroundColor: 'rgba(255,99,132,1)',
//       pointBorderColor: '#fff',
//       pointHoverBackgroundColor: '#fff',
//       pointHoverBorderColor: 'rgba(255,99,132,1)',
//       data: [28, 48, 40, 19, 96, 27, 100]
//     }
//   ]
// };

// const DisplayChart = () => {
//   return (
//     <div>
//         <h2>Bar Example (custom size)</h2>
//         <Polar
//           data={data}
//           // data={data}
//           // options={options}
//           // plugins={plugins}
//           // width={100}
//           // height={50}
//           // options={{ maintainAspectRatio: true }}
//         />
//     </div>
//   );
// }
// export default DisplayChart;