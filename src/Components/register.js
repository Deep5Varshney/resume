
import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { isLoaded } from 'react-redux-firebase'
// import { connect } from "react-redux";
// import * as authActions from '../../actions/authActions';
import { useNavigate } from "react-router";
import * as authActions from '../redux/actions/authActions';
  function Register(props) {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const handleEmail= (e)=>{
      setEmail(e.target.value);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
      }
   
  const onSubmit=async()=>{
    
    const res = await props.register({email:email, password:password});
    // if(props.authMine.error==''){
    //   history.push('/');
    // }
    if(props.auth!=null){
      navigate('/')
    }
    
  }

 
    return (
      <>
    {/* To save from multiple request */}
      {!isLoaded(props.auth)?<></>:<>
        {props.authMine.loading?<h4 style={{marginTop:'10%',height:'52vh'}}>Patiently Wait...we are resgistering you in</h4>:
          <div className="container med contact">
            <div className="section funnel-section">
                <div className="form-card">
               
                    <h2 className="form-heading center">Enter your details</h2>
                    <div className="form-section">
                        <div className="input-group full"><label>Email</label>
                            <div className="effect"><input type="text" name="email" value={email||''}  onChange={handleEmail}  /><span></span>
                            </div>
                        </div>

                        <div className="input-group full"><label>Password</label>
                            <div className="effect"><input  type="password" name="password"  value={password||''} onChange={handlePassword}/><span></span>
                            </div>
                        </div>
                        {props.authMine?.error?<div className="input-group full">
                                <span className="error-message" >{props.authMine?.error}</span> 
                        </div> :<></>}
                        <div className="form-buttons">
                            <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Register</button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
      }
        </>
  }
  </>
    );
  }

const mapStateToProps = (state) => {
  return{
    authMine : state.auth,
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    register : (userData) => dispatch(authActions.register(userData))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Register);
