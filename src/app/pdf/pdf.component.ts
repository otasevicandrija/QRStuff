import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.downloadPdf();
  }


  downloadPdf() {
    const pdfUrl = './assets/dummy.pdf';
    const pdfName = 'contact_card_or_so';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

}
