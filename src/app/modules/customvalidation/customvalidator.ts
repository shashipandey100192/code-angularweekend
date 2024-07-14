import { AbstractControl,ValidationErrors } from "@angular/forms";



export function customValidator(control: AbstractControl): ValidationErrors | null {
    const valid = /[a-zA-Z]/.test(control.value);
    return valid ? null : { custom: true };
  }
  
  export function phonevalidation(control: AbstractControl): ValidationErrors | null {
    const valid = /[0-9]{10}/.test(control.value);
    return valid ? null : { custom: true };
  }
  
  export function emailvalidation(control: AbstractControl): ValidationErrors | null {
    const valid = /[a-zA-Z]/.test(control.value);
    return valid ? null : { custom: true };
  }
  
