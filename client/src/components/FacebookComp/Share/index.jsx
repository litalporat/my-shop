import { FacebookShareButton, FacebookIcon } from "react-share";

const FacebookShare = () => {
  return (
    <FacebookShareButton
      url="https://www.facebook.com/Shop-111671518236267/?ref=pages_you_manage"
      quote={"hey! check this out!"}
      hashtag="#Shop"
    >
      <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
    </FacebookShareButton>
  );
};

export default FacebookShare;
