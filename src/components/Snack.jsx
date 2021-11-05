import {Snackbar} from "@mui/material";
import Alert from '@mui/material/Alert';

// const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

const Snack = ({isOpen, handleClose = Function.prototype}) => {
    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            autoHideDuration={3000}
        >
            <Alert
                severity="success"
            >
                Товар добавлен в корзину!
            </Alert>
        </Snackbar>
    )
}

export default Snack