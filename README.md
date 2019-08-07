# First things first install the following packages

## Redux:
* npm install redux
* npm install react-redux

## Thunk:
* npm install redux-thunk

## React Router:
* npm install react-router
* npm install react-router-dom


### Plumbing

#### Here we want to set up each piece of Redux.

   1: File structure for Redux
   * I place all my redux files inside of a folder called `/redux/`
        
       * Store = `./redux/store.js`

       * Reducer = `./redux/reducer.js`

       * My actions and types go in a folder called `/actions/` inside of `/redux`

       * Actions Index = `./redux/actions/index.js`

       * Types = `./redux/actions/types.js`


   2: Wrap the things we need to wrap with the things they need to be wrapped in:
   * Two approaches to this. You can work from `index.js` down toward your `reducer.js` or you can work up from your `reducer.js` to your `index.js`
   * I prefer the second approach so: 
    * start in your `reducer.js` and I create my first reducer and my combine reducer action: 
        ```
        `./redux/reducer.js`

        import { combineReducers } from 'redux';

        const connected = (state="God I hope so", action) =>{
            switch(action.type){
                default: 
                return state
            }
        }

        const reducers = {
            connected: connected
        }

        export default combineReducers(reducers)
        ``` 
    * next I create the store:
        ```
            `./redux/store.js`

            import { createStore, applyMiddleware, compose } from 'redux'
            import thunk from 'redux-thunk'
            import reducer from './reducer'

            //this gives us access to the devtools for redux
            const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
            
            //this creates our store. This requires our reducer exported from our reducers file and all of the middleware that we're using. 
            //middleware is just fancy for something that interrupts a process in the middle of it's action
            const store = createStore(reducer, composeEnhancers(applyMiddleWare(thunk)))

            export default store

        ```

    * from there we can move to `index.js` and bring Redux, Thunk, and Router together in our program
        ```

            import React from 'react';
            import ReactDOM from 'react-dom';
            import './css/index.css';
            import App from './containers/App';


            ReactDOM.render(<App />, document.getElementById('root'));

        ```

        ```
            import React from 'react';
            import ReactDOM from 'react-dom';
            import './css/index.css';
            import App from './containers/App';

            
            import { BrowserRouter as Router } from 'react-router-dom';
            import { Provider } from 'react-redux';
            import store from './redux/store'


            ReactDOM.render(
                <Provider store={store} >
                    <Router>
                        <App />
                    </Router>
                <Provider>
                        , document.getElementById('root')
                
                ); 

        ```