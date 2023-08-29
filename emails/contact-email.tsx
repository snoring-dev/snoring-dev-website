import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

interface Props {
  fullName: string;
  email: string;
  message: string;
  subject: string;
}

export default function ContactEmail({
  fullName = "",
  email = "",
  message = "",
  subject = "",
}: Props) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            {subject.charAt(0).toUpperCase() + subject.slice(1)}
          </Text>
          <Text style={content}>My name is {fullName},</Text>
          <Text style={content}>
            {message.charAt(0).toUpperCase() + message.slice(1)}
          </Text>
          <Text style={content}>Answer me at: {email}</Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const content = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
};
