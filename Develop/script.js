function updateClock(){
    var now = new Date();

    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var week = [ "Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
        var  ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
        var values =[week[dname], months[mo], dnum,yr,hou,min,sec,pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}

window.onload = function() {
    initClock();
}


// Local Storage Feature


    $('.saveBtn').click(function () {
        var hr9 = document.getElementById('9').value;
        localStorage.setItem('text9', hr9);
        var hr10 = document.getElementById('10').value;
        localStorage.setItem('text10', hr10);
        var hr11 = document.getElementById('11').value;
        localStorage.setItem('text11', hr11);
        var hr12 = document.getElementById('12').value;
        localStorage.setItem('text12', hr12);
        var hr13 = document.getElementById('13').value;
        localStorage.setItem('text13', hr13);
        var hr14 = document.getElementById('14').value;
        localStorage.setItem('text14', hr14);
        var hr15 = document.getElementById('15').value;
        localStorage.setItem('text15', hr15);
        var hr16 = document.getElementById('16').value;
        localStorage.setItem('text16', hr16);
        var hr17 = document.getElementById('17').value;
        localStorage.setItem('text17', hr17);
    });

 // Display saved tasks
 var saved9 = localStorage.getItem('text9');
 document.getElementById('9').value = saved9;
 var saved10 = localStorage.getItem('text10');
 document.getElementById('10').value = saved10;
 var saved11 = localStorage.getItem('text11');
 document.getElementById('11').value = saved11;
 var saved12 = localStorage.getItem('text12');
 document.getElementById('12').value = saved12;
 var saved13 = localStorage.getItem('text13');
 document.getElementById('13').value = saved13;
 var saved14 = localStorage.getItem('text14');
 document.getElementById('14').value = saved14;
 var saved15 = localStorage.getItem('text15');
 document.getElementById('15').value = saved15;
 var saved16 = localStorage.getItem('text16');
 document.getElementById('16').value = saved16;
 var saved17 = localStorage.getItem('text17');
 document.getElementById('17').value = saved17;


