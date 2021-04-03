import './App.css'
import Header from '@/components/shared/Header'
import Home from '@/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main style={{ padding: '0 24px' }}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App
