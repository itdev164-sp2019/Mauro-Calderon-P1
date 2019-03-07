import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button,Button1,Hpic} from '../components/Element'
import Beef from '../images/beef.jpg'
import Pork from '../images/pork.jpg'
import Chicken from '../images/chicken.jpg'
import Salmon from '../images/salmon.jpg'
import Beef1 from '../images/meetloaf.jpg'
import Pork1 from '../images/porkL.jpg'
import Chicken1 from '../images/chickenW.jpg'
import Salmon1 from '../images/salmonC.jpg'
// import P from '../components/Element/Hide/Hide'

const SecondPage = () => (
  <Layout>
    
    <SEO title="Page two" />
    <div >
    <Button >Beef</Button>
    <Button1>Chicken</Button1>
    <Button>Salmon</Button>
    <Button1>Pork</Button1>
    <br/><br/><br/>
    </div>
    <section>
    <a id="beef" href="https://www.allrecipes.com/recipe/216763/bangin-smokey-beef-brisket/?internalSource=streams&referringId=461&referringContentType=Recipe%20Hub&clickId=st_trending_b">
    <Hpic  src={Beef}></Hpic>
    </a>
    <a  href="https://www.allrecipes.com/recipe/234621/rusty-chicken-thighs/">
    <Hpic src={Chicken}></Hpic>
    </a>
    <a href="https://www.allrecipes.com/recipe/242405/orange-and-milk-braised-pork-carnitas/?internalSource=streams&referringId=205&referringContentType=Recipe%20Hub&clickId=st_trending_b">
    <Hpic src={Pork}></Hpic>
    </a>
    <a href="https://www.allrecipes.com/recipe/237900/sesame-grilled-salmon/?internalSource=streams&referringId=416&referringContentType=Recipe%20Hub&clickId=st_trending_s">
    <Hpic src={Salmon}></Hpic>
    </a>
    </section>
    <section>
    <a href="https://www.allrecipes.com/recipe/232247/tennessee-meatloaf/?internalSource=staff%20pick&referringId=200&referringContentType=Recipe%20Hub&clickId=cardslot%203">
    <Hpic src={Beef1}></Hpic>
    </a>
    <a href="https://www.allrecipes.com/recipe/24087/restaurant-style-buffalo-chicken-wings/?internalSource=streams&referringId=663&referringContentType=Recipe%20Hub&clickId=st_trending_b">
    <Hpic src={Chicken1}></Hpic>
    </a>
    <a href="https://www.allrecipes.com/recipe/16448/simple-bbq-ribs/?internalSource=rotd&referringId=16410&referringContentType=Recipe%20Hub">
    <Hpic src={Pork1}></Hpic>
    </a>
    <a href="https://www.allrecipes.com/recipe/255950/citrus-baked-fish/?internalSource=staff%20pick&referringId=416&referringContentType=Recipe%20Hub">
    <Hpic src={Salmon1}></Hpic>
    </a>
    </section>
    
    
    <Link style={{float:'left'}} to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
