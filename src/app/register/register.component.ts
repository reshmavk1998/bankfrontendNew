import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // login  form group
registerForm =this.fb.group({
  // array
  uname:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

constructor( private fb: FormBuilder,private api:ApiService,private router:Router){

}
  register(){
 if(this.registerForm.valid){
  let acno = this.registerForm.value.acno
  let pswd =  this.registerForm.value.pswd
  let uname= this.registerForm.value.uname
this.api.register(uname,acno,pswd)
.subscribe(
  // success
  (result:any)=>{
  alert(result.message)
  // navigate login
  this.router.navigateByUrl('')

},
// client
  (result:any)=>{
    alert(result.error.message)
    
  }
)
  }
    else{
      alert('Invalid Form')
    }
  }


}
