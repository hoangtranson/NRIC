export interface I_NRIC {
    isNRICValid(value: string): boolean;
    randomNRICNumber(): string;
    formatNRICNumber(value:string, delimiter?: string): string;
    getInfo(value:string): object;
}