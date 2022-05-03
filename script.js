(function() {
    var div = document.createElement('div');
    div.className = 'container';
    document.body.appendChild(div);
    var heading = document.createElement('h1');
    heading.id = 'heading';
    heading.innerHTML = "<h2>Table</h2>";
    div.appendChild(heading);
    var line = document.createElement('hr');
    line.id = 'line';
    div.appendChild(line);

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.id = "table";
    table.setAttribute("border","5");
    table.setAttribute("cellspacing","3px");

    table.setAttribute("cellpadding","13px");
    div.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
    thead.id="th";
    let row_1 = document.createElement('tr');
    let heading1 = document.createElement('th');
    heading1.innerHTML = "Name";
    row_1.appendChild(heading1);
    let heading2 = document.createElement("th");
    heading2.innerHTML = "Age";
    row_1.appendChild(heading2);
    let heading3 = document.createElement("th");
    heading3.innerHTML = "DOB";
    row_1.appendChild(heading3);
    let heading4 = document.createElement("th");
    heading4.innerHTML = "Email";
    row_1.appendChild(heading4);
    let heading5 = document.createElement("th");
    heading5.innerHTML = "Company";
    row_1.appendChild(heading5);
    thead.appendChild(row_1);


    var arr = [["Rohan", 21, "27-11-20", "rohan@gmail.com", "ABC"],
    ['Prashant', 21, "28-10-2000", "prashant@gmail.com", "ABC"],
    ["Ansh", 20, "5-01-2001", "ansh@gmail.com", "ABC"],
    ["Tarun", 21, "09-09-2002", "tarun@gmail.com", "ABC"],
    ["Arpit", 21, "24-10-20", "arpit@gmail.com", "ABC"]
    ];
    for (var i = 0; i < 5; i++) {
        var row = document.createElement('tr');
       
        for (var j = 0; j < 5; j++) {
            let col = document.createElement('td');
            let data = document.createTextNode(arr[i][j]);
            col.appendChild(data);
            row.appendChild(col);


           tbody.appendChild(row);


        }
    }
    




}());
