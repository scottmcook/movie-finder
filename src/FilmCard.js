import React from "react";

const FilmCard = (props) => {
  return (
    <>
      <div class="background_6">
        <div class="imdb_card">
          <div class="movie_poster">
            <img
              src="https://image.tmdb.org/t/p/w1280/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg"
              alt=""
            />
              <div class="movie_label">
                <h2>SPIDER-MAN</h2>
                <h4>INTO THE SPIDER VERSE</h4>
              </div>
            </div>
            <div class="movie_content">
              <div class="mov_specs">
                <i class="material-icons">star</i>
                <p>8.5 | 1h 57min | Animation, Action, Adventure</p>
              </div>
              <div class="mov_description">
                <h3>Storyline</h3>
                <p>
                  Teen Miles Morales becomes Spider-Man of his reality, crossing
                  his path with five counterparts from other dimensions to stop a
                  threat for all realities.
                </p>
                <p>
                  <strong>Director:</strong> Bob Persichetti, Peter Ramsey, Rodney
                  Rothman
                </p>
              </div>
              <div class="buy_ticket">
                <a href="#">
                  <span>BUY TICKET NOW</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36.746"
                      height="36.746"
                      viewBox="0 0 36.746 36.746"
                    >
                      <g
                        id="noun_Ticket_2216149"
                        transform="translate(-21.611 16.192) rotate(-45)"
                      >
                        <path
                          id="Trazado_1000"
                          data-name="Trazado 1000"
                          d="M44.461,38.067v-4.4a3.867,3.867,0,0,1,0-7.7v-4.4h-11.6V25.51a.377.377,0,1,1-.754,0V21.562H9v4.4a3.867,3.867,0,0,1,0,7.7v4.4H32.107V34.12a.377.377,0,0,1,.754,0v3.948ZM32.484,32.354a.377.377,0,0,1-.377-.377V27.652a.377.377,0,1,1,.754,0v4.325A.377.377,0,0,1,32.484,32.354Z"
                          fill="#f5c518"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default FilmCard;
