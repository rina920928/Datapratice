let HW3myGraph=document.getElementById('HW3myGraph');



let HW3trace1={};

HW3trace1.type="pie";
HW3trace1.title ="六月";
HW3trace1.labels =[];
HW3trace1.values =[];
HW3trace1.domain ={
row:0,column:0
};//位置

for(let x=0; x<June.length; x++)
{
    HW3trace1.labels[x] =June[x]['name'];
    HW3trace1.values[x] =June[x]['count'];
}

let HW3trace2={};

HW3trace2.type="pie";
HW3trace2.title ="七月";
HW3trace2.labels =[];
HW3trace2.values =[];
HW3trace2.domain ={
row:0,column:1
};//位置

for(let x=0; x<July.length; x++)
{
    HW3trace2.labels[x] =July[x]['name'];
    HW3trace2.values[x] =July[x]['count'];
}

let HW3trace3={};

HW3trace3.type="pie";
HW3trace3.title ="八月";
HW3trace3.labels =[];
HW3trace3.values =[];
HW3trace3.domain ={
row:1,column:0
};//位置

for(let x=0; x<August.length; x++)
{
    HW3trace3.labels[x] =August[x]['name'];
    HW3trace3.values[x] =August[x]['count'];
}


let HW3trace4={};

HW3trace4.type="pie";
HW3trace4.title ="九月";
HW3trace4.labels =[];
HW3trace4.values =[];
HW3trace4.domain ={
row:1,column:1
};

for(let x=0; x<September.length; x++)
{
    HW3trace4.labels[x] =September[x]['name'];
    HW3trace4.values[x] =September[x]['count'];
}

HW3trace1.hole =0.5;
HW3trace2.hole =0.5;
HW3trace3.hole =0.5;
HW3trace4.hole =0.5;//中間挖洞


let data =[];
data.push(HW3trace1);
data.push(HW3trace2);
data.push(HW3trace3);
data.push(HW3trace4);

let layout={
    margin: { t: 20,l:20,},
    
    grid:{rows:2,columns:2},//展示區域格線

    title:'6到9月支出情形'
};//標題 軸數值等https://plotly.com/javascript/reference/layout/











Plotly.newPlot(HW3myGraph,data,layout);