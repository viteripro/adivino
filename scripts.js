let conUserAge =   document.getElementById('container_age');
let conDateAge =   document.getElementById('container_date-age');
let userAge =   document.getElementById('age');
let userDate =  document.getElementById('date-age');
let parrafo1 =  document.createElement('p');
let parrafo2 =  document.createElement('p');
let container = document.getElementById('text_container');
let talk = document.getElementById('talk');
let button =    document.getElementById('btn');
const press = document.getElementById('presentation');
const con = document.getElementById('concen');
 
 setTimeout(()=>{
	press.innerHTML = 'Saludos internautas, me llamo Edgar y puedo saber en que año naciste o cuantos años tienes ';
    
 },2000)

setTimeout(()=>{
  press.innerHTML = 'no me crees? Intentemoslo ingresa tu edad o el año en que naciste'
},9000)

setTimeout(()=>{
  container.style.display = 'block'; 
  talk.style.animationPlayState = 'paused';
},12000)

button.style.display = 'none';

 let fecha = new Date();

  userAge.addEventListener('click',()=>{
  let userAge = document.getElementById('age');
  userAge.appendChild(parrafo1);
  userAge=prompt('ingrese su edad');

  setTimeout(()=>{
   press.innerHTML = 'dejame concentrar';
   con.style.animationName = 'concentracion';
   talk.style.animationPlayState = 'running';
   conUserAge.style.animationName = 'eleccion-hide';
  },1000)

   setTimeout(()=>{
   conUserAge.style.visibility = 'hidden';
  },1500)
	  
   setTimeout(()=>{
   con.style.animationName = '';
   press.innerHTML = `me indicas que tienes ${userAge} años asi que naciste en el año ${fecha.getFullYear() - userAge}`;
   parrafo1.innerHTML = `naciste en el año ${fecha.getFullYear() - userAge}`;
   button.style.display = 'inline-block';
  },5000)
   
  setTimeout(()=>{
   if(userAge >= 1 && userAge <= 20){
     press.innerHTML = 'eres demasiado joven';
   }else if(userAge >= 21 && userAge <= 41){
     press.innerHTML = 'eres joven y tienes una larga vida por delante';
   }else if(userAge >= 42 && userAge <= 49){
     press.innerHTML = 'estas muy cerca de llegar a los 50 años, debes muchas experiencias a lo largo de tu vida';
   }else if(userAge >= 50 && userAge <= 80){
   	 press.innerHTML = 'eres una persona mayor y seguramente tienes canas';
   }else if(userAge >= 81 && userAge <= 90){
     press.innerHTML = 'eres una persona anciana y estas viviendo mucho tiempo,';
   }else if(userAge >= 91 && userAge <= 104){
     press.innerHTML = 'es dificil que tengas esa edad, es muy increible';
   }else if(userAge >= 105){
     press.innerHTML = 'es imposible que tengas esa edad, debes estar mintiendo';
   }else if(userAge <=0){
     press.innerHTML = 'ese numero no coincide no tiene sentido, me haz enciado un numero negativo o un 0 y eso no tiene logica';
   }else if(userAge = ''){
     press.innerHTML = 'no me haz indicado tu edad';
   }else{
   	 press.innerHTML = 'debes ingresar un numero y no texto o simbolos';
   }
  },10000)
	  
  setTimeout(()=>{
    talk.style.animationPlayState = 'paused';
  },12000)
	  
  })


  userDate.addEventListener('click',()=>{
  let userDate =  document.getElementById('date-age');
  userDate.appendChild(parrafo2);
  userDate=prompt(`ingrese su fecha de nacimiento`)

setTimeout(()=>{
   press.innerHTML = 'dejame concentrar';
   con.style.animationName = 'concentracion';
   talk.style.animationPlayState = 'running';
   conDateAge.style.animationName = 'eleccion-hide';
  },1000)

 setTimeout(()=>{
   conDateAge.style.visibility = 'hidden';
  },1500)
	  
   setTimeout(()=>{
   con.style.animationName = '';
   press.innerHTML = `me indicas que naciste en el año ${userDate} asi que tienes ${fecha.getFullYear() - userDate} años`;
   parrafo2.innerHTML = `tu tienes ${fecha.getFullYear() - userDate} años`
   button.style.display = 'inline-block';
   },5000)

 setTimeout(()=>{
   if(userDate <= 1922){
     press.innerHTML = 'no pudiste haber nacido en ese año, es imposible que estes vivo o seguuramente me estas mintiendo';
   }else if(userDate == fecha.getFullYear()){
     press.innerHTML = 'no pudiste haber nacido en este año, entonces como es que puedes estar aqui escribiendo esto, debes estar mintiendo seguramente';
   }else if(userDate >= `${fecha.getFullYear() +1}`){
     press.innerHTML = 'aun no llegamos a ese año asi que aun no haz nacido';
   }else{
   	 console.log('error');
   }
},10000)

setTimeout(()=>{
    talk.style.animationPlayState = 'paused';
},12000)
	  
})


button.addEventListener('click',()=>{
setTimeout(()=>{
conUserAge.style.animationName = 'eleccion-show';
conDateAge.style.animationName = 'eleccion-show';
conUserAge.style.visibility = 'visible';
conDateAge.style.visibility = 'visible';
},500)

setTimeout(()=>{
talk.style.animationPlayState = 'running';
},1000)

setTimeout(()=>{
talk.style.animationPlayState = 'paused';
},2000)	


press.innerHTML = 'intentemoslo de nuevo';
button.style.display = 'none';
let userAge =   document.getElementById('age');
let userDate =  document.getElementById('date-age');
if(parrafo1.innerHTML === ''){
  console.log('se borro solo el segundo parrafo');

   userDate.removeChild(parrafo2);
  userDate.removeEventListener('click',()=>{
    	console.log('elimminados');
    })

 }else if(parrafo2.innerHTML === ''){
  console.log('se borro solo el primer parrafo');
  
  userAge.removeChild(parrafo1);
  userAge.removeEventListener('click',()=>{
    	console.log('elimminados');
    })

}else if(parrafo1.innerHTML != '' && parrafo2.innerHTML != ''){
  console.log('se borraron ambos');

   userDate.removeChild(parrafo2);
  userDate.removeEventListener('click',()=>{
    	console.log('elimminados');
    })

  userAge.removeChild(parrafo1);
  userAge.removeEventListener('click',()=>{
    	console.log('elimminados');
    })
 
}else{
  console.log('ha ocurrido un error');
}
})
 
