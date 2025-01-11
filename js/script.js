window.onload = function() {

    /*The initial item number set to 3 */
    var itemNo = 3;
  
    /* get the date of current day */
    var today = new Date();
    var todaystring = today.toLocaleDateString();
  
    /* after click the 'add dish' button, the form appears */
    var showformbtn = document.getElementById("btn1");
    showformbtn.onclick = function() {
      var getform = document.getElementById("formdiv");
      getform.style.display = "block";
  
    }
  
    /* the button used to add dish after fill the form */
    var addbtn = document.getElementById("btnadd");
    addbtn.onclick = function() {
  
      var dishname = document.getElementById("dishname").value;
      var storename = document.getElementById("storename").value;
      var rating = document.getElementById("rating").value;
      var feedback = document.getElementById("feedback").value;
  
      var error1 = document.getElementById("error1");
      var error2 = document.getElementById("error2");
      var error3 = document.getElementById("error3");
      var error4 = document.getElementById("error4");
  
  
      /* set a boolean to check and prevent empty input */
      let noError = true;
  
      /* check empty logic */
      if (dishname === "") {
        error1.innerHTML = "Please input again!";
        error1.style.color = "red";
        document.getElementById("dishname").focus();
        noError = false;
        return false;
      } else {
        error1.innerHTML = "";
      }
  
      if (storename === "") {
        error2.innerHTML = "Please input again!";
        error2.style.color = "red";
        document.getElementById("storename").focus();
        noError = false;
        return false;
      } else {
        error2.innerHTML = "";
      }
  
      if (rating == 0) {
        error3.innerHTML = "Please choose a rating";
        error3.style.color = "red";
        document.getElementById("rating").focus();
        noError = false;
        return false;
      } else {
        error3.innerHTML = "";
      }
  
      if (feedback === "") {
        error4.innerHTML = "Please input again!";
        error4.style.color = "red";
        document.getElementById("feedback").focus();
        noError = false;
        return false;
      } else {
        error4.innerHTML = "";
      }
  
  
      /* if no empty input, then add our input into the list */
      if (noError = true) {
  
        itemNo = itemNo + 1;
        var ele1 = document.createElement("p");
        ele1.innerText = itemNo;
        ele1.classList.add("list");
        ele1.setAttribute("id", itemNo);
        document.getElementById("num").appendChild(ele1);
  
        var ele2 = document.createElement("p");
        ele2.innerText = dishname;
        ele2.setAttribute("id", itemNo + "dish");
        ele2.classList.add("list");
        document.getElementById("dish").appendChild(ele2);
  
        var ele3 = document.createElement("p");
        ele3.innerText = storename;
        ele3.setAttribute("id", itemNo + "store");
        ele3.classList.add("list");
        document.getElementById("store").appendChild(ele3);
  
        var ele4 = document.createElement("p");
        ele4.innerText = rating;
        ele4.setAttribute("id", itemNo + "rating");
        ele4.classList.add("list");
        document.getElementById("rate").appendChild(ele4);
  
        var ele5 = document.createElement("p");
        ele5.innerText = feedback;
        ele5.setAttribute("id", itemNo + "feedback");
        ele5.classList.add("list");
        document.getElementById("fb").appendChild(ele5);
  
        var ele6 = document.createElement("p");
        ele6.innerText = todaystring;
        ele6.setAttribute("id", itemNo + "date");
        ele6.classList.add("list");
        document.getElementById("date").appendChild(ele6);
  
  
        /* clear the form after add each row */
        document.getElementById("dishname").value = "";
        document.getElementById("storename").value = "";
        document.getElementById("rating").value = 0;
        document.getElementById("feedback").value = "";
  
  
        return false;
  
      }
    }
  
    /* remove button function */
    var removebtn = document.getElementById("btn3");
    removebtn.onclick = function() {
  
      var rm1 = document.getElementById(itemNo);
      rm1.remove();
  
      var rm2 = document.getElementById(itemNo + "dish");
      rm2.remove();
  
      var rm3 = document.getElementById(itemNo + "store");
      rm3.remove();
  
      var rm4 = document.getElementById(itemNo + "rating");
      rm4.remove();
  
      var rm5 = document.getElementById(itemNo + "feedback");
      rm5.remove();
  
      var rm6 = document.getElementById(itemNo + "date");
      rm6.remove();
  
      itemNo = itemNo - 1;
  
    }
  
  
    /* clear button function */
    var clearbtn = document.getElementById("btn2");
    clearbtn.onclick = function() {
      location.reload();
    }
  
  
    /* end window.onload function */
  }