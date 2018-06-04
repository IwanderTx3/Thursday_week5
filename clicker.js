small.click(function(){
    sizechoice = "Small"
    sizeOrdered.html(sizechoice)
})

extraLarge.click(function(){
    sizechoice = "Extra Large"
    sizeOrdered.html(sizechoice)
})

large.click(function(){
    sizechoice = "Large"
    sizeOrdered.html(sizechoice)
    })

regular.click(function(){
    sizechoice = "Regular"
    sizeOrdered.html(sizechoice)
})

coffeeOrder.click(function(){
order = "Coffee"
itemOrdered.html(order)
})
cappOrder.click(function(){
order = "Cappuccino"
itemOrdered.html(order)
})
espressoOrder.click(function(){
order = "Espresso"
itemOrdered.html(order)
})
latteOrder.click(function(){
order = "Latte"
itemOrdered.html(order)
})
mochaOrder.click(function(){
order = "Mocha"
itemOrdered.html(order)
})
chi.click(function(){
order = "Chi Tea"
itemOrdered.html(order)
})
specialOrder.click(function(){
order = "Special Request"
itemOrdered.html(order)
})

iced.click(function(){
special = special+" Iced"
specialOrdered.html(special)
})

sweet.click(function(){
special += " Sweet"
specialOrdered.html(special)
})
milk.click(function(){
special +=" Add milk"
specialOrdered.html(special)
})
specialRequest.click(function(){special +=" Special Request"
specialOrdered.html(special)
})

search.click(function(){
console.log("Was clicked")
console.log(displayBox)
$(function(){
    $("#dialog").dialog();
})    
displayBox.innerHTML=''
})
