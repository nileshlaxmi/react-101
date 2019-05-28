class SetStateIsAsynchronous extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={() =>
                        this.setState(previous => ({ count: previous.count + 1 }), () => console.log(this.state))}
                >
                    Count: {this.state.count}
                </button>

                <p>
                    <em>Open the console. <code>state</code> logs are in sync with rendering.</em>
                </p>
            </div>
        );
    }
}

ReactDOM.render(<SetStateIsAsynchronous />, document.getElementById("root"));
