import RouteComponent from "./routes/routes";
import '../src/scss/styles.scss';

function App() {
    const routeElement = RouteComponent();
    return <div>{routeElement}</div>;
}

export default App;
