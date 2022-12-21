  //console.log(`Uppdatera task med id ${id}`);
  /* sicka med body som är ett objekt översatt till json, 
     objektet ska innehålla egenskapen completed med värde true eller false
  */

     /* kopiera request från creat, ändra method till put och url till `${this.url}/${id}` nedan 
     */


     const JSONId = JSON.stringify(id);
     console.log(`Sending ${JSONId} to ${this.url}`);
 
     const request = new Request(`${this.url}/${id}`, {
       method: 'PUT',
       //body: JSONId,
       //completed: true // ska denna vara satt såhär eller tillhör det objektet body: JSONId?
     });













     // MIKEALS
  function checkTask(id) {
    /* 
      skapa ett obejkt som har ne egenskap som heter completed och har värdet input.ckeckted
      
      Sicka objektet och id till api.update
    */
    api.update(id.value)
    .then((result) => {
    //renderList() -- Gör att icheckning ej funkar i webbläsaren :(
    //console.log(input.checked) //visar i konsolen true respektive false 
    //console.log(input.value)
    console.log("det funkar")
    });

    

   /*  update(id) {
      console.log(`Updating task with id ${id}`);
      
    } */

  /*   async update(data) {
      const request = new Request(this.url, {
          method: 'PUT',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      
      const out = await fetch(request);
      return out;
  } */
  }