import { Button } from './Button.Basic.Styled';

/**
 * @param {Object} icon *option
 * @param {String} title *must
 * @param {Function} onClick *option
 * @param {String} type primarly | secondary
 * @param {[Object]} children *option
 */

const BasicButton = (props) => {
  return (
    <Button onClick={props.onClick} type={props.type}>
      {props.icon}
      {props.title}
      {props.children}
    </Button>
  );
};

export default BasicButton;
