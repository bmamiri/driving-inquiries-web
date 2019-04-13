export class CarInquiry  {
    constructor(public http_code?: number,
        public http_msg?: string,
        public plate_number?: string,
        public total_amount?: string) {}
}