import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Firestore,collectionData,collection,addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {
  
  
  
  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }

//signup method()
signUp(email:string,pass:string) {
  createUserWithEmailAndPassword(this.auth,email,pass).then(res => {
    alert("Signup Successfully")
    this.router.navigate(['/'])
  }).catch(err =>{
    alert(err)
  })
}


//logout method
logout() {
  signOut(this.auth).then(res => {
    alert("Signout Successfully")
    this.router.navigate(['/login'])
  }).catch(err =>{
    alert(err)
  })
}



//login method
logIn(email:string,pass:string){
  signInWithEmailAndPassword(this.auth,email,pass).then(res => {
    alert("You are Logged In")
    this.router.navigate(['/'])
  }).catch(err =>{
    alert(err)
  })
}

//contact method()
contact(data:any){
  const contactcollection=collection(this.fire,'contactDetails')
  addDoc(contactcollection,data).then(res=>{
    alert("Data added succesfully")
  }).catch(err=>{
    alert(err)
  })
 }

 //getcontact mthod()

 getcontact(){
  const contactcollection=collection(this.fire,'contactDetails')
  return collectionData(contactcollection)
 }


//payment method()
payment(data:any){
  const contactcollection=collection(this.fire,'contactDetails')
  addDoc(contactcollection,data).then(res=>{
    alert("Data added succesfully")
    this.router.navigate(['/logout'])
  }).catch(err=>{
    alert(err)
  })
 }

 
 
 }

 
