/*
|--------------------------------------------------
| Designer's Image Admin Main Scripts
|--------------------------------------------------
*/
import { navigation } from './admin/layout/navigation'
import { theme } from './admin/layout/theme';

ready(() => {

    // Load the Admin Navigation Script
    navigation();

    // Load the Admin Theme Script
    theme();

})

/*
|--------------------------------------------------
| DOCUMENT READY FUNCTION
|--------------------------------------------------
*/
function ready(callbackFunction) {
    if(document.readyState != 'loading') {
        callbackFunction();
    } else {
        document.addEventListener("DOMContentLoaded", callbackFunction);
    }
}