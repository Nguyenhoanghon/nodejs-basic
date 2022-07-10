import connection from '../configs/connectDB';

let getHomepage = (req, res) => {
    //logic
    let data = [];
    connection.query(
        'SELECT * FROM `users` ',
        function(err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.ID,
                    firstName: row.firstname,
                    email: row.email,
                    address: row.address,
                    lastName: row.lastname
                })

            });
            console.log('>>>test data ', data)
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })

        })


}
export default {
    getHomepage
}