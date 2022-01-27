
import { StyledIntro, IntroButton, IntroButton2 , MyButtons} from './styles/Introbody.styled';


const Introbody = () => {
    return (

        <StyledIntro>    <div>

            <h1>The React Framework</h1>
            <h2>for Production</h2>
            <p>Next.js gives you the best developer experience with all the features
                you need for production: hybrid static & server rendering,
                TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</p>

            <MyButtons>
                <IntroButton> Start Learning</IntroButton>
                <IntroButton2 > Documentation </IntroButton2>

            </MyButtons>
        </div>

        </StyledIntro>



    )
};

export default Introbody;
