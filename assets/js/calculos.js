import {signalToValidation} from './validations_css.js'


const sumatoria = (data)=>{
    const DATA = (data.value).split(',');
    let sumatoria = 0;
    DATA.forEach((el)=>{
        sumatoria = sumatoria + parseFloat(el);
    });
    
    return sumatoria;
}

const sumatoriaXY = (dataX, dataY)=>{
    const DATAX = (dataX.value).split(',');
    const DATAY = (dataY.value).split(',');
    let sumatoria = 0;
    DATAX.forEach((x, count)=>{
        sumatoria = sumatoria + (parseFloat(x) * parseFloat(DATAY[count]));
    });
    
    return sumatoria;
}

const sumatoriaX2Y2 = (dataXY)=>{
    const DATAXY = (dataXY.value).split(',');
    let sumatoria = 0;
    DATAXY.forEach((xy, count)=>{
        sumatoria = sumatoria + Math.pow(parseFloat(xy), 2);
    });
    
    return sumatoria;
}


export default function calcular(){
    const $inputX = document.getElementById('x'),
          $inputY = document.getElementById('y'),
          $form = document.getElementById('form-action')

    let a, b, r, n, regresionLineal = [];


    document.addEventListener('submit', e=>{
        e.preventDefault()

        if(e.target === $form){
            if(!signalToValidation){
                $inputX.previousElementSibling.classList.add('is-active')
                $inputY.previousElementSibling.classList.add('is-active')
            }else{

                $inputX.previousElementSibling.classList.remove('is-active')
                $inputY.previousElementSibling.classList.remove('is-active')

                n = (($inputX.value).split(',').length)
            
                b = ((n)*(sumatoriaXY($inputX, $inputY)) - (sumatoria($inputX))*(sumatoria($inputY))) / ((n)*(sumatoriaX2Y2($inputX)) - Math.pow(sumatoria($inputX), 2))
                a = ((sumatoria($inputY)) - (b)*(sumatoria($inputX))) / (n);

                for (let index = 0; index < Math.max(...($inputX.value).split(',')); index++) {
                    regresionLineal.push({x:parseFloat(index+1), y:a + b*(index+1)})                    
                }

                const data = {
                    'x' : ($inputX.value).split(','),
                    'y' : ($inputY.value).split(',')
                }


                let r = ((((n)*(sumatoriaXY($inputX, $inputY))) - ((sumatoria($inputX))*(sumatoria($inputY)))) / Math.sqrt(((((n)*sumatoriaX2Y2($inputX)) - (Math.pow(sumatoria($inputX), 2))))*((n*(sumatoriaX2Y2($inputY)))- (Math.pow(sumatoria($inputY), 2))), 2));

                localStorage.setItem('a', Math.round(a*1000000.0)/1000000.0)
                localStorage.setItem('b', Math.round(b*1000000.0)/1000000.0)
                localStorage.setItem('r', Math.round(r*1000000.0)/1000000.0)
                localStorage.setItem('data', JSON.stringify(data))
                localStorage.setItem('regresionLineal', JSON.stringify(regresionLineal))

                
                location.href = '../pages/resultado.html'

            }
        }


    })
}