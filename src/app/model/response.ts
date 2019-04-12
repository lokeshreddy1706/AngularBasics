import { ErrorResponseView } from "./error-response";
import { SuccessResponseView } from "./success-response";

export class ResponseView {

    constructor(
        public timeStamp : Date,
        public status : String,
        public statusMessage : String,
        public error : ErrorResponseView,
        public results : SuccessResponseView
    ){ }

}