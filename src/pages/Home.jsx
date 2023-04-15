import { Grid, Title, Text, Heading, Article } from './Home.styled';

export default function Home() {
  return (
    <>
      {' '}
      <Title>Welcome to main page</Title>
      <Grid>
        <Article>
          <Heading>What we offer</Heading>
          <Text>
            Here you can create your own contact list. You can easily add a new
            contact, delete it. And you can also find the desired contact using
            the search field and entering the first letters.
          </Text>
        </Article>
        <Article>
          <Heading>First step</Heading>
          <Text>
            Sign up for an account to get editing access. It's very simple.
            Click on the Register button, enter your name, email and create a
            password. Аnd voila, you're in the system. If you're already
            registered, just log in to your account by cliking Log in button.
          </Text>
        </Article>
        <Article>
          <Heading>Why we</Heading>
          <Text>
            Because we offer an authorization system. You will be able to access
            the contact page only after registration. Therefore, be sure that no
            one will be able to see what contacts you have and will not be able
            to edit them.
          </Text>
        </Article>
      </Grid>
    </>
  );
}
