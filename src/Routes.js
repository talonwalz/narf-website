import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Landing from './components/Landing/Landing'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/auth" component={Auth}/>
    </Switch>
)