const express = require('express')
const app = express();
const exphbs = require('express-handlebars')
var path = require('path')

const routes = require('./routes/router')

const hbs = exphbs.create({
    defaultLayout:'main',
    layoutsDir:path.join(__dirname,'views/mainLayout'),

    helpers: {
        add: function(value) {
            return value + 100;
        },

        list: function(value, options) {
            let out = "<ul>";
            for (let i = 0; i < value.length; i++) {
                out = out + "<li>" +  options.fn(value[i]) + "</li>";
            }
           // console.log(out + "</ul>")
            return out + "</ul>";
        }
    }

})

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

app.use('/',routes);

app.listen(4040, () => {
    console.log('Server is starting at port ', 4040);
});