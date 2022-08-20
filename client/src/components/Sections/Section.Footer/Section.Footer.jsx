import FacebookShare from '../../Functions/FacebookComp/Share';
import { Container } from './Section.Footer.Styled';


const Footer = () => {
  return (
    <Container>
      <p>
        Liked our shop?
        <br />
        Write us a recommendation on facebook
      </p>
      <FacebookShare />
      <p>
        Ⓒ all rights reserved to
        <br />
        Bar Shoshani | Lital Porat | Nimi Flaisher | Ravid Eliyahu
      </p>
    </Container>
  );
};

export default Footer;
