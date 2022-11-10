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

import React from 'react';
import { styled } from '@mui/material/styles';
import RatingStar from 'components/RatingStar/RatingStar';
import ColorSelect from 'components/ColorSelect/ColorSelect';
import ProductPageBtn from 'components/ProductPageBtn/ProductPageBtn';
import Repeat3 from 'components/Repeat3/Repeat3';
import { Products1Props } from 'types';

 
const Products11: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  width: "100%",  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `80px`,  
  boxSizing: `border-box`,  
  height: "100%",  
});
  
const Frame3: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  alignSelf: `stretch`,  
  margin: `0px`,  
});
  
const Col2: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `547px`,  
  margin: `0px`,  
});
  
const Details: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Top: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Title: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `900`,  
  fontSize: `42px`,  
  letterSpacing: `0.5px`,  
  textDecoration: `none`,  
  lineHeight: `44px`,  
  textTransform: `none`,  
  margin: `0px`,  
});
  
const Price: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(0, 0, 0, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Roboto`,  
  fontWeight: `400`,  
  fontSize: `38px`,  
  letterSpacing: `0.5px`,  
  textDecoration: `none`,  
  textTransform: `none`,  
  margin: `14px 0px 0px 0px`,  
});
  
const Row: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `14px 0px 0px 0px`,  
});
  
const Q40: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `20px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Rating: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px 0px 0px 6px`,  
});
  
const RatingStar1: any = styled(RatingStar)(({ theme }: any) =>({  
  width: `17px`,  
  height: `16px`,  
  margin: `0px`,  
}));
  
const RatingStar2: any = styled(RatingStar)(({ theme }: any) =>({  
  width: `17px`,  
  height: `16px`,  
  margin: `0px 0px 0px 4px`,  
}));
  
const RatingStar3: any = styled(RatingStar)(({ theme }: any) =>({  
  width: `17px`,  
  height: `16px`,  
  margin: `0px 0px 0px 4px`,  
}));
  
const RatingStar4: any = styled(RatingStar)(({ theme }: any) =>({  
  width: `17px`,  
  height: `16px`,  
  margin: `0px 0px 0px 4px`,  
}));
  
const RatingStar5: any = styled(RatingStar)(({ theme }: any) =>({  
  width: `17px`,  
  height: `16px`,  
  margin: `0px 0px 0px 4px`,  
}));
  
const Description: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `44px 0px 0px 0px`,  
});
  
const Description1: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `20px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const LoremIpsumDolorSitAm: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  width: `519px`,  
  margin: `15px 0px 0px 0px`,  
});
  
const ColorPicker: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `44px 0px 0px 0px`,  
});
  
const Color: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `20px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Colors: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `15px 0px 0px 0px`,  
});
  
const ColorSelect1: any = styled(ColorSelect)(({ theme }: any) =>({  
  width: `36.77px`,  
  height: `36.77px`,  
  margin: `0px`,  
}));
  
const ColorSelect2: any = styled(ColorSelect)(({ theme }: any) =>({  
  width: `36.77px`,  
  height: `36.77px`,  
  margin: `0px 0px 0px 13px`,  
}));
  
const ColorSelect3: any = styled(ColorSelect)(({ theme }: any) =>({  
  width: `36.77px`,  
  height: `36.77px`,  
  margin: `0px 0px 0px 13px`,  
}));
  
const ColorSelect4: any = styled(ColorSelect)(({ theme }: any) =>({  
  width: `36.77px`,  
  height: `36.77px`,  
  margin: `0px 0px 0px 13px`,  
}));
  
const ColorSelect5: any = styled(ColorSelect)(({ theme }: any) =>({  
  width: `36.77px`,  
  height: `36.77px`,  
  margin: `0px 0px 0px 13px`,  
}));
  
const ProductPageBtn1: any = styled(ProductPageBtn)(({ theme }: any) =>({  
  height: `60px`,  
  width: `523px`,  
  margin: `44px 0px 0px 0px`,  
}));
  
const Divider: any = styled("div")({  
  backgroundColor: `rgba(236, 236, 236, 1)`,  
  height: `2px`,  
  width: `519px`,  
  margin: `44px 0px 0px 0px`,  
});
  
const Features: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `44px 0px 0px 0px`,  
});
  
const Features1: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: theme.palette["Text"]["Primary"],  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `800`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `20px`,  
  textTransform: `none`,  
  margin: `0px`,  
}));
  
const Bullets: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `20px 0px 0px 0px`,  
});
  
const Bullet1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const Ellipse14: any = styled("img")({  
  height: `6px`,  
  width: `6px`,  
  margin: `0px`,  
});
  
const PerUser: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 18px`,  
});
  
