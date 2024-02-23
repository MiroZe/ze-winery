import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import styles from "./Tooltip.module.css";

const TooltipComponent = ({ children,text }) => {
  return (
    <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Tooltip  className={styles['my-tooltip']}>
          {text}
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
};

export default TooltipComponent;
