import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
  styleUrls: ["./topnav.component.scss"]
})
export class TopnavComponent implements OnInit {
  user;
  constructor(public auth: AuthService, private af: AngularFireAuth) {
    this.af.authState.subscribe(u => (this.user = u));
  }

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {}
}