const Bullet2: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `4px 0px 0px 0px`,  
});
  
const Ellipse141: any = styled("img")({  
  height: `6px`,  
  width: `6px`,  
  margin: `0px`,  
});
  
const PerUser1: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 18px`,  
});
  
const Bullet3: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `4px 0px 0px 0px`,  
});
  
const Ellipse142: any = styled("img")({  
  height: `6px`,  
  width: `6px`,  
  margin: `0px`,  
});
  
const PerUser2: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 18px`,  
});
  
const Bullet4: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `4px 0px 0px 0px`,  
});
  
const Ellipse143: any = styled("img")({  
  height: `6px`,  
  width: `6px`,  
  margin: `0px`,  
});
  
const PerUser3: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 18px`,  
});
  
const Bullet5: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `4px 0px 0px 0px`,  
});
  
const Ellipse144: any = styled("img")({  
  height: `6px`,  
  width: `6px`,  
  margin: `0px`,  
});
  
const PerUser4: any = styled("div")({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(80, 80, 80, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Heebo`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `32px`,  
  textTransform: `none`,  
  margin: `0px 0px 0px 18px`,  
});
  
const Repeat31: any = styled(Repeat3)(({ theme }: any) =>({  
  flexGrow: `1`,  
  margin: `0px 0px 0px 80px`,  
}));
 
function Products1(props: Products1Props): JSX.Element {
  
  return (
    <Products11  className={props.className}   >
      <Frame3 >
        <Col2 >
          <Details >
            <Top >
              <Title >
                {`Oxygen Face Mask`}
                  </Title>
              <Price >
                {`$29.00`}
                  </Price>
              <Row >
                <Q40 >
                  {`4.0`}
                    </Q40>
                <Rating >
                  <RatingStar1   />
                  <RatingStar2   />
                  <RatingStar3   />
                  <RatingStar4   />
                  <RatingStar5   />
                </Rating>
              </Row>
            </Top>
            <Description >
              <Description1 >
                {`Description`}
                  </Description1>
              <LoremIpsumDolorSitAm >
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam leo urna turpis semper sed a vulputate mi. Diam nisl non in et mattis. Sit pulvinar cursus integer lectus sagittis bibendum. Rhoncus cras diam tellus convallis. Aliquam arcu arcu massa purus egestas ante vulputate nisl. `}
                  </LoremIpsumDolorSitAm>
            </Description>
            <ColorPicker >
              <Color >
                {`Color`}
                  </Color>
              <Colors >
                <ColorSelect1   />
                <ColorSelect2   />
                <ColorSelect3   />
                <ColorSelect4   />
                <ColorSelect5   />
              </Colors>
            </ColorPicker>
            <ProductPageBtn1   />
            <Divider >
            </Divider>
            <Features >
              <Features1 >
                {`Features`}
                  </Features1>
              <Bullets >
                <Bullet1 >
                  <Ellipse14  src={`assets/images/Products1_Ellipse_14_4.png`} alt={"Ellipse 14"}/>
                  <PerUser >
                    {`Feature 1 lorem ipsum not to be read`}
                      </PerUser>
                </Bullet1>
                <Bullet2 >
                  <Ellipse141  src={`assets/images/Products1_Ellipse_14_3.png`} alt={"Ellipse 14"}/>
                  <PerUser1 >
                    {`Feature 2 for placement only, not to be read`}
                      </PerUser1>
                </Bullet2>
                <Bullet3 >
                  <Ellipse142  src={`assets/images/Products1_Ellipse_14_2.png`} alt={"Ellipse 14"}/>
                  <PerUser2 >
                    {`Feature 3 placeholder, lorem ipsum dolor sit amet`}
                      </PerUser2>
                </Bullet3>
                <Bullet4 >
                  <Ellipse143  src={`assets/images/Products1_Ellipse_14_1.png`} alt={"Ellipse 14"}/>
                  <PerUser3 >
                    {`Feature 4 lorem ipsum dolor sit consectetur adip`}
                      </PerUser3>
                </Bullet4>
                <Bullet5 >
                  <Ellipse144  src={`assets/images/Products1_Ellipse_14.png`} alt={"Ellipse 14"}/>
                  <PerUser4 >
                    {`Feature 5 for placement only`}
                      </PerUser4>
                </Bullet5>
              </Bullets>
            </Features>
          </Details>
        </Col2>
        <Repeat31   />
      </Frame3>
    </Products11>
  );
}

export default Products1;
