import { Component, OnInit } from "@angular/core";
import { FindCategory } from "src/app/data/models/response/category.model";

@Component({
  selector: "app-sub-nav",
  templateUrl: "./sub-nav.component.html",
  styleUrls: ["./sub-nav.component.css"],
})
export class SubNavComponent implements OnInit {
  categories: FindCategory[] = [
    {
      categoryId: 1,
      name: "Televisores",
      items: 1,
      description: "Tv y celulares",
      url: "/home",
    },
  ];
  // overlay
  isOpen = false;
  constructor() {}

  ngOnInit() {}
  toggleDropdown() {
    this.isOpen = false;
  }
}
