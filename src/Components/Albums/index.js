import React, { Component } from 'react';
import Axios from "axios"

//@material
import {
    Grid,
    Paper,
    Divider,
} from '@material-ui/core'

// Components
import Songs from './Songs'

// Style
import '../Global/Static/ListAllAlbums/index.css'

class Albums extends Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
        }
    }

    // Buscando los Albunes a la API
    componentWillMount() {
        Axios.get(`http://127.0.0.1:8000/api/albunes/`)
            .then(ress => {
                const albums = ress.data;
                this.setState({ albums });
            })
            .catch(err => {
                this.setState({ err })
            })
    }

    render() {
        return (
            <div className="div-Box-ListAlbums">
                <Grid item xs={12} className="grid-title">
                    <p className="p-title">Lista de los álbumes disponibles</p>
                </Grid>
                <Grid item xs={12} container spacing={24} className="grid-box-albums">
                    {this.state.albums.map((items, key) => <Grid item xs={3} key={key}>
                        <Paper className="paper-items">
                            <Grid container spacing={8} item xs={12}>
                                <Grid item xs={6} className="grid-img">
                                    <img src={items.cover} alt={items.titulo} className="img-Album" />
                                </Grid>
                                <Grid item xs={6} className="grid-content-album">
                                    <h1 className="h1-album-titulo">
                                        {items.titulo}
                                    </h1>
                                    <Divider />
                                    <h2 className="h2-content-album-artista">{items.artista}</h2>
                                    <Songs data={items} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <p className="p-content-album-discografia">{items.discografia}</p>
                            </Grid>
                        </Paper>
                        <div className="div-usuario">
                            <p className="p-usuario">Públicado por <b className="b-usuario">{items.owner}</b>.</p>
                        </div>
                    </Grid>)}
                </Grid>
            </div>
        );
    }
}

export default Albums;
