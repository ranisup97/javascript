const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        if(!error){
            callback(null, month);
        }else{
            callback(new Error('Sorry Data Not Found', []));
        }
    }, 4000);
}

getMonth((cb, month) => {
    const bulan = month.map(item => item);
    console.log(bulan.toString()); //merubah value month menjadi string
});