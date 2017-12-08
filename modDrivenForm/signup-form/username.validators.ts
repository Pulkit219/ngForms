import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernameValidators{

   static cannotContainSpace(control:AbstractControl) : ValidationErrors | null
    {
       if((<string>control.value).indexOf(' ')>=0)
       {
           return {cannotContainSpace: true};
       }
       return null;
    }

    static beUnique(control:AbstractControl):Promise<ValidationErrors | null> 
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(control.value === 'pulkit')
                {
                    resolve ({ beunique:true });
                } 
                else 
                resolve(null);
                
            },2000);
        });
        
    }
}