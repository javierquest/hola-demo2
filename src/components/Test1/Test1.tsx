/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import Arrow1Image from 'src/assets/images/test1_Arrow_1.png';
import { styled } from '@mui/material/styles';
import { Test1Props } from 'src/types';
import useTest1 from 'src/components/Test1/useTest1';
 
const Test11: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `857px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const Arrow1: any = styled("img")({  
  height: `0px`,  
  width: `108px`,  
  position: `absolute`,  
  left: `169px`,  
  top: `69px`,  
  cursor: `pointer`,  
});
 
function Test1(props: Test1Props): JSX.Element {
  const {fns} = useTest1();
    return (
    <Test11  className={props.className}   >
      <Arrow1 onClick={fns.click(a,b,c,d)} onMouseOut={fns.chuppa}  src={Arrow1Image} alt={"Arrow 1"}/>
    </Test11>
  );
}

export default Test1;
