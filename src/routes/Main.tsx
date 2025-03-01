import { useState } from "react";
// import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import AnimatedButton from "../components/animation/AnimetedButton";

export default function Main() {
    const [formState, setFormState] = useState(false);
    return (
    <>
    {formState && <Form/>}
    <AnimatedButton onClick={() => setFormState(true)}/>
    {/* <Button label={"Зарегистрироваться"} onClick={() => setFormState(true)}/> */}
    </>
    )
}