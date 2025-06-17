import withLogger from "../hoc/withLogger";
import MyComponent from "../practice/MyComponent";
import css from "./Test.module.css";

const LogMyComponent = withLogger(MyComponent);

const ComponentOne = () => {
  return (
    <>
      <button className={css.btn}>TEST BTN COLOR</button>
      <LogMyComponent name="Raouf"/>
    </>
  )
}

export default ComponentOne