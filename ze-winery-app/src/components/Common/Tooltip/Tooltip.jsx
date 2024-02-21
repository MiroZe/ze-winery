import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const TooltipComponent = () => {

return (

    <>
    {['top', 'right', 'bottom', 'left'].map((placement) => (
      <OverlayTrigger
        key={placement}
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>
            Tooltip on <strong>{placement}</strong>.
          </Tooltip>
        }
      >
        <Button variant="secondary">Tooltip on {placement}</Button>
      </OverlayTrigger>
    ))}
  </>
)


}

export default TooltipComponent;