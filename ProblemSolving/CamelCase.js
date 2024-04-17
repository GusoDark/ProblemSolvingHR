function camelcase(s) {
    // Write your code here
    var wCount = 0;

    if(s != null || s != ""){
        wCount++;
        for(var i = 0; i<s.length; i++){
            if(s[i] === s[i].toUpperCase() && s[i+1] != null){
                wCount++;
            }
        }
    }
    return wCount;

}
let s = 'saveChangesInTheEditorG';
console.log(camelcase(s));

