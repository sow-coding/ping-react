class Top extends React.Component {
    render () {
        return <div id="top">
            <img src={"../design/images/logo.svg"}/>
            <h1>We are launching <span id="soon">soon!</span></h1>
            <p id="description">Subscribe and get notified</p>
        </div>
    };
};

class Center extends React.Component {
    constructor (props) {
        super(props)
        this.state = {email: ""}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
        const mail = e.target.value;
        const TestEmail = emailRegExp.test(mail);
        const messageError = document.querySelector("#error");
        if (TestEmail == false) {
            input.classList.remove("inputborder");
            input.classList.add("inputempty");
            messageError.classList.add("messageError")
            messageError.classList.remove("displaynone");
            messageError.classList.add("displayblock");
            messageError.innerHTML = "Please provide a valid email address"        
        } else if (TestEmail == true) {
            input.classList.remove("inputempty");
            input.classList.add("inputborder");
            messageError.classList.remove("displayblock");
            messageError.classList.add("displaynone");
            messageError.innerHTML = "";
        } else if (mail == "") {
            input.placeholder = "example@email/com";
            input.classList.remove("inputborder");
            input.classList.add("inputempty");
            messageError.innerHTML = "Whoops! It looks like you forgot to add your email";
            messageError.classList.add("messageError");
            messageError.classList.remove("displaynone");
            messageError.classList.add("displayblock");
        } else {
            input.classList.remove("inputempty");
            input.classList.add("inputborder");
            messageError.classList.remove("displayblock");
            messageError.classList.add("displaynone");
            messageError.innerHTML = "";
        }
    };

    render() {
        return <div id="center">
                <div id="inputdiv">
                    <input type="email" placeholder="Your email address..." id="input" className="inputborder" onChange={this.handleChange} />
                    <p id="error" className="displaynone"></p>
                </div>
                <button id="btn" >Notify Me</button>
        </div>
    };
};


class Bottom extends React.Component {
    render() {
        return <div id="bottom">
            <img src="./design/images/illustration-dashboard.png" id="ill" />
            <div id="social-media">
                <div className="bckg">
                    <img src="./design/images/fb-final.svg" id="fb"/>
                </div>
                <div className="bckg">
                    <img src="./design/images/twt-final.svg" id="twt"/>
                </div>
                <div className="bckg">
                    <img src="./design/images/ist-final.svg" id="ist"/>
                </div>
            </div>
            <p>© Copyright Ping. All rights reserved</p>
        </div>
    };
};

class Coded extends React.Component {
    render() {
        return <p id="coded">© Coded by <a href="https://github.com/sow-coding/ping-react" target="_blank" id="coded-link">Sow-coding</a></p>
    }
}

function App () {
    return <div>
        <Top />
        <Center />
        <Bottom />
        <Coded />
    </div>
};

ReactDOM.render(<App />, app);