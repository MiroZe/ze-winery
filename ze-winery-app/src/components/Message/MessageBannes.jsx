import { useSelector } from "react-redux";
import styles from "./MessageBanner.module.css";
import { useReduxDispatch } from "../../hooks/useReduxDispatch";
import { clearMessage } from "../../reducers/message";
import { useEffect } from "react";

     const MessageBanner = () => {
  const dispatchClearMessageAction = useReduxDispatch(clearMessage);
  const { isMessage, message } = useSelector((state) => state.message);

  useEffect(() => {
    if (isMessage) {
      const timeoutId = setTimeout(() => {
        dispatchClearMessageAction();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMessage, dispatchClearMessageAction]);

  if (isMessage) {
    return (
      <div className={styles["message-banner"] + " " + styles[message.type]}>
        <p>{message.text}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MessageBanner;