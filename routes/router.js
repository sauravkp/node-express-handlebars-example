const express = require('express')
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index',{
        title:'My first handlebar example!',
        name:'Saurav Panda',
        age:5,
         shouldDisplayName:false,
        shouldDisplayAge:true,
         test: '<h3>Welcome to Bengaluru</h3><h3>Welcome to Mumbai</h3>',
         items: ['Mango', 'Banana', 'Pineapple'],
        people: [
            {firstName: "Yehudi", lastName: "Mehunin"},
            {firstName: "BKS", lastName: "Iyenger"}
        ],
        
        //         items: ['Mango', 'Banana', 'Pineapple']
           
        // ,
        

    })

})

module.exports = router