const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('../server/db/mongoose');
const {
    Todo
} = require('../server/models/todo');

const {
    User
} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({})
Todo.findByIdAndRemove('5c296656dd306231bf63ae41').then((todo) => {
    console.log(todo);
});