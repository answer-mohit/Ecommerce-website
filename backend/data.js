import bcrypt from 'bcryptjs';
const data={
    users:[
        {
    name:'Mohit',
email:'mohit@gmail.com',
password:bcrypt.hashSync('12345',8),
isAdmin:true
        },
        {
    name:'John',
email:'john@gmail.com',
password:bcrypt.hashSync('12345',8),
isAdmin:false
        },
    ],
    products:[
        {
            name:'Nike Slim Shirt',
            category:'Shirt',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
             numReviews:10,
             description:'high quality product'
        },
        {
            name:'Adidas Fit Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:100,
            countInStock:20,
            brand:'Adidas',
            rating:4.0,
             numReviews:10,
             description:'high quality product'
        },
        {
            name:'Lacoste Free Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:220,
            countInStock:0,
            brand:'Lacoste',
            rating:4.8,
            numReviews:18,
            description:'high quality product'
        },
        {
            name:'Nike Slim Pant',
            category:'Pants',
            image:'/images/p4.jpg',
            price:75,
            countInStock:15,
            brand:'Nike',
            rating:4.5,
             numReviews:14,
             description:'high quality product'
        },
        {
            name:'Pumma Slim Pant',
            category:'Pants',
            image:'/images/p5.jpg',
            price:65,
            countInStock:5,
            brand:'Nike',
            rating:4.5,
             numReviews:10,
             description:'high quality product'
        },
        {
            name:'Addidas Fit Pant',
            category:'Pants',
            image:'/images/p6.jpg',
            price:139,
            countInStock:25,
            brand:'Addidas',
            rating:3.5,
             numReviews:15,
             description:'high quality product'
        },
    ]
}
export default data;