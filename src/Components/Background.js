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
            backgroundImage:
              "url('https://64.media.tumblr.com/2ef347b6eef56b649b3efdc5dd5f7b34/19bdd979aa247be2-06/s400x600/e66f6e1c148e194e36a8bd37e6987f303cc3869f.pnj')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            backgroundSize: "350px",
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
    </div>
  )
}
