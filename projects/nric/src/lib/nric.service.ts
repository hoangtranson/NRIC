import { Injectable } from '@angular/core';
import { I_NRIC } from './service.interface';

import { splitNRIC, combineToDate } from './service.helpers';
import { isStateValid } from './state.helpers';

@Injectable()
export class NricService implements I_NRIC {

  constructor(){}
  
  isNRICValid(value: string): boolean {
    const [ input, year , month , day ,birthPlace, ...rest] = splitNRIC(value);
    const birthDate = combineToDate(year, month, day);

    return !birthDate && isStateValid(birthPlace);
  }

  randomNRICNumber(): string {
    throw new Error("Method not implemented.");
  }

  formatNRICNumber(value: string, delimiter?: string): string {
    throw new Error("Method not implemented.");
  }

  getInfo(value: string): object {
    throw new Error("Method not implemented.");
  }
}
