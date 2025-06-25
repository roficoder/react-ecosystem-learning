import { useEffect, useState } from "react";
import withLogger from "../hoc/withLogger";
import MyComponent from "../practice/MyComponent";
import css from "./Test.module.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount, selectCount, selectStatue } from "../store/counter.slice";
import { getUser } from "../store/user.slice";

const LogMyComponent = withLogger(MyComponent);

const ComponentOne = () => {

  useEffect(() => {
    // throw new Error("This is error");
  }, [])
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);
  const status = useSelector(selectStatue);
  const user = useSelector(getUser);

  const [firstName, setFirstName] = useState("Abdul");
  const [lastName, setLastName] = useState("Raouf");
  const [incrementAmount, setIncrementAmount] = useState(0);
  const fullName = firstName + " " + lastName;
  const incrementValue = Number(incrementAmount) || 0;


  return (
    <>
      <button className={css.btn}>TEST BTN COLOR</button>
      <LogMyComponent name="Raouf" />
      <h1>{fullName}</h1>
      <h1>{counter}</h1>
      <input type="number" value={incrementAmount} onChange={(e) => {
        setIncrementAmount(+e.target.value);
      }}/>
      <button onClick={() => setLastName("Rehman")}>Change Name</button>
      <button onClick={() => dispatch(increment() as any)}>Increment</button>
      <button onClick={() => dispatch(decrement() as any)}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount) as any)}>Inc By Amount</button>

      <br /><br /><br />
      <h1>{status}</h1>
      <br /><br />

      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(+e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue) as any)}
        >
          Add Async
        </button>
      </div>
      

      {/* USER DATA FROM REDUX */}
      <h1>USER</h1>
      <div>
        <p>Name: {user.name}</p><br />
        <p>age: {user.age}</p><br />
        <p>Username: {user.username}</p><br />
        <p>Position: {user.position}</p><br />
      </div>
    </>
  )
}

export default ComponentOne