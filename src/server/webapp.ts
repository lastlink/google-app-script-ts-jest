
import { getItems } from "../list/getSheetList";

/**
 * match response here https://github.com/gothinkster/realworld/tree/master/api
 * @param {*} result
 */
function buildSuccessResponse(result: any) {
    const output = JSON.stringify(result);

    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function buildErrorResponse(message: any, code: number) {
    const output = JSON.stringify({
        code,
        errors: message,
        message
    });

    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JAVASCRIPT);
}

const doPost = (e: any) => {
    const request = JSON.parse(JSON.stringify(e));
    let response = {};
    response = request;
    return buildSuccessResponse(response);
};

const doGet = (e: any) => {
    let request = null;
    try {
        request = JSON.parse(JSON.stringify(e));
    } catch (error) {
        Logger.log("Debugging function directly.");
    }
    const response = request;
    response.items = getItems();
    return buildSuccessResponse(response);
};

export { doPost, doGet };