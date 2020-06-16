import React from "react";

const AuthFormView = props => {
    const { 
      // fistName,
      // lastName,
      // // picture,
      // email,
      // password,
      // height,
      // weight,
      // weightGoal,
      // age,
      // birthday,
      name,
      handleSubmit, 
      error, 
      handleChange, 
      isSigned } = props;
  
    return (
      <div>
        {isSigned ? `The current logged in user is: ${userEmail}` : ""}
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" onChange={handleChange} />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    );
  };
  
  export default AuthFormView;