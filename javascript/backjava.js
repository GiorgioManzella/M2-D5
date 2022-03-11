let name = document.getElementById("name")
let description = document.getElementById("description")
let image = document.getElementById("image")
let category = document.getElementById("category")


function handleChange(){
    
    
    
    let myObject = {
        
        name: name.value,
        description: description.value,
        imageUrl: image.value,
        category: category.value
    }
    
    
    let transformObject = JSON.stringify(myObject)



fetch("https://striveschool-api.herokuapp.com/api/movies/",{
    method: "POST",
    headers: {
       "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
       "Content-Type": "application/json"},
    body: transformObject
    })
    .then((data)=> data.json())
    .then((data) => console.log(data))

}
let modify = function() {


    let myObject = {

        name: name.value,
        description: description.value,
        imageUrl: image.value,
        category: category.value
    }
    let transformObj = JSON.stringify(myObject)



fetch("https://striveschool-api.herokuapp.com/api/movies/" + urlSearchId,{
        method: "PUT",
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
           "Content-Type": "application/json"},
        body: transformObj
        })
        .then((data)=> data.json())
        .then((data) => console.log(data))

}

const urlSearchId = (new URLSearchParams(window.location.search)).get("id")


const handleDelete = function(){


    fetch("https://striveschool-api.herokuapp.com/api/movies/" + urlSearchId,{
        method: "DELETE",
        headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
           "Content-Type": "application/json"},
        
        })
        .then((data)=> data.json())
        .then((data) => console.log(data))

}


















