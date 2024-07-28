import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NewCustomer = () => {
  return (
    <NewcustomerContainer>
      <AmazonTitleLogo>
        <Link to="/">
          <img src={"https://i.imgur.com/7I9Was5.png"} alt="Amazon Logo" />
        </Link>
      </AmazonTitleLogo>

      <NewCustomerBox>
        <NewcustomerTitle>Create Account</NewcustomerTitle>
        <UserName>Your name</UserName>
        <UserNameInput type="text" />

        <UserPhoneorEmail>Mobile number or email</UserPhoneorEmail>
        <UserPhoneorEmailInput type="text" />

        <UserPassword>Password</UserPassword>
        <UserPasswordInput type="password" />

        <Info>Passwords must consist of at least 6 characters.</Info>

        <ConfirmPassword >Password again</ConfirmPassword>
        <ConfirmPasswordInput type="password" />

        <ContinueButton>Continue</ContinueButton>

        <Notice>
          <FontAwesomeIcon icon={faInfoCircle} /> By creating an account, you agree to Amazon's <Link to="https://www.amazon.ca/gp/help/customer/display.html/ref=ap_register_notification_condition_of_use?ie=UTF8&nodeId=918816">Conditions of Use</Link> and <Link to="https://www.amazon.ca/gp/help/customer/display.html/ref=ap_register_notification_privacy_notice?ie=UTF8&nodeId=918814">Privacy Notice</Link>.
        </Notice>

        <hr />

        <WorkAccount>
          <WorkAccountTitle>Buying for work? </WorkAccountTitle>
          <CreateFreeBusinessAccount>
            <Link to="/createfreeaccount">Create a free business account</Link>
          </CreateFreeBusinessAccount>
        </WorkAccount>

        <hr />

        <SignInButton>
          <Link to="/signin">Already have an account? Sign in</Link>
        </SignInButton>



      </NewCustomerBox>
    </NewcustomerContainer>
  )
}

export default NewCustomer


const NewcustomerContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 100vh;
  background-color: #f3f3f3;
`
const AmazonTitleLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const NewcustomerTitle = styled.div`
  font-size: 28px;
  font-weight: 400;
  font-family: 'Amazon Ember', Arial, sans-serif;
  color: rgb(17, 17, 17);
  margin-bottom: 20px;
  text-align: center;
`
const NewCustomerBox = styled.div`
  width: 300px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
const UserName = styled.div`
    font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 4px;
`
const UserNameInput = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
   display: flex;
  flex-grow: 1;
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  margin-bottom: 8px;
  background-color: white;

 &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #87CEEB;
  }
`
const UserPhoneorEmail = styled.div`
font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

const UserPhoneorEmailInput = styled.input`
 width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
   display: flex;
  flex-grow: 1;
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  margin-bottom: 8px;
  background-color: white;
  
 &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #87CEEB;
  }
`
const UserPassword = styled.div`
font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
const UserPasswordInput = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
   display: flex;
  flex-grow: 1;
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  margin-bottom: 8px;
  background-color: white;
  
 &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #87CEEB;
  }
`

const Info = styled.div`
font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;


`
const ConfirmPassword = styled.div`
font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
const ConfirmPasswordInput = styled.input`
  width: 95%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
   display: flex;
  flex-grow: 1;
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  margin-bottom: 8px;
  background-color: white;
  
 &:focus-within {
    outline: none;
    box-shadow: 0 0 0 3px #87CEEB;
  }
`
const ContinueButton = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color: #f0c14b;
text-align: center;
  border-radius: 4px;
  width: 100%;

  margin-top: 20px;
  border: 1px solid #a88734;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #ddb347;
  }
`
const Notice = styled.div`
font-size: 12px;
  color: #555;
  margin-top: 20px;
  text-align: center;
`

const WorkAccount = styled.div`
font-size: 12px;
  color: #555;
  margin-top: 10px;
  text-align: center;
`
const WorkAccountTitle = styled.div`
margin-left: 1px;
font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`
const CreateFreeBusinessAccount = styled.div`

`

const SignInButton = styled.div`
 font-size: 12px;
  color: #555;
  margin-top: 10px;
  text-align: center;
`


