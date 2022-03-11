window.onload= () => {
    fetchdata()
    fetchdata2()
    fetchdata3()
    fetchdata4()
}
  
  
  const fetchdata = () => {
      fetch("https://striveschool-api.herokuapp.com/api/movies/" + "adventure",{
      headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
         "Content-Type": "application/json"}})
      .then((data) => data.json())
      .then((data) => {console.log(data)
      fetchElement(data)
      })
  }
  
   
  
  
  
  let box1 = document.getElementById("box1")
  
  let fetchElement = function(data) {
    
          data.forEach(element => {
      

            

            box1.innerHTML += `
            
            <div class="col-4 col-md-3 col-lg-2 px-1 mb-2 mb-md-2 image-container hovrable">
            <a href="/NetflixADD.html?id=${element._id}">
            <img src="${element.imageUrl}" alt="image movie" class="img-fluid image mb-2">
            </a>
            </div>
            
            
            `
          });
              
            }


//------------------------------------------------------------------------------------

  const fetchdata2 = () => {
      fetch("https://striveschool-api.herokuapp.com/api/movies/" + "Horror",{
      headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
         "Content-Type": "application/json"}})
      .then((data) => data.json())
      .then((data) => {console.log(data)
      fetchElement2(data)
      })
  }
  
   
  
  
  
  let box2 = document.getElementById("box2")
  
  let fetchElement2 = function(data) {
    
          data.forEach(element => {
      

            

            box2.innerHTML += `
            
            <div class="col-4 col-md-3 col-lg-2 px-1 mb-2 mb-md-2 image-container hovrable">
            <a href="/NetflixADD.html?id=${element._id}">
            <img src="${element.imageUrl}" alt="image movie" class="img-fluid image mb-2">
            </a>
            </div>
            
            
            `
          });
              
            }




            //```````````````````````````````````````````````````````````````````````````````````````````````````
  const fetchdata3 = () => {
      fetch("https://striveschool-api.herokuapp.com/api/movies/" + "action" ,{
      headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
         "Content-Type": "application/json"}})
      .then((data) => data.json())
      .then((data) => {console.log(data)
      fetchElement3(data)
      })
  }
  
   
  
  
  
  let box3 = document.getElementById("box3")
  
  let fetchElement3 = function(data) {
    
          data.forEach(element => {
      

            

            box3.innerHTML += `
            
            <div class="col-4 col-md-3 col-lg-2 px-1 mb-2 mb-md-2 image-container hovrable">
            <a href="/NetflixADD.html?id=${element._id}">
            <img src="${element.imageUrl}" alt="image movie" class="img-fluid image mb-2">
            </a>
            </div>
            
            
            `
          });
              
            }




            //```````````````````````````````````````````````````````````````````````````````````````````````````
  const fetchdata4 = () => {
      fetch("https://striveschool-api.herokuapp.com/api/movies/" + "cartoon" ,{
      headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YjMzZTRlYTdiMTAwMTVkMDY3YjEiLCJpYXQiOjE2NDY5Mjg2NjcsImV4cCI6MTY0ODEzODI2N30.lVKJY-Q6enD5qzEC7MMpGILJxsibnAdqVXorWLDKQ_M",
         "Content-Type": "application/json"}})
      .then((data) => data.json())
      .then((data) => {console.log(data)
      fetchElement4(data)
      })
  }
  
   
  
  
  
  let box4 = document.getElementById("box4")
  
  let fetchElement4 = function(data) {
    
          data.forEach(element => {
      

            

            box4.innerHTML += `
            
            <div class="col-4 col-md-3 col-lg-2 px-1 mb-2 mb-md-2 image-container hovrable">
            <a href="/NetflixADD.html?id=${element._id}">
            <img src="${element.imageUrl}" alt="image movie" class="img-fluid image mb-2">
            </a>
            </div>
            
            
            `
          });
              
            }




            //```````````````````````````````````````````````````````````````````````````````````````````````````
  