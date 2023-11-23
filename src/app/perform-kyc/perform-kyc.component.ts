import { Component } from '@angular/core';
import { BankApiService } from '../service/bank-api.service';
import { KYCresult } from '../model/KYCresult';

@Component({
  selector: 'app-perform-kyc',
  templateUrl: './perform-kyc.component.html',
  styleUrls: ['./perform-kyc.component.css']
})
export class PerformKycComponent {
  

constructor(private bankapiservice:BankApiService){}

mobileNumber!:string;  

formSubmitted:boolean=false;


showError:boolean=false;
showkycData:boolean=false;
_kycresult:KYCresult={};
no_account_found:boolean=false;
  onSubmit():void{

    this.formSubmitted =true;


    this.bankapiservice.doKyc(this.mobileNumber).subscribe(
      (data)=>{

      
        this.showkycData=true;
        this.showError = false;
        this.no_account_found = false;


        this._kycresult.account_number = data.kycresult.account_number;
        this._kycresult.country = data.kycresult.country;
        this._kycresult.dob = data.kycresult.dob;
        this._kycresult.kycInfo = data.kycresult.kycInfo;
        this._kycresult.kycStatus = data.kycresult.kycStatus;
        this._kycresult.kycDate = data.kycresult.kycDate;



        
        console.log(data);
      },


      (error)=>{
        this.showError = true;
        this.showkycData=false;
        
        if(error.status===404){
          this.no_account_found = true;

        }
        else{
          this.no_account_found = false;
          this._kycresult.account_number = error.error.message.account_number;
          this._kycresult.country = error.error.message.country;
          this._kycresult.dob = error.error.message.dob;
          this._kycresult.kycInfo = error.error.message.kycInfo;
          this._kycresult.kycStatus = error.error.message.kycStatus;
        this._kycresult.kycDate = error.error.message.kycDate;

          
        }
        console.log(error.error.message.kycInfo);



    
      }
    )


  }

  onClear():void{
    this.formSubmitted =false;
    

  }

  onShowForm():void{
    this.formSubmitted =false;
  }
}



// in kyc display KYC details 
// give bank acc number after kyc
// after account creation simlpe msg
// refer chatgpt