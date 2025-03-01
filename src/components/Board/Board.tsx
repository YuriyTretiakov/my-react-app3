import { Card, CardContent, Typography } from "@mui/material";
import { IBoard } from "../../interfaces/components";

const Board: React.FunctionComponent<IBoard> = ({name, tasks}) => {
    console.log(name, tasks)
    return( <Card>
        <CardContent>
          <Typography variant="body2" color= 'text.secondary'>
            {name}
          </Typography>
        </CardContent>
    </Card>)
}
export default Board