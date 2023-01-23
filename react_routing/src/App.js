import { Navigation,Home,User, SignIn, Trainner, Plan } from './routes';
import { Routes, Route } from 'react-router-dom';
import SignUp from './routes/signUp/signup.component';
import UpdateUser from './routes/user/user.update.component';
import UpdateTrainner from './routes/trainner/trainner.update.component';
import UpdatePlan from './routes/plan/plan.update.component';
import DeleteTrainner from './routes/trainner/trainner.delete.component';
import DeleteUser from './routes/user/user.delete.component';
import DeletePlan from './routes/plan/plan.delete.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/home' element={<Home />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/update' element={<UpdateUser />} />
        <Route path='/user/delete' element={<DeleteUser />} />
        <Route path='/trainner' element={<Trainner />} />
        <Route path='/trainner/update' element={<UpdateTrainner />} />
        <Route path='/trainner/delete' element={<DeleteTrainner />} />   
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/plan/update' element={<UpdatePlan />} />
        <Route path='/plan/delete' element={<DeletePlan />} />       
      </Route>
    </Routes>
  );
}

export default App;
