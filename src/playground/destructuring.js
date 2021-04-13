//object destructurig

const book = {
    title: 'Sapiens',
    author: 'Youvaal Harari',
    publisher: {
        name: 'Sunday times'
    }
}

const { name:publisherName = 'self published'} = book.publisher 
console.log(publisherName);

//array destructuring

const address = ['pune','mumbai','bali','nashik']

const [city1, city2, city3, city4] = address

console.log(`You are in ${city4}`)

const item = ['Coffee (hot)', '$2.50', '$2,75', '$3.00']

const [MediumHot, medium, small, large ] = item

console.log(`A medium ${MediumHot} costs ${medium}`)