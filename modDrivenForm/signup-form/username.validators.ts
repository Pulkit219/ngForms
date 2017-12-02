import { AbstractControl } from "@angular/forms/src/model";
import { ValidationErrors } from "@angular/forms/src/directives/validators";

export class UsernameValidators{

    cannotContainSpace(control:AbstractControl) : ValidationErrors | null
    {
        return null;
    }
}