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
}