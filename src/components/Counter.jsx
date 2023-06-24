import { useSelector, useDispatch } from 'react-redux';
import style from '../css/App.module.css';
import { counterActions } from '../store/counter';


const Counter = () => {
    //when you use useSelector react redux will automatically set a subscription for this component to the redux store, you'll always have the latest data (counter data in this case)
    //Selectors are functions that know how to extract specific pieces of information from a store state value. 
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const show = useSelector((state) => state.counter.showCounter);

    //NO TOOLKIT
    // const incrementHandler = () => {
    //     dispatch({ type: 'increment' });
    // };

    // const incementByFive = () => {
    //     dispatch({ type: 'increase', amount: 5 })
    // }

    // const decrementHandler = () => {
    //     dispatch({ type: 'decrement' });
    // };
    
    // const toggleCounter = () => {
    //     dispatch({ type: 'toggle' })
    // };


    //REDUX TOOLKIT
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <div className={style.container}>
            <main className="card p-5">
                <h1>Redux counter</h1>
                {show && <div>{counter}</div>}
                <div className='mt-4'>
                    <button className='btn btn-primary' onClick={toggleCounterHandler}>Toggle counter</button>
                </div>
                <div className='mt-2'>
                    <button className='btn btn-success me-2' onClick={incrementHandler}>+</button>    
                    <button className='btn btn-danger' onClick={decrementHandler}>-</button>
                </div>
                <div className='mt-2'>
                    <button className='btn btn-success' onClick={increaseHandler}>Increase by 5</button>    
                </div>
            </main>
        </div>
    );
}

export default Counter;

// SAME THING WITH CLASS BASED COMPONENT 
// class Counter extends Component {
    
//     incrementHandler = () => {
//         this.props.increment();
//     };

//     decrementHandler = () => {
//         this.props.decrement();
//     };
    
//     toggleCounter = () => {
        
//     };

//     render() {
//         return (
//             <div className={style.container}>
//                 <main className="card p-5">
//                     <h1>Redux counter</h1>
//                     <div>{this.props.counter}</div>
//                     <div className='d-flex justify-content-between mt-4'>
//                         <button className='btn btn-success' onClick={this.incrementHandler.bind(this)}>+</button>    
//                         <button className='btn btn-primary' onClick={this.toggleCounter.bind(this)}>Toggle counter</button>
//                         <button className='btn btn-danger' onClick={this.decrementHandler.bind(this)}>-</button>
//                     </div>
//                 </main>
//               </div>
//         );
//     }
// }

// const mapStatetToProps = state => {
//     return {
//         counter: state.counter
//     }
// };

// const mapDispatchToProp = dispatch => {
//     return {
//         increment: () => dispatch({ type: 'increment' }),
//         decrement: () => dispatch({ type: 'decrement' })
//     }
// }
//
// export default connect(mapStatetToProps, mapDispatchToProp)(Counter);
