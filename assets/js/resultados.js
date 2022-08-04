
const $loader = document.querySelector('.sk-grid');

let res = new Promise((resolve, reject) => {

    const $resA = document.getElementById('res-a'),
          $resB = document.getElementById('res-b'),
          $resR = document.getElementById('res-R'),
          $template = document.getElementById('row').content;


    $resA.insertAdjacentText('afterend', localStorage.getItem('a'))
    $resB.insertAdjacentText('afterend', localStorage.getItem('b'))
    $resR.insertAdjacentText('afterend', localStorage.getItem('r'))

    let dataXY = JSON.parse(localStorage.getItem('data'));
    let data = [];
    let regresionLineal = JSON.parse(localStorage.getItem('regresionLineal'));

    dataXY.x.forEach((el, count)=>{
    data.push({x:parseFloat(el), y:parseFloat(dataXY.y[count])})
    });


    console.log(data, regresionLineal)
    let clone;
    data.forEach((el)=>{
    $template.getElementById('value-x').textContent = el.x;
    $template.getElementById('value-y').textContent = el.y;

    clone = $template.cloneNode(true);
    document.getElementById('table-1').querySelector('tbody').appendChild(clone)
    })

    regresionLineal.forEach((el)=>{
    $template.getElementById('value-x').textContent = Math.round(el.x*1000000.0)/1000000.0;
    $template.getElementById('value-y').textContent = Math.round(el.y*10000.0)/10000.0;

    clone = $template.cloneNode(true);
    document.getElementById('table-2').querySelector('tbody').appendChild(clone)
    })


    const dataGraph = {
    datasets: [{
    type: "scatter",
        label: 'Datos',
        data,
        backgroundColor: '#2E68FF',
        borderWidth : 3,
        borderColor: '#2E68FF',
        showLine: false
    },
    {
        type: 'line',
        label: 'Regresión Lineal',
        data: regresionLineal,
        backgroundColor: '#80a4ff',
        borderColor: '#80a4ff',
        fill:false
    }]
    };


    const config = {
    data: dataGraph,
    };

    const myChart = new Chart(document.getElementById('myChart'), config);

    return resolve(true)
})

res.then(()=>{
    $loader.classList.add('is-not-active')
    document.querySelector('.title').classList.add('is-active')
    document.querySelector('.resultados').classList.add('is-active')
    document.querySelector('.container').classList.add('is-active')
    document.querySelector('body').classList.remove('is-active')
})