import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Text,
  } from 'npm:@react-email/components@0.0.22'
  import * as React from 'npm:react@18.3.1'
  
  interface OtpEmailProps {
    token: string
  }
  
  export const OtpEmail = ({
    token
  }: OtpEmailProps) => (
    <Html>
      <Head />
      <Preview>Log in with this OTP</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Login</Heading>
          <Text style={{ ...text, marginBottom: '14px' }}>
           Here's your OTP code...:
          </Text>
          <code style={code}>{token}</code>
          <Text
            style={{
              ...text,
              color: '#ababab',
              marginTop: '14px',
              marginBottom: '16px',
            }}
          >
            If you didn&apos;t try to login, you can safely ignore this email.
          </Text>
          <Text style={footer}>
            <Link
              href="https://syncu.net/"
              target="_blank"
              style={{ ...link, color: '#898989' }}
            >
            Syncu
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  )
  
  export default OtpEmail
  
  const main = {
    backgroundColor: '#ffffff',
  }
  
  const container = {
    paddingLeft: '12px',
    paddingRight: '12px',
    margin: '0 auto',
  }
  
  const h1 = {
    color: '#333',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '40px 0',
    padding: '0',
  }
  
  const link = {
    color: '#2754C5',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
  }
  
  const text = {
    color: '#333',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
  }
  
  const footer = {
    color: '#898989',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '12px',
    lineHeight: '22px',
    marginTop: '12px',
    marginBottom: '24px',
  }
  
  const code = {
    display: 'inline-block',
    padding: '16px 4.5%',
    width: '90.5%',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #eee',
    color: '#333',
  }