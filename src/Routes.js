import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Admin from './components/Admin/Admin'
import Landing from './components/Landing/Landing'
import Contact from './components/Contact/Contact'
import Covid from './components/Covid/Covid'
import Feedback from './components/Feedback/Feedback'
import Patient from './components/Patient/Patient'
import Services from './components/Services/Services'
import Team from './components/Team/Team'
import SuccessStories from './components/SuccessStories/SuccessStories'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/our-team" component={Team}/>
        <Route path="/our-services" component={Services}/>
        <Route path="/new-patient" component={Patient}/>
        <Route path="/contact-us" component={Contact}/>
        <Route path="/patient-feedback" component={Feedback}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/covid-info" component={Covid}/>
        <Route path="/success-stories" component={SuccessStories}/>   
    </Switch>
)