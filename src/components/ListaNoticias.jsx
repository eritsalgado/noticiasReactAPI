import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';

const ListaNoticias = ({noticias}) => (
    <div className="row">
        {noticias.map(noticia => (
            <Noticia
                key={noticia.url}
                articulo={noticia}
            />
        ))}
    </div>
);

ListaNoticias.propTypes = {
    noticias : PropTypes.array.isRequired
}
    

export default ListaNoticias;