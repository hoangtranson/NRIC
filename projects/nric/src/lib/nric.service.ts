import { Injectable } from '@angular/core';
import { I_NRIC } from './service.interface';

@Injectable({
  providedIn: 'root'
})
export class NricService implements I_NRIC {

  isNRICvalid(value: string): boolean {
    throw new Error("Method not implemented.");
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
