import React from 'react';
import {withRedux} from "../../store/wrapper";

const FormSelectSection = ({onHandleSelect, value, formStep}) => {

  function handleChange(event){
    onHandleSelect(event)
  }

  return(
    <select value={value} onChange={ (e) => handleChange(e)}>
      {formStep === 2?
        <>
          <option value={0}>-- wybierz --</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </>
        :
        <>
          <option value={""}>-- wybierz --</option>
          <option value={"Poznań"}>Poznań</option>
          <option value={"Warszawa"}>Warszawa</option>
          <option value={'Kraków'}>Kraków</option>
          <option value={"Katowice"}>Katowice</option>
          <option value={'Wrocław'}>Wrocław</option>
        </>
      }
    </select>
  )

};

const FormSelectSectionHoc = withRedux(FormSelectSection);
export {FormSelectSectionHoc as FormSelectSection};