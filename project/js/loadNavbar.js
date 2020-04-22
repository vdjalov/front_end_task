
let ul = document.createElement("ul");
let navLinkNames = ["Home", "Sports", "Casino", "Games"];
let navDropdownLinkNames = ["Mega Moolah", "The curse of the black Pearl", "Super slots attack"];
for(let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    if(i < 3) {
        let a = document.createElement("a");
        a.innerText = navLinkNames[i];
        a.setAttribute("href", "#");
        li.append(a);
        ul.append(li);
    } else {
        let label = document.createElement("label");
        label.innerText = navLinkNames[i];
        label.setAttribute("for", "dropdown-menu");
        li.append(label);
        let dropdown = document.createElement("select");
        dropdown.setAttribute("id", "dropdown-menu");
        li.append(dropdown);
      
        for(let j = 0; j < 3; j++) {
            let option = document.createElement("option");
            option.setAttribute("value", navDropdownLinkNames[j]);
            let a = document.createElement("a");
            a.innerText = navDropdownLinkNames[j];
            a.setAttribute("href", "#");
            let hr = document.createElement("hr");
            option.append(a);
            option.append(hr);
            dropdown.append(option);
        }
        ul.append(li);
    }
}

document.getElementById("nav").append(ul);




