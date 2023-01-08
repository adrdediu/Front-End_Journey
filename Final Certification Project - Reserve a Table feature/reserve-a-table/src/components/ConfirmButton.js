import { Link } from "react-router-dom"
import { HStack } from "@chakra-ui/react"
export default function ConfirmButton(props) {
    return(
        <Link to={props.href}>
        <button className="confirm-button">
            <HStack justify="center">
                <p>{props.title}</p>
            </HStack>
        </button>
        </Link>
    )
}