import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../message.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-hakkinda',
  templateUrl: './hakkinda.component.html',
  styleUrls: ['./hakkinda.component.scss']
})
export class HakkindaComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl('')
  })

  constructor(private message:MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.message.saveMessage(this.contactForm.value);
    alertify.set('notifier', 'position', 'top-center');
    alertify.success("Mesaj başarıyla gönderildi.");
  }

}
