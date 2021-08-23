import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, withRouter } from 'react-router-dom';

const ButtonMenuApps = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const history = useHistory();

    /* const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }; */

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOnClickCLOUD = () => {
        setAnchorEl(null);
        const win = window.open('http://186.1.178.43:5000/', '_blank');
        win.focus();
    };

    const handleOnClickSISGOM = () => {
        setAnchorEl(null);
        const win = window.open('http://186.1.178.43:18081/', '_blank');
        win.focus();
    };

    const handleOnClickHome = () => {
        history.push('/')
    };

    const handleOnClickAbout = () => {
        history.push('/quienessomos')
    };

    const handleOnClickPortFolio = () => {
        history.push('/portafolio')
    };

    const handleOnClickContact = () => {
        history.push('/contacto')
    };
    const handleOnClickCitas = () => {
        const win = window.open('https://api.whatsapp.com/send?phone=+573105438731&text= Buenas,%20deseo%20apartar%20una%20cita%20médica.', '_blank');
        win.focus();
    };

    return (
        <div >
            <Button color="inherit" onClick={handleOnClickHome}>Inicio</Button>
            <Button
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                Aplicaciones

            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleOnClickCLOUD}>CLOUD</MenuItem>
                <MenuItem onClick={handleOnClickSISGOM}>SISGOM</MenuItem>
            </Menu>

            <Button color="inherit" onClick={handleOnClickAbout}>¿Quienes somos?</Button>
            <Button color="inherit" onClick={handleOnClickPortFolio}>Nuestros servicios</Button>
            <Button color="inherit" onClick={handleOnClickContact}>Contactos</Button>
            <Button variant="outlined" style={{
                borderColor: "#FFF", color: "#FFF"
            }} onClick={handleOnClickCitas}>Apartar cita</Button>
        </div>
    );
}
export default (withRouter)(ButtonMenuApps);
