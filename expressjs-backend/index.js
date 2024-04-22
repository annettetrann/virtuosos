const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

//get(first parameter is the path, second parameter is the callback function)
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);

const users = {
    users_list:
        [
            {
                id: 'xyz789',
                name: 'Charlie',
                job: 'Janitor',

            },
            {
                id: 'abc123',
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                id: 'ppp222',
                name: 'Mac',
                job: 'Professor',
            },
            {
                id: 'yat999',
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                id: 'zap555',
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
}
app.get('/users', (req, res) => {
    res.json(users);
    }
);