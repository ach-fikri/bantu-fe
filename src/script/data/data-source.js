class DataSource{
    static getHotel() {
        return fetch('https://hotels4.p.rapidapi.com/get-meta-data', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7a7593a363msh0cc4c6f6b4747cfp1ba874jsn68f73b9a0617',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }

        })
            .then(response=>response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}

// const data = DataSource.getHotel();
// console.log(data);

module.exports = DataSource;
