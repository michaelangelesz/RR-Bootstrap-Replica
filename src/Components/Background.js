import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

export default function Background() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Card
          style={{
            width: "100vw",
            minHeight: "428px",
            marginBottom: "50px",
            paddingTop: "1px",
            backgroundColor: "#DEEED6",
            backgroundImage: "url('https://64.media.tumblr.com/3c1c00c3f33f7fbb3361b3229118dd50/05bcb7e787b4edf9-b6/s540x810/77943da2856ee249acde0d431e5bec1cfcef79fe.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "440px",
          }}
          className="text-black"
        >
          <div
            style={{
              top: "auto",
              width: "100vw",
              marginBottom: "50px",
              marginTop: "50px",
            }}
          >
            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
              Order groceries for delivery <br /> or pickup today
            </Card.Text>
            <Card.Text style={{ fontSize: "1em" }}>
              Whatever you want from local stores, brought right to your door.
            </Card.Text>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="   Enter your address                                         ->"
                />
              </Form.Group>
            </Form>
          </div>
        </Card>
      </div>
      {/* <div>
        <img
          style={{
            height: "428px",
            width: "20%",
            position: "absolute",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg"
          alt="Card image"
        />
      </div> */}
    </div>
  )
}
