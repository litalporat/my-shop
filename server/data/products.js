const products = [
  {
    displayName: "Vi Overall",
    description: ["Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut."],
    metadata: {
      materials: ["Cotton combined with knit"],
      origin: "China",
      model_size: "xs",
      model_height: 170,
      instructions: ["The items should be washed by hand seperatly in cold water, and avoid squeezing!"]
    },
    images: {
      display: ['static/media/WhatsApp-Image-2022-04-13-at-10.27.27-1-430x515.jpeg.webp', 'images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1-430x515.jpeg.webp'],
      details: ['images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg.webp', 'images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1.jpeg.webp', 'images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.29-1.jpeg.webp']
    },
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 0,
    similarProducts: []
  },
  {
    displayName: "Diana Dress",
    description: ["A t-shirt style Diana dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!"],
    metadata: {
      materials: ["Cotton", "Polyester"],
      origin: "China",
      model_size: "xs",
      model_height: 170,
      instructions: ["The items should be washed by hand seperatly in cold water, and avoid squeezing!"]
    },
    images: {
      display: ['images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-430x515.jpeg', 'images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-430x515.jpeg'],
      details: ['images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-1-768x1024.jpeg', 'images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-773x1024.jpeg', 'images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-1-758x1024.jpeg', 'images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-773x1024.jpeg', 'images/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.55-1-773x1024.jpeg']
    },
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 0,
    similarProducts: []
  },
  {
    displayName: "Caitlyn Azure Leopard Buttoned Shirt",
    description: ["Caitlyn shirt in a hysterical cut especially for the summer! Short sleeves, V-neck and button closure along the sirt."],
    metadata: {
      materials: ["Viscose", "Polyester"],
      origin: "China",
      model_size: "xs",
      model_height: 170,
      instructions: ["The items should be washed by hand seperatly in cold water, and avoid squeezing!"]
    },
    images: {
      display: ['images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-430x515.jpeg', 'images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-430x515.jpeg'],
      details: ['images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-2-768x1024.jpeg', 'images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-766x1024.jpeg', 'images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-1-1-774x1024.jpeg', 'images/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-768x1024.jpeg']
    },
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 0,
    similarProducts: []
  },
  {
    displayName: "Pink Zoe Suit",
    description: ["Zoe oversozes suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets."],
    metadata: {
      materials: ["Viscose", "Polyester"],
      origin: "China",
      model_size: "os",
      model_height: 170,
      instructions: ["The items should be washed by hand seperatly in cold water, and avoid squeezing!"]
    },
    images: {
      display: ['images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.53-430x515.jpeg', 'images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.54-430x515.jpeg'],
      details: ['images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.53-2-768x1024.jpeg', 'images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.53-766x1024.jpeg', 'images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.54-1-1-774x1024.jpeg', 'images/products/suits/pink_zoe/WhatsApp-Image-2022-05-18-at-08.16.54-768x1024.jpeg']
    },
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 0,
    similarProducts: []
  },
];

module.exports = products;
