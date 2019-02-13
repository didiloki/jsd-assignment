// console.log(document.getElementById("myid"))
// console.log(document.getElementsByClassName("hot")[0])
// console.log(document.querySelectorAll(".hot"))
// console.log(document.querySelector("#myid"))

//selects all classes with class name hot
var hot = document.getElementsByClassName("hot")

hot[2].style.color = "red" //changes text color
hot[0].setAttribute("data-id", "blue") //set attribute to element
//<li class="hot" data-id="blue">two</li>
hot[0].className = "blue"//<li class="blue">two</li>

var list = document.getElementById("list") //gets single element
var item = document.createElement("li") //creates element
//<li></li>
item.setAttribute("class", "hot")
//<li class="hot"></li>
// var text = document.createTextNode("five")
// five
item.appendChild(document.createTextNode("five"))
//<li class="hot">five</li> 
list.appendChild(item)
//
function add(){
    var input = document.querySelector("#info").value
    
    if(input === ""){
    // console.log(input)
    let items = document.createElement("li")
    items.appendChild(document.createTextNode(input))

    list.appendChild(items)

    document.querySelector("#info").value = ""
    }
}



document.querySelector("#btn").addEventListener("click",createTable)
// document.querySelector("#btn").onclick = createTable
//Read about parentNodes, SiblingNodes, childnodes
//.parentNode 
//e.target

//create table
function createTable(e){
    e.preventDefault()
    e.target
   //select table container
    var tbl = document.querySelector(".tbl")

    var row_val = document.querySelector("#row").value
    var col_val = document.querySelector("#col").value

    //create table element
    var table = document.createElement("table")
    var tbody = document.createElement("tbody")
    
    

    for(var i = 0; i < row_val; i++){

        var tr = document.createElement("tr")
        for(var j = 0; j < col_val; j++){

            var td = document.createElement("td")
            td.setAttribute("onclick", "style.color ='red'")
            var text = document.createTextNode(i + ", " + j)
                                    //`${i}, ${j}`
            td.appendChild(text)

            tr.appendChild(td)
            
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody)
    tbl.appendChild(table)

}