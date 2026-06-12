let GOOGLEDRIVEAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVEAPI = "'https://script.google.com/macros/s/AKfycbzgt-MnDLg9o9wX6lgu3u4yTwx9Y5S_FR-By4CNLEiDqZEzAiZ0EJmFH977cVgMlWT9/exec'";
} else {
    GOOGLEDRIVEAPI = "https://script.google.com/macros/s/AKfycbzgt-MnDLg9o9wX6lgu3u4yTwx9Y5S_FR-By4CNLEiDqZEzAiZ0EJmFH977cVgMlWT9/exec";
};
export { GOOGLEDRIVEAPI };