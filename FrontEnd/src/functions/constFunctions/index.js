export const myFormattedTime = () =>{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm ;
    return strTime;
}

// export  function myFormattedDate(){
//     const MonName = [
//         "" , "Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "Jul" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec" 
//     ]
//     var date = new Date();
//     var dateNo = date.getDate();
//     var month = date.getMonth();
//     var year = date.getFullYear();
//     var strDate = dateNo + " " + MonName[month] + ',' + year;
//     return strDate;

// }