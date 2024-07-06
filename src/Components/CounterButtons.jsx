import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { increment, decrement } from "../Store/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment(1));
  };

  const handleReduce = () => {
    dispatch(decrement(1));
  };

  return (
    <div className="counter-buttons">
      <Button onClick={handleAdd} className="btn-success">
        ADD
      </Button>
      <Button onClick={handleReduce} className="btn-danger">
        REDUCE
      </Button>
    </div>
  );
};

export default CounterButtons;
