export default async function sendEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      console.log("E-mail envoyé avec succès !");
      return true;
    } else {
      console.error("Erreur lors de l'envoi de l'e-mail");
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail", error);
    return false;
  }
}
