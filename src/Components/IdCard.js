import React from 'react';

const IdCard = (props) => {
    const {user} = props;
    return (
        <div className='id-card'>
            <h1 id="idTicker">{user.id}/25</h1>
            <h1 id="name">{user.name.first} {user.name.last}</h1>
            <h3 id="location">From: {user.city}, {user.country}</h3>
    <h3 id="title">Title: {user.title}</h3>
            <h3 id="employer">Employer: {user.employer}</h3>
            <h3 id="movies"> Favorite Movies: 
                <ol className="moviesList">
                    <li>{user.favoriteMovies[0]}</li>
                    <li>{user.favoriteMovies[1]}</li>
                    <li>{user.favoriteMovies[2]}</li>
                </ol>
            </h3>
        </div>
    )
}

export default IdCard;