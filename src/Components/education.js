
import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './ResumePreview'
import {skinCodes, fieldCd} from '../constants/skinCodes';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useNavigate } from "react-router-dom";
import { setEducation, updateEducation } from "../redux/actions/educationActions";
import { connect } from "react-redux";

function Education(props) {
    const navigate = useNavigate();
  console.log('Education');
  const [education,setEducation]= useState(props.educationSection); //{}

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setEducation({...education,[key]:val})
  }
  const getFieldData=(key)=>{
    if(education && education[key]){
      return education[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.educationSection!=null){
      //update
      props.updateEducation(education)
    }else{
      //set
      props.setEducation(education)
    }
     navigate('/finalize')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Educational Section</h2>
            <div className="form-section">
              <div className="input-group"><label>College Name</label>
                <div className="effect"><input type="text" name={fieldCd.SchoolName}
                  onChange={onchange} value={getFieldData(fieldCd.SchoolName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Degree</label>
                <div className="effect"><input type="text" name={fieldCd.Degree}
                  onChange={onchange} value={getFieldData(fieldCd.Degree)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>CGPA</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationCGPA}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationCGPA)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>City/State</label>
                <div className="effect"><input type="text"  name={fieldCd.City}
                  onChange={onchange} value={getFieldData(fieldCd.City)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Month</label>
                <div className="effect"><input type="text" name={fieldCd.GraduationDate}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Graduation Year</label>
                <div className="effect"><input type="text"  name={fieldCd.GraduationYear}
                  onChange={onchange} value={getFieldData(fieldCd.GraduationYear)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>
          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={education} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return{
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setEducation : (education) => dispatch(setEducation(education)),
    updateEducation : (education) => dispatch(updateEducation(education))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Education)
