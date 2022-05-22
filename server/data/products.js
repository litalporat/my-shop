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
      display: ['src/images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1-430x515.jpeg.webp', 'src/images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1-430x515.jpeg.webp'],
      details: ['src/images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg.webp', 'src/images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1.jpeg.webp', 'src/images/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.29-1.jpeg.webp']
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
  }
];

module.exports = products;
