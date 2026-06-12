let GETDATAAPI;
if (localStorage.getItem("Native")) {
    GETDATAAPI = "'https://script.google.com/macros/s/AKfycbw2SnSjvhx5NxNDrl3Cmw1E0uANC2TSH6FcLLeAnVz3u0xgRUp26FuS3iYjtx74vgBh/exec'";
} else {
    GETDATAAPI = "https://script.google.com/macros/s/AKfycbw2SnSjvhx5NxNDrl3Cmw1E0uANC2TSH6FcLLeAnVz3u0xgRUp26FuS3iYjtx74vgBh/exec";
};
export { GETDATAAPI };