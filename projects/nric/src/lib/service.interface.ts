export interface I_NRIC {
    isNRICvalid(value: string): boolean;
    randomNRICNumber(): string;
    formatNRICNumber(value:string, delimiter?: string): string;
    getInfo(value:string): object;
}