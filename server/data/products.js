const products = [
  {
    displayName: "Vi Royal Blue Overall",
    description: "Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1-430x515.jpeg_dtysbl.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215974/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1-430x515.jpeg_pb8grf.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215976/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28.jpeg_sn6glq.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215976/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.29-1.jpeg_pvc6ul.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.28-1.jpeg_zzixkc.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg_udijwl.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653215975/products/overalls/vi_model/WhatsApp-Image-2022-04-13-at-10.27.27-1.jpeg_udijwl.webp'
    ],
    color: ["Blue"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 100,
  },
  {
    displayName: "Vi Pale Blue Overall",
    description: "Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223336/products/overalls/vi_model_pale/WhatsApp-Image-2022-04-13-at-08.45.32-430x515.jpeg_adgtmw.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223336/products/overalls/vi_model_pale/WhatsApp-Image-2022-04-13-at-08.45.34-430x515.jpeg_hyydmy.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223348/products/overalls/vi_model_pale/WhatsApp-Image-2022-04-13-at-08.45.34.jpeg_bugxlr.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223348/products/overalls/vi_model_pale/WhatsApp-Image-2022-04-13-at-08.45.33.jpeg_eost10.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223348/products/overalls/vi_model_pale/WhatsApp-Image-2022-04-13-at-08.45.33-1.jpeg_njjabl.webp'
    ],
    color: ["Pale Blue", "Blue"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Tiger Overall",
    description: "Tiger overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987197/products/overalls/overall_1/WhatsApp-Image-2021-07-28-at-00.26.12-430x515.jpeg_rdbfmr.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987196/products/overalls/overall_1/WhatsApp-Image-2021-07-28-at-00.26.13-430x515.jpeg_tndwb8.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987197/products/overalls/overall_1/WhatsApp-Image-2021-07-28-at-00.26.12-1.jpeg_ifiaul.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987197/products/overalls/overall_1/WhatsApp-Image-2021-07-28-at-00.26.11-1.jpeg_arw3zg.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987197/products/overalls/overall_1/WhatsApp-Image-2021-07-28-at-00.26.11.jpeg_vi6zie.webp'
    ],
    color: ["Brown", "White"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 77,
  },
  {
    displayName: "Irish Overall",
    description: "Irish overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987207/products/overalls/overall_2/WhatsApp-Image-2021-07-28-at-10.55.45-430x515.jpeg_d9hbvn.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987207/products/overalls/overall_2/WhatsApp-Image-2021-07-28-at-10.55.45-1-430x515.jpeg_p6ad10.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987208/products/overalls/overall_2/WhatsApp-Image-2021-07-28-at-10.55.44.jpeg_ztjssm.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987208/products/overalls/overall_2/WhatsApp-Image-2021-07-28-at-10.55.44-1.jpeg_chumvw.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987208/products/overalls/overall_2/WhatsApp-Image-2021-07-28-at-10.55.47.jpeg_t2a6xs.webp'
    ],
    color: ["Green", "White"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 23,
  },
  {
    displayName: "Vi Black Overall",
    description: "Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987216/products/overalls/overall_3/WhatsApp-Image-2022-04-13-at-08.45.31-430x515.jpeg_gqcw8y.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987216/products/overalls/overall_3/WhatsApp-Image-2022-04-13-at-08.45.32-1-430x515.jpeg_v3wqsu.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987216/products/overalls/overall_3/WhatsApp-Image-2022-04-13-at-08.45.32-1.jpeg_ufltrb.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987216/products/overalls/overall_3/WhatsApp-Image-2022-04-13-at-08.45.31.jpeg_ilho8u.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987216/products/overalls/overall_3/WhatsApp-Image-2022-04-13-at-08.45.31-1.jpeg_dcux2c.webp'
    ],
    color: ["Black"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 400,
  },
  {
    displayName: "Vi Orange Overall",
    description: "Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987227/products/overalls/overall_4/WhatsApp-Image-2021-08-15-at-14.27.53-1-430x515.jpeg_z9a8ql.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987226/products/overalls/overall_4/WhatsApp-Image-2021-08-15-at-14.27.51-1-430x515.jpeg_udkufz.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987227/products/overalls/overall_4/WhatsApp-Image-2021-08-15-at-14.27.52-1.jpeg_d8clga.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987226/products/overalls/overall_4/WhatsApp-Image-2021-08-15-at-14.27.54.jpeg_hr9uyc.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987226/products/overalls/overall_4/WhatsApp-Image-2021-08-15-at-14.27.51-1.jpeg_vyrymw.webp'
    ],
    color: ["Orange"],
    price: 330,
    discount: 0,
    stock: {
      xs: 3,
      s: 10,
    },
    type: "overall",
    amountSold: 72,
  },
  {
    displayName: "Vi White Overall",
    description: "Vi overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987234/products/overalls/overall_5/WhatsApp-Image-2022-04-13-at-10.27.29-430x515.jpeg_u2cei5.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987234/products/overalls/overall_5/WhatsApp-Image-2022-04-13-at-10.27.30-1-430x515.jpeg_qk27n1.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987235/products/overalls/overall_5/WhatsApp-Image-2022-04-13-at-10.27.30-1.jpeg_eafso4.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987234/products/overalls/overall_5/WhatsApp-Image-2022-04-13-at-10.27.29.jpeg_vh6yuf.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987234/products/overalls/overall_5/WhatsApp-Image-2022-04-13-at-10.27.30.jpeg_pm2siz.webp'
    ],
    color: ["White"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Ahri Pale Blue Overall",
    description: "Ahri overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987247/products/overalls/overall_6/WhatsApp-Image-2021-07-28-at-00.22.29-430x515.jpeg_cbkotq.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987247/products/overalls/overall_6/WhatsApp-Image-2021-07-28-at-00.22.29-1-430x515.jpeg_auamkr.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987247/products/overalls/overall_6/WhatsApp-Image-2021-07-28-at-00.22.29.jpeg_pgruqu.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987247/products/overalls/overall_6/WhatsApp-Image-2021-07-28-at-00.22.27.jpeg_szrl8s.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987247/products/overalls/overall_6/WhatsApp-Image-2021-07-28-at-00.22.29-1.jpeg_kxit0s.webp'
    ],
    color: ["Pale Blue"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Ahri Patrol Overall",
    description: "Ahri overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987254/products/overalls/overall_7/WhatsApp-Image-2021-07-28-at-00.25.44-430x515.jpeg_pkp545.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987254/products/overalls/overall_7/WhatsApp-Image-2021-07-28-at-00.25.42-430x515.jpeg_akqhii.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987254/products/overalls/overall_7/WhatsApp-Image-2021-07-28-at-00.25.45-1.jpeg_qiytlg.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987254/products/overalls/overall_7/WhatsApp-Image-2021-07-28-at-00.25.44.jpeg_odic59.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987254/products/overalls/overall_7/WhatsApp-Image-2021-07-28-at-00.25.38.jpeg_oagadd.webp'
    ],
    color: ["Patrol"],
    price: 330,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Ahri Pink Overall",
    description: "Ahri overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987278/products/overalls/overall_8/WhatsApp-Image-2021-07-28-at-10.41.18-430x515.jpeg_tfftm9.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987278/products/overalls/overall_8/WhatsApp-Image-2021-07-28-at-00.22.26-2-430x515.jpeg_l206zp.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987278/products/overalls/overall_8/WhatsApp-Image-2021-07-28-at-10.41.18.jpeg_nybwpi.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987278/products/overalls/overall_8/WhatsApp-Image-2021-07-28-at-00.22.26-2.jpeg_rit1rg.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987278/products/overalls/overall_8/WhatsApp-Image-2021-07-28-at-00.22.26-1.jpeg_qm7r32.webp'
    ],
    color: ["Pink"],
    price: 120,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Ahri Yellow Overall",
    description: "Ahri overall made of lycra knit fabric in a super qual cut! Front spillage that can be changes according to the typing of the straps, combined with thin staps that tie at the shoulders. Rubber at the waist and removable tying thread, pants in an expandable cut.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987291/products/overalls/overall_9/%D7%A0%D7%99%D7%A7%D7%99-%D7%A6%D7%94%D7%95%D7%91-1-430x515.jpeg_nf098h.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987291/products/overalls/overall_9/%D7%A0%D7%99%D7%A7%D7%99-%D7%A6%D7%94%D7%95%D7%91-3-430x515.jpeg_crgewz.webp'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987291/products/overalls/overall_9/WhatsApp-Image-2021-07-21-at-09.09.56-1.jpeg_c8b6gy.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987291/products/overalls/overall_9/WhatsApp-Image-2021-07-21-at-09.09.17-16.jpeg_smiyfl.webp',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654987291/products/overalls/overall_9/WhatsApp-Image-2021-07-21-at-09.09.17-15.jpeg_w5poip.webp'
    ],
    color: ["Yellow"],
    price: 120,
    discount: 0,
    stock: {
      xs: 10,
      s: 20,
    },
    type: "overall",
    amountSold: 70,
  },
  {
    displayName: "Diana Dress",
    description: "A t-shirt style Diana dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-430x515_z51n5a.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-430x515_jsheep.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216959/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.55-1-773x1024_y8k7i6.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-773x1024_oldq6r.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-1-758x1024_m2q8uu.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.53-1-768x1024_ofvi48.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653216958/products/dresses/diana_dress/WhatsApp-Image-2022-05-11-at-16.44.54-773x1024_vvzqrw.jpg'
    ],
    color: ["White", "Black"],
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 50,
  },
  {
    displayName: "Mocha Lia Dress",
    description: "A classic style dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985341/products/dresses/dress_1/WhatsApp-Image-2022-05-11-at-12.42.46-430x515_oodkwb.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985341/products/dresses/dress_1/WhatsApp-Image-2022-05-11-at-12.42.47-1-1-430x515_sh4zj1.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985341/products/dresses/dress_1/WhatsApp-Image-2022-05-11-at-12.42.47-768x1024_zawgvw.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985341/products/dresses/dress_1/WhatsApp-Image-2022-05-11-at-12.42.46-768x1024_ydzov5.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985341/products/dresses/dress_1/WhatsApp-Image-2022-05-11-at-12.42.48-768x1024_jlilv3.jpg'
    ],
    color: ["Mocha"],
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 50,
  },
  {
    displayName: "Dark Lia Dress",
    description: "A classic style Lia dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985374/products/dresses/dress_2/WhatsApp-Image-2022-05-11-at-12.42.40-430x515_fpsods.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985374/products/dresses/dress_2/WhatsApp-Image-2022-05-11-at-12.42.41-1-430x515_dzjn1j.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985374/products/dresses/dress_2/WhatsApp-Image-2022-05-11-at-12.42.42-1-768x1024_jbk8p3.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985374/products/dresses/dress_2/WhatsApp-Image-2022-05-11-at-12.42.41-768x1024_gwrsad.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985374/products/dresses/dress_2/WhatsApp-Image-2022-05-11-at-12.42.40-768x1024_i9pivz.jpg'
    ],
    color: ["Black"],
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 50,
  },
  {
    displayName: "Green Lia Dress",
    description: "A classic style Lia dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985409/products/dresses/dress_3/WhatsApp-Image-2022-05-11-at-12.42.44-430x515_l4cwo3.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985409/products/dresses/dress_3/WhatsApp-Image-2022-05-11-at-12.42.43-1-430x515_czizf2.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985410/products/dresses/dress_3/WhatsApp-Image-2022-05-11-at-12.42.43-1-768x1024_ygscv4.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985410/products/dresses/dress_3/WhatsApp-Image-2022-05-11-at-12.42.43-768x1024_oin4ut.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985409/products/dresses/dress_3/WhatsApp-Image-2022-05-11-at-12.42.44-1-768x1024_busjjl.jpg'
    ],
    color: ["Green"],
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 50,
  },
  {
    displayName: "White Lia Dress",
    description: "A classic style Lia dress is perfect for an everyday look. Round key, short sleeves, combined with a slit on the side of the dress. The position of the stipes varies from dress to dress!",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985445/products/dresses/dress_4/WhatsApp-Image-2022-05-11-at-12.42.52-PM-430x515_hitgzo.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985446/products/dresses/dress_4/WhatsApp-Image-2022-05-11-at-12.42.50-PM-430x515_z9cfug.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985446/products/dresses/dress_4/WhatsApp-Image-2022-05-11-at-12.42.51-PM-767x1024_emkkoi.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985446/products/dresses/dress_4/WhatsApp-Image-2022-05-11-at-12.42.50-PM-1-768x1024_jazs8l.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985446/products/dresses/dress_4/WhatsApp-Image-2022-05-11-at-12.42.50-PM-768x1024_yzu4ai.jpg'
    ],
    color: ["White"],
    price: 140,
    discount: 0,
    stock: {
      xs: 4,
      s: 2,
      os: 4,
      xl: 1
    },
    type: "dress",
    amountSold: 50,
  },
  {
    displayName: "Caitlyn Azure Leopard Buttoned Shirt",
    description: "Caitlyn shirt in a hysterical cut especially for the summer! Short sleeves, V-neck and button closure along the sirt.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-430x515_voffs3.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-430x515_awsimn.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-2-768x1024_rcot16.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-768x1024_wm4uix.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.53-766x1024_wikkwv.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217130/products/shirts/caitlyn_shirt/WhatsApp-Image-2022-05-18-at-08.16.54-1-1-774x1024_ccfzbs.jpg'
    ],
    color: ["Azure", "Blue"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 10,
  },
  {
    displayName: "Fiora Brown Shirt",
    description: "Fiora shirt in a hysterical cut especially for the summer! Short sleeves, V-neck and button closure along the sirt.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986016/products/shirts/shirt_1/WhatsApp-Image-2022-05-11-at-17.21.21-430x515_rpufav.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986017/products/shirts/shirt_1/WhatsApp-Image-2022-05-11-at-17.21.22-430x515_rvplbq.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986017/products/shirts/shirt_1/WhatsApp-Image-2022-05-11-at-17.21.21-1-768x1024_n9tjcb.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986017/products/shirts/shirt_1/WhatsApp-Image-2022-05-11-at-17.21.22-1-768x1024_gijyuk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986016/products/shirts/shirt_1/WhatsApp-Image-2022-05-11-at-17.21.21-768x1024_lqgmkj.jpg'
    ],
    color: ["Brown"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 39,
  },
  {
    displayName: "Fiora White Shirt",
    description: "Fiora shirt in a hysterical cut especially for the summer! Short sleeves, V-neck and button closure along the sirt.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654991811/products/shirts/shirt_3/WhatsApp-Image-2022-05-11-at-17.30.10-430x515_irtiey.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654991811/products/shirts/shirt_3/WhatsApp-Image-2022-05-11-at-17.30.11-430x515_xhnea0.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654991811/products/shirts/shirt_3/WhatsApp-Image-2022-05-11-at-17.30.11-1-768x1024_xiuonq.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654991811/products/shirts/shirt_3/WhatsApp-Image-2022-05-11-at-17.30.10-769x1024_gdtkmi.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654991811/products/shirts/shirt_3/WhatsApp-Image-2022-05-11-at-17.30.12-768x1021_mqgsc4.jpg'
    ],
    color: ["White"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 39,
  },
  {
    displayName: "Zyra Shirt",
    description: "Zyra shirt in a hysterical cut especially for the summer! Short sleeves, V-neck and button closure along the sirt.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986135/products/shirts/shirt_2/WhatsApp-Image-2022-05-18-at-08.32.00-1-430x515_mqjjrk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986135/products/shirts/shirt_2/WhatsApp-Image-2022-05-18-at-08.32.02-430x515_me5xbm.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986136/products/shirts/shirt_2/WhatsApp-Image-2022-05-18-at-08.32.00-1-768x1024_tlwelm.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986136/products/shirts/shirt_2/WhatsApp-Image-2022-05-18-at-08.32.02-755x1024_szgrxk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654986135/products/shirts/shirt_2/WhatsApp-Image-2022-05-18-at-08.31.59-768x1024_sike3k.jpg'
    ],
    color: ["Green"],
    price: 150,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "shirt",
    amountSold: 89,
  },
  {
    displayName: "Pink Zoe Suit",
    description: "Zoe oversozes suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217252/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-430x515_nwycyt.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217251/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-1-430x515_cuopqd.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217267/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.02-1152x1536_er4xi2.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217267/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.02-1-780x1024_opyr4v.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217266/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-768x1024_grhccn.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217266/products/suits/zoe_pink/WhatsApp-Image-2022-05-03-at-16.40.01-1-768x1053_oi5vxu.jpg'
    ],
    color: ["Pink"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 30,
  },
  {
    displayName: "Zoe Mocha Suit",
    description: "Zoe oversozes suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222749/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.56-430x515_jz1uhl.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222748/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.57-430x515_citpqe.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222767/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.57-1-768x1214_trmq5r.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222767/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.57-1152x1536_rglb1c.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222767/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.56-1-796x1024_mrnuek.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222767/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.58-779x1024_eswvpu.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222766/products/suits/zoe_mocha/WhatsApp-Image-2022-05-03-at-16.39.56-782x1024_a1elkl.jpg'
    ],
    color: ["Mocha", "Brown"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
  },
  {
    displayName: "Zoe Orange Suit",
    description: "Zoe oversozes suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223090/products/suits/zoe_orange/WhatsApp-Image-2022-05-03-at-16.39.59-430x515_yq2cae.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223089/products/suits/zoe_orange/WhatsApp-Image-2022-05-03-at-16.40.00-430x515_bdqx8g.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223090/products/suits/zoe_orange/WhatsApp-Image-2022-05-03-at-16.40.00-1-768x1124_wmzn2z.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223090/products/suits/zoe_orange/WhatsApp-Image-2022-05-03-at-16.40.00-1152x1536_mbbgyp.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223090/products/suits/zoe_orange/WhatsApp-Image-2022-05-03-at-16.39.59-1-799x1024_w3wqh3.jpg'
    ],
    color: ["Orange"],
    price: 150,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 600,
  },
  {
    displayName: "Zoe Patrol Suit",
    description: "Zoe oversozes suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223172/products/suits/zoe_patrol/WhatsApp-Image-2022-05-03-at-16.38.37-430x515_enzyol.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223171/products/suits/zoe_patrol/WhatsApp-Image-2022-05-03-at-16.38.38-430x515_oy5q1s.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223173/products/suits/zoe_patrol/WhatsApp-Image-2022-05-03-at-16.38.38-768x1031_vpe7vk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223172/products/suits/zoe_patrol/WhatsApp-Image-2022-05-03-at-16.38.39-820x1024_jmp7cl.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223172/products/suits/zoe_patrol/WhatsApp-Image-2022-05-03-at-16.38.37-1-1152x1536_lv41fr.jpg'
    ],
    color: ["Patrol"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
  },
  {
    displayName: "Jynx Purple Suit",
    description: "Jynx suit spills and falls on the body precisely. The suit consists of a two-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222474/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.54-1-430x515_oy0kup.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222474/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.55-1-430x515_mkoalz.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222476/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.54-1-1152x1536_phwnr4.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222475/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.56-1152x1536_u4h0xo.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222475/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.56-1-1152x1536_mgry76.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222474/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.54-768x1090_pocwyk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222474/products/suits/zoe_purple/WhatsApp-Image-2021-07-28-at-09.05.55-780x1024_d1rmwh.jpg'
    ],
    color: ["Purple"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
  },
  {
    displayName: "Lux White Suit",
    description: "Lux suit spills and falls on the body precisely. The suit consists of a one-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223013/products/suits/lux_white/WhatsApp-Image-2021-08-02-at-13.58.31-1-430x515_fphhjl.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223013/products/suits/lux_white/WhatsApp-Image-2021-08-02-at-13.58.33-430x515_orssja.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223015/products/suits/lux_white/WhatsApp-Image-2021-08-02-at-13.58.28-1-1152x1536_ka1h4d.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223014/products/suits/lux_white/WhatsApp-Image-2021-08-02-at-13.58.29-768x1037_b8ptzj.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223015/products/suits/lux_white/WhatsApp-Image-2021-08-02-at-13.58.31-1-1152x1536_yawvx4.jpg'
    ],
    color: ["White"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
  },
  {
    displayName: "Lux Brown Suit",
    description: "Lux suit spills and falls on the body precisely. The suit consists of a one-piece shirt top with an oversized sleeve length after the elbow, a Chinese collar and buttons along the entire length of the shirt. Rubber shorts at the waist with a pair of hidden side pockets.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223049/products/suits/lux_brown/WhatsApp-Image-2021-08-02-at-13.48.43-430x515_e2w1ke.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223048/products/suits/lux_brown/WhatsApp-Image-2021-08-02-at-13.48.45-430x515_elqyu4.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223050/products/suits/lux_brown/WhatsApp-Image-2021-08-02-at-13.48.44-1-1152x1536_yeygjz.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223049/products/suits/lux_brown/WhatsApp-Image-2021-08-02-at-13.48.45-1152x1536_c6dkbi.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653223049/products/suits/lux_brown/WhatsApp-Image-2021-08-02-at-13.48.46-1152x1536_okxnvq.jpg'
    ],
    color: ["Brown"],
    price: 130,
    discount: 0,
    stock: {
      os: 14,
    },
    type: "suit",
    amountSold: 0,
  },
  {
    displayName: "Cloud Black Pants",
    description: "Cloud pants in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217772/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.24-430x515_hugonk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217772/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.27-430x515_oymhl2.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217832/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.27-1152x1536_kgpwln.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217831/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.23-1150x1536_uen4nv.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653217831/products/pants/black_cloud/WhatsApp-Image-2022-05-11-at-17.22.24-777x1024_ep9zgk.jpg'
    ],
    color: ["Black"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 0,
  },
  {
    displayName: "Cloud Brown Pants",
    description: "Cloud pants in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654990741/products/pants/pants_6/WhatsApp-Image-2022-05-11-at-17.02.09-600x800_wrhye4.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985897/products/pants/pants_6/WhatsApp-Image-2022-05-11-at-17.02.10-430x515_agv7iz.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985897/products/pants/pants_6/WhatsApp-Image-2022-05-11-at-17.02.09-768x1024_ag8xit.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985897/products/pants/pants_6/WhatsApp-Image-2022-05-11-at-17.02.10-1-768x1024_lrvl3e.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985897/products/pants/pants_6/WhatsApp-Image-2022-05-11-at-17.02.09-1-768x1024_rep1tv.jpg'
    ],
    color: ["Brown"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 0,
  },
  {
    displayName: "Akali Jeans",
    description: "Akali jeans in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985774/products/pants/pants_3/WhatsApp-Image-2022-02-03-at-11.39.36-430x515_hpa1rk.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985774/products/pants/pants_3/WhatsApp-Image-2022-02-03-at-11.39.35-1-430x515_davj4n.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985775/products/pants/pants_3/WhatsApp-Image-2022-02-03-at-11.39.35-768x1024_q79vkw.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985775/products/pants/pants_3/WhatsApp-Image-2022-02-03-at-11.39.34-768x1024_zsgynh.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985775/products/pants/pants_3/WhatsApp-Image-2022-02-03-at-11.39.35-1-768x1024_am8sgr.jpg'
    ],
    color: ["Blue"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 20,
  },
  {
    displayName: "Akali White Jeans",
    description: "Akali jeans in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985813/products/pants/pants_4/WhatsApp-Image-2022-02-03-at-10.59.19-430x515_rr08ms.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985812/products/pants/pants_4/WhatsApp-Image-2022-02-03-at-10.59.22-1-430x515_wlelrn.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985813/products/pants/pants_4/WhatsApp-Image-2022-02-03-at-10.59.18-771x1024_epo1ti.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985812/products/pants/pants_4/WhatsApp-Image-2022-02-03-at-10.59.18-1-768x1024_ntfjch.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985812/products/pants/pants_4/WhatsApp-Image-2022-02-03-at-10.59.16-768x1024_u4edvv.jpg'
    ],
    color: ["White"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 20,
  },
  {
    displayName: "Akali Black Jeans",
    description: "Akali jeans in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985849/products/pants/pants_5/WhatsApp-Image-2022-02-03-at-13.00.57-430x515_yegmgn.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985849/products/pants/pants_5/WhatsApp-Image-2022-02-03-at-12.50.54-430x515_llit85.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985849/products/pants/pants_5/WhatsApp-Image-2022-02-03-at-13.00.57-768x1024_wez6bf.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985849/products/pants/pants_5/WhatsApp-Image-2022-02-03-at-13.00.56-1-768x1024_by4wgv.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985849/products/pants/pants_5/WhatsApp-Image-2022-02-03-at-13.00.56-768x1024_ow6rxf.jpg'
    ],
    color: ["Black"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 48,
  },
  {
    displayName: "Irelia Brown Pants",
    description: "Irelia pants in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985659/products/pants/pants_1/WhatsApp-Image-2022-02-23-at-12.24.47-430x515_qe7frs.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985659/products/pants/pants_1/WhatsApp-Image-2022-02-23-at-12.24.46-1-430x515_rhb0go.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985659/products/pants/pants_1/WhatsApp-Image-2022-02-23-at-12.24.44-768x1024_onddam.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985659/products/pants/pants_1/WhatsApp-Image-2022-02-23-at-12.24.43-768x1024_bv3cmq.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985659/products/pants/pants_1/WhatsApp-Image-2022-02-23-at-12.24.44-1-768x1024_otxuhj.jpg'
    ],
    color: ["Brown"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 0,
  },
  {
    displayName: "Camille Green Skirt",
    description: "Camille skirt shell made of comfortable fabric. The skirt comes with a side tie that can be tied to the desired size.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222073/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.17-430x515_tdwanu.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222073/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.18-430x515_mgjzju.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222075/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.18-1-1152x1536_yilyxo.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222074/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.17-1-1152x1536_erv6q9.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222074/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.17-772x1024_ojepif.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222074/products/skirts/camille_green/WhatsApp-Image-2022-05-18-at-09.07.18-1162x1536_urh5mg.jpg'
    ],
    color: ["Green"],
    price: 180,
    discount: 0,
    stock: {
      xs: 11,
      s: 5,
      m: 3
    },
    type: "skirt",
    amountSold: 0,
  },
  {
    displayName: "Morgana Black Pants",
    description: "Morgana pants in a tailored cut made of super light and comfortable fabric in a straight cut. A pair of hidden pockets on the sides of the pants, with a button closure and a zipper.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985704/products/pants/pants_2/WhatsApp-Image-2022-02-23-at-12.26.55-430x515_hdqe4j.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985704/products/pants/pants_2/WhatsApp-Image-2022-02-23-at-12.26.54-1-430x515_mmbwv1.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985704/products/pants/pants_2/WhatsApp-Image-2022-02-23-at-12.26.53-768x1024_roncbv.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985704/products/pants/pants_2/WhatsApp-Image-2022-02-23-at-12.26.53-1-768x1024_vjaxr3.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1654985704/products/pants/pants_2/WhatsApp-Image-2022-02-23-at-12.26.52-768x1024_ddpye6.jpg'
    ],
    color: ["Black"],
    price: 170,
    discount: 0,
    stock: {
      xs: 14,
      s: 5,
      l: 3
    },
    type: "pants",
    amountSold: 44,
  },
  {
    displayName: "Camille Brown Skirt",
    description: "Camille skirt shell made of comfortable fabric. The skirt comes with a side tie that can be tied to the desired size.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221208/products/skirts/camille_brown/WhatsApp-Image-2022-05-18-at-09.05.56-1-430x515_lhycwq.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221208/products/skirts/camille_brown/WhatsApp-Image-2022-05-18-at-09.05.56-430x515_m7k2ev.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221233/products/skirts/camille_brown/WhatsApp-Image-2022-05-18-at-09.05.58-1150x1536_i9ipif.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221233/products/skirts/camille_brown/WhatsApp-Image-2022-05-18-at-09.05.56-1-768x1034_xwi5jg.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221233/products/skirts/camille_brown/WhatsApp-Image-2022-05-18-at-09.05.56-773x1024_ekruqt.jpg'
    ],
    color: ["Brown"],
    price: 180,
    discount: 0,
    stock: {
      xs: 11,
      s: 5,
      m: 3
    },
    type: "skirt",
    amountSold: 0,
  },
  {
    displayName: "Camille Orange Skirt",
    description: "Camille skirt shell made of comfortable fabric. The skirt comes with a side tie that can be tied to the desired size.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221838/products/skirts/camille_orange/WhatsApp-Image-2022-05-18-at-09.07.21-430x515_y2fqhh.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221838/products/skirts/camille_orange/WhatsApp-Image-2022-05-18-at-09.07.22-430x515_zf81hj.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221839/products/skirts/camille_orange/WhatsApp-Image-2022-05-18-at-09.07.22-1150x1536_dlxqyc.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221839/products/skirts/camille_orange/WhatsApp-Image-2022-05-18-at-09.07.22-1-776x1024_p7wa87.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653221839/products/skirts/camille_orange/WhatsApp-Image-2022-05-18-at-09.07.21-768x1029_nw1qlb.jpg'
    ],
    color: ["Orange"],
    price: 180,
    discount: 0,
    stock: {
      xs: 11,
      s: 5,
      m: 3
    },
    type: "skirt",
    amountSold: 0,
  },
  {
    displayName: "Camille Mint Skirt",
    description: "Camille skirt shell made of comfortable fabric. The skirt comes with a side tie that can be tied to the desired size.",
    imgDisplay: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222005/products/skirts/camille_menta/WhatsApp-Image-2022-05-18-at-09.07.14-430x515_chz8sh.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222005/products/skirts/camille_menta/WhatsApp-Image-2022-05-18-at-09.07.15-1-430x515_lagdaj.jpg'
    ],
    imgDetails: [
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222006/products/skirts/camille_menta/WhatsApp-Image-2022-05-18-at-09.07.15-1152x1536_p6ddub.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222006/products/skirts/camille_menta/WhatsApp-Image-2022-05-18-at-09.07.15-1-1152x1536_wqn3ls.jpg',
      'https://res.cloudinary.com/league-shop-cloud/image/upload/v1653222005/products/skirts/camille_menta/WhatsApp-Image-2022-05-18-at-09.07.14-768x1034_ds4tdv.jpg'
    ],
    color: ["Mint"],
    price: 180,
    discount: 0,
    stock: {
      xs: 11,
      s: 5,
      m: 3
    },
    type: "skirt",
    amountSold: 0,
  },
];

module.exports = products;
