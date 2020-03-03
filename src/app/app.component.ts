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
    this.myForm = new FormGroup(
      {
        test: new FormControl({ value: "indra", disabled: false }, [
          Validators.required
        ])
      },
      { updateOn: "blur" }
    );
    // console.log(this.myForm.getRawValue());
    // console.log(this.myForm.value);
    // this.myForm.get("test").disable();
    // this.myForm.get("test").patchValue("indraraj");
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }
}
