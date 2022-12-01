let userAge =   document.getElementById('age');
let userDate =  document.getElementById('date-age');
let parrafo1 =  document.createElement('p');
let parrafo2 =  document.createElement('p');
let container = document.getElementById('text_container');
let button =    document.getElementById('btn');
let text1 =     document.getElementById('text-1');
const text2 =   document.getElementById('text-2');
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
},12000)

button.style.display = 'none';

 let fecha = new Date();


setTimeout(()=>{
	console.log('a')
},4000)



  userAge.addEventListener('click',()=>{
  let userAge = document.getElementById('age');
  userAge.appendChild(parrafo1);
  userAge=prompt('ingrese su edad');

  setTimeout(()=>{
   press.innerHTML = 'dejame concentrar';
   con.style.animationName = 'concentracion';
  },1000)


   setTimeout(()=>{
//     console.log('y');
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

  })




  userDate.addEventListener('click',()=>{
  let userDate =  document.getElementById('date-age');
  userDate.appendChild(parrafo2);
  console.log('click2');
   userDate=prompt(`ingrese su fecha de nacimiento`)


   setTimeout(()=>{

   press.innerHTML = `me indicas que naciste en el año ${userDate} asi que tienes ${fecha.getFullYear() - userDate} años`;
   parrafo2.innerHTML = `tu tienes ${fecha.getFullYear() - userDate} años`
   button.style.display = 'inline-block';
   },8000)

   if(userDate <= 1922){
     press.innerHTML = 'no pudiste haber nacido en ese año, es imposible que estes vivo o seguuramente me estas mintiendo';
   }else if(userDate >= `${fecha.getFullYear() +1}`){
     press.innerHTML = 'aun no llegamos a ese año asi que aun no haz nacido';
   }else{
   	 console.log('error');
   }

  })

button.addEventListener('click',()=>{

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
 