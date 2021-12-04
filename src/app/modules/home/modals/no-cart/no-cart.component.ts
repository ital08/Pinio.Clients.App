import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-no-cart',
  templateUrl: './no-cart.component.html',
  styleUrls: ['./no-cart.component.css']
})
export class NoCartComponent implements OnInit {
  title: string;
  message: string;
  cancelButton: any;
  acceptButton: any;

  public onClose: Subject<boolean>;

  constructor(
    private router: Router,
    public bsModalRefModalMessage: BsModalRef,
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
  }

  cancel() {
    this.onClose.next(false);
    this.bsModalRefModalMessage.hide();
  }

  accept() {
    this.onClose.next(true);
    this.bsModalRefModalMessage.hide();
    this.router.navigateByUrl('auth/login');
  }

}
