let myGraphHW1=document.getElementById('myGraphHW1');

let HW1trace1={};
HW1trace1.mode="lines+markers";//顯示圖型(折線，點等)https://plotly.com/javascript/reference/scatter/
HW1trace1.type="scatter";
HW1trace1.name="指考報考人數";
HW1trace1.marker={ size:5 };
HW1trace1.x=[];
HW1trace1.y=[];
HW1trace1.text=[];
//HW1trace1.textposition="bottom center";//數值名子位置A1,B1,C1明子位置A1,B1,C1
HW1trace1.textfont={
    family:"Raleway,sans-serif",
    size:10//字型，字體大小
};

for(let i=0;i<sectest.length;i++)
{
    HW1trace1.x[i]=sectest[i][1];
    HW1trace1.y[i]=sectest[i][0];
    HW1trace1.text[i]=sectest[i][0];
}

let HW1trace2={};
HW1trace2.mode="lines+markers";
HW1trace2.type="scatter";
HW1trace2.name="學測報考總人數";
HW1trace2.x=[];
HW1trace2.y=[];
HW1trace2.text=[];

for(let i=0;i<firsttest.length;i++)
{
    HW1trace2.x[i]=firsttest[i][1];
    HW1trace2.y[i]=firsttest[i][0];
    HW1trace2.text[i]=firsttest[i][0];
}

let HW1trace3={};
HW1trace3.mode="lines+markers";
HW1trace3.type="scatter";
HW1trace3.name="學測報考非應屆人數";
HW1trace3.marker={ size:5 };
HW1trace3.x=[];
HW1trace3.y=[];
HW1trace3.text=[];

for(let i=0;i<firsttestnot.length;i++)
{
    HW1trace3.x[i]=firsttestnot[i][1];
    HW1trace3.y[i]=firsttestnot[i][0];
    HW1trace3.text[i]=firsttestnot[i][0];
}

let data =[];
data.push(HW1trace1);
data.push(HW1trace2);
data.push(HW1trace3);

let layout={
    margin: { t: 40},
    
    // yaxis:{
    //     range:[1000,200000]
    // },
    title:'台灣學測與指考報考人數',
    titlefont:{

        size:20
    },

    
};//標題 軸數值等https://plotly.com/javascript/reference/layout/











Plotly.newPlot(myGraphHW1,data,layout);