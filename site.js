let orders=$("#displayBox")
let search=$("#searchbtn")
let all=$("#allbtn")
let coffeeOrder=$('coffeeOrder')
let cappOrder=$('cappOrder')
let espressoOrder=$('espressoOrder')
let latteOrder=$('latteOrder')
let mochaOrder=$('mochaOrder')
let specialOrder=$('specialOrder')

fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        for(userEmail in json){
            var theUser = json[userEmail]

            let li = $("<li>").addClass("displayOrder").attr("id","accordion");
            let itemTitle= $("<p>").addClass("textForm")
            let orderer =theUser.emailAddress
            let spacer = $("<br>")
            itemTitle.append(orderer)

            itemTitle.append(spacer)
            let drink = theUser.coffee
            itemTitle.append(drink)
            li.append(itemTitle)
            orders.append(li)
        }

    })   

    search.click(function(){
        console.log("Was clicked")
        console.log(displayBox)


        $(function(){
            $("#dialog").dialog();
        })    
        displayBox.innerHTML=''
    })

    all.click(function(){
        fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/')
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        for(userEmail in json){
            var theUser = json[userEmail]

            let li = $("<li>").addClass("displayOrder").attr("id","accordion");
            let itemTitle= $("<p>").addClass("textForm")
            let orderer =theUser.emailAddress
            let spacer = $("<br>")
            itemTitle.append(orderer)

            itemTitle.append(spacer)
            let drink = theUser.coffee
            itemTitle.append(drink)
            li.append(itemTitle)
            orders.append(li)
        }
    })
})