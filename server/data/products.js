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
      display: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1-430x515.jpeg_dtysbl.webp', 
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215974/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1-430x515.jpeg_pb8grf.webp'
      ],
      details: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215976/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28.jpeg_sn6glq.webp', 
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215976/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.29-1.jpeg_pvc6ul.webp', 
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1.jpeg_zzixkc.webp',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg_udijwl.webp',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg_udijwl.webp'
      ]
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
      display: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-430x515_z51n5a.jpg',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-430x515_jsheep.jpg'
      ],
      details: [],
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
      display: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-430x515_voffs3.jpg',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-430x515_awsimn.jpg'
      ],
      details: [],
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
      display: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217252/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-430x515_nwycyt.jpg',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217251/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-1-430x515_cuopqd.jpg'
      ],
      details: [],
    },
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
    similarProducts: []
  },
  {
    displayName: "Black Cloud Pants",
    description: ["Cloud pants in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper."],
    metadata: {
      materials: ["Cotton", "Polyester"],
      origin: "China",
      model_size: "xs",
      model_height: 170,
      instructions: ["The items should be washed by hand seperatly in cold water, and avoid squeezing!"]
    },
    images: {
      display: [
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217772/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.24-430x515_hugonk.jpg',
        'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217772/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.27-430x515_oymhl2.jpg'
      ],
      details: [],
    },
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 0,
    similarProducts: []
  },
];

module.exports = products;
