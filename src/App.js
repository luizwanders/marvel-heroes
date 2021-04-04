import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '@/components/shared/Header'
import Home from '@/pages/Home'
import Character from '@/pages/Character'

function App() {
    return (
        <Router>
            <div>
                <Header />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/character/:id" exact component={Character} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
