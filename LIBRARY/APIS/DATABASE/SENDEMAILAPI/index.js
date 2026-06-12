let SENDEMAILAPI;
if (localStorage.getItem("Native")) {
    SENDEMAILAPI = "'https://script.google.com/macros/s/AKfycby6HrSPSFFBnXvMhUe-EPm13TPto9M6-KcRafQ9TSQh6gIVgOfetIk2w-Y6sJqFIi8/exec'";
} else {
    SENDEMAILAPI = "https://script.google.com/macros/s/AKfycby6HrSPSFFBnXvMhUe-EPm13TPto9M6-KcRafQ9TSQh6gIVgOfetIk2w-Y6sJqFIi8/exec";
};
export { SENDEMAILAPI };