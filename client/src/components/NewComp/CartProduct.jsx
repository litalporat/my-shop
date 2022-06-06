import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:var(--lightnude-color);
border-radius:10px;
display: flex;
padding: 10px;
`
const Photo = styled.img`
    width:5rem;
    border-radius:10px;
`
const Details = styled.div`
    
`
const DelBtn = styled.div`
    
`
const Icon = styled.div`
    color:var(--lightwhite-color);
    background-color:var(--darkgray-color);
    width:25px;
    height:25px;
    border-radius:50%;
`


const product = {
    displayName: "Vi Royal Blue Overall",
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
    color: ["Blue"],
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

const CartProduct = () => {
    return (
        <Container>
            <Photo src={product.images.display[0]}>
            </Photo>
            <Details>
                <Icon>
            <i class="fa-solid fa-trash-can"></i>

                </Icon>
            </Details>
        </Container>
    );
};

export default CartProduct;