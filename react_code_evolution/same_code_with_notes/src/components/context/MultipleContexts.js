// EXAMPLE OF USING MULTIPLE CONTEXTS
// Here there are two contexts: ThemeContext & UserContext.
// ThemeContext.Consumer accepts a function as a child passing in the theme value. Withing the function body we have another function as a child which provides the UserContext value. Both of them are then passed as props to a component.

function Content() {
  return (
    <>
      <ThemeContext.Consumer>
        {(theme) => {
          <UserContext.Consumer>
            {(user) => <ProfilePage user={user} theme={theme} />}
          </UserContext.Consumer>;
        }}
      </ThemeContext.Consumer>
    </>
  );
}
