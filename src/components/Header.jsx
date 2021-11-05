import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import {ShoppingBasket} from "@mui/icons-material";

const Header = ({handleCart, orderLen}) => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='span'
                    sx={{flexGrow: 1}}
                >
                    MUI Shop
                </Typography>
                <IconButton
                    color='inherit'
                    onClick={handleCart}
                >
                    <Badge
                        color='secondary'
                        badgeContent={orderLen}
                    >
                        <ShoppingBasket />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Header