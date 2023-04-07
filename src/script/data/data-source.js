class DataSource{
    static getHotel() {
        return fetch('https://hotels4.p.rapidapi.com/get-meta-data', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7a7593a363msh0cc4c6f6b4747cfp1ba874jsn68f73b9a0617',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }

        })
            .then(responseJson => {
                if (responseJson) {
                    console.log(Promise.resolve(responseJson));
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

const data = DataSource.getHotel();
console.log(data);

// export default DataSource;
