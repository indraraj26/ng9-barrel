import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng9-repro";
  public myForm: FormGroup;

  constructor(private swUpdate: SwUpdate) {
    this.myForm = new FormGroup({
      status: new FormControl(""),
      hobbies: new FormControl(""),
      profile: new FormControl(""),
      test: new FormControl("")
    });
  }

  ngOnInit() {
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     if (confirm("New version available. Load New Version?")) {
    //       window.location.reload();
    //     }
    //   });
    // }
  }

  onStatusChange() {
    const statusValue = this.myForm.get("status").value;
    if (statusValue == 1) {
      this.handleValidation(["hobbies", "profile"], "");
    } else {
      this.handleValidation("", ["hobbies", "profile"]);
    }
  }

  handleValidation(addValidationField, removeValidationField) {
    if (addValidationField) {
      let control: FormControl;
      addValidationField.forEach(item => {
        control = this.myForm.get(item) as FormControl;
        control.markAsUntouched();
        control.markAsPristine();
        control.setValidators(Validators.required);
      });
    }
    if (removeValidationField) {
      let control: FormControl;
      removeValidationField.forEach(item => {
        control = this.myForm.get(item) as FormControl;
        control.markAsUntouched();
        control.markAsPristine();
        control.clearValidators();
        control.patchValue("");
      });
    }
    this.myForm.updateValueAndValidity();
  }
  onSubmit() {
    console.log(this.myForm.valid, this.myForm);
  }
}
