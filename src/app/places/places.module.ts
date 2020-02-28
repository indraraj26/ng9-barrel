import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { placeComponents } from "./components";

@NgModule({
  declarations: placeComponents,
  imports: [CommonModule],
  exports: placeComponents
})
export class PlacesModule {}
