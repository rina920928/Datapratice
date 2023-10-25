let myGraphHW2=document.getElementById('myGraphHW2');

let HW2trace1={};

HW2trace1.type="bar";
HW2trace1.name="Lion";


HW2trace1.x=[];
HW2trace1.y=[];

HW2trace1.x[0]="Taipei_Zoo"; 
HW2trace1.y[0]=animals_Taipei_Zoo[0]['count']; 

HW2trace1.x[1]="Taoyuan_Zoo"; 
HW2trace1.y[1]=animals_Taoyuan_Zoo[0]['count']; 

HW2trace1.text=HW2trace1.y;//顯示數值
HW2trace1.textfont=
{
        color:'white',
        size:20
};//注意要先放完數值在顯示


// for(let i=0;i<animals_Taipei_Zoo.length;i++)
// {
//     //trace1.x[i]=animals_Taipei_Zoo[i]['name'];   
//     trace1.y[i]=animals_Taipei_Zoo[i]['count'];

// }

let HW2trace2={};

HW2trace2.type="bar";
HW2trace2.name="tiger";
HW2trace2.x=[];
HW2trace2.y=[];


HW2trace2.x[0]="Taipei_Zoo"; 
HW2trace2.y[0]=animals_Taipei_Zoo[1]['count']; 

HW2trace2.x[1]="Taoyuan_Zoo"; 
HW2trace2.y[1]=animals_Taoyuan_Zoo[1]['count'];
HW2trace2.text=HW2trace2.y;//顯示數值
HW2trace2.textfont=
{
        color:'white',
        size:20
};//注意要先放完數值在顯示
// for(let i=0;i<animals_Taoyuan_Zoo.length;i++)
// {
//     trace2.y[i]=animals_Taoyuan_Zoo[i]['count'];
    
// }

let HW2trace3={};

HW2trace3.type="bar";
HW2trace3.name="monkey";
HW2trace3.x=[];
HW2trace3.y=[];


HW2trace3.x[0]="Taipei_Zoo"; 
HW2trace3.y[0]=animals_Taipei_Zoo[2]['count']; 

HW2trace3.x[1]="Taoyuan_Zoo"; 
HW2trace3.y[1]=animals_Taoyuan_Zoo[2]['count'];

HW2trace3.text=HW2trace3.y;//顯示數值
HW2trace3.textfont=
{
        color:'white',
        size:20
};//注意要先放完數值在顯示

let data =[];
data.push(HW2trace1);
data.push(HW2trace2);
data.push(HW2trace3);

let layout={
    margin: { t: 25},
    
    barmode:'stack',//長條圖堆疊

    title:'TaipeiZoo VS TaoyuanZoo'
};//標題 軸數值等https://plotly.com/javascript/reference/layout/




Plotly.newPlot(myGraphHW2,data,layout);