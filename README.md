# Web3_Saas

Learning by making projects from Harkirat Singh  
![Working](https://github.com/NamanGarg12/Web3_Saas/blob/main/Screenshot%202024-11-08%20223030.png)

This is the Diagram that is used to understand the working of the Project.

It is a SaaS application that is used to get the user suggestion for a particular image by the company and reward the user with an amount in the form of cryptocurrency.

## Letting user Upload a Photo: (Concept of Presigned URL)

Presigned URL to get the image uploaded in the AWS server:

1. **Security issue**: Never upload the image directly to the backend.
2. **Backend Approach**: Avoids allowing multiple backends, so the image should ideally go directly to the AWS cloud.
3. **Security Risks**: If we provide the AWS password in the frontend, it can lead to security and data issues in the cloud.
4. **Alternative (Not Recommended)**: Taking the image from the user in the backend and then dumping it to the AWS server—this puts too much load on the backend.
5. **Presigned URL Concept**: The frontend requests the backend to upload the image, and the backend asks the cloud to provide a URL where the user can upload the image to the AWS bucket (limited to a single photo).

## Letting User Pay and Verify Payment to the Backend: (Web2 + Web3 concept)

1. After making the transaction the user gets the transaction signature of that Transaction, which can be used for the verification of the Transaction.
2. Flaw :  If the Transaction has been made but the task has not been done of getting the image due to some netwrok isse and someone else comes and claims that the transaction has been made by him, then it camnot be figured out who have made the Transaction.
3. We then need to Connect the wallet address with the Saas so that the DataBase can verify if the Transaction Signature is Associated to that user.
![Payment Diagram](https://github.com/NamanGarg12/Web3_Saas/blob/main/Screenshot%202024-11-08%20231522.png)

## Allowing Labellers to pay $s to their own wallet

1. Helper Frontend will make the request to the backend to send the money, to the users wallet.
2. To ensure if the transaction have made successfully then we need to verify the transaction again and again till the updation that the money has transfered have made in the Database.
3. Lock Algoruthm : Locking the Request mechanism that till the time the update on the transaction status is not yet provided till than another request can't be made again.
4. Worker will keep checking if the transaction is successfully completed.
![Allowing Lavellers to day Diagram]()
