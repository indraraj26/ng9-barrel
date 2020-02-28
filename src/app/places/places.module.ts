import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PlaceComponents } from "./places.components";

@NgModule({
  declarations: PlaceComponents,
  imports: [CommonModule],
  exports: PlaceComponents
})
export class PlacesModule {}
