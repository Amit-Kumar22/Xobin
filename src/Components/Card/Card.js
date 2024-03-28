import React from 'react'
import "./card.css"

function Card({theme}) {
  return (
    <div>
      <div className="Upper-Cards">
          <div className="box" box-theame={theme}>
            <img src={require("./Card-image/image-1.png")} alt="image-1" />
            <p className="name">Sacramento River Cats</p>
            <div className="box-event" box-events={theme}>
              <table>
                <tr className="thead">
                  <td>Total Events</td>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>48 Events</td>
                  <td>Baseball</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="box" box-theame={theme}>
            <img src={require("./Card-image/image-2.png")} alt="image-1" />
            <p className="name">Las Vegas Aviators</p>
            <div className="box-event" box-events={theme}>
              <table>
                <tr className="thead">
                  <td>Total Events</td>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>48 Events</td>
                  <td>Baseball</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="box" box-theame={theme}>
            <img src={require("./Card-image/image-3.png")} alt="image-1" />
            <p className="name">new jersey devils</p>
            <div className="box-event" box-events={theme}>
              <table>
                <tr className="thead">
                  <td>Total Events</td>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>48 Events</td>
                  <td>Baseball</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="box" box-theame={theme}>
            <img src={require("./Card-image/image-2.png")} alt="image-1" />
            <p className="name">Las Vegas Aviators</p>
            <div className="box-event" box-events={theme}>
              <table>
                <tr className="thead">
                  <td>Total Events</td>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>48 Events</td>
                  <td>Baseball</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="box" box-theame={theme}>
            <div className="other-photo">
              <img src={require("./Card-image/image-4.png")} alt="image-1" />
            </div>

            <div className="box-detail" box-events={theme}>
              <p className="name">Advertisement title</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card
