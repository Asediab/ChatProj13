import { Component } from '@angular/core';
import firebase from "firebase/compat/app";
import 'firebase/compat/database';


const config = {
  apiKey: 'fw2VsJiFRw52M0WXOVtWk_N8VPydGvIy2JNBVCKaYDY',
  databaseURL: 'https://proj13-9e457-default-rtdb.europe-west1.firebasedatabase.app/'
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-proj13';
  constructor() {
    firebase.initializeApp(config);
  }
}
