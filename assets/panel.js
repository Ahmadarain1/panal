data2.style.display = 'none';
data3.style.display = 'none';

function click1(){
    let btn1 = document.getElementById('btn1');
    let data1 = document.getElementById('data1');

    data1.style.display = 'block';
    data2.style.display = 'none';
    data3.style.display = 'none';
}

function click2(){
    let btn2 = document.getElementById('btn2');
    let data2 = document.getElementById('data2');

    if(data2.style.display = 'none')
    {
        data2.style.display = 'block';
        data1.style.display = 'none';
        data3.style.display = 'none';
    }
}

function click3(){
    let btn3 = document.getElementById('btn3');
    let data3 = document.getElementById('data3');

    if(data3.style.display = 'none')
    {
        data3.style.display = 'block';
        data1.style.display = 'none';
        data2.style.display = 'none';
    }
}