let companyurl = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders/'
let orders=$("#displayBox")
let search=$("#searchbtn")
let all=$("#allbtn")
let coffeeOrder=$('#coffeeOrder')
let cappOrder=$('#cappOrder')
let espressoOrder=$('#espressoOrder')
let latteOrder=$('#latteOrder')
let mochaOrder=$('#mochaOrder')
let chi=$('#chiOrder')
let specialOrder=$('#specialOrder')
let small=$('#small')
let regular=$('#regular')
let large=$('#large')
let extraLarge=$('#extraLarge')
var sizechoice="Regular"
let iced=$("#iced") 
let sweet=$("#sweet")
let milk=$("#milk" )
let specialRequest=$("#special")
iced.removeAttr('checked')
sweet.removeAttr('checked')
milk.removeAttr('checked')
specialRequest.removeAttr('checked')
let sizeOrdered=$("#sizeOrdered")
let itemOrdered=$("#itemOrdered")
let specialOrdered=$("#specialOrdered")
var special = " "
var order = " "
var orderName = "Van@gmail.com"
let submitOrder =$("#submitOrder")
let removeBtn=$("#removeBtn")
let locate=$("#locate")
let searchBox=$("#searchBox")
let customerName=$("#customerName")
let reviewOrdered=$("#reviewOrdered")
let CustOrderBtn=$("#CustOrderBtn")
let custNameInput=$("#custNameInput")


$(document).ready(function(){
function fetchAll(){
displayBox.innerHTML=''    
fetch(companyurl)
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        for(userEmail in json){
            var theUser = json[userEmail]

            let li = $("<li>").addClass("displayOrder");
            let itemTitle= $("<p>").addClass("textForm")
            let orderer =theUser.emailAddress
            let custmerName = orderer+"<br>" 
//            let spacer = $("<br/>")
            let drink = theUser.coffee+"<br>"
            let removeBtn = $("<button>Remove</button>").addClass("removeBtn").click(function(){
                let toDelete = orderer
                console.log(toDelete)
                fetch(companyurl + toDelete, {
                    method: 'delete'
                  }).then(response =>
                    response.json()
                    .then(json => {
                      return json;
                    })
                  )
                  setTimeout(fetchAll,1000)
            })
            itemTitle.append(custmerName)
            itemTitle.append(drink)
            itemTitle.append(removeBtn)
//            console.log(itemTitle)
            li.append(itemTitle)
            orders.append(li)
        }

    })
}   

    small.click(function(){
        sizechoice = "Small"
        sizeOrdered.html(sizechoice)})
    extraLarge.click(function(){
        sizechoice = "Extra Large"
        sizeOrdered.html(sizechoice)})
    large.click(function(){
        sizechoice = "Large"
        sizeOrdered.html(sizechoice)
        })

    regular.click(function(){
        sizechoice = "Regular"
        sizeOrdered.html(sizechoice)})

    coffeeOrder.click(function(){
    order = "Coffee"
    itemOrdered.html(order)})
    cappOrder.click(function(){
    order = "Cappuccino"
    itemOrdered.html(order)})
    espressoOrder.click(function(){
    order = "Espresso"
    itemOrdered.html(order)})
    latteOrder.click(function(){
    order = "Latte"
    itemOrdered.html(order)})
    mochaOrder.click(function(){
    order = "Mocha"
    itemOrdered.html(order)})
    chi.click(function(){
    order = "Chi Tea"
    itemOrdered.html(order)})
    specialOrder.click(function(){
    order = "Special Request"
    itemOrdered.html(order)})

    iced.click(function(){
    special = special+" Iced"
    specialOrdered.html(special)})

    sweet.click(function(){
    special += " Sweet"
    specialOrdered.html(special)})
    milk.click(function(){
    special +=" Add milk"
    specialOrdered.html(special)})
    specialRequest.click(function(){special +=" Special Request"
    specialOrdered.html(special)})


search.click(function(){
    console.log("Was clicked")
    displayBox.innerHTML=''
    console.log(displayBox)
    modal.css("display", "block");    
})
//var span = document.getElementsByClassName("close")[0];
//    span.onclick = function() {
//    modal.css("display", "none");}


/*locate.change(function(){
    console.log(searchBox.val())
    console.log("was clicked")
    displayBox.innerHTML=''
    modal.css("display", "none");})*/

/*    fetch(companyurl+searchBox.val())
    .then(function(response){return response.json()})
    .then(function(theOrder){
    console.log(theOrder)


    let li = $("<li>").addClass("displayOrder");
            let itemTitle= $("<p>").addClass("textForm")
            let orderer =theOrder.emailAddress
            let custmerName = orderer+"<br>" 
            let drink = theOrder.coffee+"<br>"
            let removeBtn = $("<button>Remove</button>").addClass("removeBtn").click(function(){
                let toDelete = orderer
                console.log(toDelete)
                fetch(companyurl + toDelete, {
                    method: 'delete'
                  }).then(response =>
                    response.json()
                    .then(json => {
                      return json;
                    })
                  )
            })
            itemTitle.append(custmerName)
            itemTitle.append(drink)
            itemTitle.append(removeBtn)
            li.append(itemTitle)
            orders.append(li) 
        })  */



function newOrder(){ 
    let coffeeOrder = sizechoice+" "+order+" "+special;
    let custEmail = custNameInput.val();
//    sizechoice = "Small"
//        sizeOrdered.html(sizechoice)})

    let orderSubmit = {
        "emailAddress": custEmail,
        "coffee": coffeeOrder,
    }

    fetch(companyurl,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(orderSubmit)
    }).then((response)=>{
        return response.json()
    }).then((json)=>{
        //console.log(json)
    })
}

submitOrder.click(function(){
    customerName.css("display", "Flex")
    reviewOrdered.css("display", "None")
})

CustOrderBtn.click(function(){
    customerName.css("display", "None")
    reviewOrdered.css("display", "Flex")
    newOrder()
    setTimeout(fetchAll,1000)})


all.click(function(){
    
    fetchAll()
    //console.log("Was clicked")
})






fetchAll()
})


