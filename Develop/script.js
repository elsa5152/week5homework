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


//for loop to add id's to input fields
function addIdToInput() {
    let inputId = document.getElementsByClassName("col-8");
    let length = inputId.length;
    for (i = 0; i < length; i++) {
      inputId[i].id = "input-field-" + (i + 1);
    }
  };
  addIdToInput();

  //for loop to add id's to save buttons
  function addIdToSaveBtn() {
    let saveBtnId = document.getElementsByClassName("col-2 saveBtn");
    let length = saveBtnId.length;
    for (i = 0; i < length; i++) {
      saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
    }
  }
  addIdToSaveBtn();

  let saveBtnId1 = $("#saveBtn-Id-1");
  let saveBtnId2 = $("#saveBtn-Id-2");
  let saveBtnId3 = $("#saveBtn-Id-3");
  let saveBtnId4 = $("#saveBtn-Id-4");
  let saveBtnId5 = $("#saveBtn-Id-5");
  let saveBtnId6 = $("#saveBtn-Id-6");
  let saveBtnId7 = $("#saveBtn-Id-7");
  let saveBtnId8 = $("#saveBtn-Id-8");
  let saveBtnId9 = $("#saveBtn-Id-9");

  let toDoInput1 = $("#input-field-1");
  let toDoInput2 = $("#input-field-2");
  let toDoInput3 = $("#input-field-3");
  let toDoInput4 = $("#input-field-4");
  let toDoInput5 = $("#input-field-5");
  let toDoInput6 = $("#input-field-6");
  let toDoInput7 = $("#input-field-7");
  let toDoInput8 = $("#input-field-8");
  let toDoInput9 = $("#input-field-9");



  let storedInput;

  //click events for each save button 

  $(saveBtnId1).on("click", function (event) {
    event.preventDefault();
    let toDoInput1 = $("#input-field-1").val()
    localStorage.setItem("toDo1", toDoInput1);
  });
  let savedInput1 = (localStorage.getItem("toDo1"));
  toDoInput1.val(savedInput1);




  $(saveBtnId2).on("click", function (event) {
    event.preventDefault();
    let toDoInput2 = $("#input-field-2").val()
    localStorage.setItem("toDo2", toDoInput2);
  });
  let savedInput2 = (localStorage.getItem("toDo2"));
  toDoInput2.val(savedInput2);



  $(saveBtnId3).on("click", function (event) {
    event.preventDefault();
    let toDoInput3 = $("#input-field-3").val()
    localStorage.setItem("toDo4", toDoInput3);
  });
  let savedInput3 = (localStorage.getItem("toDo3"));
  toDoInput3.val(savedInput3);




  $(saveBtnId4).on("click", function (event) {
    event.preventDefault();

    let toDoInput4 = $("#input-field-4").val()
    localStorage.setItem("toDo4", toDoInput4);
  });
  let savedInput4 = (localStorage.getItem("toDo4"));
  toDoInput4.val(savedInput4);
  

  $(saveBtnId5).on("click", function (event) {
    event.preventDefault();
    let toDoInput5 = $("#input-field-5").val()
    localStorage.setItem("toDo5", toDoInput5);
  });
  let savedInput5 = (localStorage.getItem("toDo5"));
  toDoInput5.val(savedInput5);


  $(saveBtnId6).on("click", function (event) {
    event.preventDefault();
    let toDoInput6 = $("#input-field-6").val()
    localStorage.setItem("toDo6", toDoInput6);
  });
  let savedInput6 = (localStorage.getItem("toDo6"));
  toDoInput6.val(savedInput6);



  $(saveBtnId7).on("click", function (event) {
    event.preventDefault();
    let toDoInput7 = $("#input-field-7").val()
    localStorage.setItem("toDo7", toDoInput7);
  });
  let savedInput7 = (localStorage.getItem("toDo7"));
  toDoInput7.val(savedInput7);



  $(saveBtnId8).on("click", function (event) {
    event.preventDefault();
    let toDoInput8 = $("#input-field-8").val()
    localStorage.setItem("toDo8", toDoInput8);
  });
  let savedInput8 = (localStorage.getItem("toDo8"));
  toDoInput8.val(savedInput8);



  $(saveBtnId9).on("click", function (event) {
    event.preventDefault();
    let toDoInput9 = $("#input-field-9").val()
    localStorage.setItem("toDo9", toDoInput9);
  });
  let savedInput9 = (localStorage.getItem("toDo9"));
  toDoInput9.val(savedInput9);



  // start if else statements to show past, present, future events

  let now = new Date().getHours();
  if (now > 8) {
    $("#input-field-0").addClass("past");
  } else if (now >= 8 && now < 9) {
    $("#input-field-0").addClass("present");
  } else if (now < 8) {
    $("#input-field-0").addClass("future");
  }

  if (now > 9) {
    $("#input-field-1").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#input-field-1").addClass("present");
  } else if (now < 9) {
    $("#input-field-1").addClass("future");
  }

  if (now > 10) {
    $("#input-field-2").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#input-field-2").addClass("present");
  } else if (now < 10) {
    $("#input-field-2").addClass("future");
  }

  if (now > 11) {
    $("#input-field-3").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#input-field-3").addClass("present");
  } else if (now < 11) {
    $("#input-field-3").addClass("future");
  }

  if (now > 12) {
    $("#input-field-4").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#input-field-4").addClass("present");
  } else if (now < 12) {
    $("#input-field-4").addClass("future");
  }

  if (now > 13) {
    $("#input-field-5").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#input-field-5").addClass("present");
  } else if (now < 13) {
    $("#input-field-5").addClass("future");
  }

  if (now > 14) {
    $("#input-field-6").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#input-field-6").addClass("present");
  } else if (now < 14) {
    $("#input-field-6").addClass("future");
  }

  if (now > 15) {
    $("#input-field-7").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#input-field-7").addClass("present");
  } else if (now < 15) {
    $("#input-field-7").addClass("future");
  }

  if (now > 16) {
    $("#input-field-8").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#input-field-8").addClass("present");
  } else if (now < 16) {
    $("#input-field-8").addClass("future");
  }

  if (now > 17) {
    $("#input-field-9").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#input-field-9").addClass("present");
  } else if (now < 17) {
    $("#input-field-9").addClass("future");
  }


  $(saveBtnId1).on("click", function (event) {
    event.preventDefault();
    let toDoInput1 = $("#input-field-1").val()
    localStorage.setItem("toDo1", toDoInput1);
  });

  for (i = 0; i < length; i++) {
    saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
  }