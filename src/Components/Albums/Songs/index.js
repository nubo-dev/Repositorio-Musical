import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Divider, Grid, Paper } from '@material-ui/core'

// style
const button_salir = {
    color: "#F44336",
}

class Songs extends React.Component {
    state = {
        open: false,
        data: [],
        cancionesTotal: []
    };

    handleClickOpen = () => {
        const totalSongsIter = this.props.data.canciones.map((canciones, num) => {
            return num + 1
        })
        this.setState({
            open: true,
            cancionesTotal: totalSongsIter.length
        });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    render() {
        return (
            <div>
                <p onClick={this.handleClickOpen} className="p-ver-canciones">Ver canciones</p>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <p className="p-title-dialog">
                            {this.props.data.titulo}
                        </p>
                        <p className="p-cantante-dialog">
                            {this.props.data.artista}
                        </p>
                        <p className="p-publicacion">
                            Públicado el {this.props.data.fecha_publicacion}
                        </p>
                    </DialogTitle>
                    <Divider />
                    <DialogContent className="dialogContent-container-canciones">
                        <div id="alert-dialog-description" className="dialogContentText-canciones">
                            <Grid container spacing={8}>
                                <Grid item xs={6}>
                                    <Paper elevation={0}>
                                        <img src={this.props.data.cover} alt={this.props.data.titulo} className="img-dialog" />
                                    </Paper>
                                    <Paper elevation={0}>
                                        <p className="p-total-canciones">
                                            {this.state.cancionesTotal}
                                            &nbsp;Canciones,&nbsp;
                                            <b className="b-usuario-canciones">
                                                {this.props.data.owner}
                                            </b>
                                        </p>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper elevation={0}>
                                        {
                                            this.props.data.canciones.map((canciones, num) => (
                                                <div className="div-canciones" key={num}>
                                                    <p className="p-canciones">
                                                        <b className="b-num-canciones">
                                                            {num + 1}
                                                        </b>&nbsp;&nbsp;&nbsp;
                                                            <b className="b-nombre-canciones">
                                                            {canciones}
                                                        </b>
                                                    </p>
                                                    <Divider />
                                                </div>
                                            ))
                                        }
                                        <div className="div-discongrafia-dialog">
                                            <p className="p-discografia-dialog">
                                                {this.props.data.discografia}
                                            </p>
                                        </div>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </div>
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Grid container spacing={8}>
                            <Grid item xs={12} className="grid-button-salir">
                                <Button onClick={this.handleClose} color="primary" style={button_salir} variant="outlined">
                                    Salir
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default Songs;
