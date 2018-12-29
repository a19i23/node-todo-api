var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

var user = new User({
    email: 'alan@me.com'
});

user.save().then((doc) => {
    console.log('Saved user', doc);
}, (e) => {
    console.log('Unable to save user', e);
});


// var newTodo2 = new Todo({
// text: '    Edit this video  '
// });

// newTodo2.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save todo', e);
// });

//User
// email - require it - trim it -set type - set min length of 1