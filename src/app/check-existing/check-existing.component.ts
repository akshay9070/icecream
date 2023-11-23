import { Component } from '@angular/core';
import { BankApiService } from '../service/bank-api.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-check-existing',
  templateUrl: './check-existing.component.html',
  styleUrls: ['./check-existing.component.css']
})
export class CheckExistingComponent {

mobileNumber!:string;
msg:string='';

customer :Customer={};
accountNum:number=0;
accountExist :boolean = false;
errorMsg:string='';
formSubmitted:boolean=false;
kycStatus:string='';
  constructor(private bankapiservice:BankApiService){}

  onSubmit():void{
    this.formSubmitted = true;
    this.bankapiservice.findAccount(this.mobileNumber).subscribe(
      (data)=>{
        this.accountExist=true;
        this.customer=data.existingCustomer;
        this.accountNum=data.existingCustomer.account_number;
        this.kycStatus=data.existingCustomer.kycStatus;
        console.log(data.existingCustomer);

      },
      (error)=>{
        this.accountExist=false;
        this.errorMsg = error.error;
        //console.log(error);
      }
    );

  }

  onShowForm():void{
    this.formSubmitted = false;
  }

  onClear():void{
    this.formSubmitted = false;
    this.accountExist=false;
  }

}
