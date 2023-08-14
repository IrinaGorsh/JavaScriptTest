// *1 Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }

    const arr =  Object.values(numbers);

    const newArr = arr.map(item => {
      if (item >= 3) return item;
  });
  
  console.log(newArr);
    
    
    // * 2 Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.


      const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
        {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
        likes: 10,
        dislikes: 2, // вывести это число
        },
        },
        {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
        likes: 3,
        dislikes: 1,
        },
        },
        ],
        };

        let  {
          author, 
          postId,
          comments: [
          {
          userId,
          userName,
          text,
          rating: {
          likes,
          dislikes
          },
        },
        {userId:userId1,
        userName:userName1,
        text:text1,
        rating: {
          likes:likes1,
          dislikes:dislikes1
        }
      }
        ],
          } = post;

console.log(author);
console.log(dislikes);
console.log(userId1);
console.log(text1);


// * 3 Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
  {
  id: 3,
  price: 200,
  },
  {
  id: 4,
  price: 900,
  },
  {
  id: 1,
  price: 1000,
  },
  ];

  products.forEach((product) => {
    newPrice = product.price - product.price/100*15
    console.log(newPrice);
  });

  


  // * 4.1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
  // * 4.2. Необходимо отсортировать массив products1 используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.


  const products1 = [
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ],
    },
    {
    id: 5,
    price: 499,
    photos: [],
    },
    {
    id: 10,
    price: 26,
    photos: [
    "3.jpg",
    ],
    },
    {
    id: 8,
    price: 78,
    },
    ];

    const filteredByPhoto = products1.filter((item) => {
            if (item.photos > [null]) return item;
    });
    
    
    console.log(filteredByPhoto); 
    
    const prices = products1.map(el => el.price); 
    const pricesMinMAX = prices.sort((a, b) => a - b);
    console.log(pricesMinMAX); 
