import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {OrderByPipe} from './orderBy';


export class PfinDetailsInfo {
  constructor(public age: number) { }
}

export class PfinDetails {
  public taxId: string;
  public pfinNumber: number;
  public billpfinNumber: number;
  public info: PfinDetailsInfo;

  constructor(taxId: string, pfinNumber: number, billpfinNumber: number, age: number) {
      this.taxId = taxId;
      this.pfinNumber = pfinNumber;
      this.billpfinNumber = billpfinNumber;
      this.info = new PfinDetailsInfo(age);
  }
}

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingComponent implements OnInit {

  newPfinDetails = new PfinDetails('', 0, 0, 18);
  pfinDetails: PfinDetails[] = [
      new PfinDetails('tax', 10, 11, 46),
      new PfinDetails('tax', 12, 11, 31),
      new PfinDetails('tax', 11, 11, 42),
      new PfinDetails('tax', 10, 12, 72),
      new PfinDetails('taxId', 10, 11, 71),
      new PfinDetails('taxId', 10, 12, 62),
      new PfinDetails('taxId', 11, 12, 42)
  ];
  pfinDetailsOrderBy1Desc = '-';
  pfinDetailsOrderBy1Property = 'taxId';
  pfinDetailsOrderBy2Desc = '';
  pfinDetailsOrderBy2Property = 'pfinNumber';

  pfinDetailsOrderBy3Desc = '';
  pfinDetailsOrderBy3Property = 'billpfinNumber';
  pfinDetailsOrderByConfig = [
    (this.pfinDetailsOrderBy1Desc + this.pfinDetailsOrderBy1Property),
    (this.pfinDetailsOrderBy2Desc + this.pfinDetailsOrderBy2Property),
    (this.pfinDetailsOrderBy3Desc + this.pfinDetailsOrderBy3Property)
  ];
  newFruit = '';
  fruit: string[] = ['orange', 'apple', 'pear', 'grape', 'banana'];
  fruitOrderByConfig = '+';

  addToArrays(): void {
  this.fruit.push('new fruit');
  this.pfinDetails.push(new PfinDetails('New', 0, 0, 47));
}

setFruitConfig(newConfig: string) {
  this.fruitOrderByConfig = newConfig;
}

addFruit() {
  if (this.newFruit.length <= 0) { return; }

  this.fruit.push(this.newFruit);
  this.newFruit = '';
}

setpfinDetailsConfig(type: string, index: number, newConfig: string) {
  if (type === 'desc') {
    if (index === 1) {
      this.pfinDetailsOrderBy1Desc = newConfig;
    } else if (index === 2) {
      this.pfinDetailsOrderBy2Desc = newConfig;
    } else {
      this.pfinDetailsOrderBy3Desc = newConfig;
    }
  } else {
    if (index === 1) {
      this.pfinDetailsOrderBy1Property = newConfig;
    } else if (index === 2) {
      this.pfinDetailsOrderBy2Property = newConfig;
    } else {
      this.pfinDetailsOrderBy3Property = newConfig;
    }
  }

  this.pfinDetailsOrderByConfig = [
      (this.pfinDetailsOrderBy1Desc + this.pfinDetailsOrderBy1Property),
      (this.pfinDetailsOrderBy2Desc + this.pfinDetailsOrderBy2Property),
      (this.pfinDetailsOrderBy3Desc + this.pfinDetailsOrderBy3Property)
    ];
}

addPfinDetails() {
  if (this.newPfinDetails.taxId.length <= 0 ||
    this.newPfinDetails.pfinNumber <= 0 ||
    this.newPfinDetails.billpfinNumber <= 0) { return; }

  this.pfinDetails.push(this.newPfinDetails);
    this.newPfinDetails = new PfinDetails('', 0, 0, 18);
}

  ngOnInit() {
  }

}
