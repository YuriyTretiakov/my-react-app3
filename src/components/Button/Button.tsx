import { IButton } from "../../interfaces/components"

const Button: React.FunctionComponent<IButton> = ({label, onClick}) => {
return <button onClick={onClick}>{label}</button>
}
export default Button 