import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-purchase',
  templateUrl: './modal-purchase.component.html',
  styleUrls: ['./modal-purchase.component.css']
})
export class ModalPurchaseComponent implements OnInit {

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
    this.router.navigateByUrl('/')
    this.bsModalRefModalMessage.hide();
  }

  accept() {
    this.onClose.next(true);
    this.router.navigateByUrl('/')
    this.bsModalRefModalMessage.hide();

  }

}
