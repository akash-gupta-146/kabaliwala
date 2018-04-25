import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';

@Injectable()
export class SharedService {

    constructor(
        private customService: CustomService
    ) { }

/**
 * checks if there is a non-digit character in contact no.
 * IF YES: return false
 * ELSE return true
 * IF @param contactNo is undefined or empty string, then also return true
 */
    isValidContactNo(contactNo: string) {

        const pattern = /[^0-9]/; // regx for checking if there is a non-digit character in contact no.

        if (contactNo && contactNo.trim() !== '' && pattern.test(contactNo)) {
            this.customService.showToast('Only digits are allowed in Contact No.', "top");
            return false;
        }

        if (contactNo && contactNo.trim() !== '' && contactNo.trim().length !== 10) {
            this.customService.showToast('Contact No. must contain exactly 10 digits', "top", true);
            return false;
        }

        return true;
    }
}