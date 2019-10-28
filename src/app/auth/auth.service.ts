import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { map } from 'rxjs/operators';
import { IUser } from './interface/user.model.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth : AngularFireAuth,
    private router: Router,
    private afDB : AngularFirestore
  ) { }

  initAuthListener(){
    this.afAuth.authState
        .subscribe(
          fbUser =>{
            console.log(fbUser);

          }
        )
  }

  crearUsuario(nombre:string, email:string, password:string){
    this.afAuth.auth
        .createUserWithEmailAndPassword(email,password)
        .then( resp => {
         const user :IUser = { nombre, email: resp.user.email, uid: resp.user.uid  }
          this.afDB.doc(`${user.uid}/usuario`)
                  .set(user)
                  .then(()=>{
                    this.router.navigate(['/']);
                  });
        })
        .catch( err =>{ 
      
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: err.message,        
          })
        });
  }

  login(email:string, password:string){
    this.afAuth.auth
    .signInWithEmailAndPassword(email, password)
    .then( resp => {
      
     this.router.navigate(['/']);
    })
    .catch( err => {
      
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: err.message,        
      })
    });
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
    
  }

  isAuth(){
    return this.afAuth.authState.pipe(
      map( fbUser =>{ 
        if(fbUser ==null) this.router.navigate(['/auth'])  
        return fbUser !=null
      })
    );
  }
}
