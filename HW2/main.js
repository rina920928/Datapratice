let myGraphHW2=document.getElementById('myGraphHW2');

let HW2trace1={};

HW2trace1.type="bar";
HW2trace1.name="out";


HW2trace1.x=[];
HW2trace1.y=[];

HW2trace1.x[0]=total_111[0]['year'];
HW2trace1.y[0]=total_111[0]['count'];
HW2trace1.x[1]=total_110[0]['year'];
HW2trace1.y[1]=total_110[0]['count'];
HW2trace1.x[2]=total_109[0]['year'];
HW2trace1.y[2]=total_109[0]['count'];
HW2trace1.x[3]=total_108[0]['year'];
HW2trace1.y[3]=total_108[0]['count'];
HW2trace1.x[4]=total_107[0]['year'];
HW2trace1.y[4]=total_107[0]['count'];
HW2trace1.text=HW2trace1.y;
HW2trace1.textfont=
{
        color:'white',
        size:10
        
};//注意要先放完數值在顯示

let HW2trace2={};

HW2trace2.type="bar";
HW2trace2.name="in";
HW2trace2.x=[];
HW2trace2.y=[];

HW2trace2.x[0]=total_111[1]['year'];
HW2trace2.y[0]=total_111[1]['count'];
HW2trace2.x[1]=total_110[1]['year'];
HW2trace2.y[1]=total_110[1]['count'];
HW2trace2.x[2]=total_109[1]['year'];
HW2trace2.y[2]=total_109[1]['count'];
HW2trace2.x[3]=total_108[1]['year'];
HW2trace2.y[3]=total_108[1]['count'];
HW2trace2.x[4]=total_107[1]['year'];
HW2trace2.y[4]=total_107[1]['count'];
HW2trace2.text=HW2trace2.y;

HW2trace2.textfont=
{
        color:'white',
        size:10
};//注意要先放完數值在顯示

let HW2data =[];
HW2data.push(HW2trace1);
HW2data.push(HW2trace2);

let HW2layout={
    margin: { t: 40},
    
    title:'台灣歷年進出口比較',
    titlefont:{
        size:20
    },
};//標題 軸數值等https://plotly.com/javascript/reference/layout/




Plotly.newPlot(myGraphHW2,HW2data,HW2layout);