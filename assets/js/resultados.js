
const $resA = document.getElementById('res-a'),
      $resB = document.getElementById('res-b'),
      $resR = document.getElementById('res-R');


$resA.insertAdjacentText('afterend', localStorage.getItem('a'))
$resB.insertAdjacentText('afterend', localStorage.getItem('b'))
$resR.insertAdjacentText('afterend', localStorage.getItem('r'))

let dataXY = JSON.parse(localStorage.getItem('data'));
let regresionLineal = JSON.parse(localStorage.getItem('regresionLineal'));

let data = [];

dataXY.x.forEach((el, count)=>{
    data.push({x:parseFloat(el), y:parseFloat(dataXY.y[count])})
});


const dataGraph = {
    datasets: [{
    type: "scatter",
        label: 'Datos',
        data,
        backgroundColor: '#2E68FF',
        showLine: false
    },
    {
        type: 'line',
        label: 'Regresión Lineal',
        data: regresionLineal,
        borderColor: '#2E68FF',
        fill:false,            
    }]
};


const config = {
    data: dataGraph,
};


const myChart = new Chart(document.getElementById('myChart'), config);