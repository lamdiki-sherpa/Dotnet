// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function myFunction() {

    var tableList,input, list,filter, div, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    tableList= document.getElementById("myDiv");
    list = tableList.getElementsByTagName("a");
    console.log(list);
    console.log(list.length);
    for (i = 0; i < list.length; i++) {
        div = list[i].getElementsByTagName("div")[0];
        txtValue = div.textContent || div.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}
function menuFunction() {

    var menuList, input, list, filter, div,divlist, i,txtValue;
    input = document.getElementById("menuSearch");
    filter = input.value.toUpperCase();
    menuList = document.getElementById("menuList");
    list = menuList.getElementsByTagName("a");
    
    console.log(list);
    console.log(list.length);
    for (i = 0; i < list.length; i++) {
        div = list[i].getElementsByTagName("div")[0];
        divlist = div.getElementsByTagName('h5')[0];
        txtValue = divlist.textContent || divlist.innerText;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}

