const mongoose = require('mongoose');
// {/iNotebook -create a collection in mongodb compass with name iNotebook and put below
// same name. After that it will appear in iNotebook > users }
const mongoURI = 'mongodb://127.0.0.1:27017/iNotebook';

const connectToMongo = () => {
    mongoose.connect(mongoURI, ).then(() => console.log('connnected  sucessfully'))
        .catch((err) => { console.error(err); })

}
module.exports = connectToMongo;