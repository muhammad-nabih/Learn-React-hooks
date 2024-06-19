import { useCallback, useState } from "react";
import Age from "./Age";
import Salary from "./Salary";
import Button from "./Button";

export default function UseCallback() {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(20000);
  console.log("_______________Rerender MainComponent_______________");
  const ageUp = useCallback(() => {
    setAge((age) => age + 1);
  }, [age, setAge]);

  const salaryUp = useCallback(() => {
    setSalary((salary) => salary + 1000);
  }, [salary, setSalary]);

  return (
    <div>
      <Age age={age} />
      <hr />
      <Salary salary={salary} />
      <hr />
      <Button text={"Age UP"} action={ageUp} />
      <Button text={"Salary UP"} action={salaryUp} />
    </div>
  );
}
