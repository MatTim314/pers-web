#linux #tech-problems #encryption
## Solution
1. Use openssl to show the underlying structure of the message.
	`openssl asn1parse -in Downloads/smime.p7m -inform der`
2. Locate an attribute with content-type: text/plain
3. Following part should be a base64 encoded content of the mail
4. Use a base64 decoder to get the content of the mail.
5. Read
## Cause 
Senders email client supports S/MIME and actively uses it to signs mails and reciever's email doesn't.
## Description 
Recieved an "empty" mail that was sent from a mail client supporting S/MIME. This resulted in the content of the mail to be a type of **application/pkcs7-mime**. This is basically just another way to sign your email and encrypt it. Result was that the mail appeared empty aside from the attachment. 