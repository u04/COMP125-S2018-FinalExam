
// dey, 300920267, 2018-15-08, comp-125
(function() {
  function Start() {
    console.log(
      `%c App Started...`,
      "color:blue; font-size: 30px; font-weight:bold;"
    );
    // Your Code goes here

    function test(fname, lname, cnum, email){
      this.fname = fname;
      this.lname = lname;
      this.cnum = cnum;
      this.email = email;
    }

    let data;
    let XHR = new XMLHttpRequest();
    XHR.addEventListener("readystatechange", function() {
      if (XHR.status === 200) {
        if (XHR.readyState === 4) {
          let jsonFile = JSON.parse(this.responseText);
            data = jsonFile;
        }
      }
    });
    XHR.open("GET", "data.json");
    XHR.send();
  }










  window.addEventListener("load", Start);
})();
