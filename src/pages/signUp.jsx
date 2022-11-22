import '../css/login_page.css'
import Button from '../UI/Blackbutton/BlackButton';
import InputField from '../UI/InputField/InputFiels';
import InputFieldForm from '../UI/InputFieldForm/InputFieldForm';
import Logotype from '../UI/Logotype/Logotype';
import TransparentButton from '../UI/transparentButton/TransparentButton';
const SignUp = () =>{

    return(
        <div className="login-wrapper">
            <div className="login-logotype">
                <Logotype />
            </ div>
            <div className="login-background"></div>
            <div className="login-container">
                <h1>Welcome </h1>
                <form action="post" className="form">
                    <div className="form__inputFields">
                        <section>
                            <label htmlFor="email">Email</label> 
                            <InputFieldForm type="text" name='email' placeholder="Email"/>
                        </section>
                        <br />
                        <section>
                            <label htmlFor="password">Password</label> 
                            <InputFieldForm type="password" name='Password' placeholder="Password"/>
                        </section>
                        <section>
                            <label htmlFor="name">Name</label> 
                            <InputFieldForm type="text" name='name' placeholder="Name"/>
                        </section>
                        <section>
                            <label htmlFor="dob">Day of birth</label> 
                            <InputFieldForm type="date" name='dob' placeholder="Day ob birth"/>
                        </section>
                        <div className="form__additionalFeatures">

                    </div>
                    </div>
                    <div className="form__buttonsBlock">
                        <Button>Register</Button>
                        <p>or</p>
                        <TransparentButton>Sign up with Google</TransparentButton>
                    </div>
                </form>
                <span className='signUpSpan'>Already have an account? <a href='/login'>Sign in here</a></span>
            </div>
        </div>
        

    );

}

export default SignUp;
