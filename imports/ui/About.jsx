import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container homepage">
        <div className="container content">
          <div className="row">
            <div className="col-9 offset-1">
              <div className="About">
                <h2>
                  <span id="badge" className="badge badge-pill badge-dark">
                   About
                  </span>
                </h2>
                {/* should escape quote here */}
                <h5>Dixit is a card game using a deck of cards illustrated with dreamlike images, 
                     players select cards that match a title suggestsed by the "storyteller", and 
                     attempt to vote which card the "storyteller" selected...</h5> 
              </div>
              <div className="Game SetUP">
                <h2>
                  <span id="badge" className="badge badge-pill badge-dark">
                   Players
                  </span>
                </h2>
                <h5>
                3-6
                </h5>
              </div>
              <div className="Rules">
                <h2>
                  <span id="badge" className="badge badge-pill badge-dark">
                   Rules
                  </span>
                </h2>
                <h5>
                  <ul>
                    <li>Story teller pick a card and give it a title</li>
                    <li>Players pick a card which best matches story teller's title to put in POOL</li>
                    <li>Players vote for cards in POOL, try best to guess story teller's card</li>
                    <li>Each player will become "story teller" once in a game</li>
                  </ul>
                </h5>
              </div>
              <div className="Scores">
                <h2>
                  <span id="badge" className="badge badge-pill badge-dark">
                   Scores
                  </span>
                </h2>
                <h5>
                  <ul>
                    <li>Players +1 point upon voting the right card</li>
                    <li>Story teller +3 points if some player but not all players vote for his/her card</li>
                  </ul>
                </h5>
              </div>
              <div className="Play">
                <h2>
                  <span id="badge" className="badge badge-pill badge-warning">
                   Sign in & Click "Let's Play!"
                  </span>
                </h2>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default About;