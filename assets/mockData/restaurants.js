const data = {
  restaurants: [
    {
      id: 10,
      title: 'Spencers',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      website: 'www.spencers.com',
      menu: {
        combos: [
          {
            id: 1,
            title: 'first meal',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 2,
            title: 'second meal',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 13,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 14,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
    {
      id: 12,
      title: 'Sebi',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      menu: {
        combos: [
          {
            id: 3,
            title: 'Biobeles Brunch',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 4,
            title: 'Biobeles Brunch2',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 5,
            title: 'meal 3',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 6,
            title: 'meal 4',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 15,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 16,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
    {
      id: 99,
      title: 'Sebi2',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      menu: {
        combos: [
          {
            id: 7,
            title: 'Biobeles Brunch2',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 8,
            title: 'Biobeles Brunch3',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 86,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 48,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
    {
      id: 98,
      title: 'Sebi2',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      menu: {
        combos: [
          {
            id: 251,
            title: 'Biobeles Brunch2',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 521,
            title: 'Biobeles Brunch3',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 17,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 18,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
    {
      id: 55,
      title: 'Sebi3',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      menu: {
        combos: [
          {
            id: 254,
            title: 'Biobeles Brunch2',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 525,
            title: 'Biobeles Brunch3',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 56,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 78,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
    {
      id: 58,
      title: 'Sebi6',
      location: 'Lagos',
      review: 4.5,
      cuisine: 'Italian,Bar,Pub',
      price_range: '10-100',
      foodie_ranks: '2 of 250',
      address: '5,Adewaye Close,Sinafi Estate lkoyi,Lagos',
      phone: '(234) 709 812 5634',
      email: 'contact@spencers.com',
      menu: {
        combos: [
          {
            id: 2542,
            title: 'Biobeles Brunch2',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 9,
            img: 'https://s3-alpha-sig.figma.com/img/0392/277d/30896473910c66b28782c2bac7e12683?Expires=1659312000&Signature=ZJRkgUKDnoFYMbhThw0XMFHwNUEzU4uieFddSufZNW8V5~TuRmeZnKpOLOpJyQmgBMVBOcQuR71UWS7YLqaTAJoDoTt~ekeKjc8N6w~qrIhcXD9EDRKgLsjmd2c5z8T6ob1kVUXmEYv6OHplpid6DM~TmnrlBuD~aZEt5gj5ZaKBGzDYKOtKImL7cDBzlGHc9oMq1GYvAgU7Ybt7aaSD7bvJLvqM-tHK9T04TUlZtiIhqMT4kYWEIifUeh-6cPgbwgOf0DadFAa20VFo94ZNgm-eby9TFXy63EWwETEyfi4p5Cd0LTXLdiUOOjqOl~nQJcTAoY9OlLxpm2bcejnnFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
          {
            id: 5252,
            title: 'Biobeles Brunch3',
            ingredients:
              'Waffles,strawberries,sausage,mushrooms,baked beans,toast and grilled tomatoes',
            price: 12,
            img: 'https://s3-alpha-sig.figma.com/img/31bb/8de7/25021532bf406ee0e6a88a5a09b66163?Expires=1659312000&Signature=gmeN-r7Cs~pwEIqq1xJzgBtWdsE-MdIp8zTyYUbw0H1rSyHMiuczBnrwBQS8bbvLAYli3O4kDyadnN3rYhjDpR2Su6-ZdIL~7yoobDW~kDIAzXg-VQMHt7oABrksGPO3wZ6ScyvBMZCVoVH6j9p6217ANuhUCqwS1WUjObPqfsS6qYuCwUzIwsvGZ1dHlYnBeHkHdiIqD31HHVoLLOwjC8zk3cj9hlUB55ZXKfLR7POJkloaSj3noaa3WUvKFa5xZJGJ2c-jXiYQY1iPCKk-iPtTdu0bXrNUiq0xwfd-HNO-cSNg-hqN0aQzeQau~9WitUgb5bnfjynigPSUTjnRRA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            category: 'combos',
          },
        ],
        drinks: [
          {
            id: 562,
            title: 'Lemonade',
            ingredients: 'Lemon juice,sugar',
            price: 11,
            img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F11%2F32385-best-lemonade-ever-208.jpg',
            category: 'drinks',
          },
          {
            id: 782,
            title: 'Beer',
            ingredients: 'beer 5%',
            price: 15,
            img: 'https://post.healthline.com/wp-content/uploads/2019/11/beer-glass-bar-732x549-thumbnail.jpg',
            category: 'drinks',
          },
        ],
      },
    },
  ],
};

export default data;
