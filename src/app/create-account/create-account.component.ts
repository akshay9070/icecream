import { Component } from '@angular/core';
import { BankApiService } from '../service/bank-api.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})

export class CreateAccountComponent {

  constructor(private bankapiservice:BankApiService){}
  
  customer :Customer={};

  response_data:string='';
  formSubmitted:boolean=false;
  showErrorMsg:boolean=false;
  onSubmit(): void{
    //console.log(this.model);
    this.formSubmitted = true;
    this.showErrorMsg = false;
    this.bankapiservice.createAccount(this.customer).subscribe(
      (data)=>{
        this.response_data=data.message;
        console.log(data);
      },
      (error)=>{
        this.showErrorMsg = true;
        this.response_data=error.error.message;

        console.log(error);
      }
    );

  }
onClear():void{
  this.formSubmitted =false;
}
  onShowForm():void{
    this.formSubmitted =false;
  }
}
