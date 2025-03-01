import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

type Inputs = {
    email: string,
    password: string,
    name: string,
}

export default function Form() {
    const navigate = useNavigate() ;

    const  {
        register,
        handleSubmit,
        // watch,
        formState: {errors},
    } = useForm<Inputs>()
const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    console.log(errors)
    navigate('/boards')
}
// console.log(register('email', {}))
// console.log(watch("example"))
return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <input 
       {...register('name', {required: true,})}/>

       <input type="email" 
       {...register('email', {required: true, pattern:{ value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Введите корректный email', }})}
            />
        <input type="password" 
        // {...register('password', {required: true, 
        // minLength: {
        //     value: 6,
        //     message: 'Пароль слишком короткий'},
        // maxLength: {
        //     value: 20,
        //     message: 'Пароль слишком длинный'},
        // pattern: {
        //     value: /^(?=^[ -~]{6,64}$)(?=.*([a-z][A-Z]))(?=.*[0-9])(.*[ -/|:-@|\[-`|{-~]).+$/,
        //     message: 'Пароль некорректен',
        // },
    //  })
    // }
        />
        {/* <input defaultValue="test" {...register("example")}/>
        <input {...register("exampleRequired", { required: true})}/> */}
       <input type="submit"/>

    </form>
)

}