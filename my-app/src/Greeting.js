import Morning from "./Morning";
import Evening from "./Evening";

function Greeting() {

const curHour = new Date(). getHours();
let greeting;

if (curHour > 12) {
    greeting = <Evening />;
} else {
    greeting = <Morning />;
}
    return (
        <h1>{greeting}</h1>
    );

}
export default Greeting; 