import { Cirlce } from "./Button.Icon.Styled";

/**
 * @param {String} title *must
 * @param {Object} style *option
 * @param {String} type primarly | secondary
 * @param {Function} onClick *option
 * @param {[Object]} children 
 */
const IconBtn = (props) => {
  return (
    <Cirlce onClick={props.onClick} type={props.type} style={props.style}>
      {props.children}
    </Cirlce>
  );
};

export default IconBtn;
