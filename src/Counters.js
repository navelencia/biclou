import './Counters.scss';
import Counter from './Counter';

function Counters () {
    return (
        <div id="counters">
            <Counter icon="bike" number="10" unit="km"/>
            <Counter icon="time" number="7260" unit="time"/>
            <Counter icon="up" number="520" unit="m" color="green"/>
            <Counter icon="down" number="40" unit="m"/>
        </div>
    )
}

export default Counters;